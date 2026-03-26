#!/usr/bin/env node

/*
  Syncs public content from https://ncas.ac.lk WordPress API into Supabase cms_pages.

  Usage:
    node scripts/sync-ncas-content-to-cms.js --dry-run
    node scripts/sync-ncas-content-to-cms.js --apply

  Required env:
    NEXT_PUBLIC_SUPABASE_URL
    SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY)
*/

const { createClient } = require("@supabase/supabase-js")
const cheerio = require("cheerio")

const BASE = "https://ncas.ac.lk"
const API_BASE = `${BASE}/wp-json/wp/v2`
const DEFAULT_PER_PAGE = 100

function getArg(name) {
  return process.argv.includes(name)
}

function stripHtml(html) {
  return (html || "")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function ensureLeadingSlash(pathname) {
  if (!pathname) return "/"
  return pathname.startsWith("/") ? pathname : `/${pathname}`
}

function toPathname(urlString) {
  try {
    const url = new URL(urlString)
    const pathname = url.pathname.replace(/\/$/, "") || "/"
    return ensureLeadingSlash(pathname)
  } catch {
    return "/"
  }
}

function withAbsoluteLinks(html) {
  if (!html) return ""
  return html
    .replace(/src=(['"])\/(?!\/)/gi, `src=$1${BASE}/`)
    .replace(/href=(['"])\/(?!\/)/gi, `href=$1${BASE}/`)
}

async function fetchPaged(type) {
  const all = []
  let page = 1

  while (true) {
    const url = `${API_BASE}/${type}?per_page=${DEFAULT_PER_PAGE}&page=${page}&_embed=1`
    const response = await fetch(url)

    if (!response.ok) {
      if (response.status === 400) {
        break
      }
      const text = await response.text()
      throw new Error(`Failed ${type} page ${page}: ${response.status} ${text}`)
    }

    const raw = await response.text()
    if (!raw.trim().startsWith("[") && !raw.trim().startsWith("{")) {
      throw new Error(`Non-JSON response from WP API for ${type}`)
    }

    const items = JSON.parse(raw)
    if (!Array.isArray(items) || !items.length) {
      break
    }

    all.push(...items)
    page += 1
  }

  return all
}

async function fetchText(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed request ${url}: ${response.status}`)
  }
  return response.text()
}

function extractLocUrls(xml) {
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g)
  return Array.from(matches, (match) => match[1]).filter(Boolean)
}

async function fetchUrlsFromSitemap() {
  const indexXml = await fetchText(`${BASE}/sitemap_index.xml`)
  const indexUrls = extractLocUrls(indexXml)

  // Some sites expose a flat urlset at sitemap_index.xml instead of nested sitemap files.
  if (indexXml.includes("<urlset") && !indexXml.includes("<sitemapindex")) {
    return indexUrls
  }

  const sitemaps = indexUrls
  const targetSitemaps = sitemaps.filter((url) =>
    /page-sitemap|post-sitemap|news-sitemap|sitemap-post|sitemap-page/i.test(url),
  )

  const chosenSitemaps = targetSitemaps.length > 0 ? targetSitemaps : sitemaps

  const pageUrls = new Set()
  for (const sitemapUrl of chosenSitemaps) {
    const sitemapXml = await fetchText(sitemapUrl)
    extractLocUrls(sitemapXml).forEach((url) => pageUrls.add(url))
  }

  return Array.from(pageUrls)
}

function mapHtmlToCmsRecord(url, html) {
  const $ = cheerio.load(html)

  const title =
    $("meta[property='og:title']").attr("content") ||
    $("title").first().text().trim() ||
    "Untitled"

  const description =
    $("meta[name='description']").attr("content") ||
    $("meta[property='og:description']").attr("content") ||
    ""

  // Keep main content only; remove chrome/noise.
  const root = $("main").first().length
    ? $("main").first().clone()
    : $("article").first().length
      ? $("article").first().clone()
      : $(".entry-content").first().length
        ? $(".entry-content").first().clone()
        : $("body").clone()

  root.find("script, style, header, footer, nav, noscript").remove()
  const contentHtml = withAbsoluteLinks(root.html() || "")
  const path = toPathname(url)

  return {
    path,
    title,
    seo_description: description || stripHtml(contentHtml).slice(0, 220),
    status: "published",
    content: {
      html: contentHtml,
      source: "ncas.ac.lk",
      sourceType: "html",
      sourceUrl: url,
      syncedAt: new Date().toISOString(),
    },
  }
}

function mapWpToCmsRecord(item, kind) {
  const title = item?.title?.rendered || "Untitled"
  const contentHtml = withAbsoluteLinks(item?.content?.rendered || "")
  const excerpt = stripHtml(item?.excerpt?.rendered || "").slice(0, 220)
  const path = toPathname(item?.link)

  return {
    path,
    title,
    seo_description: excerpt || `${title} (${kind})`,
    status: "published",
    content: {
      html: contentHtml,
      source: "ncas.ac.lk",
      sourceType: kind,
      sourceId: item?.id,
      syncedAt: new Date().toISOString(),
    },
  }
}

async function main() {
  const isDryRun = getArg("--dry-run") || !getArg("--apply")

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!isDryRun && (!supabaseUrl || !supabaseKey)) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY/SUPABASE_SERVICE_ROLE_KEY")
  }

  console.log(`Mode: ${isDryRun ? "DRY RUN" : "APPLY"}`)
  console.log("Fetching pages and posts from ncas.ac.lk...")

  let allRecords = []
  let pages = []
  let posts = []

  try {
    ;[pages, posts] = await Promise.all([fetchPaged("pages"), fetchPaged("posts")])
    const mappedPages = pages.map((item) => mapWpToCmsRecord(item, "page"))
    const mappedPosts = posts.map((item) => mapWpToCmsRecord(item, "news"))
    allRecords = [...mappedPages, ...mappedPosts]
  } catch (error) {
    console.log(`WP API not available (${error.message}). Falling back to sitemap crawl...`)
    const urls = await fetchUrlsFromSitemap()
    const limited = urls.slice(0, 500)

    for (const [index, url] of limited.entries()) {
      try {
        const html = await fetchText(url)
        allRecords.push(mapHtmlToCmsRecord(url, html))
      } catch {
        // Ignore individual page failures and continue.
      }

      if ((index + 1) % 50 === 0) {
        console.log(`Crawled ${index + 1}/${limited.length}`)
      }
    }
  }

  const uniqueByPath = new Map()
  for (const rec of allRecords) {
    if (rec.path.startsWith("/wp-") || rec.path.startsWith("/feed") || rec.path.startsWith("/comments")) {
      continue
    }
    uniqueByPath.set(rec.path, rec)
  }

  const payload = Array.from(uniqueByPath.values())

  console.log(`Pages fetched from WP API: ${pages.length}`)
  console.log(`Posts fetched from WP API: ${posts.length}`)
  console.log(`Unique import paths: ${payload.length}`)

  if (isDryRun) {
    console.log("Dry-run preview (first 10):")
    payload.slice(0, 10).forEach((rec, idx) => {
      console.log(`${idx + 1}. ${rec.path} -> ${rec.title}`)
    })
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const chunkSize = 100
  let imported = 0

  for (let i = 0; i < payload.length; i += chunkSize) {
    const chunk = payload.slice(i, i + chunkSize)
    const { error } = await supabase.from("cms_pages").upsert(chunk, { onConflict: "path" })
    if (error) {
      throw new Error(`Upsert failed at chunk ${i / chunkSize + 1}: ${error.message}`)
    }
    imported += chunk.length
    console.log(`Imported ${imported}/${payload.length}`)
  }

  console.log("Sync completed successfully.")
}

main().catch((error) => {
  console.error("Sync failed:", error.message)
  process.exit(1)
})

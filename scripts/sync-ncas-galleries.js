#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')
const { URL } = require('url')
const crypto = require('crypto')
const cheerio = require('cheerio')

const topicPages = [
  'https://ncas.ac.lk/7th-international-research-symposium-in-humanities-and-social-sciences-irshss-2025-photos/',
  'https://ncas.ac.lk/ncas-6th-international-research-symposium-2024-photos/',
  'https://ncas.ac.lk/ncas-5th-international-research-symposium-2023/',
  'https://ncas.ac.lk/ncas-4th-international-research-symposium-2022-photos/',
  'https://ncas.ac.lk/centenary-year-celebrations-of-humanities-and-social-sciences-photos/',
  'https://ncas.ac.lk/symposium-gallery-2020/',
  'https://ncas.ac.lk/ncas_symposium_gallery_2019/',
  'https://ncas.ac.lk/symposium-2018/',
  'https://ncas.ac.lk/20th-council-of-regent-took-place-at-the-3rd-floor-board-room-of-the-ministry-of-education/',
  'https://ncas.ac.lk/cor-meetinfg-10-10-2024'
]

const root = path.resolve(__dirname, '..', 'downloaded-galleries')
const summaryPath = path.join(root, 'summary.json')

if (!fs.existsSync(root)) fs.mkdirSync(root, { recursive: true })

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function normalizePageUrl(pageUrl) {
  return pageUrl.endsWith('/') ? pageUrl : `${pageUrl}/`
}

function pageSlug(pageUrl) {
  const u = new URL(pageUrl)
  const raw = u.pathname.replace(/^\/+|\/+$/g, '') || 'home'
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function requestBuffer(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 8) return reject(new Error(`Too many redirects: ${url}`))
    const client = url.startsWith('https') ? https : http
    client
      .get(
        url,
        {
          headers: {
            'user-agent': 'NCAS-Web-Demo-Gallery-Sync/1.0 (+https://ncas.ac.lk/)'
          }
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            const nextUrl = new URL(res.headers.location, url).toString()
            return resolve(requestBuffer(nextUrl, redirects + 1))
          }

          if (res.statusCode !== 200) {
            return reject(new Error(`Status ${res.statusCode} for ${url}`))
          }

          const chunks = []
          res.on('data', (chunk) => chunks.push(chunk))
          res.on('end', () => resolve(Buffer.concat(chunks)))
        }
      )
      .on('error', reject)
  })
}

async function requestText(url) {
  const buf = await requestBuffer(url)
  return buf.toString('utf8')
}

function isImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url)
}

function parseSrcset(srcset) {
  return srcset
    .split(',')
    .map((part) => part.trim().split(/\s+/)[0])
    .filter(Boolean)
}

function absoluteUrl(maybe, base) {
  try {
    const u = new URL(maybe, base)
    u.hash = ''
    u.search = ''
    return u.toString()
  } catch (_) {
    return null
  }
}

function shouldIgnore(url) {
  const l = url.toLowerCase()
  if (!l.includes('ncas.ac.lk')) return true
  if (!l.includes('/wp-content/uploads/')) return true
  if (l.includes('/elementor/thumbs/')) return true
  if (l.includes('logo') || l.includes('favicon') || l.includes('icon-')) return true
  return false
}

function baseKey(url) {
  try {
    const u = new URL(url)
    const parsed = path.parse(u.pathname)
    const cleanName = parsed.name.replace(/-\d+x\d+$/i, '').replace(/-scaled$/i, '')
    return `${path.dirname(u.pathname)}/${cleanName}${parsed.ext.toLowerCase()}`
  } catch (_) {
    return url
  }
}

function scoreVariant(url) {
  const l = url.toLowerCase()
  const m = l.match(/-(\d+)x(\d+)\.(jpg|jpeg|png|gif|webp)$/)
  if (m) return Number(m[1]) * Number(m[2])
  if (l.includes('-scaled.')) return 800000
  return 1000000000
}

function uniqueImageUrls(html, pageUrl) {
  const $ = cheerio.load(html)
  const found = new Set()

  $('img').each((_, el) => {
    const src = $(el).attr('src')
    const dataSrc = $(el).attr('data-src')
    const srcset = $(el).attr('srcset')
    if (src) found.add(src)
    if (dataSrc) found.add(dataSrc)
    if (srcset) parseSrcset(srcset).forEach((s) => found.add(s))
  })

  $('source').each((_, el) => {
    const srcset = $(el).attr('srcset')
    if (srcset) parseSrcset(srcset).forEach((s) => found.add(s))
  })

  $('a').each((_, el) => {
    const href = $(el).attr('href')
    if (href && isImageUrl(href)) found.add(href)
  })

  const absList = Array.from(found)
    .map((u) => absoluteUrl(u, pageUrl))
    .filter(Boolean)
    .filter((u) => isImageUrl(u) && !shouldIgnore(u))

  const byBase = new Map()
  for (const u of absList) {
    const key = baseKey(u)
    const best = byBase.get(key)
    if (!best || scoreVariant(u) > scoreVariant(best)) {
      byBase.set(key, u)
    }
  }

  return Array.from(byBase.values())
}

function safeFilenameFromUrl(url) {
  const u = new URL(url)
  const parsed = path.parse(u.pathname)
  const name = parsed.name
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  const ext = parsed.ext.toLowerCase() || '.jpg'
  return `${name || 'image'}${ext}`
}

async function downloadIfNeeded(url, outDir, usedNames) {
  const baseName = safeFilenameFromUrl(url)
  let outFile = path.join(outDir, baseName)

  if (usedNames.has(baseName)) {
    const h = crypto.createHash('md5').update(url).digest('hex').slice(0, 8)
    const p = path.parse(baseName)
    outFile = path.join(outDir, `${p.name}-${h}${p.ext}`)
  }

  const finalName = path.basename(outFile)
  usedNames.add(finalName)

  if (fs.existsSync(outFile)) {
    return { file: outFile, status: 'skipped' }
  }

  const buf = await requestBuffer(url)
  fs.writeFileSync(outFile, buf)
  return { file: outFile, status: 'ok' }
}

async function syncPage(pageUrl, summary) {
  const normalized = normalizePageUrl(pageUrl)
  const slug = pageSlug(normalized)
  const outDir = path.join(root, slug)
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  console.log(`\nSyncing: ${normalized}`)
  const html = await requestText(normalized)
  const images = uniqueImageUrls(html, normalized)
  console.log(`Found ${images.length} unique candidates`)

  const usedNames = new Set(fs.readdirSync(outDir))
  const imageEntries = []

  for (const imgUrl of images) {
    try {
      process.stdout.write(`  downloading ${imgUrl} ... `)
      const res = await downloadIfNeeded(imgUrl, outDir, usedNames)
      console.log(res.status)
      imageEntries.push({ url: imgUrl, file: res.file, status: res.status })
      await sleep(120)
    } catch (e) {
      console.log('error')
      imageEntries.push({ url: imgUrl, status: 'error', error: e.message })
    }
  }

  summary[slug] = {
    page: normalized,
    images: imageEntries
  }
}

async function main() {
  const summary = {}
  for (const pageUrl of topicPages) {
    try {
      await syncPage(pageUrl, summary)
    } catch (e) {
      console.error(`Failed ${pageUrl}: ${e.message}`)
    }
  }

  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf8')
  console.log(`\nWrote ${summaryPath}`)
  console.log(`Topics synced: ${Object.keys(summary).length}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

import { NextResponse } from "next/server"
import { NCA_FALLBACK_UPDATES } from "@/lib/nca-hub-data"

type UpdateItem = {
  title: string
  description: string
  href: string
  date: string
}

const KEYWORDS = [
  "symposium",
  "workshop",
  "grant",
  "funding",
  "lecture",
  "seminar",
  "research",
  "phd",
  "certificate",
]

function toTitleFromUrl(url: string) {
  try {
    const pathname = new URL(url).pathname
    const slug = pathname.replace(/^\/+|\/+$/g, "")
    if (!slug) return "NCAS Update"
    return slug
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (m) => m.toUpperCase())
  } catch {
    return "NCAS Update"
  }
}

function shortDescription(title: string) {
  return `${title} - integrated from NCAS official site updates.`
}

function parseSitemap(xml: string): UpdateItem[] {
  const entryRegex = /<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?(?:<lastmod>(.*?)<\/lastmod>)?[\s\S]*?<\/url>/g
  const items: UpdateItem[] = []

  for (const match of xml.matchAll(entryRegex)) {
    const href = (match[1] || "").trim()
    const lastmodRaw = (match[2] || "").trim()
    const title = toTitleFromUrl(href)
    const lower = `${href} ${title}`.toLowerCase()

    if (!KEYWORDS.some((k) => lower.includes(k))) {
      continue
    }

    items.push({
      title,
      description: shortDescription(title),
      href,
      date: lastmodRaw || new Date().toISOString(),
    })
  }

  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return items.slice(0, 10)
}

export async function GET() {
  try {
    const response = await fetch("https://ncas.ac.lk/sitemap_index.xml", {
      next: { revalidate: 60 * 60 },
    })

    if (!response.ok) {
      return NextResponse.json({ updates: NCA_FALLBACK_UPDATES })
    }

    const xml = await response.text()
    const parsed = parseSitemap(xml)

    if (!parsed.length) {
      return NextResponse.json({ updates: NCA_FALLBACK_UPDATES })
    }

    return NextResponse.json({ updates: parsed })
  } catch {
    return NextResponse.json({ updates: NCA_FALLBACK_UPDATES })
  }
}

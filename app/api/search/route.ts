import { NextResponse } from "next/server"
import { GENERATED_EDITABLE_ROUTES } from "@/lib/generated-editable-routes"

type SearchItem = {
  id: string
  title: string
  description: string
  url: string
  category: string
  type: "page" | "document" | "news" | "program"
  tags: string[]
}

function classifyRoute(pathname: string): { category: string; type: SearchItem["type"] } {
  const firstSegment = pathname.split("/").filter(Boolean)[0] || "home"

  switch (firstSegment) {
    case "about":
      return { category: "About", type: "document" }
    case "news":
      return { category: "News", type: "news" }
    case "programs":
    case "workshops":
      return { category: "Programs", type: "program" }
    case "grants":
      return { category: "Grants", type: "document" }
    case "library":
      return { category: "Library", type: "document" }
    case "information":
      return { category: "Information", type: "page" }
    case "research":
      return { category: "Research", type: "page" }
    default:
      return { category: "General", type: "page" }
  }
}

function toReadableTitle(pathname: string) {
  if (pathname === "/") {
    return "Home"
  }

  const parts = pathname
    .split("/")
    .filter(Boolean)
    .map((part) => part.replace(/-/g, " "))
    .map((part) => part.replace(/\b\w/g, (char) => char.toUpperCase()))

  return parts.join(" - ")
}

function toSearchItems(): SearchItem[] {
  return GENERATED_EDITABLE_ROUTES.map((pathname) => {
    const meta = classifyRoute(pathname)
    const title = toReadableTitle(pathname)

    return {
      id: pathname,
      title,
      description: `Open ${title} page`,
      url: pathname,
      category: meta.category,
      type: meta.type,
      tags: pathname.split("/").filter(Boolean),
    }
  })
}

export async function GET() {
  return NextResponse.json({ items: toSearchItems() })
}

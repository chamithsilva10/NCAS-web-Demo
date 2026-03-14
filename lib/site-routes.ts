import { promises as fs } from "node:fs"
import path from "node:path"

function isIgnoredSegment(segment: string) {
  return segment.startsWith("(") || segment.startsWith("@")
}

export async function getEditableSiteRoutes() {
  const appDir = path.join(process.cwd(), "app")
  const routes = new Set<string>()

  async function walk(dir: string, segments: string[]) {
    const entries = await fs.readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
      const full = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        if (isIgnoredSegment(entry.name)) {
          await walk(full, segments)
          continue
        }

        if (entry.name === "api") {
          continue
        }

        await walk(full, [...segments, entry.name])
        continue
      }

      if (entry.name !== "page.tsx") {
        continue
      }

      const cleanSegments = segments.filter((segment) => !isIgnoredSegment(segment))
      const route = `/${cleanSegments.join("/")}`.replace(/\/+/g, "/")
      routes.add(route === "/" ? "/" : route.replace(/\/$/, ""))
    }
  }

  await walk(appDir, [])

  return Array.from(routes)
    .filter((route) => !route.startsWith("/admin"))
    .sort((a, b) => a.localeCompare(b))
}

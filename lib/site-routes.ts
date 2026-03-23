import { promises as fs } from "node:fs"
import path from "node:path"
import { normalizeCmsPath } from "@/lib/admin-route-path"
import { GENERATED_EDITABLE_ROUTES } from "@/lib/generated-editable-routes"

function isIgnoredSegment(segment: string) {
  return segment.startsWith("(") || segment.startsWith("@")
}

function isDynamicSegment(segment: string) {
  return segment.startsWith("[") && segment.endsWith("]")
}

export function isEditableCmsRoute(pathname: string) {
  const normalized = normalizeCmsPath(pathname)

  if (!normalized.startsWith("/")) {
    return false
  }

  if (normalized.startsWith("/admin") || normalized.startsWith("/api") || normalized.startsWith("/_next")) {
    return false
  }

  return true
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
      if (cleanSegments.some(isDynamicSegment)) {
        continue
      }
      const route = `/${cleanSegments.join("/")}`.replace(/\/+/g, "/")
      routes.add(route === "/" ? "/" : route.replace(/\/$/, ""))
    }
  }

  try {
    await walk(appDir, [])
  } catch {
    // In some production/serverless runtimes the source app directory is not readable.
  }

  if (!routes.size) {
    for (const route of GENERATED_EDITABLE_ROUTES) {
      routes.add(route)
    }
  }

  return Array.from(routes)
    .filter((route) => isEditableCmsRoute(route))
    .sort((a, b) => a.localeCompare(b))
}

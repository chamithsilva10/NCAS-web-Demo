import { normalizeCmsPath } from "@/lib/admin-route-path"

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
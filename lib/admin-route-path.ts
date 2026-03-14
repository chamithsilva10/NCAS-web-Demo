export function normalizeCmsPath(pathname: string) {
  if (!pathname || pathname === "") {
    return "/"
  }

  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`
  if (withSlash !== "/" && withSlash.endsWith("/")) {
    return withSlash.slice(0, -1)
  }

  return withSlash
}

export function adminSlugToRoutePath(slugParts: string[]) {
  if (!slugParts.length || slugParts[0] === "_home") {
    return "/"
  }
  return `/${slugParts.join("/")}`
}

export function routePathToAdminSlug(pathname: string) {
  const normalized = normalizeCmsPath(pathname)
  if (normalized === "/") {
    return ["_home"]
  }

  return normalized.split("/").filter(Boolean)
}

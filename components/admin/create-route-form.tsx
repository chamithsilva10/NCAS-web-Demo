"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { routePathToAdminSlug } from "@/lib/admin-route-path"
import { isEditableCmsRoute } from "@/lib/site-routes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function normalizeInputRoute(value: string) {
  const trimmed = value.trim()
  if (!trimmed) {
    return ""
  }

  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`
  if (withSlash !== "/" && withSlash.endsWith("/")) {
    return withSlash.slice(0, -1)
  }

  return withSlash
}

export function CreateRouteForm() {
  const router = useRouter()
  const [route, setRoute] = useState("")
  const [error, setError] = useState("")

  const openEditor = () => {
    const normalized = normalizeInputRoute(route)

    if (!normalized) {
      setError("Enter a route path")
      return
    }

    if (!isEditableCmsRoute(normalized)) {
      setError("Route cannot start with /admin, /api, or /_next")
      return
    }

    setError("")
    const slug = routePathToAdminSlug(normalized).join("/")
    router.push(`/admin/pages/${slug}`)
  }

  return (
    <div className="space-y-3">
      <Label htmlFor="new-route">Create or Edit Any Route</Label>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          id="new-route"
          value={route}
          onChange={(event) => setRoute(event.target.value)}
          placeholder="/new-page"
        />
        <Button type="button" onClick={openEditor}>Open Editor</Button>
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      <p className="text-xs text-muted-foreground">
        Tip: You can create brand-new CMS pages by entering a new path, then saving and publishing content.
      </p>
    </div>
  )
}

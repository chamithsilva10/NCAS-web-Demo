import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminLogoutButton } from "@/components/admin/logout-button"
import { CreateRouteForm } from "@/components/admin/create-route-form"
import { routePathToAdminSlug } from "@/lib/admin-route-path"
import { requireAdminSession } from "@/lib/admin-session"
import { listCmsPagesForAdmin } from "@/lib/cms"
import { getEditableSiteRoutes } from "@/lib/site-routes"

export default async function AdminDashboardPage() {
  requireAdminSession()

  const [discoveredRoutes, pages] = await Promise.all([getEditableSiteRoutes(), listCmsPagesForAdmin()])
  const routes = Array.from(new Set([...discoveredRoutes, ...pages.map((page) => page.path)])).sort((a, b) =>
    a.localeCompare(b),
  )
  const pageMap = new Map(pages.map((page) => [page.path, page]))

  const publishedCount = pages.filter((page) => page.status === "published").length
  const draftCount = pages.filter((page) => page.status === "draft").length

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">NCAS Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage every page route from one place with publish controls.</p>
          </div>
          <AdminLogoutButton />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Routes</CardDescription>
              <CardTitle>{routes.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Published Overrides</CardDescription>
              <CardTitle>{publishedCount}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Draft Overrides</CardDescription>
              <CardTitle>{draftCount}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Editable Routes</CardTitle>
            <CardDescription>
              Open any route and override its public content with custom HTML from the dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-5 rounded-lg border bg-white p-4">
              <CreateRouteForm />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {routes.map((route) => {
                const record = pageMap.get(route)
                const slug = routePathToAdminSlug(route).join("/")
                return (
                  <div key={route} className="rounded-lg border bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium truncate">{route}</p>
                      <Badge variant={record?.status === "published" ? "default" : "secondary"}>
                        {record?.status || "default"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {record?.title || "No override saved yet"}
                    </p>
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={`/admin/pages/${slug}`}>Edit</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={route} target="_blank">View</Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

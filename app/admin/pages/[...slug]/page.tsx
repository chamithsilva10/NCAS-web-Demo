import Link from "next/link"
import { notFound } from "next/navigation"
import { AdminLogoutButton } from "@/components/admin/logout-button"
import { PageEditor } from "@/components/admin/page-editor"
import { Button } from "@/components/ui/button"
import { adminSlugToRoutePath } from "@/lib/admin-route-path"
import { requireAdminSession } from "@/lib/admin-session"
import { getCmsPageByPathForAdmin } from "@/lib/cms"
import { getEditableSiteRoutes } from "@/lib/site-routes"

type PageProps = {
  params: {
    slug: string[]
  }
}

export default async function AdminRouteEditorPage({ params }: PageProps) {
  requireAdminSession()

  const routePath = adminSlugToRoutePath(params.slug || [])
  const editableRoutes = await getEditableSiteRoutes()

  if (!editableRoutes.includes(routePath)) {
    notFound()
  }

  const existing = await getCmsPageByPathForAdmin(routePath)

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Page Editor</h1>
            <p className="text-muted-foreground">Route: {routePath}</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/admin">Back to Dashboard</Link>
            </Button>
            <AdminLogoutButton />
          </div>
        </div>

        <PageEditor
          routePath={routePath}
          initial={{
            title: existing?.title || "",
            seoDescription: existing?.seo_description || "",
            status: existing?.status || "draft",
            html: existing?.content?.html || "",
          }}
        />
      </div>
    </main>
  )
}

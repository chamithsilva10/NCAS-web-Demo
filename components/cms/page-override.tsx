import { getPublishedCmsPage } from "@/lib/cms"
import { normalizeCmsPath } from "@/lib/admin-route-path"

type CmsPageOverrideProps = {
  pathname: string
  disabled?: boolean
  children: React.ReactNode
}

export async function CmsPageOverride({ pathname, disabled, children }: CmsPageOverrideProps) {
  if (disabled) {
    return <>{children}</>
  }

  const normalized = normalizeCmsPath(pathname || "/")

  if (
    normalized.startsWith("/admin") ||
    normalized.startsWith("/api") ||
    normalized.startsWith("/_next")
  ) {
    return <>{children}</>
  }

  const page = await getPublishedCmsPage(normalized)
  const html = page?.content?.html?.trim()

  if (!html) {
    return <>{children}</>
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}

import { notFound } from "next/navigation"
import { getPublishedCmsPage } from "@/lib/cms"

type CatchAllPageProps = {
  params: {
    slug: string[]
  }
}

export default async function CmsFallbackPage({ params }: CatchAllPageProps) {
  const pathname = `/${(params.slug || []).join("/")}`
  const page = await getPublishedCmsPage(pathname)
  const html = page?.content?.html?.trim()

  if (!html) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}

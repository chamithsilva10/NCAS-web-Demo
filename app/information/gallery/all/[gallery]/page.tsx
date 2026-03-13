import fs from 'fs'
import path from 'path'
import GalleryClient from './client'

function prettyTitle(slug: string) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

const summaryPath = path.resolve(process.cwd(), 'downloaded-galleries', 'summary.cleaned.json')

async function readSummary() {
  try {
    const raw = await fs.promises.readFile(summaryPath, 'utf-8')
    return JSON.parse(raw)
  } catch (e) {
    return {}
  }
}

export default async function GalleryDetail({ params }: { params: { gallery: string } }) {
  const galleryKey = params.gallery
  const summary = await readSummary()
  const entry = summary[galleryKey]
  if (!entry) return <div className="p-6">Gallery not found</div>

  // Images are already deduplicated and filtered in the cleaned manifest
  const imagesRaw: any[] = entry.images || []

  // Prepare client-friendly image URLs
  const urls = imagesRaw.map(img => {
    const rel = path.relative(path.resolve(process.cwd(), 'downloaded-galleries'), img.file)
    return `/api/gallery?path=${encodeURIComponent(rel)}`
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl border border-primary/10 bg-card/70 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{prettyTitle(galleryKey)}</h1>
          <p className="mt-2 text-muted-foreground">{urls.length} curated photos in this topic.</p>
        </div>
        <GalleryClient images={urls} />
      </div>
    </div>
  )
}

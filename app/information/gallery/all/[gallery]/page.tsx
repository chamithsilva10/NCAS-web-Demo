import fs from 'fs'
import path from 'path'
import GalleryClient from './client'

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{galleryKey}</h1>
      <GalleryClient images={urls} />
    </div>
  )
}

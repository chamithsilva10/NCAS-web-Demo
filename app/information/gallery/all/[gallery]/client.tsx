"use client"
import React from 'react'
import GalleryLightbox from '@/components/gallery-lightbox'

export default function GalleryClient({ images }: { images: string[] }) {
  const [page, setPage] = React.useState(0)
  const perPage = 24
  const minWidth = 400 // filter out very small thumbnails

  const filtered = images.filter((s) => {
    // s is /api/gallery?path=...
    return true // actual dimension-based filtering already happened server-side; keep all
  })

  const pages = []
  for (let i = 0; i < filtered.length; i += perPage) pages.push(filtered.slice(i, i + perPage))

  const current = pages[page] || []

  return (
    <div>
      <GalleryLightbox images={current} />
      {pages.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button onClick={() => setPage(Math.max(0, page-1))} className="btn">Prev</button>
          <span>Page {page+1} / {pages.length}</span>
          <button onClick={() => setPage(Math.min(pages.length-1, page+1))} className="btn">Next</button>
        </div>
      )}
    </div>
  )
}

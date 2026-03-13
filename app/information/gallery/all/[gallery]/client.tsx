"use client"
import React from 'react'
import GalleryLightbox from '@/components/gallery-lightbox'

export default function GalleryClient({ images }: { images: string[] }) {
  const [page, setPage] = React.useState(0)
  const perPage = 24
  const filtered = images

  const pages = []
  for (let i = 0; i < filtered.length; i += perPage) pages.push(filtered.slice(i, i + perPage))

  const current = pages[page] || []

  return (
    <div>
      <GalleryLightbox images={current} />
      {pages.length > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:bg-muted"
          >
            Previous
          </button>
          <span className="rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
            Page {page + 1} of {pages.length}
          </span>
          <button
            onClick={() => setPage(Math.min(pages.length - 1, page + 1))}
            disabled={page === pages.length - 1}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:bg-muted"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

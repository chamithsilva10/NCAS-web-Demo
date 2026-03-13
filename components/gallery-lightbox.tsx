"use client"
import React from 'react'

export default function GalleryLightbox({ images }: { images: string[] }) {
  const [open, setOpen] = React.useState(false)
  const [idx, setIdx] = React.useState(0)

  React.useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowLeft') setIdx((v) => (v - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setIdx((v) => (v + 1) % images.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, images.length])

  if (!images || images.length === 0) return null
  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(false)}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIdx((idx - 1 + images.length) % images.length)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-xl text-white hover:bg-black/70"
          >
            &lt;
          </button>
          <img
            src={images[idx]}
            alt="lightbox"
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIdx((idx + 1) % images.length)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-xl text-white hover:bg-black/70"
          >
            &gt;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-sm font-medium text-white hover:bg-black/70"
          >
            Close
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-4 py-1 text-xs text-white">
            {idx + 1} / {images.length}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((src, i) => (
          <div
            key={i}
            className="group cursor-pointer overflow-hidden rounded-xl border border-primary/10 bg-muted"
            onClick={() => {
              setIdx(i)
              setOpen(true)
            }}
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"
import React from 'react'

export default function GalleryLightbox({ images }: { images: string[] }) {
  const [open, setOpen] = React.useState(false)
  const [idx, setIdx] = React.useState(0)
  if (!images || images.length === 0) return null
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
          <button onClick={(e) => { e.stopPropagation(); setIdx((idx-1+images.length)%images.length) }} className="absolute left-5 text-white text-3xl">&lt;</button>
          <img src={images[idx]} alt="lightbox" className="max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setIdx((idx+1)%images.length) }} className="absolute right-5 text-white text-3xl">&gt;</button>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="rounded overflow-hidden bg-muted cursor-pointer" onClick={() => { setIdx(i); setOpen(true) }}>
            <img src={src} alt={`img-${i}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

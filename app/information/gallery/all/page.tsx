import fs from 'fs'
import path from 'path'
import Link from 'next/link'

function prettyTitle(slug: string) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

async function readSummary() {
  const p = path.resolve(process.cwd(), 'downloaded-galleries', 'summary.cleaned.json')
  try {
    const raw = await fs.promises.readFile(p, 'utf-8')
    return JSON.parse(raw)
  } catch (e) {
    return {}
  }
}

export default async function AllGalleriesPage() {
  const summary = await readSummary()
  const galleries = Object.keys(summary || {})

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-2xl border border-primary/10 bg-card/70 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">NCAS Event Galleries</h1>
          <p className="mt-2 text-muted-foreground">
            Topic-wise gallery archive synchronized from NCAS and organized for clean browsing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleries.map((g) => {
            const images = summary[g].images || []
            const cover = images[0]
            const rel = cover?.file
              ? path.relative(path.resolve(process.cwd(), 'downloaded-galleries'), cover.file)
              : null

            return (
              <div
                key={g}
                className="group overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  {rel ? (
                    <img
                      src={`/api/gallery?path=${encodeURIComponent(rel)}`}
                      alt={prettyTitle(g)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">No preview</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 text-white">
                    <p className="text-xs uppercase tracking-wide">{images.length} photos</p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-lg font-semibold leading-snug">{prettyTitle(g)}</h3>
                  <div className="mt-4">
                    <Link
                      href={`/information/gallery/all/${encodeURIComponent(g)}`}
                      className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Open Gallery
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {galleries.length === 0 && (
          <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
            No galleries found. Run the gallery sync script to import photos.
          </div>
        )}
      </div>
    </div>
  )
}

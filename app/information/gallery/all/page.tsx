import fs from 'fs'
import path from 'path'
import Link from 'next/link'

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">All Galleries</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((g) => (
          <div key={g} className="border rounded-md p-4 bg-card">
            <h3 className="font-semibold mb-2">{g}</h3>
            <div className="space-y-2">
              {(summary[g].images || []).slice(0,6).map((img: any, i: number) => (
                <div key={i}>
                  <img src={`/api/gallery?path=${encodeURIComponent(path.relative(path.resolve(process.cwd(), 'downloaded-galleries'), img.file))}`} alt={img.url} className="w-full h-28 object-cover rounded"/>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <Link href={`/information/gallery/all/${encodeURIComponent(g)}`} className="text-primary">View gallery</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

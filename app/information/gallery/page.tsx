import { Camera, Calendar, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

type SummaryImage = { file?: string }
type SummaryEntry = { images?: SummaryImage[] }

async function readSummary() {
  const p = path.resolve(process.cwd(), 'downloaded-galleries', 'summary.cleaned.json')
  try {
    const raw = await fs.promises.readFile(p, 'utf-8')
    return JSON.parse(raw) as Record<string, SummaryEntry>
  } catch (e) {
    return {}
  }
}

const categoryConfig = [
  {
    title: "Research Symposiums",
    description: "International research symposiums and academic conferences",
    slugs: [
      "7th-international-research-symposium-in-humanities-and-social-sciences-irshss-2025-photos",
      "ncas-6th-international-research-symposium-2024-photos",
      "ncas-5th-international-research-symposium-2023",
      "ncas-4th-international-research-symposium-2022-photos",
      "symposium-gallery-2020",
      "ncas_symposium_gallery_2019",
      "symposium-2018",
    ],
  },
  {
    title: "Academic Celebrations",
    description: "Centenary and institutional celebration photo collections",
    slugs: ["centenary-year-celebrations-of-humanities-and-social-sciences-photos"],
  },
  {
    title: "Council Meetings",
    description: "Council of Regents and Council of Management event galleries",
    slugs: [
      "20th-council-of-regent-took-place-at-the-3rd-floor-board-room-of-the-ministry-of-education",
      "cor-meetinfg-10-10-2024",
    ],
  },
] as const

const recentEventConfig = [
  {
    slug: "7th-international-research-symposium-in-humanities-and-social-sciences-irshss-2025-photos",
    title: "7th International Research Symposium 2025",
    date: "2025",
    participants: 300,
    photos: 146,
    description: "IRSHSS 2025 official gallery with keynote, sessions, and closing ceremony highlights.",
  },
  {
    slug: "ncas-6th-international-research-symposium-2024-photos",
    title: "6th International Research Symposium 2024",
    date: "2024",
    participants: 250,
    photos: 224,
    description: "Large photo collection from IRSHSS 2024 with plenaries, panels, and networking sessions.",
  },
  {
    slug: "ncas-5th-international-research-symposium-2023",
    title: "5th International Research Symposium 2023",
    date: "2023",
    participants: 200,
    photos: 102,
    description: "IRSHSS 2023 sessions and event moments captured across the full symposium program.",
  },
] as const

export default async function GalleryPage() {
  const summary = await readSummary()
  const base = path.resolve(process.cwd(), 'downloaded-galleries')

  const allImageUrls = Object.values(summary)
    .flatMap((entry) => entry.images || [])
    .map((img) => {
      if (!img.file) return null
      const rel = path.relative(base, img.file)
      return `/api/gallery?path=${encodeURIComponent(rel)}`
    })
    .filter(Boolean) as string[]

  const galleryCategories = categoryConfig.map((cfg) => {
    const images = cfg.slugs.flatMap((slug) => summary[slug]?.images || [])
    const count = images.length
    const imageUrls = images
      .map((img) => {
        if (!img.file) return null
        const rel = path.relative(base, img.file)
        return `/api/gallery?path=${encodeURIComponent(rel)}`
      })
      .filter(Boolean)
      .slice(0, 3) as string[]

    const fallback = allImageUrls.slice(0, 3)
    return {
      title: cfg.title,
      count,
      description: cfg.description,
      images: imageUrls.length > 0 ? imageUrls : fallback,
    }
  })

  const recentEvents = recentEventConfig.map((event) => {
    const images = summary[event.slug]?.images || []
    const first = images[0]
    const image = first?.file
      ? `/api/gallery?path=${encodeURIComponent(path.relative(base, first.file))}`
      : allImageUrls[0] || "/placeholder.svg"

    return {
      ...event,
      image,
      photos: images.length || event.photos,
      href: `/information/gallery/all/${encodeURIComponent(event.slug)}`,
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Photo Gallery</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Capturing moments from our academic journey, research activities, and institutional milestones
            </p>
            <div className="flex items-center justify-center gap-8 text-primary-foreground/90">
              <div className="text-center">
                <div className="text-2xl font-bold">{allImageUrls.length}+</div>
                <div className="text-sm">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{Object.keys(summary).length}</div>
                <div className="text-sm">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our photo collection organized by event types and activities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {galleryCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-3 gap-1 h-48">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${category.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.count} photos</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/information/gallery/all" className="block">
              <Button size="lg" className="px-8">
                <Camera className="h-4 w-4 mr-2" />
                View All Gallery Photos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest photos from our recent academic events and activities
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {recentEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white border-0">{event.photos} photos</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm text-center">
                    <div className="flex flex-col items-center">
                      <Calendar className="h-4 w-4 text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="h-4 w-4 text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">{event.participants} people</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Camera className="h-4 w-4 text-primary mb-1" />
                      <span className="text-xs text-muted-foreground">{event.photos} photos</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={event.href}>View Event Photos</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Submission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Photos</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have photos from NCAS events? We'd love to include them in our gallery
            </p>
            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold mb-4">Submission Guidelines:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>High-resolution images (minimum 1920x1080)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Include event name and date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Obtain consent from people in photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Professional and appropriate content only</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Contact Information:</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong> gallery@ncas.ac.lk
                    </p>
                    <p>
                      <strong>Subject:</strong> Photo Submission - [Event Name]
                    </p>
                    <p>
                      <strong>Format:</strong> JPG, PNG, or TIFF
                    </p>
                    <p>
                      <strong>Max Size:</strong> 10MB per image
                    </p>
                  </div>
                  <Button className="mt-4">Submit Photos</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

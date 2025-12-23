import { Camera, Calendar, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Research Symposiums",
      count: 45,
      description: "International research symposiums and academic conferences",
      images: [
        "/academic-conference.png",
        "/academic-awards-ceremony.jpg",
        "/international-academic-collaboration.jpg",
      ],
    },
    {
      title: "Workshops & Training",
      count: 32,
      description: "Training workshops and capacity building programs",
      images: ["/academic-research-office.jpg", "/research-funding-documents.jpg", "/female-academic-researcher.png"],
    },
    {
      title: "Graduation Ceremonies",
      count: 28,
      description: "PhD and MPhil graduation ceremonies and celebrations",
      images: ["/academic-awards-ceremony.jpg", "/professional-academic-director.jpg", "/male-professor-academic.jpg"],
    },
    {
      title: "International Collaborations",
      count: 18,
      description: "Meetings and events with international partners",
      images: [
        "/international-academic-collaboration.jpg",
        "/female-academic-publications.jpg",
        "/academic-conference.png",
      ],
    },
  ]

  const recentEvents = [
    {
      title: "5th International Research Symposium 2023",
      date: "November 29, 2023",
      participants: 150,
      photos: 24,
      description: "Heritage and Culture: Re-visiting the late Professor Senake Dias Bandaranayake",
      image: "/academic-conference.png",
    },
    {
      title: "Workshop on Digital Humanities",
      date: "October 15, 2023",
      participants: 35,
      photos: 18,
      description: "Hands-on training in digital research methodologies",
      image: "/academic-research-office.jpg",
    },
    {
      title: "PhD Graduation Ceremony 2023",
      date: "September 20, 2023",
      participants: 25,
      photos: 32,
      description: "Celebrating our newest PhD graduates",
      image: "/academic-awards-ceremony.jpg",
    },
  ]

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
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
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
                <CardContent>
                  <Link href="/information/gallery/all" className="block">
                    <Button variant="outline" className="w-full bg-transparent">
                      <Camera className="h-4 w-4 mr-2" />
                      View All Photos
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
                  <Button variant="outline" className="w-full bg-transparent">
                <Link href="/information/gallery/all" className="block">View Event Photos</Link>
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

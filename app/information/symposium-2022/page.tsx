

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Camera, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const symposiumDetails = {
  title: "4th International Research Symposium on Social Sciences and Humanities (IRSSSH 2022)",
  theme: "Post-Pandemic Recovery and Resilience",
  date: "December 14-15, 2022",
  venue: "National Centre for Advanced Studies in Humanities & Social Sciences, Colombo",
  participants: 180,
  description: "The 4th IRSSSH focused on rebuilding societies and economies in the post-pandemic era, exploring resilience strategies and sustainable recovery pathways."
}

const highlights = [
  "Keynote addresses by global experts on pandemic recovery",
  "Parallel sessions on economic, social, and psychological recovery",
  "Young researcher forum with innovative recovery solutions",
  "International collaboration opportunities",
  "Policy recommendations for post-pandemic development"
]

const photoGallery = [
  { src: "/symposium-2022/DSC_5928-1024x678.jpg", alt: "Opening ceremony", caption: "Inaugural session and welcome address" },
  { src: "/symposium-2022/DSC_5935-1024x678.jpg", alt: "Keynote speech", caption: "International scholar delivering keynote address" },
  { src: "/symposium-2022/DSC_5945-1024x678.jpg", alt: "Parallel sessions", caption: "Concurrent paper presentations" },
  { src: "/symposium-2022/DSC_5957-1024x678.jpg", alt: "Panel discussion", caption: "Expert panel on post-pandemic recovery" },
  { src: "/symposium-2022/DSC_5970-1024x678.jpg", alt: "Networking", caption: "Participants networking during breaks" },
  { src: "/symposium-2022/DSC_5985-1024x678.jpg", alt: "Poster presentations", caption: "Young researchers showcasing their work" },
  { src: "/symposium-2022/DSC_6000-1024x678.jpg", alt: "Cultural event", caption: "Cultural performances and traditional events" },
  { src: "/symposium-2022/DSC_6010-1024x678.jpg", alt: "Closing ceremony", caption: "Vote of thanks and closing remarks" }
]

export default function Symposium2022Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4">IRSSSH 2022</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">{symposiumDetails.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {symposiumDetails.description}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              {symposiumDetails.date}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              Colombo, Sri Lanka
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-primary" />
              {symposiumDetails.participants}+ Participants
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Symposium Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Photo Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photoGallery.map((photo, index) => (
                  <div key={index} className="space-y-2">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-center">{photo.caption}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/information/gallery/all/ncas-4th-international-research-symposium-2022-photos">
                    <Camera className="h-4 w-4 mr-2" />
                    View All Photos ({photoGallery.length}+)
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore More Symposiums</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/information/symposium-2024">
                IRSSSH 2024
              </Link>
            </Button>
            <Button asChild>
              <Link href="/information/symposium-2023">
                IRSSSH 2023
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/library/proceedings">
                Proceedings
              </Link>
            </Button>
          </div>
        </div>
      </main>
      </div>
  )
}
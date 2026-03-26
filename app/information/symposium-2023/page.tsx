

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Camera, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const symposiumDetails = {
  title: "5th International Research Symposium on Social Sciences and Humanities (IRSSSH 2023)",
  theme: "Development Towards Sustainability",
  date: "December 13-14, 2023",
  venue: "National Centre for Advanced Studies in Humanities & Social Sciences, Colombo",
  participants: 200,
  countries: 15,
  description: "The 5th International Research Symposium on Social Sciences and Humanities brought together researchers, academics, and practitioners from around the world to discuss sustainable development challenges and solutions."
}

const highlights = [
  "Keynote speeches by renowned international scholars",
  "Parallel sessions on diverse social science topics",
  "Poster presentations by young researchers",
  "Cultural performances and networking events",
  "Publication opportunities in indexed journals"
]

const photoGalleries = [
  {
    title: "Opening Ceremony",
    description: "Inaugural session with welcome addresses and keynote speeches",
    images: [
      { src: "/symposium-2023/1-1024x683.jpg", alt: "Opening ceremony", caption: "Chief Guest and Director addressing the audience" },
      { src: "/symposium-2023/2-1024x683.jpg", alt: "Keynote speech", caption: "International scholar delivering keynote address" },
      { src: "/symposium-2023/3-1024x683.jpg", alt: "Audience", caption: "Participants during the opening session" }
    ]
  },
  {
    title: "Parallel Sessions",
    description: "Concurrent paper presentations across multiple themes",
    images: [
      { src: "/symposium-2023/10-1024x683.jpg", alt: "Session 1", caption: "Panel discussion on sustainable development" },
      { src: "/symposium-2023/15-1024x683.jpg", alt: "Session 2", caption: "Research presentations on social sciences" },
      { src: "/symposium-2023/20-1024x683.jpg", alt: "Q&A", caption: "Interactive Q&A session with presenters" }
    ]
  },
  {
    title: "Poster Presentations",
    description: "Young researchers showcasing their work",
    images: [
      { src: "/symposium-2023/25-1024x683.jpg", alt: "Poster area", caption: "Poster presentation area with diverse topics" },
      { src: "/symposium-2023/30-1024x683.jpg", alt: "Discussion", caption: "Researchers discussing poster content" },
      { src: "/symposium-2023/35-1024x683.jpg", alt: "Awards", caption: "Best poster award ceremony" }
    ]
  },
  {
    title: "Cultural Events",
    description: "Cultural performances and networking activities",
    images: [
      { src: "/symposium-2023/90-1024x683.jpg", alt: "Cultural show", caption: "Traditional Sri Lankan cultural performance" },
      { src: "/symposium-2023/100-1024x683.jpg", alt: "Networking", caption: "Participants networking during breaks" },
      { src: "/symposium-2023/105-1024x683.jpg", alt: "Closing ceremony", caption: "Vote of thanks and closing remarks" }
    ]
  }
]

const speakers = [
  {
    name: "Prof. John Anderson",
    affiliation: "University of Cambridge, UK",
    topic: "Sustainable Development: Global Perspectives"
  },
  {
    name: "Dr. Maria Rodriguez",
    affiliation: "University of Barcelona, Spain",
    topic: "Social Innovation for Sustainability"
  },
  {
    name: "Prof. Ahmed Hassan",
    affiliation: "Cairo University, Egypt",
    topic: "Cultural Heritage and Sustainable Tourism"
  },
  {
    name: "Dr. Priya Sharma",
    affiliation: "Jawaharlal Nehru University, India",
    topic: "Gender Equality in Sustainable Development"
  }
]

const outcomes = [
  "Over 150 research papers presented",
  "Proceedings published with ISBN",
  "Special journal issue planned",
  "Research collaborations initiated",
  "Policy recommendations developed",
  "Young researcher awards distributed"
]

export default function Symposium2023Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">IRSSSH 2023</Badge>
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
              {symposiumDetails.venue}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-primary" />
              {symposiumDetails.participants}+ Participants
            </div>
          </div>
        </div>

        {/* Symposium Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{symposiumDetails.participants}+</div>
              <p className="text-muted-foreground">Participants</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{symposiumDetails.countries}</div>
              <p className="text-muted-foreground">Countries Represented</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Research Papers</p>
            </CardContent>
          </Card>
        </div>

        {/* Symposium Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Symposium Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Keynote Speakers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{speaker.affiliation}</p>
                      <p className="text-sm font-medium text-primary">{speaker.topic}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo Galleries */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
          <div className="space-y-8">
            {photoGalleries.map((gallery, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="h-5 w-5 mr-2 text-primary" />
                    {gallery.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{gallery.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {gallery.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="space-y-2">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground text-center">{image.caption}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Symposium Outcomes */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Symposium Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{outcome}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Resources */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Resources & Downloads</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col">
              <Download className="h-6 w-6 mb-2" />
              <span className="text-sm">Program Schedule</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col">
              <Download className="h-6 w-6 mb-2" />
              <span className="text-sm">Abstract Book</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col">
              <Download className="h-6 w-6 mb-2" />
              <span className="text-sm">Proceedings</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col" asChild>
              <Link href="/information/gallery/all/ncas-5th-international-research-symposium-2023">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-sm">Photo Album</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore More Symposiums</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover our previous international research symposiums and their valuable contributions to social sciences and humanities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/information/symposium-2024">
                IRSSSH 2024
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/information/gallery">
                All Galleries
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/library/proceedings">
                Symposium Proceedings
              </Link>
            </Button>
          </div>
        </div>
      </main>
      </div>
  )
}
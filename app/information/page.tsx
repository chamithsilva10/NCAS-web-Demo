import { Users, Award, FileText, Camera, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function InformationPage() {
  const otherEventsAndNews = [
    {
      category: "Events",
      date: "1/1/2025",
      title: "RESEARCH COLLOQUIUM 2025",
      description: "Annual research colloquium showcasing the latest research findings from NCAS scholars.",
      link: "/research/colloquium"
    },
    {
      category: "Funding",
      date: "1/1/2025",
      title: "Short Term Research Grants",
      description: "Applications now open for short-term research grants to support innovative research projects.",
      link: "/grants/short-term"
    },
    {
      category: "Funding",
      date: "3/20/2025",
      title: "Partial Funding for Advanced Postgraduate Studies – 2025",
      description: "2nd Round applications now open for postgraduate funding support.",
      link: "/grants/partial-funding"
    },
    {
      category: "Research",
      date: "1/19/2025",
      title: "Expanding Research Horizons: Opportunities for International Scholars",
      description: "Doctoral/Postdoctoral/Senior Research Fellowships for international scholars.",
      link: "/international"
    },
    {
      category: "Events",
      date: "6/20/2025",
      title: "7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025",
      description: "AI in Higher Education: Prospects and Challenges - October 30th-31st, 2025.",
      link: "/information/symposium-2025"
    }
  ]

  const galleryHighlights = [
    {
      title: "5th International Research Symposium 2023",
      image: "/academic-conference.png",
      description: "Highlights from our successful 2023 symposium",
    },
    {
      title: "Workshop on Digital Humanities",
      image: "/academic-research-office.jpg",
      description: "Participants engaged in hands-on digital research training",
    },
    {
      title: "Graduation Ceremony 2023",
      image: "/academic-awards-ceremony.jpg",
      description: "Celebrating our graduates' academic achievements",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Information Center</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Stay updated with the latest news, events, and institutional information
            </p>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit NCAS at our main campus location
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902!2d79.867262!3d6.916086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259d6f7b6b7b7%3A0x74e6b9c6b9c6b9c6!2sNational%20Centre%20for%20Advanced%20Studies%20(NCAS)!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NCAS Location Map"
                  ></iframe>
                </div>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-lg">National Centre for Advanced Studies (NCAS)</CardTitle>
                    <CardDescription>Main Campus, Colombo, Sri Lanka</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://www.google.com/maps?ll=6.916086,79.867262&z=16&t=m&hl=en&gl=LK&mapclient=embed&cid=8459593691384241289"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Events and News */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Events and News</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the latest events, funding opportunities, and research initiatives
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {otherEventsAndNews.map((item, index) => (
              <div key={index} className="bg-background rounded-lg border p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="outline" asChild>
                      <Link href={item.link}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capturing moments from our academic events and institutional activities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryHighlights.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/information/gallery">
                      <Camera className="h-4 w-4 mr-2" />
                      View Gallery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Access important documents and information quickly
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/information/symposium-2024">
                <Award className="h-5 w-5 mr-2" />
                2024 Symposium
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/information/council-meetings">
                <Users className="h-5 w-5 mr-2" />
                Council Meetings
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/information/gallery">
                <Camera className="h-5 w-5 mr-2" />
                Photo Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

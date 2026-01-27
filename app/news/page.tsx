import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsArticles = [
  {
    id: 2,
    title: "Short Term Research Grants Available",
    excerpt:
      "NCAS announces new short-term research grant opportunities for emerging scholars in humanities and social sciences.",
    content:
      "We are pleased to announce the availability of short-term research grants designed to support innovative research projects in humanities and social sciences. These grants are intended to facilitate preliminary research, pilot studies, and collaborative projects.",
    date: "2024-03-10",
    category: "Funding",
    author: "Research Committee",
    featured: true,
    image: "/research-funding-documents.jpg",
    slug: "short-term-research-grants",
  },
  {
    id: 3,
    title: "Expanding Research Horizons: Opportunities for International Scholars",
    excerpt:
      "New international collaboration programs designed to foster global research partnerships and academic exchange.",
    content:
      "NCAS is launching new international collaboration programs aimed at expanding research horizons and fostering global partnerships. These initiatives will provide opportunities for scholars to engage in cross-cultural research and academic exchange.",
    date: "2024-03-08",
    category: "International",
    author: "International Relations Office",
    image: "/international-academic-collaboration.jpg",
    slug: "expanding-research-horizons",
  },
  {
    id: 4,
    title: "NCAS Publication Awards 2024",
    excerpt:
      "Recognizing excellence in academic publishing. Submit your best work for consideration in our annual publication awards.",
    content:
      "The NCAS Publication Awards celebrate outstanding contributions to academic literature in humanities and social sciences. We invite researchers to submit their best publications for consideration in various categories.",
    date: "2024-03-05",
    category: "Awards",
    author: "Publications Committee",
    image: "/academic-awards-ceremony.jpg",
    slug: "publication-awards-2024",
  },
  {
    id: 5,
    title: "Research Colloquium 2024 - Session I",
    excerpt:
      "Join us for the first session of our annual research colloquium featuring leading scholars and innovative research presentations.",
    content:
      "The first session of our annual Research Colloquium will feature presentations from leading scholars in various fields of humanities and social sciences. This event provides a platform for academic discourse and knowledge sharing.",
    date: "2024-03-01",
    category: "Events",
    author: "Academic Affairs",
    image: "/academic-conference.png",
    slug: "research-colloquium-2024",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Workshop on Structural Equation Modeling (with AMOS)",
    date: "2024-04-15",
    time: "9:00 AM - 5:00 PM",
    location: "NCAS Conference Hall",
    attendees: 45,
    category: "Workshop",
    description:
      "Comprehensive workshop on quantitative research methods using AMOS software for structural equation modeling.",
  },
  {
    id: 2,
    title: "Certificate Course on Systematic Literature Review",
    date: "2024-04-20",
    time: "10:00 AM - 4:00 PM",
    location: "Research Center",
    attendees: 30,
    category: "Course",
    description:
      "Master systematic literature review techniques with bibliometric analysis, manuscript writing, and publication strategies.",
  },
  {
    id: 3,
    title: "International River Congress 2024",
    date: "2024-05-10",
    time: "8:00 AM - 6:00 PM",
    location: "Main Auditorium",
    attendees: 200,
    category: "Conference",
    description:
      "3rd International River Congress focusing on sustainable developments through water resources management.",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">News & Events</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest news, announcements, and upcoming events at NCAS
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured News</h2>

            {newsArticles
              .filter((article) => article.featured)
              .map((article) => (
                <Card key={article.id} className="mb-8 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="default">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{article.title}</h3>
                      <p className="text-muted-foreground mb-4">{article.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">By {article.author}</span>
                        <Link href={`/news/${article.slug}`}>
                          <Button>
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Recent News Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Recent News</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles
                .filter((article) => !article.featured)
                .map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow duration-200">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">By {article.author}</span>
                        <Link href={`/news/${article.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

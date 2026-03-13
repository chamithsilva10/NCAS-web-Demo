import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    title: "RESEARCH COLLOQUIUM 2025",
    excerpt:
      "Annual research colloquium showcasing the latest research findings from NCAS scholars.",
    content:
      "NCAS invites all scholars to the Annual Research Colloquium 2025, which showcases the latest research findings and academic contributions from NCAS-affiliated researchers across humanities and social sciences.",
    date: "2025-01-01",
    category: "Events",
    author: "Academic Affairs",
    featured: true,
    image: "/academic-conference.png",
    slug: "research-colloquium-2025",
  },
  {
    id: 2,
    title: "Short Term Research Grants – 2025",
    excerpt:
      "Applications now open for short-term research grants to support innovative research projects in humanities and social sciences.",
    content:
      "NCAS is pleased to announce short-term research grants for 2025. These grants are designed to support preliminary research, pilot studies, and collaborative projects in humanities and social sciences.",
    date: "2025-01-01",
    category: "Funding",
    author: "Research Committee",
    featured: false,
    image: "/research-funding-documents.jpg",
    slug: "short-term-research-grants",
  },
  {
    id: 3,
    title: "Partial Funding for Advanced Postgraduate Studies – 2025",
    excerpt:
      "2nd Round applications now open for postgraduate funding support for MPhil and PhD candidates.",
    content:
      "NCAS invites applications for partial funding for advanced postgraduate studies (2nd Round, 2025). This is available for MPhil and PhD candidates engaged in approved research in the field of humanities and social sciences.",
    date: "2025-03-20",
    category: "Funding",
    author: "Postgraduate Studies Division",
    featured: false,
    image: "/research-funding-documents.jpg",
    slug: "partial-funding-postgraduate-studies-2025",
  },
  {
    id: 4,
    title: "Expanding Research Horizons: Opportunities for International Scholars",
    excerpt:
      "Doctoral, Postdoctoral, and Senior Research Fellowships now open for international scholars.",
    content:
      "NCAS announces international fellowship opportunities for Doctoral, Postdoctoral, and Senior researchers. These fellowships aim to foster global research partnerships and academic exchange in humanities and social sciences.",
    date: "2025-01-19",
    category: "Research",
    author: "International Relations Office",
    featured: false,
    image: "/international-academic-collaboration.jpg",
    slug: "expanding-research-horizons",
  },
  {
    id: 5,
    title: "7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025",
    excerpt:
      "AI in Higher Education: Prospects and Challenges – October 30th–31st, 2025 at NCAS.",
    content:
      "The 7th IRSHSS 2025 focuses on 'AI in Higher Education: Prospects and Challenges'. The symposium will be held on October 30–31, 2025 at NCAS and welcomes research submissions from scholars across all disciplines of humanities and social sciences.",
    date: "2025-06-20",
    category: "Events",
    author: "Symposium Committee",
    featured: false,
    image: "/academic-conference.png",
    slug: "irshss-2025",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Workshop on Structural Equation Modeling (SmartPLS)",
    date: "2025-04-25",
    time: "9:00 AM – 5:00 PM",
    location: "NCAS Training Centre, Colombo 07",
    attendees: 40,
    category: "Workshop",
    description:
      "Hands-on training in quantitative research using SmartPLS for Structural Equation Modeling (SEM). Suitable for postgraduate students and researchers.",
  },
  {
    id: 2,
    title: "Certificate Course on Systematic Literature Review",
    date: "2025-05-10",
    time: "10:00 AM – 4:00 PM",
    location: "NCAS Research Centre, Colombo 07",
    attendees: 30,
    category: "Course",
    description:
      "Master systematic literature review techniques including bibliometric analysis, manuscript writing, and publication strategies for academic journals.",
  },
  {
    id: 3,
    title: "7th International Research Symposium (IRSHSS) 2025",
    date: "2025-10-30",
    time: "8:00 AM – 6:00 PM",
    location: "NCAS, No. 21, Polhengoda Gardens, Colombo 05",
    attendees: 250,
    category: "Symposium",
    description:
      "AI in Higher Education: Prospects and Challenges. International symposium bringing together researchers from across the world to share innovative findings.",
  },
  {
    id: 4,
    title: "SPSS for Statistical Analysis – Certificate Course",
    date: "2025-06-14",
    time: "9:00 AM – 4:00 PM",
    location: "NCAS Computer Lab, Colombo 07",
    attendees: 25,
    category: "Course",
    description:
      "Comprehensive certificate course on IBM SPSS for data analysis, covering descriptive statistics, regression, and hypothesis testing for social science research.",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
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
    </div>
  )
}

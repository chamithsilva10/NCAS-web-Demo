import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    title: "RESEARCH COLLOQUIUM 2025",
    excerpt: "Annual research colloquium showcasing the latest research findings from NCAS scholars.",
    date: "2025-01-01",
    category: "Events",
    href: "/news/research-colloquium-2025",
  },
  {
    title: "Short Term Research Grants",
    excerpt: "Applications now open for short-term research grants to support innovative research projects.",
    date: "2025-01-01",
    category: "Funding",
    href: "/news/short-term-research-grants",
  },
  {
    title: "Partial Funding for Advanced Postgraduate Studies – 2025",
    excerpt: "2nd Round applications now open for postgraduate funding support.",
    date: "2025-03-20",
    category: "Funding",
    href: "/news/partial-funding-postgraduate-studies-2025",
  },
  {
    title: "Expanding Research Horizons: Opportunities for International Scholars",
    excerpt: "Doctoral/Postdoctoral/Senior Research Fellowships for international scholars.",
    date: "2025-01-19",
    category: "Research",
    href: "/news/expanding-research-horizons",
  },
  {
    title: "7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025",
    excerpt: "AI in Higher Education: Prospects and Challenges - October 30th-31st, 2025.",
    date: "2025-06-20",
    category: "Events",
    href: "/news/irshss-2025",
  },
]

export function LatestNews() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Latest News & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest developments, opportunities, and achievements at NCAS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            {newsItems.slice(0, 1).map((item) => (
              <Card
                key={item.title}
                className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3 text-balance">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-pretty">{item.excerpt}</p>
                  <Link href={item.href}>
                    <Button className="w-full sm:w-auto">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* News List */}
          <div className="space-y-4">
            {newsItems.slice(1).map((item) => (
              <Card key={item.title} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-2 text-balance leading-tight">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 text-pretty">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button variant="outline" size="lg">
              View All News & Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

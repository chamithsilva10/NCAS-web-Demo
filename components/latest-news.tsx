import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

import Link from "next/link"

const newsItems = [
  {
    title: "Calling Applications for Partial Funding for Advanced Postgraduate Studies – 2026 (1st Round)",
    excerpt: "Applications are now open for partial funding for advanced postgraduate studies 2026. Application closing date extended till 15 March 2026.",
    date: "2026-01-10",
    category: "Funding",
    href: "/grants/partial-funding",
  },
  {
    title: "NCAS Publication Awards 2026",
    excerpt: "NCAS celebrates excellence in academic publishing. Submit your best research work for the 2026 Publication Awards.",
    date: "2026-01-15",
    category: "Awards",
    href: "/grants/publication-awards",
  },
  {
    title: "Call for Papers – NCAS Journal",
    excerpt: "The NCAS Journal invites submissions for the upcoming volume. Research articles in humanities and social sciences are welcome.",
    date: "2026-02-01",
    category: "Research",
    href: "/library/journal",
  },
  {
    title: "Short Term Research Grants",
    excerpt: "Applications now open for short-term research grants to support innovative research projects in humanities and social sciences.",
    date: "2025-01-01",
    category: "Funding",
    href: "/grants/short-term",
  },
  {
    title: "7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025",
    excerpt: "AI in Higher Education: Prospects and Challenges – October 30th–31st, 2025 at NCAS.",
    date: "2025-06-20",
    category: "Events",
    href: "/news/irshss-2025",
  },
]

const badgeStyles: Record<string, string> = {
  Events: "bg-sky-500/15 text-sky-700 border-sky-600/20",
  Funding: "bg-emerald-500/15 text-emerald-700 border-emerald-600/20",
  Research: "bg-amber-500/15 text-amber-700 border-amber-600/20",
  Awards: "bg-purple-500/15 text-purple-700 border-purple-600/20",
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US")
}

export function LatestNews() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 via-background to-background py-16">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_15%_10%,hsl(var(--primary)/0.08),transparent_35%),radial-gradient(circle_at_85%_90%,hsl(var(--accent)/0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Latest News & Updates</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stay informed about the latest developments, opportunities, and achievements at NCAS
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${badgeStyles[item.category] || "bg-secondary"}`}>
                  {item.category}
                </span>
                <span className="inline-flex items-center text-xs text-muted-foreground">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  {formatDate(item.date)}
                </span>
              </div>

              <h4 className="mb-2 line-clamp-2 text-sm font-semibold leading-snug text-foreground">{item.title}</h4>
              <p className="mb-4 line-clamp-3 flex-1 text-xs text-muted-foreground">{item.excerpt}</p>

              <Link href={item.href} className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80">
                Read More
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/news">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              View All News & Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

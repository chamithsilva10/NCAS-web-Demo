import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Globe, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Visiting Research Fellows | NCAS",
  description: "NCAS Visiting Research Fellows – distinguished international scholars conducting research at NCAS.",
}

const fellows = [
  {
    name: "Professor Shihan de Silva Jayasuriya",
    appointment: "11 June 2024",
    institution: "University of Westminster, UK & Institute of Commonwealth Studies, University of London",
    research:
      "Conducting a study on the lacemaking industry in the Southern Province of Sri Lanka – researching product variation, marketing strategies, and exposure to global markets to ascertain how the craft can be safeguarded and how the income of culture bearers can be enhanced.",
    specialisation: ["Linguistics", "Cultural Heritage", "Indo-Portuguese Studies", "Lacemaking Industry"],
    href: "/international/visiting-fellows/shihan-de-silva-jayasuriya",
  },
]

export default function VisitingResearchFellowsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">International Collaborations</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visiting Research Fellows</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Distinguished international scholars conducting research at NCAS, contributing to our mission of advancing
            humanities and social sciences.
          </p>
        </div>
      </section>

      {/* Fellows List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Current & Recent Fellows</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NCAS hosts distinguished visiting research fellows who bring international expertise and enrich our
              research environment.
            </p>
          </div>

          <div className="space-y-8">
            {fellows.map((fellow, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 bg-muted/40 flex items-center justify-center p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-primary/60" />
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="default">Visiting Research Fellow</Badge>
                        <Badge variant="outline">Appointed: {fellow.appointment}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{fellow.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{fellow.institution}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <BookOpen className="h-4 w-4" /> Research at NCAS
                        </h4>
                        <p className="text-sm text-muted-foreground">{fellow.research}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <Globe className="h-4 w-4" /> Areas of Specialisation
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {fellow.specialisation.map((s, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={fellow.href}>
                          View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-muted/30 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Visiting Fellow</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              NCAS welcomes applications from distinguished international scholars who wish to conduct research in
              humanities and social sciences in collaboration with our institution.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

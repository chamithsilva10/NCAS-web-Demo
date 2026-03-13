import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, Heart, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Life Learning Center | NCAS",
  description: "Real Stories – Sri Lanka & India's Lifelong Learning, Culture & Humanity at NCAS Life Learning Center.",
}

export default function LifeLearningCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">International</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Life Learning Center</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Real Stories – Sri Lanka &amp; India's Lifelong Learning, Culture &amp; Humanity
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Life Learning Center</h2>
              <p className="text-muted-foreground mb-4">
                The NCAS Life Learning Center is dedicated to promoting lifelong learning across Sri Lanka and India,
                celebrating the richness of culture, heritage, and humanity through continuous education initiatives.
              </p>
              <p className="text-muted-foreground mb-4">
                Through a vibrant collection of real stories, workshops, and collaborative programs, the center bridges
                academic knowledge with lived human experience, connecting scholars and communities.
              </p>
              <p className="text-muted-foreground">
                The center serves as a hub for intergenerational learning, cultural preservation, and cross-border
                academic exchange between institutions in Sri Lanka and India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, title: "Lifelong Learning", desc: "Continuous education programs for all ages" },
                { icon: Globe, title: "Cross-Cultural Exchange", desc: "Sri Lanka & India collaboration" },
                { icon: Heart, title: "Real Stories", desc: "Human-centered narratives and experiences" },
                { icon: Users, title: "Community Engagement", desc: "Connecting scholars and communities" },
              ].map((item, i) => (
                <Card key={i} className="text-center p-4">
                  <CardContent className="pt-4 p-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Programs & Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Oral History Project",
                  description:
                    "Documenting and preserving oral histories from communities across Sri Lanka and southern India, capturing stories of culture, tradition, and lived experience.",
                  badge: "Ongoing",
                },
                {
                  title: "Intergenerational Dialogues",
                  description:
                    "Facilitated conversations between elders and youth, bridging generational gaps and ensuring the transmission of cultural knowledge and values.",
                  badge: "Active",
                },
                {
                  title: "Cultural Heritage Workshops",
                  description:
                    "Hands-on workshops exploring traditional arts, crafts, music, and performance, connecting participants with their cultural heritage.",
                  badge: "Upcoming",
                },
              ].map((prog, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{prog.badge}</Badge>
                    </div>
                    <CardTitle className="text-lg">{prog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{prog.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-muted/30 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The Life Learning Center welcomes researchers, community members, and institutions who share a commitment
              to lifelong learning and cultural exchange.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

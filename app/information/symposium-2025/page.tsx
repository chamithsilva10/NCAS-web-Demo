"use client"

import { Calendar, MapPin, Users, BookOpen, Award, ExternalLink, Download, Play, FileText, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

const subThemes = [
  {
    number: "01",
    title: "Enhanced Teaching and Learning Innovations",
    description: "Adaptive Pedagogies, and Student Engagement",
    papers: 22
  },
  {
    number: "02",
    title: "Curriculum Design and Academic Advising",
    description: "AI Supported Modelling, Personal Learning Pathways, and Skills Forecasting",
    papers: 3
  },
  {
    number: "03",
    title: "Research, Writing, and Scholarly Communication",
    description: "AI Tools for Literature Review, Data Analysis, and Knowledge Dissemination",
    papers: 4
  },
  {
    number: "04",
    title: "Implementation Case Studies",
    description: "Successes and Obstacles across Varied Cultural, Economic and Institutional Settings",
    papers: 13
  },
  {
    number: "05",
    title: "Inclusive Education",
    description: "Leveraging AI to Bridge Access Gaps and Support Learners with Diverse Needs",
    papers: 5
  },
  {
    number: "06",
    title: "Strategic Planning and Support Services",
    description: "AI as Both a Challenge and an Opportunity for Educational Leadership",
    papers: 3
  },
  {
    number: "07",
    title: "Miscellaneous",
    description: "Various topics in Humanities and Social Sciences",
    papers: 6
  },
  {
    number: "08",
    title: "Policy and Governance",
    description: "Regulatory Frameworks, Quality Assurance, and Institutional Readiness for AI Adoption",
    papers: 7
  }
]

const messages = [
  {
    name: "Hon. Dr. Harini Amarasuriya",
    title: "Chief Guest, Prime Minister of Sri Lanka",
    type: "Chief Guest Message"
  },
  {
    name: "Professor (Mrs.) Prashanthi Narangoda",
    title: "Symposium Chair and Director, NCAS",
    type: "Director's Message"
  },
  {
    name: "Dr. Sampath Chandrasena",
    title: "Symposium Co-Chair",
    type: "Co-Chair's Message"
  },
  {
    name: "Professor C. D. Sebastian",
    title: "Keynote Speaker",
    type: "Keynote Address"
  },
  {
    name: "Dr. Chris Haywood",
    title: "Keynote Speaker",
    type: "Keynote Address"
  }
]

const downloads = [
  { name: "Full Proceedings Book", icon: BookOpen },
  { name: "Front Pages", icon: FileText },
  { name: "Organizing Committee", icon: Users },
  { name: "Table of Contents", icon: FileText },
  { name: "Panel of Reviewers", icon: Users },
  { name: "Session Chairs & Co-Chairs", icon: Users },
  { name: "List of Abstracts", icon: FileText }
]

export default function Symposium2025Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30" variant="secondary">
              <Calendar className="h-4 w-4 mr-2" />
              January 16-17, 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              7th International Research Symposium in Humanities and Social Sciences
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
              IRSHSS 2025
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                "AI in Higher Education: Innovations, Challenges, and Future Directions"
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-white/50 text-sm py-2 px-4">
                <MapPin className="h-4 w-4 mr-2" />
                BMICH, Colombo, Sri Lanka
              </Badge>
              <Badge variant="outline" className="text-white border-white/50 text-sm py-2 px-4">
                <Users className="h-4 w-4 mr-2" />
                63+ Research Papers
              </Badge>
              <Badge variant="outline" className="text-white border-white/50 text-sm py-2 px-4">
                <BookOpen className="h-4 w-4 mr-2" />
                8 Sub-Themes
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/library/proceedings/2025">
                  <BookOpen className="h-5 w-5" />
                  View Proceedings
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white/20" asChild>
                <Link href="/information/gallery/all/symposium-2025">
                  <Play className="h-5 w-5" />
                  Photos & Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto p-2">
            <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
            <TabsTrigger value="themes" className="py-3">Sub-Themes</TabsTrigger>
            <TabsTrigger value="messages" className="py-3">Messages</TabsTrigger>
            <TabsTrigger value="downloads" className="py-3">Downloads</TabsTrigger>
            <TabsTrigger value="contact" className="py-3">Contact</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>About IRSHSS 2025</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The 7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025 
                    focused on the transformative impact of Artificial Intelligence in Higher Education, 
                    exploring innovations, challenges, and future directions.
                  </p>
                  <p className="text-muted-foreground">
                    The symposium brought together researchers, educators, policymakers, and practitioners 
                    from around the world to discuss the integration of AI in educational contexts and its 
                    implications for teaching, learning, and research.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary">63+</div>
                      <div className="text-sm text-muted-foreground">Research Papers</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary">8</div>
                      <div className="text-sm text-muted-foreground">Sub-Themes</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Keynote Speakers</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-muted-foreground">January 16-17, 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Venue</div>
                      <div className="text-muted-foreground">
                        Bandaranaike Memorial International Conference Hall (BMICH)<br />
                        Colombo, Sri Lanka
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Chief Guest</div>
                      <div className="text-muted-foreground">
                        Hon. Dr. Harini Amarasuriya<br />
                        Prime Minister of Sri Lanka
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Symposium Chair</div>
                      <div className="text-muted-foreground">
                        Professor (Mrs.) Prashanthi Narangoda<br />
                        Director, NCAS
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Theme Highlight */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Symposium Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">
                  "AI in Higher Education: Innovations, Challenges, and Future Directions"
                </h3>
                <p className="text-muted-foreground">
                  The symposium explored how artificial intelligence is reshaping higher education across 
                  multiple dimensions - from teaching methodologies and curriculum design to research practices 
                  and institutional governance. Participants examined both the opportunities and challenges 
                  that AI presents for educational institutions worldwide.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sub-Themes Tab */}
          <TabsContent value="themes" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Sub-Themes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                IRSHSS 2025 featured eight comprehensive sub-themes covering various aspects of AI in higher education
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {subThemes.map((theme) => (
                <Card key={theme.number} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-lg font-bold px-4 py-2">
                        {theme.number}
                      </Badge>
                      <Badge variant="secondary">
                        {theme.papers} Papers
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Messages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Messages from the Chief Guest, Symposium Chair, and Keynote Speakers
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {messages.map((message, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{message.type}</Badge>
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    <CardDescription>{message.title}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Downloads Tab */}
          <TabsContent value="downloads" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Downloads</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access symposium materials and proceedings
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {downloads.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">PDF Document</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Full Proceedings</CardTitle>
                <CardDescription>
                  Download the complete IRSHSS 2025 Symposium Proceedings Book
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/library/proceedings/2025">
                    <Download className="h-5 w-5" />
                    Download Full Proceedings
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For inquiries about IRSHSS 2025
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Address</div>
                      <div className="text-muted-foreground">
                        National Centre for Advanced Studies in Humanities & Social Sciences<br />
                        No. 35, Bullers Lane, Colombo 07<br />
                        Sri Lanka
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <div className="text-muted-foreground">
                        Tel: +94 011 2685850<br />
                        Fax: +94 011 2693975
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-muted-foreground">info@ncas.ac.lk</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More NCAS Symposiums</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            View proceedings and photos from previous international research symposiums
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/information/symposium-2024">2024 Symposium</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/information/symposium-2023">2023 Symposium</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/information/symposium-2022">2022 Symposium</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/library/proceedings">All Proceedings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

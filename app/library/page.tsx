import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Database, FileText, ExternalLink, GraduationCap, Globe } from "lucide-react"

export default function LibraryPage() {
  const resources = [
    {
      title: "NCAS Journal",
      description: "Peer-reviewed academic journal with 18 volumes (2011-2023) covering humanities and social sciences",
      icon: BookOpen,
      count: "18 volumes published",
      link: "/library/journal",
    },
    {
      title: "Thesis & Dissertations",
      description: "PhD and MPhil theses completed by NCAS grantees at Sri Lankan & international universities",
      icon: GraduationCap,
      count: "100+ theses",
      link: "/library/thesis-dissertations",
    },
    {
      title: "Digital Repository",
      description: "Access to NCAS research publications, theses, and academic works",
      icon: Database,
      count: "2,500+ documents",
      link: "/library/digital-repository",
    },
    {
      title: "Symposium Proceedings",
      description: "Conference papers and presentations from international symposiums",
      icon: FileText,
      count: "8 years of proceedings",
      link: "/library/proceedings",
    },
    {
      title: "External Digital Libraries",
      description: "Curated collection of free digital libraries, open access journals, and ebook resources",
      icon: ExternalLink,
      count: "20+ resources",
      link: "/library/external-libraries",
    },
    {
      title: "Research Opportunities",
      description: "International research fellowships and scholarship programs for scholars",
      icon: Globe,
      count: "Doctoral & Postdoc",
      link: "/library/expanding-research-horizons",
    },
  ]

  const latestJournals = [
    {
      volume: "Volume 13, Number 2",
      year: "2024",
      articles: 8,
      theme: "Digital Humanities in South Asia",
    },
    {
      volume: "Volume 13, Number 1",
      year: "2024",
      articles: 6,
      theme: "Social Media and Cultural Change",
    },
    {
      volume: "Volume 12, Number 2",
      year: "2023",
      articles: 7,
      theme: "Post-Colonial Literature Studies",
    },
  ]

  const recentTheses = [
    {
      title: "Digital Preservation of Sri Lankan Cultural Heritage",
      author: "Dr. Samantha Perera",
      year: "2024",
      degree: "PhD",
    },
    {
      title: "Gender Dynamics in Contemporary Sri Lankan Cinema",
      author: "Ms. Nimesha Silva",
      year: "2024",
      degree: "MPhil",
    },
    {
      title: "Social Impact of Microfinance in Rural Communities",
      author: "Dr. Rohan Fernando",
      year: "2023",
      degree: "PhD",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">NCAS Library & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive digital library providing access to academic publications, research materials, and scholarly
            resources in humanities and social sciences.
          </p>
          <Button asChild size="lg">
            <Link href="/library/digital-repository">Browse Repository</Link>
          </Button>
        </div>

        {/* Library Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Library Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                    <Badge variant="secondary">{resource.count}</Badge>
                    <Button asChild className="w-full">
                      <Link href={resource.link}>Access</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Latest Journal Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Journal Issues</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestJournals.map((journal, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{journal.volume}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {journal.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    <strong>Theme:</strong> {journal.theme}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Articles:</strong> {journal.articles}
                  </p>
                  <Button className="w-full">Read Online</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/library/journal">View All Issues</Link>
            </Button>
          </div>
        </div>

        {/* Recent Theses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Theses & Dissertations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentTheses.map((thesis, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{thesis.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">{thesis.degree}</Badge>
                    <Badge variant="outline">{thesis.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>Author:</strong> {thesis.author}
                  </p>
                  <Button className="w-full">Download PDF</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/library/thesis-dissertations">View All Theses</Link>
            </Button>
          </div>
        </div>

        {/* Search and Access */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Search & Access Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">For NCAS Members</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full access to digital repository</li>
                  <li>• Download permissions for all documents</li>
                  <li>• Access to external database subscriptions</li>
                  <li>• Interlibrary loan services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">For External Users</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Browse and search capabilities</li>
                  <li>• Abstract and citation access</li>
                  <li>• Request access for specific documents</li>
                  <li>• Contact library for assistance</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/contact">Contact Library</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Users, Award, GraduationCap } from "lucide-react"

export default function GrantsPage() {
  const grantTypes = [
    {
      title: "Research Grants",
      description: "Funding for advanced research projects in humanities and social sciences",
      amount: "Up to LKR 500,000",
      duration: "12-24 months",
      icon: BookOpen,
      link: "/grants/research",
    },
    {
      title: "PhD Scholarships",
      description: "Full scholarships for doctoral studies in partnership with international universities",
      amount: "Full tuition + stipend",
      duration: "3-4 years",
      icon: GraduationCap,
      link: "/grants/qut-scholarships",
    },
    {
      title: "Publication Awards",
      description: "Recognition and financial support for outstanding academic publications",
      amount: "LKR 25,000 - 100,000",
      duration: "One-time award",
      icon: Award,
      link: "/grants/publication-awards",
    },
    {
      title: "Short Term Grants",
      description: "Quick funding for conference participation and short research projects",
      amount: "Up to LKR 150,000",
      duration: "3-6 months",
      icon: Users,
      link: "/grants/short-term",
    },
  ]

  const recentGrantees = [
    {
      name: "Dr. Priyanka Silva",
      project: "Digital Humanities in Sri Lankan Literature",
      amount: "LKR 450,000",
      year: "2024",
    },
    {
      name: "Prof. Mahinda Rajapaksa",
      project: "Social Media Impact on Political Discourse",
      amount: "LKR 380,000",
      year: "2024",
    },
    {
      name: "Dr. Nimesha Fernando",
      project: "Gender Studies in Contemporary Sri Lanka",
      amount: "LKR 420,000",
      year: "2023",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Grants & Funding</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            NCAS provides comprehensive funding opportunities to advance research in humanities and social sciences,
            supporting scholars at all career stages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/grants/forms-guidelines">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/grants/grantees">View Grantees</Link>
            </Button>
          </div>
        </div>

        {/* Grant Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Available Funding Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grantTypes.map((grant, index) => {
              const IconComponent = grant.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{grant.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground text-sm">{grant.description}</p>
                    <div className="space-y-2">
                      <Badge variant="secondary">{grant.amount}</Badge>
                      <Badge variant="outline">{grant.duration}</Badge>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={grant.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Recent Grantees */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Grantees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentGrantees.map((grantee, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{grantee.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {grantee.year}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{grantee.project}</p>
                  <p className="font-semibold text-primary">{grantee.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/grants/grantees">View All Grantees</Link>
            </Button>
          </div>
        </div>

        {/* Application Process */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Review Guidelines</h3>
                <p className="text-sm text-muted-foreground">Read application requirements and eligibility criteria</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Prepare Documents</h3>
                <p className="text-sm text-muted-foreground">Gather required documents and research proposal</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-muted-foreground">Complete online application before deadline</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Review Process</h3>
                <p className="text-sm text-muted-foreground">Expert panel evaluation and notification</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

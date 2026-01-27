import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GraduationCap, Users, Globe, Award, BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"

export default function ResearchOpportunitiesPage() {
  const fellowships = [
    {
      title: "Doctoral Research Fellowships",
      description: "Fellowships for pursuing PhD research in various disciplines at international universities.",
      icon: GraduationCap,
      features: ["Full funding for PhD programs", "Research support", "Travel allowances", "Living stipends"]
    },
    {
      title: "Postdoctoral Fellowships",
      description: "Opportunities for postdoctoral research and collaboration with leading international institutions.",
      icon: Award,
      features: ["Research funding", "International collaboration", "Publication support", "Conference travel"]
    },
    {
      title: "Senior Research Fellowships",
      description: "Fellowships for senior academics to conduct advanced research and collaborate internationally.",
      icon: Briefcase,
      features: ["Advanced research funding", "International partnerships", "Mentorship programs", "Sabbatical support"]
    }
  ]

  const internationalPrograms = [
    {
      name: "Fulbright Program",
      country: "USA",
      url: "https://foreign.fulbrightonline.org/",
      description: "Prestigious exchange program for graduate students, scholars, and professionals."
    },
    {
      name: "Commonwealth Scholarships",
      country: "UK",
      url: "https://cscuk.fcdo.gov.uk/",
      description: "Scholarships for citizens of Commonwealth countries to study in the UK."
    },
    {
      name: "DAAD Scholarships",
      country: "Germany",
      url: "https://www.daad.de/",
      description: "German Academic Exchange Service scholarships for various academic levels."
    },
    {
      name: "Chevening Scholarships",
      country: "UK",
      url: "https://www.chevening.org/",
      description: "UK government's global scholarship program for future leaders."
    },
    {
      name: "Australia Awards",
      country: "Australia",
      url: "https://www.dfat.gov.au/people-to-people/australia-awards",
      description: "Scholarships and fellowships funded by the Australian Government."
    },
    {
      name: "Erasmus Mundus",
      country: "EU",
      url: "https://erasmus-plus.ec.europa.eu/",
      description: "EU-funded Master's and PhD programs at multiple European universities."
    },
    {
      name: "Japan MEXT Scholarships",
      country: "Japan",
      url: "https://www.studyinjapan.go.jp/",
      description: "Japanese government scholarships for international students."
    },
    {
      name: "Korean Government Scholarships",
      country: "South Korea",
      url: "https://www.studyinkorea.go.kr/",
      description: "KGSP scholarships for graduate and undergraduate studies in Korea."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Expanding Research Horizons
            </h1>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Explore international research opportunities, fellowships, and scholarships 
              for doctoral, postdoctoral, and senior research scholars.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Fellowship Types */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Research Fellowship Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fellowships.map((fellowship, idx) => {
                const Icon = fellowship.icon
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{fellowship.title}</CardTitle>
                      <CardDescription>{fellowship.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {fellowship.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* International Programs */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              International Scholarship Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {internationalPrograms.map((program, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <Badge variant="outline">{program.country}</Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" size="sm">
                      <Link href={program.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* NCAS Support */}
          <section>
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  NCAS Research Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  The National Centre for Advanced Studies (NCAS) provides comprehensive support for Sri Lankan 
                  researchers seeking international opportunities:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-background rounded-lg text-center">
                    <GraduationCap className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-sm">PhD Scholarships</h3>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-sm">Short-term Grants</h3>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-sm">Publication Awards</h3>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-sm">Research Colloquium</h3>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/grants">
                      View All Grants
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/scholarships">
                      Scholarship Information
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tips for Applications */}
          <section>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Tips for Successful Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Before Applying</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Research the program thoroughly and understand eligibility criteria
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Identify potential supervisors and establish contact early
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Prepare a clear research proposal aligned with the program's focus
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Ensure all documents meet the specified requirements
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Application Process</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Start early and allow time for multiple revisions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Request recommendation letters well in advance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Tailor your application to each specific program
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        Follow up on your application status professionally
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}

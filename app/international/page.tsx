import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Globe, Users, BookOpen, Award } from "lucide-react"

export default function InternationalPage() {
  const partnerships = [
    {
      institution: "Queensland University of Technology (QUT)",
      country: "Australia",
      type: "PhD Scholarships",
      description: "Joint PhD program with full scholarships for outstanding students",
      established: "2018",
    },
    {
      institution: "University of Edinburgh",
      country: "United Kingdom",
      type: "Research Collaboration",
      description: "Joint research projects in digital humanities and cultural studies",
      established: "2020",
    },
    {
      institution: "Leiden University",
      country: "Netherlands",
      type: "Academic Exchange",
      description: "Faculty and student exchange programs in Asian studies",
      established: "2019",
    },
    {
      institution: "Jawaharlal Nehru University",
      country: "India",
      type: "Research Partnership",
      description: "Collaborative research in South Asian studies and linguistics",
      established: "2017",
    },
  ]

  const programs = [
    {
      title: "NCAS-QUT PhD Scholarships",
      description: "Full scholarships for PhD studies at Queensland University of Technology",
      benefits: ["Full tuition coverage", "Living allowance", "Research support", "Supervision by both institutions"],
      deadline: "March 31, 2025",
    },
    {
      title: "International Research Fellowships",
      description: "Short-term research fellowships at partner institutions",
      benefits: ["Travel grants", "Accommodation support", "Library access", "Networking opportunities"],
      deadline: "Rolling basis",
    },
    {
      title: "Collaborative Research Grants",
      description: "Joint funding for international research projects",
      benefits: ["Research funding", "Conference participation", "Publication support", "Equipment access"],
      deadline: "June 30, 2025",
    },
  ]

  const achievements = [
    {
      title: "50+ International Publications",
      description: "Collaborative research published in top-tier journals",
      icon: BookOpen,
    },
    {
      title: "25 PhD Graduates",
      description: "Students graduated through international partnerships",
      icon: Award,
    },
    {
      title: "15 Partner Institutions",
      description: "Active collaborations across 4 continents",
      icon: Globe,
    },
    {
      title: "100+ Exchange Students",
      description: "Students participated in exchange programs",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">International Collaborations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            NCAS maintains strategic partnerships with leading universities and research institutions worldwide to
            advance humanities and social sciences research and education.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Global Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Partner Institutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Institutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{partner.institution}</CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {partner.country}
                      </Badge>
                    </div>
                    <Badge variant="outline">{partner.established}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge variant="default">{partner.type}</Badge>
                  </div>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* International Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">International Programs</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <Badge variant="destructive" className="w-fit">
                    Deadline: {program.deadline}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1 mb-4">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration Areas */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Areas of Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Research Collaboration</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Joint research projects</li>
                  <li>• Co-authored publications</li>
                  <li>• Shared research facilities</li>
                  <li>• International conferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Academic Exchange</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Student exchange programs</li>
                  <li>• Faculty mobility</li>
                  <li>• Joint degree programs</li>
                  <li>• Summer schools</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Capacity Building</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Training workshops</li>
                  <li>• Technical assistance</li>
                  <li>• Resource sharing</li>
                  <li>• Best practice exchange</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Partnerships */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Interested in Partnership?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              We welcome new partnerships with institutions that share our commitment to excellence in humanities and
              social sciences research and education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:international@ncas.ac.lk">Email International Office</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

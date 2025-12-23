import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Download, FileText, Calendar, CheckCircle } from "lucide-react"

export default function RegisterPage() {
  const programs = [
    {
      degree: "MPhil",
      duration: "2 years",
      mode: "Full-time/Part-time",
      requirements: ["Bachelor's degree with Second Class Upper", "Research proposal", "English proficiency"],
    },
    {
      degree: "PhD",
      duration: "3-4 years",
      mode: "Full-time/Part-time",
      requirements: ["Master's degree or MPhil", "Research proposal", "Supervisor confirmation"],
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: "Download Application Form",
      description: "Get the official application form and guidelines",
      icon: Download,
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather all required documents and certificates",
      icon: FileText,
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Submit completed application before deadline",
      icon: Calendar,
    },
    {
      step: 4,
      title: "Review Process",
      description: "Application review and interview process",
      icon: CheckCircle,
    },
  ]

  const importantDates = [
    {
      event: "Application Opens",
      date: "January 15, 2025",
      status: "upcoming",
    },
    {
      event: "Application Deadline",
      date: "March 31, 2025",
      status: "deadline",
    },
    {
      event: "Interview Period",
      date: "May 1-15, 2025",
      status: "upcoming",
    },
    {
      event: "Results Announcement",
      date: "June 30, 2025",
      status: "upcoming",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Register for MPhil/PhD</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join NCAS's prestigious postgraduate programs and advance your research in humanities and social sciences
            with world-class supervision and resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/register/application-form">Download Application</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/register/bylaws">View Bylaws</Link>
            </Button>
          </div>
        </div>

        {/* Available Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Available Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{program.degree}</CardTitle>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary">{program.duration}</Badge>
                    <Badge variant="outline">{program.mode}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3">Entry Requirements:</h3>
                  <ul className="space-y-2">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Step {step.step}</CardTitle>
                    <h3 className="font-semibold">{step.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.event}</CardTitle>
                  <Badge variant={item.status === "deadline" ? "destructive" : "secondary"} className="w-fit">
                    {item.date}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Research Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Humanities</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Literature Studies</li>
                  <li>• Linguistics</li>
                  <li>• History</li>
                  <li>• Philosophy</li>
                  <li>• Cultural Studies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Social Sciences</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Sociology</li>
                  <li>• Anthropology</li>
                  <li>• Political Science</li>
                  <li>• Economics</li>
                  <li>• Psychology</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Interdisciplinary</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Digital Humanities</li>
                  <li>• Gender Studies</li>
                  <li>• Development Studies</li>
                  <li>• Media Studies</li>
                  <li>• Environmental Humanities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              For questions about the application process or program requirements, please contact our admissions office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Admissions</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:admissions@ncas.ac.lk">Email Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

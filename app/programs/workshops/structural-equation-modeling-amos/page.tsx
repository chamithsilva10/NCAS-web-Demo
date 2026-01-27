

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Clock, Award, CheckCircle, Calendar, Target, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

const workshopDetails = {
  title: "Workshop on Structural Equation Modeling (with AMOS) for Quantitative Research",
  duration: "5 Days",
  mode: "Hands-on Training",
  fee: "LKR 35,000",
  maxParticipants: 25,
  nextBatch: "November 2025",
  description: "Master Structural Equation Modeling using AMOS software. This intensive workshop covers theoretical foundations and practical applications of SEM in social science research."
}

const workshopObjectives = [
  "Understand the theoretical foundations of Structural Equation Modeling",
  "Learn to use AMOS software for SEM analysis",
  "Develop skills in model specification and estimation",
  "Master model fit assessment and modification",
  "Learn advanced SEM techniques (mediation, moderation)",
  "Apply SEM in real research scenarios"
]

const workshopSchedule = [
  {
    day: 1,
    title: "Introduction to Structural Equation Modeling",
    topics: ["SEM concepts and terminology", "Path analysis basics", "Confirmatory Factor Analysis", "AMOS interface introduction"]
  },
  {
    day: 2,
    title: "Model Specification and Estimation",
    topics: ["Model specification", "Parameter estimation methods", "Identification issues", "Model estimation in AMOS"]
  },
  {
    day: 3,
    title: "Model Fit Assessment",
    topics: ["Goodness-of-fit indices", "Model modification", "Nested model comparison", "Practical exercises"]
  },
  {
    day: 4,
    title: "Advanced SEM Techniques",
    topics: ["Mediation analysis", "Moderation analysis", "Multi-group analysis", "Longitudinal SEM"]
  },
  {
    day: 5,
    title: "Applications and Case Studies",
    topics: ["Real data analysis", "Reporting SEM results", "Common pitfalls", "Q&A and project consultation"]
  }
]

const prerequisites = [
  "Basic knowledge of statistics",
  "Familiarity with quantitative research methods",
  "Basic understanding of regression analysis",
  "Research methodology course completion (recommended)"
]

const softwareRequirements = [
  "AMOS software (provided during workshop)",
  "Windows operating system",
  "Basic computer skills",
  "SPSS knowledge (advantageous)"
]

const resourcePersons = [
  {
    name: "Dr. Ruwan Jayathilaka",
    designation: "Senior Lecturer in Statistics",
    expertise: "Structural Equation Modeling, Psychometrics"
  },
  {
    name: "Prof. Chaminda Wijesinghe",
    designation: "Professor of Quantitative Methods",
    expertise: "Advanced Statistical Modeling, Research Methods"
  }
]

const benefits = [
  "Comprehensive understanding of SEM theory and practice",
  "Hands-on experience with AMOS software",
  "Certificate of completion from NCAS",
  "Access to workshop materials and datasets",
  "Networking with researchers and academics",
  "Enhanced research capabilities for publications"
]

export default function AmosWorkshopPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Advanced Workshop</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">{workshopDetails.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {workshopDetails.description}
          </p>
        </div>

        {/* Workshop Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">{workshopDetails.duration}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Class Size</h3>
              <p className="text-muted-foreground">Max {workshopDetails.maxParticipants} participants</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Course Fee</h3>
              <p className="text-muted-foreground">{workshopDetails.fee}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Next Batch</h3>
              <p className="text-muted-foreground">{workshopDetails.nextBatch}</p>
            </CardContent>
          </Card>
        </div>

        {/* Workshop Objectives */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Workshop Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {workshopObjectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Schedule */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Workshop Schedule</h2>
          <div className="space-y-4">
            {workshopSchedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Day {day.day}: {day.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prerequisites and Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {prereq}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Software Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {softwareRequirements.map((req, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Resource Persons */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Resource Persons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resourcePersons.map((person, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{person.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{person.designation}</p>
                      <Badge variant="outline">{person.expertise}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Benefits of the Workshop</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">SEM Theory</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive understanding of structural equation modeling concepts
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">AMOS Software</h3>
              <p className="text-sm text-muted-foreground">
                Practical skills in using AMOS for SEM analysis
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Research Application</h3>
              <p className="text-sm text-muted-foreground">
                Apply SEM techniques in real research projects
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Master Structural Equation Modeling?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our intensive AMOS workshop and enhance your quantitative research capabilities.
            Limited seats available for hands-on training!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register/application-form">
                Register Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Workshop Coordinator
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Workshop Coordinator: Dr. Ruwan Jayathilaka | Phone: +94 71 241 6533 | Email: info@ncas.ac.lk
          </p>
        </div>
      </main>
      </div>
  )
}
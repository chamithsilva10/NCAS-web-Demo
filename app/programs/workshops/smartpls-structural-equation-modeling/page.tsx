

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Clock, Award, CheckCircle, Calendar, Target, FileText, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

const workshopDetails = {
  title: "Workshop on Partial Least Square Structural Equation Modeling (with SmartPLS)",
  duration: "5 Days",
  mode: "Hands-on Training",
  fee: "LKR 35,000",
  maxParticipants: 25,
  nextBatch: "February 2026",
  description: "Comprehensive training in Partial Least Squares Structural Equation Modeling (PLS-SEM) using SmartPLS software. Learn advanced multivariate analysis techniques for complex research models."
}

const workshopObjectives = [
  "Understand PLS-SEM methodology and its applications",
  "Master SmartPLS software for advanced data analysis",
  "Learn to evaluate measurement and structural models",
  "Develop skills in mediation and moderation analysis",
  "Master advanced PLS techniques (higher-order constructs, multi-group analysis)",
  "Apply PLS-SEM in real research scenarios"
]

const workshopSchedule = [
  {
    day: 1,
    title: "Introduction to PLS-SEM and SmartPLS",
    topics: ["PLS-SEM vs CB-SEM", "SmartPLS interface", "Data preparation", "Basic model setup"]
  },
  {
    day: 2,
    title: "Measurement Model Assessment",
    topics: ["Reliability analysis", "Convergent validity", "Discriminant validity", "Indicator evaluation"]
  },
  {
    day: 3,
    title: "Structural Model Assessment",
    topics: ["Path coefficients", "R-squared values", "F-squared effect size", "Predictive relevance (Q²)"]
  },
  {
    day: 4,
    title: "Advanced PLS-SEM Techniques",
    topics: ["Mediation analysis", "Moderation analysis", "Higher-order constructs", "Multi-group analysis"]
  },
  {
    day: 5,
    title: "Applications and Reporting",
    topics: ["Real data analysis", "Results interpretation", "Reporting PLS-SEM results", "Q&A and consultation"]
  }
]

const prerequisites = [
  "Basic knowledge of statistics and research methods",
  "Understanding of regression analysis",
  "Familiarity with quantitative research",
  "Basic computer skills"
]

const softwareRequirements = [
  "SmartPLS software (provided during workshop)",
  "Windows operating system",
  "Basic statistical software knowledge (SPSS/Excel)",
  "Research data for practice (optional)"
]

const resourcePersons = [
  {
    name: "Dr. Kasun Fernando",
    designation: "Senior Lecturer in Quantitative Methods",
    expertise: "PLS-SEM, Structural Equation Modeling"
  },
  {
    name: "Prof. Roshan Perera",
    designation: "Professor of Business Analytics",
    expertise: "Advanced Statistical Modeling, PLS-SEM"
  }
]

const benefits = [
  "Comprehensive PLS-SEM methodology training",
  "Hands-on SmartPLS software experience",
  "Advanced multivariate analysis skills",
  "Certificate of completion from NCAS",
  "Access to workshop materials and datasets",
  "Research methodology enhancement",
  "Publication-ready analytical skills"
]

const plsTechniques = [
  "Measurement Model Evaluation",
  "Structural Model Assessment",
  "Mediation Analysis",
  "Moderation Analysis",
  "Multi-Group Analysis",
  "Higher-Order Constructs",
  "Predictive Modeling"
]

export default function SmartplsWorkshopPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Advanced Quantitative Workshop</Badge>
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

        {/* PLS-SEM Techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">PLS-SEM Techniques You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plsTechniques.map((technique, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">{technique}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
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

        {/* Why PLS-SEM */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Why Learn PLS-SEM?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Complex Models</h3>
              <p className="text-sm text-muted-foreground">
                Handle complex research models with multiple constructs and relationships
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Small Sample Sizes</h3>
              <p className="text-sm text-muted-foreground">
                Effective with smaller sample sizes compared to traditional SEM methods
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Predictive Focus</h3>
              <p className="text-sm text-muted-foreground">
                Strong emphasis on prediction and explanation of complex relationships
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Master PLS-SEM with SmartPLS</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our intensive SmartPLS workshop and become proficient in advanced structural equation modeling.
            Enhance your quantitative research capabilities with industry-standard tools!
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
            Workshop Coordinator: Dr. Kasun Fernando | Phone: +94 71 241 6533 | Email: info@ncas.ac.lk
          </p>
        </div>
      </main>
      </div>
  )
}
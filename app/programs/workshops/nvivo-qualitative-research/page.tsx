import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileSearch, Users, Clock, Award, CheckCircle, Calendar, Target, FileText, Search } from "lucide-react"
import Link from "next/link"

const workshopDetails = {
  title: "Workshop on Using NVivo for Qualitative Research",
  duration: "4 Days",
  mode: "Hands-on Training",
  fee: "LKR 30,000",
  maxParticipants: 20,
  nextBatch: "December 2025",
  description: "Master qualitative data analysis using NVivo software. This comprehensive workshop covers all aspects of qualitative research analysis from data import to advanced coding and visualization techniques."
}

const workshopObjectives = [
  "Understand qualitative research methodology",
  "Learn to use NVivo software effectively",
  "Master coding and thematic analysis techniques",
  "Develop skills in data visualization and reporting",
  "Learn advanced features like framework matrices and queries",
  "Apply NVivo in real research projects"
]

const workshopSchedule = [
  {
    day: 1,
    title: "Introduction to Qualitative Research and NVivo",
    topics: ["Qualitative research fundamentals", "NVivo interface and navigation", "Project setup and data import", "Basic coding techniques"]
  },
  {
    day: 2,
    title: "Advanced Coding and Analysis",
    topics: ["Thematic analysis", "Hierarchical coding", "Relationship coding", "Memo writing and annotations"]
  },
  {
    day: 3,
    title: "Queries, Visualization and Reporting",
    topics: ["Text search queries", "Matrix coding queries", "Tree maps and word clouds", "Report generation"]
  },
  {
    day: 4,
    title: "Advanced Features and Case Studies",
    topics: ["Framework analysis", "Social network analysis", "Real project analysis", "Best practices and troubleshooting"]
  }
]

const prerequisites = [
  "Basic understanding of qualitative research methods",
  "Familiarity with qualitative data collection",
  "Basic computer skills",
  "Research methodology knowledge (recommended)"
]

const softwareRequirements = [
  "NVivo software (provided during workshop)",
  "Windows/Mac operating system",
  "Qualitative research experience (advantageous)",
  "Access to personal research data (optional)"
]

const resourcePersons = [
  {
    name: "Dr. Anusha Edirisinghe",
    designation: "Senior Lecturer in Qualitative Methods",
    expertise: "Qualitative Research, NVivo Analysis"
  },
  {
    name: "Prof. Dilini Fernando",
    designation: "Professor of Social Research",
    expertise: "Qualitative Methodology, Thematic Analysis"
  }
]

const benefits = [
  "Comprehensive NVivo software training",
  "Hands-on experience with real data",
  "Certificate of completion from NCAS",
  "Access to workshop materials and sample projects",
  "Networking with qualitative researchers",
  "Enhanced qualitative research capabilities"
]

const nvivoFeatures = [
  "Data Import and Management",
  "Coding and Categorization",
  "Query and Search Functions",
  "Visualization Tools",
  "Collaboration Features",
  "Reporting and Export"
]

export default function NvivoWorkshopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Qualitative Research Workshop</Badge>
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

        {/* NVivo Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">NVivo Features You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nvivoFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileSearch className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">{feature}</h3>
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

        {/* Workshop Highlights */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Workshop Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileSearch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Practical Training</h3>
              <p className="text-sm text-muted-foreground">
                Hands-on experience with NVivo software using real research data
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Learn from experienced qualitative researchers and NVivo experts
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Research Application</h3>
              <p className="text-sm text-muted-foreground">
                Apply NVivo techniques to your own research projects
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Master Qualitative Data Analysis with NVivo</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our comprehensive NVivo workshop and transform your qualitative research capabilities.
            Limited seats available for intensive training!
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
            Workshop Coordinator: Dr. Anusha Edirisinghe | Phone: +94 71 241 6533 | Email: info@ncas.ac.lk
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
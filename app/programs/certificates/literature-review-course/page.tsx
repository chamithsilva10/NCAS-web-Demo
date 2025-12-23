import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Award, CheckCircle, Calendar, Target, FileText, BarChart3, Search } from "lucide-react"
import Link from "next/link"

const courseDetails = {
  title: "Certificate Course on Mastering Systematic Literature Review with Bibliometric Analysis, Manuscript Writing and Publication",
  duration: "6 Weeks",
  mode: "Online/Offline Hybrid",
  fee: "LKR 40,000",
  maxStudents: 20,
  startDate: "January 2026",
  description: "Comprehensive training in systematic literature review methodology, bibliometric analysis, academic writing, and publication strategies for researchers in humanities and social sciences."
}

const courseObjectives = [
  "Master systematic literature review methodology",
  "Learn bibliometric analysis techniques using specialized software",
  "Develop advanced academic writing and manuscript preparation skills",
  "Understand publication strategies and journal selection",
  "Learn to use citation management and reference tools",
  "Gain expertise in peer review processes and responses"
]

const courseModules = [
  {
    week: 1,
    title: "Introduction to Systematic Literature Review",
    topics: ["SLR fundamentals and principles", "Research question formulation", "Inclusion/exclusion criteria", "Protocol development"]
  },
  {
    week: 2,
    title: "Literature Search and Database Management",
    topics: ["Advanced search strategies", "Database selection (Scopus, Web of Science)", "Reference management tools", "Search result organization"]
  },
  {
    week: 3,
    title: "Bibliometric Analysis Fundamentals",
    topics: ["Bibliometric concepts", "Citation analysis", "Co-citation analysis", "Bibliometric software introduction"]
  },
  {
    week: 4,
    title: "Advanced Bibliometric Techniques",
    topics: ["Network analysis", "Science mapping", "Research trend analysis", "Visualization techniques"]
  },
  {
    week: 5,
    title: "Academic Writing and Manuscript Preparation",
    topics: ["IMRAD structure", "Writing systematic reviews", "Data presentation", "Manuscript formatting"]
  },
  {
    week: 6,
    title: "Publication Strategies and Peer Review",
    topics: ["Journal selection strategies", "Submission processes", "Peer review responses", "Publication ethics"]
  }
]

const softwareTools = [
  "EndNote/Web of Science",
  "Scopus",
  "VOSviewer",
  "CiteSpace",
  "Bibliometrix R-package",
  "Microsoft Academic",
  "Google Scholar"
]

const instructors = [
  {
    name: "Dr. Nimali Fernando",
    designation: "Senior Research Fellow",
    expertise: "Systematic Reviews, Bibliometrics"
  },
  {
    name: "Prof. Samantha Perera",
    designation: "Professor of Research Methods",
    expertise: "Academic Writing, Publication Strategies"
  },
  {
    name: "Dr. Chamith Abeysinghe",
    designation: "Senior Lecturer",
    expertise: "Bibliometric Analysis, Science Mapping"
  }
]

const benefits = [
  "Complete SLR methodology training",
  "Hands-on bibliometric analysis experience",
  "Professional academic writing skills",
  "Publication strategy expertise",
  "Certificate from NCAS",
  "Access to research databases and tools",
  "Networking with research community",
  "Career advancement in academia"
]

const courseFeatures = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Comprehensive SLR Training",
    description: "Complete systematic literature review methodology from planning to publication"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Bibliometric Analysis",
    description: "Advanced bibliometric techniques and software tools for research evaluation"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Manuscript Writing",
    description: "Professional academic writing skills and manuscript preparation techniques"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Publication Support",
    description: "Guidance on publication strategies, journal selection, and peer review processes"
  }
]

export default function LiteratureReviewCoursePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Advanced Certificate Course</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Mastering Systematic Literature Review</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {courseDetails.description}
          </p>
        </div>

        {/* Course Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">{courseDetails.duration}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Class Size</h3>
              <p className="text-muted-foreground">Max {courseDetails.maxStudents} students</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Course Fee</h3>
              <p className="text-muted-foreground">{courseDetails.fee}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Start Date</h3>
              <p className="text-muted-foreground">{courseDetails.startDate}</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Course Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Course Objectives */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Course Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {courseObjectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Course Modules</h2>
          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Week {module.week}: {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-muted-foreground">
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

        {/* Software Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Software Tools & Databases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareTools.map((tool, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <Badge variant="outline">{tool}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Course Instructors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{instructor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{instructor.designation}</p>
                  <Badge variant="outline">{instructor.expertise}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Benefits of the Course</h2>
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

        {/* Learning Outcomes */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">SLR Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Conduct comprehensive systematic literature reviews independently
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Bibliometric Skills</h3>
              <p className="text-sm text-muted-foreground">
                Perform advanced bibliometric analysis and visualization
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Publication Ready</h3>
              <p className="text-sm text-muted-foreground">
                Prepare manuscripts for high-impact journal publications
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Master Literature Review and Publication Skills</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our comprehensive certificate course and become an expert in systematic literature review,
            bibliometric analysis, and academic publishing. Transform your research career!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register/application-form">
                Enroll Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Course Coordinator
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Course Coordinator: Dr. Nimali Fernando | Phone: +94 71 241 6533 | Email: info@ncas.ac.lk
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
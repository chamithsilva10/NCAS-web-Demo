

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Award, CheckCircle, Calendar, Target, FileText } from "lucide-react"
import Link from "next/link"

const courseDetails = {
  title: "Certificate Course on Research Methodology",
  duration: "3 Months",
  mode: "Online/Offline",
  fee: "LKR 25,000",
  maxStudents: 30,
  startDate: "October 2025",
  description: "This comprehensive certificate course equips participants with essential research methodology skills for conducting high-quality research in humanities and social sciences."
}

const courseObjectives = [
  "Understand fundamental concepts of research methodology",
  "Learn to formulate research questions and hypotheses",
  "Master qualitative and quantitative research methods",
  "Develop skills in data collection and analysis",
  "Learn to write research proposals and reports",
  "Understand ethical considerations in research"
]

const courseModules = [
  {
    title: "Introduction to Research Methodology",
    topics: ["Research concepts and terminology", "Types of research", "Research process", "Literature review techniques"]
  },
  {
    title: "Research Design and Planning",
    topics: ["Formulating research questions", "Developing hypotheses", "Research design types", "Sampling techniques"]
  },
  {
    title: "Qualitative Research Methods",
    topics: ["Qualitative data collection", "Interview techniques", "Focus group discussions", "Content analysis"]
  },
  {
    title: "Quantitative Research Methods",
    topics: ["Survey design", "Questionnaire development", "Statistical analysis basics", "Data interpretation"]
  },
  {
    title: "Data Analysis and Interpretation",
    topics: ["Qualitative data analysis", "Quantitative data analysis", "Using statistical software", "Report writing"]
  },
  {
    title: "Research Ethics and Publication",
    topics: ["Research ethics", "Plagiarism and academic integrity", "Publication process", "Research dissemination"]
  }
]

const instructors = [
  {
    name: "Dr. Sampath Chandrasena",
    designation: "Senior Lecturer",
    expertise: "Research Methodology, Statistics"
  },
  {
    name: "Prof. Nimal Fernando",
    designation: "Professor",
    expertise: "Qualitative Research, Social Sciences"
  },
  {
    name: "Dr. Anura Kumara",
    designation: "Senior Research Fellow",
    expertise: "Quantitative Methods, Data Analysis"
  }
]

const benefits = [
  "Comprehensive understanding of research methodology",
  "Practical skills in research design and implementation",
  "Certificate recognized by NCAS",
  "Access to research resources and networks",
  "Opportunity to join research projects",
  "Career advancement in academic and research fields"
]

export default function ResearchMethodologyCoursePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Certificate Course</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">{courseDetails.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                    Module {index + 1}: {module.title}
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

        {/* Application Process */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Step 1</h3>
              <p className="text-sm text-muted-foreground">
                Download and fill the application form
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Step 2</h3>
              <p className="text-sm text-muted-foreground">
                Submit application with required documents
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Step 3</h3>
              <p className="text-sm text-muted-foreground">
                Selection based on qualifications and merit
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Research Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our comprehensive certificate course on research methodology and enhance your research skills.
            Limited seats available - apply now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register/application-form">
                Apply Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Course Coordinator
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Course Coordinator: Dr. Sampath Chandrasena | Phone: +94 71 241 6533 | Email: info@ncas.ac.lk
          </p>
        </div>
      </main>
      </div>
  )
}
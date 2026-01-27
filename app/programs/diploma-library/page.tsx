

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, BookOpen, Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DiplomaLibraryPage() {
  const programDetails = {
    title: "Diploma in Smart Library Technologies",
    duration: "6 months",
    startDate: "September 5, 2025",
    capacity: "Limited seats",
    description: "This comprehensive diploma program equips library professionals with cutting-edge skills in smart library technologies, digital transformation, and modern information management systems.",
    objectives: [
      "Master digital library management systems",
      "Learn advanced search and retrieval technologies",
      "Understand data analytics for library services",
      "Develop skills in digital preservation and archiving",
      "Explore emerging technologies in library science"
    ],
    modules: [
      "Digital Library Systems and Software",
      "Information Retrieval and Search Technologies",
      "Data Analytics for Libraries",
      "Digital Preservation and Archiving",
      "Smart Technologies in Library Management",
      "User Experience Design for Digital Libraries",
      "Emerging Technologies and Trends"
    ],
    eligibility: [
      "Bachelor's degree in Library Science or related field",
      "Working professionals in library and information services",
      "Minimum 1 year of experience in library services",
      "Basic computer literacy skills"
    ],
    benefits: [
      "Industry-recognized certification",
      "Hands-on training with modern tools",
      "Expert faculty from leading institutions",
      "Career advancement opportunities",
      "Networking with library professionals"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{programDetails.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {programDetails.description}
          </p>
        </div>

        {/* Program Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Diploma+in+Smart+Library+Technologies"
              alt="Diploma in Smart Library Technologies"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{programDetails.duration}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Start Date</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{programDetails.startDate}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Capacity</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{programDetails.capacity}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Format</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Hybrid</div>
              <p className="text-xs text-muted-foreground">Online & In-person</p>
            </CardContent>
          </Card>
        </div>

        {/* Program Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Program Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {programDetails.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Course Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {programDetails.modules.map((module, index) => (
                  <li key={index} className="flex items-start">
                    <Badge variant="outline" className="mr-2 text-xs">
                      {index + 1}
                    </Badge>
                    <span className="text-sm">{module}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Eligibility and Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {programDetails.eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{criteria}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {programDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Application Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Apply?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our Diploma in Smart Library Technologies program and advance your career
            in modern library and information services. Applications are now open for the
            September 2025 intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://forms.gle/Jgmw4ufsLvgajTkR8" target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" />
                Apply Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      </div>
  )
}
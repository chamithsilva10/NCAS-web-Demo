import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Briefcase as Certificate, Users, Briefcase } from "lucide-react"

export default function ProgramsPage() {
  const programCategories = [
    {
      title: "Post Graduate Programs",
      description: "Advanced degree programs in humanities and social sciences",
      icon: GraduationCap,
      programs: [
        { name: "MPhil in Humanities", duration: "2 years", mode: "Full-time" },
        { name: "PhD in Social Sciences", duration: "3-4 years", mode: "Full-time/Part-time" },
      ],
      link: "/programs/postgraduate",
    },
    {
      title: "Diploma Programs",
      description: "Professional diploma courses in specialized areas",
      icon: Certificate,
      programs: [
        { name: "Smart Library Technologies", duration: "1 year", mode: "Part-time" },
        { name: "Elder Care Management", duration: "1 year", mode: "Part-time" },
        { name: "Tourism & Hospitality Management", duration: "1 year", mode: "Part-time" },
      ],
      link: "/programs/diplomas",
    },
    {
      title: "Certificate Courses",
      description: "Short-term specialized training programs",
      icon: Users,
      programs: [
        { name: "Research Methodology", duration: "3 months", mode: "Weekend" },
        { name: "SPSS for Statistical Analysis", duration: "2 months", mode: "Evening" },
      ],
      link: "/programs/certificates",
    },
    {
      title: "Executive Education",
      description: "Professional development for working professionals",
      icon: Briefcase,
      programs: [
        { name: "Information Security Workshops", duration: "1 week", mode: "Intensive" },
        { name: "Executive Officers Training", duration: "2 weeks", mode: "Modular" },
      ],
      link: "/programs/executive-education",
    },
  ]

  const upcomingWorkshops = [
    {
      title: "Structural Equation Modeling with AMOS",
      date: "March 15-17, 2025",
      instructor: "Prof. Sarah Johnson",
      fee: "LKR 15,000",
    },
    {
      title: "Using NVivo for Qualitative Research",
      date: "April 5-7, 2025",
      instructor: "Dr. Michael Chen",
      fee: "LKR 12,000",
    },
    {
      title: "Literature Review Techniques",
      date: "April 20-21, 2025",
      instructor: "Prof. Emma Wilson",
      fee: "LKR 8,000",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Academic Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive educational programs designed to advance knowledge and skills in humanities and social
            sciences through innovative teaching and research.
          </p>
          <Button asChild size="lg">
            <Link href="/register">Apply Now</Link>
          </Button>
        </div>

        {/* Program Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Program Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {category.programs.map((program, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                          <div>
                            <h4 className="font-medium">{program.name}</h4>
                            <div className="flex space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {program.duration}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {program.mode}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={category.link}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Workshops</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {workshop.date}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    <strong>Instructor:</strong> {workshop.instructor}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Fee:</strong> {workshop.fee}
                  </p>
                  <Button className="w-full">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/programs/academic-workshops">View All Workshops</Link>
            </Button>
          </div>
        </div>

        {/* Program Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why Choose NCAS Programs?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from renowned scholars and practitioners in humanities and social sciences
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Research Opportunities</h3>
                <p className="text-muted-foreground">
                  Access to cutting-edge research projects and international collaborations
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Certificate className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Industry Recognition</h3>
                <p className="text-muted-foreground">
                  Nationally and internationally recognized qualifications and certifications
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

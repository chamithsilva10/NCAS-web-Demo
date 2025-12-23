import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase as Certificate,
  Clock,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Laptop,
  Heart,
  MapPin,
} from "lucide-react"

export default function DiplomasPage() {
  const diplomaPrograms = [
    {
      title: "Smart Library Technologies",
      duration: "1 Year",
      mode: "Part-time",
      schedule: "Weekends",
      fee: "LKR 75,000",
      icon: Laptop,
      description:
        "Comprehensive program covering modern library management systems, digital cataloging, and information technology applications in libraries.",
      modules: [
        "Digital Library Systems",
        "Information Management",
        "Database Design for Libraries",
        "Web Technologies",
        "Digital Preservation",
        "User Interface Design",
        "Library Automation",
        "Research Methods",
      ],
      requirements: [
        "Bachelor's degree in any field",
        "Basic computer literacy",
        "Library science background preferred but not required",
        "English proficiency",
      ],
      career: [
        "Digital Library Manager",
        "Information Systems Specialist",
        "Library Technology Coordinator",
        "Database Administrator",
        "Digital Archivist",
      ],
    },
    {
      title: "Elder Care Management",
      duration: "1 Year",
      mode: "Part-time",
      schedule: "Evenings",
      fee: "LKR 65,000",
      icon: Heart,
      description:
        "Specialized program focusing on comprehensive care management for elderly populations, covering health, social, and psychological aspects.",
      modules: [
        "Geriatric Health Management",
        "Psychology of Aging",
        "Social Work with Elderly",
        "Healthcare Administration",
        "Nutrition and Wellness",
        "Family Counseling",
        "Policy and Ethics",
        "Community Resources",
      ],
      requirements: [
        "Bachelor's degree in health sciences, social work, or related field",
        "Minimum 2 years work experience in healthcare/social services",
        "Basic understanding of healthcare systems",
        "Compassionate attitude towards elderly care",
      ],
      career: [
        "Elder Care Coordinator",
        "Geriatric Case Manager",
        "Senior Living Administrator",
        "Healthcare Social Worker",
        "Community Health Specialist",
      ],
    },
    {
      title: "Tourism & Hospitality Management",
      duration: "1 Year",
      mode: "Part-time",
      schedule: "Weekends",
      fee: "LKR 80,000",
      icon: MapPin,
      description:
        "Comprehensive program covering all aspects of tourism and hospitality industry management, with focus on Sri Lankan tourism sector.",
      modules: [
        "Tourism Industry Analysis",
        "Hospitality Operations",
        "Customer Service Excellence",
        "Marketing for Tourism",
        "Sustainable Tourism",
        "Event Management",
        "Financial Management",
        "Cultural Heritage Tourism",
      ],
      requirements: [
        "Bachelor's degree in any field",
        "Interest in tourism and hospitality industry",
        "Basic business knowledge",
        "Good communication skills",
      ],
      career: [
        "Tourism Manager",
        "Hotel Operations Manager",
        "Event Coordinator",
        "Travel Consultant",
        "Tourism Development Officer",
      ],
    },
  ]

  const admissionTimeline = [
    { date: "January 15", event: "Applications Open", status: "completed" },
    { date: "March 31", event: "Application Deadline", status: "upcoming" },
    { date: "April 15", event: "Interview Period", status: "upcoming" },
    { date: "May 1", event: "Results Announced", status: "upcoming" },
    { date: "May 15", event: "Registration Deadline", status: "upcoming" },
    { date: "June 1", event: "Classes Begin", status: "upcoming" },
  ]

  const benefits = [
    {
      icon: Certificate,
      title: "Industry Recognition",
      description: "Nationally recognized diploma certificates accepted by employers",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals and academic experts",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Part-time programs designed for working professionals",
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Hands-on training with real-world applications",
    },
    {
      icon: Award,
      title: "Career Advancement",
      description: "Enhanced job prospects and promotion opportunities",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Certificate className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Diploma Programs</h1>
                <p className="text-xl text-primary-foreground/90">Professional Development Courses</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Specialized diploma programs designed for career advancement and professional development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="programs" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Diploma Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our specialized diploma programs designed for working professionals
              </p>
            </div>

            <div className="space-y-8">
              {diplomaPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <program.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <CardDescription className="mt-2 text-lg">{program.description}</CardDescription>
                        <div className="flex gap-2 mt-3">
                          <Badge variant="secondary">{program.duration}</Badge>
                          <Badge variant="outline">{program.mode}</Badge>
                          <Badge variant="outline">{program.schedule}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="modules">Modules</TabsTrigger>
                        <TabsTrigger value="requirements">Requirements</TabsTrigger>
                        <TabsTrigger value="career">Career Paths</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                            <p className="font-semibold">{program.duration}</p>
                            <p className="text-sm text-muted-foreground">Duration</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                            <p className="font-semibold">{program.mode}</p>
                            <p className="text-sm text-muted-foreground">Study Mode</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                            <p className="font-semibold">{program.schedule}</p>
                            <p className="text-sm text-muted-foreground">Schedule</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
                            <p className="font-semibold">{program.fee}</p>
                            <p className="text-sm text-muted-foreground">Total Fee</p>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="modules" className="space-y-4">
                        <h4 className="font-semibold mb-3">Course Modules</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.modules.map((module, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>{module}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="requirements" className="space-y-4">
                        <h4 className="font-semibold mb-3">Entry Requirements</h4>
                        <div className="space-y-3">
                          {program.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="career" className="space-y-4">
                        <h4 className="font-semibold mb-3">Career Opportunities</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.career.map((career, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                              <Award className="h-4 w-4 text-primary" />
                              <span>{career}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex gap-4">
                      <Button className="flex-1">Apply for {program.title}</Button>
                      <Button variant="outline">Download Syllabus</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Admission Tab */}
          <TabsContent value="admission" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple and straightforward admission process for diploma programs
              </p>
            </div>

            {/* Admission Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>2024 Admission Timeline</CardTitle>
                <CardDescription>Important dates for diploma program admissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {admissionTimeline.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className={`w-4 h-4 rounded-full ${item.status === "completed" ? "bg-green-500" : "bg-gray-300"}`}
                      ></div>
                      <div className="flex-1 flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.event}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <Badge variant={item.status === "completed" ? "default" : "secondary"}>
                          {item.status === "completed" ? "Completed" : "Upcoming"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Prepare these documents for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Academic Documents</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bachelor's degree certificate (certified copy)</li>
                      <li>• Official transcripts</li>
                      <li>• Academic references (if required)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Personal Documents</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• National ID card copy</li>
                      <li>• Passport-size photographs</li>
                      <li>• CV/Resume</li>
                      <li>• Work experience certificates (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card>
              <CardHeader>
                <CardTitle>Online Application</CardTitle>
                <CardDescription>Apply for diploma programs through our online portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="mb-4">
                    Start Your Application
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Complete your application in minutes and track your progress online
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Program Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the advantages of pursuing a diploma at NCAS
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Success Stories */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Success Stories</CardTitle>
                <CardDescription className="text-green-700">Hear from our diploma program graduates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-sm text-green-700 mb-3 italic">
                      "The Smart Library Technologies diploma transformed my career. I'm now managing the digital
                      transformation of our university library."
                    </p>
                    <p className="font-semibold text-green-800">- Priya Jayawardena</p>
                    <p className="text-xs text-green-600">Digital Library Manager, University of Peradeniya</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-sm text-green-700 mb-3 italic">
                      "The Elder Care Management program gave me the skills and confidence to start my own senior care
                      facility."
                    </p>
                    <p className="font-semibold text-green-800">- Roshan Fernando</p>
                    <p className="text-xs text-green-600">Founder, Golden Years Care Center</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industry Partnerships */}
            <Card>
              <CardHeader>
                <CardTitle>Industry Partnerships</CardTitle>
                <CardDescription>Strong connections with leading organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Library Sector</h4>
                    <p className="text-sm text-muted-foreground">
                      National Library, University Libraries, Public Library Network
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Healthcare</h4>
                    <p className="text-sm text-muted-foreground">
                      Ministry of Health, Private Hospitals, Elder Care Facilities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tourism</h4>
                    <p className="text-sm text-muted-foreground">
                      Sri Lanka Tourism Board, Hotel Chains, Travel Agencies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

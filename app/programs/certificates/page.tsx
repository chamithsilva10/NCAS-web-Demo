import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Clock, Users, BookOpen, CheckCircle, BarChart, Search, Calculator } from "lucide-react"

export default function CertificatesPage() {
  const certificatePrograms = [
    {
      title: "Research Methodology",
      duration: "3 Months",
      schedule: "Weekends",
      fee: "LKR 25,000",
      icon: Search,
      description:
        "Comprehensive introduction to research methods, data collection, and analysis techniques for academic and professional research.",
      topics: [
        "Introduction to Research",
        "Literature Review Techniques",
        "Research Design",
        "Data Collection Methods",
        "Sampling Techniques",
        "Ethical Considerations",
        "Report Writing",
        "Presentation Skills",
      ],
      outcomes: [
        "Design and conduct research studies",
        "Critically evaluate research literature",
        "Apply appropriate research methods",
        "Write research proposals and reports",
        "Present research findings effectively",
      ],
      target: [
        "Graduate students",
        "Academic staff",
        "Government officers",
        "NGO workers",
        "Private sector researchers",
      ],
    },
    {
      title: "SPSS for Statistical Analysis",
      duration: "2 Months",
      schedule: "Evenings",
      fee: "LKR 20,000",
      icon: BarChart,
      description:
        "Hands-on training in using SPSS software for statistical analysis, data management, and interpretation of results.",
      topics: [
        "SPSS Interface and Navigation",
        "Data Entry and Management",
        "Descriptive Statistics",
        "Hypothesis Testing",
        "Correlation and Regression",
        "ANOVA and Chi-square Tests",
        "Data Visualization",
        "Report Generation",
      ],
      outcomes: [
        "Navigate SPSS software efficiently",
        "Perform statistical analyses",
        "Interpret statistical results",
        "Create professional charts and graphs",
        "Generate statistical reports",
      ],
      target: ["Researchers", "Data analysts", "Graduate students", "Market researchers", "Healthcare professionals"],
    },
    {
      title: "Advanced Excel for Data Analysis",
      duration: "6 Weeks",
      schedule: "Weekends",
      fee: "LKR 15,000",
      icon: Calculator,
      description:
        "Master advanced Excel features for data analysis, including pivot tables, macros, and statistical functions.",
      topics: [
        "Advanced Formulas and Functions",
        "Pivot Tables and Charts",
        "Data Validation and Cleaning",
        "Statistical Functions",
        "Macro Programming (VBA)",
        "Dashboard Creation",
        "Data Import/Export",
        "Automation Techniques",
      ],
      outcomes: [
        "Create complex Excel models",
        "Build interactive dashboards",
        "Automate repetitive tasks",
        "Perform advanced data analysis",
        "Present data professionally",
      ],
      target: [
        "Business professionals",
        "Financial analysts",
        "Administrative staff",
        "Small business owners",
        "Students",
      ],
    },
  ]

  const upcomingBatches = [
    {
      program: "Research Methodology",
      startDate: "April 15, 2024",
      endDate: "July 15, 2024",
      time: "9:00 AM - 1:00 PM",
      instructor: "Dr. Malini Silva",
      seats: "25",
      available: "8",
    },
    {
      program: "SPSS for Statistical Analysis",
      startDate: "May 1, 2024",
      endDate: "June 30, 2024",
      time: "6:00 PM - 8:00 PM",
      instructor: "Prof. Asanka Perera",
      seats: "20",
      available: "12",
    },
    {
      program: "Advanced Excel for Data Analysis",
      startDate: "April 20, 2024",
      endDate: "June 1, 2024",
      time: "2:00 PM - 5:00 PM",
      instructor: "Ms. Priya Fernando",
      seats: "30",
      available: "15",
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Industry-Recognized Certificates",
      description: "Certificates valued by employers across various sectors",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekend and evening classes for working professionals",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 30 students per class",
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Hands-on training with real-world applications and case studies",
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
                <Award className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Certificate Courses</h1>
                <p className="text-xl text-primary-foreground/90">Short-term Professional Training</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Enhance your skills with focused, practical certificate courses designed for immediate application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Enroll Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="programs" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Certificate Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Short-term, intensive courses designed to build specific skills and competencies
              </p>
            </div>

            <div className="space-y-8">
              {certificatePrograms.map((program, index) => (
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
                          <Badge variant="outline">{program.schedule}</Badge>
                          <Badge variant="outline">{program.fee}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="topics" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="topics">Topics Covered</TabsTrigger>
                        <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                        <TabsTrigger value="target">Target Audience</TabsTrigger>
                      </TabsList>

                      <TabsContent value="topics" className="space-y-4">
                        <h4 className="font-semibold mb-3">Course Topics</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="outcomes" className="space-y-4">
                        <h4 className="font-semibold mb-3">What You'll Learn</h4>
                        <div className="space-y-3">
                          {program.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="target" className="space-y-4">
                        <h4 className="font-semibold mb-3">Who Should Attend</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.target.map((audience, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="text-sm">{audience}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex gap-4">
                      <Button className="flex-1">Enroll in {program.title}</Button>
                      <Button variant="outline">Download Outline</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Upcoming Batches</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our upcoming certificate course schedules
              </p>
            </div>

            <div className="space-y-6">
              {upcomingBatches.map((batch, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{batch.program}</CardTitle>
                        <CardDescription className="mt-1">Instructor: {batch.instructor}</CardDescription>
                      </div>
                      <Badge variant={Number.parseInt(batch.available) > 5 ? "default" : "destructive"}>
                        {batch.available} seats available
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="font-semibold text-sm">Start Date</p>
                        <p className="text-xs text-muted-foreground">{batch.startDate}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="font-semibold text-sm">End Date</p>
                        <p className="text-xs text-muted-foreground">{batch.endDate}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="font-semibold text-sm">Time</p>
                        <p className="text-xs text-muted-foreground">{batch.time}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="font-semibold text-sm">Class Size</p>
                        <p className="text-xs text-muted-foreground">{batch.seats} students</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button className="flex-1">Register Now</Button>
                      <Button variant="outline">More Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Registration Information */}
            <Card>
              <CardHeader>
                <CardTitle>Registration Information</CardTitle>
                <CardDescription>Important details about course registration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Registration Process</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Complete online registration form</li>
                      <li>• Submit required documents</li>
                      <li>• Pay course fees</li>
                      <li>• Receive confirmation email</li>
                      <li>• Attend orientation session</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Payment Options</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Online payment (credit/debit cards)</li>
                      <li>• Bank transfer</li>
                      <li>• Cash payment at NCAS office</li>
                      <li>• Installment plans available</li>
                      <li>• Corporate sponsorship accepted</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Certificate Courses?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the advantages of our professional certificate programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Course Features */}
            <Card>
              <CardHeader>
                <CardTitle>Course Features</CardTitle>
                <CardDescription>What makes our certificate courses special</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Practical Training</h4>
                    <p className="text-sm text-muted-foreground">Hands-on exercises and real-world case studies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Expert Instructors</h4>
                    <p className="text-sm text-muted-foreground">Learn from experienced professionals and academics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Career Support</h4>
                    <p className="text-sm text-muted-foreground">Job placement assistance and career guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Student Testimonials</CardTitle>
                <CardDescription className="text-blue-700">What our certificate course graduates say</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-sm text-blue-700 mb-3 italic">
                      "The Research Methodology course gave me the confidence to pursue my PhD. The practical approach
                      was exactly what I needed."
                    </p>
                    <p className="font-semibold text-blue-800">- Sandya Wickramasinghe</p>
                    <p className="text-xs text-blue-600">PhD Student, University of Colombo</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-sm text-blue-700 mb-3 italic">
                      "SPSS training transformed how I analyze data at work. I can now handle complex statistical
                      analyses with confidence."
                    </p>
                    <p className="font-semibold text-blue-800">- Roshan Perera</p>
                    <p className="text-xs text-blue-600">Market Research Analyst, Nielsen Lanka</p>
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

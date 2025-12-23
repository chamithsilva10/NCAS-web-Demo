import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react"

export default function PostgraduatePage() {
  const programs = [
    {
      title: "MPhil in Humanities",
      duration: "2 Years",
      mode: "Full-time",
      intake: "February & September",
      fee: "LKR 150,000 per year",
      description:
        "Advanced research degree focusing on interdisciplinary humanities studies with emphasis on Sri Lankan context.",
      specializations: [
        "Cultural Studies",
        "Literary Studies",
        "Historical Research",
        "Philosophy",
        "Religious Studies",
      ],
      requirements: [
        "Bachelor's degree with Second Class Upper Division or equivalent",
        "Minimum GPA of 3.0 in undergraduate studies",
        "Research proposal (2,000-3,000 words)",
        "Two academic references",
        "English proficiency (IELTS 6.0 or equivalent)",
      ],
      career: [
        "University Lecturer",
        "Research Officer",
        "Cultural Heritage Specialist",
        "Policy Analyst",
        "Museum Curator",
      ],
    },
    {
      title: "PhD in Social Sciences",
      duration: "3-4 Years",
      mode: "Full-time/Part-time",
      intake: "February & September",
      fee: "LKR 200,000 per year",
      description:
        "Doctoral program designed to produce independent researchers capable of contributing original knowledge to social sciences.",
      specializations: [
        "Sociology",
        "Anthropology",
        "Political Science",
        "Economics",
        "Psychology",
        "Development Studies",
      ],
      requirements: [
        "Master's degree in relevant field with distinction",
        "Minimum GPA of 3.5 in postgraduate studies",
        "Comprehensive research proposal (5,000-8,000 words)",
        "Three academic references",
        "English proficiency (IELTS 6.5 or equivalent)",
        "Interview and written examination",
      ],
      career: [
        "Senior Researcher",
        "University Professor",
        "Policy Advisor",
        "International Development Specialist",
        "Think Tank Analyst",
      ],
    },
  ]

  const admissionProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit online application with required documents",
      timeline: "By application deadline",
    },
    {
      step: 2,
      title: "Document Review",
      description: "Academic credentials and research proposal evaluation",
      timeline: "2-3 weeks",
    },
    {
      step: 3,
      title: "Written Examination",
      description: "Subject-specific written test (PhD applicants only)",
      timeline: "1 week",
    },
    {
      step: 4,
      title: "Interview",
      description: "Panel interview with faculty members",
      timeline: "1 week",
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Merit-based selection and offer letters",
      timeline: "2 weeks",
    },
  ]

  const facultyHighlights = [
    {
      name: "Prof. Malini Silva",
      specialization: "Cultural Anthropology",
      qualifications: "PhD (Cambridge), MA (Oxford)",
      research: "Indigenous knowledge systems, ritual practices",
    },
    {
      name: "Dr. Asanka Perera",
      specialization: "Development Economics",
      qualifications: "PhD (LSE), MSc (Edinburgh)",
      research: "Poverty alleviation, microfinance, rural development",
    },
    {
      name: "Prof. Sandya Wickramasinghe",
      specialization: "Political Science",
      qualifications: "PhD (Harvard), MA (Yale)",
      research: "Governance, democratization, conflict resolution",
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
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Postgraduate Programs</h1>
                <p className="text-xl text-primary-foreground/90">MPhil & PhD in Humanities and Social Sciences</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Advanced research degrees designed to develop independent scholars and researchers
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
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="programs" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive postgraduate programs designed to advance your academic and research
                career
              </p>
            </div>

            <div className="space-y-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <CardDescription className="mt-2 text-lg">{program.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {program.mode}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="specializations">Specializations</TabsTrigger>
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
                            <p className="font-semibold">{program.intake}</p>
                            <p className="text-sm text-muted-foreground">Intake</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                            <p className="font-semibold">{program.mode}</p>
                            <p className="text-sm text-muted-foreground">Study Mode</p>
                          </div>
                          <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
                            <p className="font-semibold">{program.fee}</p>
                            <p className="text-sm text-muted-foreground">Annual Fee</p>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="specializations" className="space-y-4">
                        <h4 className="font-semibold mb-3">Available Specializations</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.specializations.map((spec, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>{spec}</span>
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
                      <Button variant="outline">Download Curriculum</Button>
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
                Follow these steps to apply for our postgraduate programs
              </p>
            </div>

            <div className="space-y-6">
              {admissionProcess.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-2">{step.description}</p>
                        <Badge variant="outline">{step.timeline}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle>Important Dates 2024/2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">February Intake</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Application Opens: October 1, 2024</li>
                      <li>• Application Deadline: December 15, 2024</li>
                      <li>• Interviews: January 15-20, 2025</li>
                      <li>• Results: January 30, 2025</li>
                      <li>• Program Starts: February 15, 2025</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">September Intake</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Application Opens: May 1, 2025</li>
                      <li>• Application Deadline: July 15, 2025</li>
                      <li>• Interviews: August 15-20, 2025</li>
                      <li>• Results: August 30, 2025</li>
                      <li>• Program Starts: September 15, 2025</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Faculty Tab */}
          <TabsContent value="faculty" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Distinguished Faculty</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn from renowned scholars and researchers in humanities and social sciences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyHighlights.map((faculty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{faculty.name}</h3>
                    <p className="text-primary font-medium mb-2">{faculty.specialization}</p>
                    <p className="text-sm text-muted-foreground mb-3">{faculty.qualifications}</p>
                    <p className="text-xs text-muted-foreground italic">Research: {faculty.research}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Faculty Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <p className="text-blue-700">Faculty Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <p className="text-blue-700">PhD Holders</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <p className="text-blue-700">Publications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Research Opportunities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Engage in cutting-edge research projects and contribute to knowledge advancement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Research Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Digital Heritage Preservation</p>
                        <p className="text-sm text-muted-foreground">Funded by UNESCO</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Post-Conflict Social Reconstruction</p>
                        <p className="text-sm text-muted-foreground">Funded by World Bank</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Climate Change and Migration</p>
                        <p className="text-sm text-muted-foreground">Funded by EU</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Research Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Digital Research Lab</p>
                        <p className="text-sm text-muted-foreground">Advanced computing facilities</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Specialized Library</p>
                        <p className="text-sm text-muted-foreground">50,000+ books and journals</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Conference Facilities</p>
                        <p className="text-sm text-muted-foreground">Modern presentation equipment</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Research Support</CardTitle>
                <CardDescription>Comprehensive support for postgraduate researchers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Research Grants</h4>
                    <p className="text-sm text-muted-foreground">
                      Financial support for research activities and conference participation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Mentorship</h4>
                    <p className="text-sm text-muted-foreground">
                      One-on-one guidance from experienced faculty supervisors
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Publication Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Assistance with journal submissions and academic writing
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

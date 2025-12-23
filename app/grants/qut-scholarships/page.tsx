import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Globe, DollarSign, Users, BookOpen, Award, CheckCircle } from "lucide-react"

export default function QUTScholarshipsPage() {
  const scholarshipBenefits = [
    {
      icon: DollarSign,
      title: "Full Tuition Coverage",
      description: "Complete coverage of tuition fees for the entire PhD program duration",
    },
    {
      icon: Users,
      title: "Living Stipend",
      description: "Monthly living allowance to support your studies and research",
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Study at Queensland University of Technology, Australia",
    },
    {
      icon: BookOpen,
      title: "Research Support",
      description: "Access to world-class research facilities and resources",
    },
    {
      icon: Award,
      title: "Supervision Excellence",
      description: "Joint supervision by NCAS and QUT faculty members",
    },
    {
      icon: CheckCircle,
      title: "Career Development",
      description: "Professional development opportunities and networking",
    },
  ]

  const eligibilityRequirements = [
    "Sri Lankan citizenship or permanent residency",
    "Master's degree in relevant field with distinction/first class",
    "Strong academic record with minimum GPA of 3.5/4.0",
    "English proficiency (IELTS 6.5 overall, no band below 6.0)",
    "Research proposal aligned with NCAS-QUT collaboration areas",
    "Two academic references from recognized institutions",
    "Demonstrated research experience and publications",
    "Commitment to return to Sri Lanka upon completion",
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit application through NCAS online portal",
      deadline: "March 31, 2024",
    },
    {
      step: 2,
      title: "Document Review",
      description: "NCAS reviews applications and supporting documents",
      duration: "2-3 weeks",
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Shortlisted candidates invited for interviews",
      duration: "1 week",
    },
    {
      step: 4,
      title: "QUT Application",
      description: "Successful candidates apply directly to QUT",
      duration: "2-4 weeks",
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Joint selection by NCAS and QUT committees",
      duration: "3-4 weeks",
    },
    {
      step: 6,
      title: "Visa & Preparation",
      description: "Visa processing and pre-departure preparation",
      duration: "8-12 weeks",
    },
  ]

  const researchAreas = [
    {
      title: "Digital Humanities",
      description:
        "Computational approaches to humanities research, digital archives, and cultural heritage preservation",
      supervisors: ["Prof. Sarah Johnson (QUT)", "Dr. Priya Fernando (NCAS)"],
      projects: 3,
    },
    {
      title: "Social Innovation",
      description: "Community-based solutions, social entrepreneurship, and sustainable development",
      supervisors: ["Prof. Michael Chen (QUT)", "Dr. Asanka Perera (NCAS)"],
      projects: 2,
    },
    {
      title: "Cultural Studies",
      description: "Contemporary cultural analysis, identity studies, and cross-cultural communication",
      supervisors: ["Dr. Emma Wilson (QUT)", "Prof. Malini Silva (NCAS)"],
      projects: 4,
    },
    {
      title: "Educational Technology",
      description: "Learning analytics, educational innovation, and technology-enhanced pedagogy",
      supervisors: ["Prof. David Lee (QUT)", "Dr. Sandya Wickramasinghe (NCAS)"],
      projects: 2,
    },
  ]

  const currentScholars = [
    {
      name: "Kasun Rajapaksa",
      research: "Digital Preservation of Sri Lankan Folk Music",
      year: "2nd Year",
      supervisor: "Prof. Sarah Johnson",
      image: "/scholar-male-1.jpg",
    },
    {
      name: "Nimali Fernando",
      research: "Social Media and Political Engagement in South Asia",
      year: "3rd Year",
      supervisor: "Prof. Michael Chen",
      image: "/scholar-female-1.jpg",
    },
    {
      name: "Chaminda Silva",
      research: "Cultural Identity in Diaspora Communities",
      year: "1st Year",
      supervisor: "Dr. Emma Wilson",
      image: "/scholar-male-2.jpg",
    },
  ]

  const timeline = [
    { date: "January 15", event: "Application Opens", status: "completed" },
    { date: "March 31", event: "Application Deadline", status: "upcoming" },
    { date: "April 30", event: "Initial Review Complete", status: "upcoming" },
    { date: "May 15", event: "Interviews Conducted", status: "upcoming" },
    { date: "June 30", event: "Final Selection", status: "upcoming" },
    { date: "September", event: "Program Commencement", status: "upcoming" },
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
                <h1 className="text-4xl md:text-5xl font-bold text-balance">NCAS-QUT PhD Scholarships</h1>
                <p className="text-xl text-primary-foreground/90">
                  Partnership with Queensland University of Technology
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Fully-funded doctoral scholarships for Sri Lankan researchers to pursue PhD studies in Australia
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
        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="application">Application</TabsTrigger>
            <TabsTrigger value="research">Research Areas</TabsTrigger>
            <TabsTrigger value="scholars">Current Scholars</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Scholarship Overview</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The NCAS-QUT PhD Scholarship program offers exceptional Sri Lankan researchers the opportunity to pursue
                doctoral studies at one of Australia's leading universities.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <p className="text-muted-foreground">Scholarships Available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3-4</div>
                  <p className="text-muted-foreground">Years Duration</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Funding Coverage</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">45</div>
                  <p className="text-muted-foreground">Graduates to Date</p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">Scholarship Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarshipBenefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Partnership Information */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  About the Partnership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Queensland University of Technology (QUT)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ranked in top 200 universities globally</li>
                      <li>• Leading research university in Australia</li>
                      <li>• Strong focus on innovation and industry connections</li>
                      <li>• Located in Brisbane, Australia</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">NCAS Partnership Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Joint supervision by both institutions</li>
                      <li>• Research aligned with Sri Lankan priorities</li>
                      <li>• Guaranteed return pathway to Sri Lanka</li>
                      <li>• Ongoing collaboration opportunities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">2024 Application Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
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
            </div>
          </TabsContent>

          {/* Eligibility Tab */}
          <TabsContent value="eligibility" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Eligibility Requirements</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ensure you meet all requirements before applying for the NCAS-QUT PhD Scholarship
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Essential Requirements</CardTitle>
                <CardDescription>All applicants must meet these minimum requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Academic Requirements */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Qualifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Master's Degree</h4>
                    <p className="text-sm text-muted-foreground">
                      Completed Master's degree in relevant field with distinction or first class honors
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">GPA Requirement</h4>
                    <p className="text-sm text-muted-foreground">
                      Minimum GPA of 3.5/4.0 or equivalent in previous studies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Research Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Demonstrated research experience through publications, projects, or thesis work
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>English Proficiency</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">IELTS Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Overall score: 6.5</li>
                      <li>• No individual band below 6.0</li>
                      <li>• Test taken within 2 years</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Alternative Tests</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TOEFL iBT: 79 overall</li>
                      <li>• PTE Academic: 58 overall</li>
                      <li>• Cambridge CAE: 176 overall</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Selection Criteria */}
            <Card>
              <CardHeader>
                <CardTitle>Selection Criteria</CardTitle>
                <CardDescription>Applications will be evaluated based on these criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Academic Excellence</h4>
                    <p className="text-sm text-muted-foreground">Strong academic record and research potential</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Research Impact</h4>
                    <p className="text-sm text-muted-foreground">Potential for significant contribution to field</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Leadership Potential</h4>
                    <p className="text-sm text-muted-foreground">Demonstrated leadership and commitment to Sri Lanka</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Application Tab */}
          <TabsContent value="application" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Follow these steps to complete your NCAS-QUT PhD Scholarship application
              </p>
            </div>

            {/* Application Steps */}
            <div className="space-y-6">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-2">{step.description}</p>
                        <div className="flex gap-4 text-sm">
                          {step.deadline && <Badge variant="destructive">Deadline: {step.deadline}</Badge>}
                          {step.duration && <Badge variant="secondary">Duration: {step.duration}</Badge>}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Prepare these documents before starting your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Academic Documents</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Official transcripts (Bachelor's and Master's)</li>
                      <li>• Degree certificates (certified copies)</li>
                      <li>• Academic references (2 required)</li>
                      <li>• Research proposal (3,000-5,000 words)</li>
                      <li>• CV/Resume (academic format)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Supporting Documents</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• English proficiency test results</li>
                      <li>• National ID/Passport copy</li>
                      <li>• Publications list (if applicable)</li>
                      <li>• Statement of purpose (1,000 words)</li>
                      <li>• Commitment letter to return to Sri Lanka</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card>
              <CardHeader>
                <CardTitle>Online Application</CardTitle>
                <CardDescription>Complete your application through our secure online portal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Button size="lg" className="mb-4">
                    Start Application
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Save your progress and return anytime before the deadline
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Areas Tab */}
          <TabsContent value="research" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Research Areas</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the collaborative research areas available through the NCAS-QUT partnership
              </p>
            </div>

            <div className="grid gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{area.title}</CardTitle>
                        <CardDescription className="mt-2">{area.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{area.projects} Projects Available</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Joint Supervisors</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.supervisors.map((supervisor, idx) => (
                            <Badge key={idx} variant="outline">
                              {supervisor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Research Projects
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Current Scholars Tab */}
          <TabsContent value="scholars" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Current Scholars</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet our current NCAS-QUT PhD scholars and their research
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentScholars.map((scholar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{scholar.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{scholar.research}</p>
                    <div className="space-y-2">
                      <Badge variant="secondary">{scholar.year}</Badge>
                      <p className="text-xs text-muted-foreground">Supervised by {scholar.supervisor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Alumni Success Stories */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Alumni Success Stories</CardTitle>
                <CardDescription className="text-green-700">
                  Our graduates are making significant contributions to Sri Lanka's development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Dr. Amara Jayasinghe (2019)</h4>
                    <p className="text-sm text-green-700 mb-2">
                      "Digital Heritage Preservation in Post-Conflict Sri Lanka"
                    </p>
                    <p className="text-xs text-green-600">
                      Now Director of Digital Archives at National Museum of Sri Lanka
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Dr. Roshan Perera (2020)</h4>
                    <p className="text-sm text-green-700 mb-2">"Community-Based Tourism and Sustainable Development"</p>
                    <p className="text-xs text-green-600">
                      Now Senior Lecturer at University of Colombo, Tourism Studies
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

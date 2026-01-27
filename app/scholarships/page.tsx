import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, FileText, Clock, Users, Award } from "lucide-react"

const scholarshipPrograms = [
  {
    id: 1,
    title: "NCAS Postgraduate Research Grants",
    description: "Partial funding support for advanced postgraduate studies in humanities and social sciences",
    amount: "Up to $5,000",
    duration: "1-2 years",
    deadline: "2024-04-30",
    eligibility: "PhD candidates in humanities/social sciences",
    type: "Local",
    status: "Open",
    featured: true,
    requirements: [
      "Enrolled in PhD program at recognized university",
      "Research proposal in humanities or social sciences",
      "Academic transcripts and references",
      "Detailed budget breakdown",
    ],
    benefits: [
      "Research funding support",
      "Access to NCAS resources",
      "Mentorship opportunities",
      "Publication support",
    ],
  },
  {
    id: 2,
    title: "International Research Fellowship",
    description: "Opportunities for international scholars to conduct research at NCAS",
    amount: "Full funding",
    duration: "6-12 months",
    deadline: "2024-05-15",
    eligibility: "International researchers with PhD",
    type: "International",
    status: "Open",
    requirements: [
      "PhD in relevant field",
      "Research proposal aligned with NCAS priorities",
      "Institutional affiliation",
      "English proficiency",
    ],
    benefits: ["Monthly stipend", "Accommodation support", "Research facilities access", "Conference participation"],
  },
  {
    id: 3,
    title: "Early Career Researcher Grant",
    description: "Support for emerging scholars in their first five years post-PhD",
    amount: "$3,000 - $8,000",
    duration: "1 year",
    deadline: "2024-06-01",
    eligibility: "Researchers within 5 years of PhD completion",
    type: "Local",
    status: "Open",
    requirements: [
      "PhD completed within last 5 years",
      "Innovative research proposal",
      "Publication record",
      "Career development plan",
    ],
    benefits: ["Research funding", "Professional development", "Networking opportunities", "Publication support"],
  },
  {
    id: 4,
    title: "Collaborative Research Initiative",
    description: "Funding for interdisciplinary research projects involving multiple institutions",
    amount: "$10,000 - $25,000",
    duration: "2-3 years",
    deadline: "2024-07-15",
    eligibility: "Research teams from multiple institutions",
    type: "Collaborative",
    status: "Open",
    requirements: [
      "Multi-institutional collaboration",
      "Interdisciplinary research focus",
      "Detailed project timeline",
      "Impact assessment plan",
    ],
    benefits: ["Substantial funding", "Multi-year support", "Institutional partnerships", "Policy impact potential"],
  },
  {
    id: 5,
    title: "Heritage Studies Fellowship",
    description: "Specialized fellowship for research in cultural heritage and preservation",
    amount: "Full funding + allowances",
    duration: "1 year",
    deadline: "2024-08-01",
    eligibility: "Researchers in heritage studies",
    type: "Specialized",
    status: "Coming Soon",
    requirements: [
      "Background in heritage studies",
      "Research proposal on cultural preservation",
      "Community engagement component",
      "Digital humanities skills preferred",
    ],
    benefits: [
      "Full financial support",
      "Access to heritage collections",
      "Community partnerships",
      "Digital tools training",
    ],
  },
]

const applicationProcess = [
  {
    step: 1,
    title: "Review Eligibility",
    description: "Check program requirements and ensure you meet all eligibility criteria",
  },
  {
    step: 2,
    title: "Prepare Documents",
    description: "Gather required documents including transcripts, references, and research proposal",
  },
  {
    step: 3,
    title: "Submit Application",
    description: "Complete online application form and upload all required documents",
  },
  {
    step: 4,
    title: "Review Process",
    description: "Applications undergo peer review and evaluation by expert panels",
  },
  {
    step: 5,
    title: "Interview",
    description: "Shortlisted candidates may be invited for interviews or presentations",
  },
  {
    step: 6,
    title: "Award Notification",
    description: "Successful applicants are notified and award details are finalized",
  },
]

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    program: "NCAS Postgraduate Research Grant",
    quote:
      "The NCAS grant provided crucial support for my doctoral research on cultural identity. The mentorship and resources were invaluable.",
    institution: "University of Colombo",
    year: "2023",
  },
  {
    name: "Prof. Michael Chen",
    program: "International Research Fellowship",
    quote: "My fellowship at NCAS opened new research directions and fostered lasting international collaborations.",
    institution: "Harvard University",
    year: "2022",
  },
  {
    name: "Dr. Priya Patel",
    program: "Early Career Researcher Grant",
    quote:
      "This grant launched my independent research career and provided the foundation for my current academic position.",
    institution: "University of Peradeniya",
    year: "2023",
  },
]

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Scholarships & Fellowships</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover funding opportunities to advance your research in humanities and social sciences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Deadlines
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Programs</h2>

            {scholarshipPrograms
              .filter((program) => program.featured)
              .map((program) => (
                <Card
                  key={program.id}
                  className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent"
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                        <Badge variant="default">{program.type}</Badge>
                        <Badge variant={program.status === "Open" ? "default" : "secondary"}>{program.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {program.amount}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Deadline: {new Date(program.deadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{program.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Requirements
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {program.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {program.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1">Apply for This Program</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Download Guidelines
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* All Programs Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">All Programs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarshipPrograms
                .filter((program) => !program.featured)
                .map((program) => (
                  <Card key={program.id} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{program.type}</Badge>
                        <Badge variant={program.status === "Open" ? "default" : "secondary"}>{program.status}</Badge>
                      </div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{program.description}</p>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="font-medium">{program.amount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Deadline:</span>
                          <span className="font-medium">{new Date(program.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <Button className="w-full" disabled={program.status !== "Open"}>
                        {program.status === "Open" ? "Apply Now" : "Coming Soon"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Application Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to submit your scholarship or fellowship application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationProcess.map((step) => (
                <Card key={step.step} className="text-center hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our scholarship and fellowship recipients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="text-4xl text-primary mb-2">"</div>
                      <p className="text-muted-foreground italic">{testimonial.quote}</p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.institution}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {testimonial.program} • {testimonial.year}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Help with Your Application?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to assist you throughout the application process
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Application Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get help with your application documents and requirements
                  </p>
                  <Button variant="outline">Contact Support</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Resources & Guidelines</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Access detailed guidelines and application resources
                  </p>
                  <Button variant="outline">Download Resources</Button>
                </CardContent>
              </Card>
            </div>

            <Button size="lg">Schedule a Consultation</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Award, BookOpen, Calculator, BarChart3, Shield, Users2, GraduationCap, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workshops | NCAS Training Programs",
  description: "Comprehensive training workshops and programs offered by NCAS including academic training, information security, executive education, and professional development.",
}

export default function WorkshopsPage() {
  const workshopCategories = [
    {
      id: "academic-training",
      title: "Academic Training Workshops",
      description: "Professional development training in research methodology, statistical analysis, and academic skills for researchers and academics.",
      icon: Calculator,
      count: 6,
      featured: true,
      link: "/programs/academic-workshops",
      workshops: [
        "SPSS for Statistical Analysis",
        "Structural Equation Modeling (AMOS)",
        "NVivo for Qualitative Research",
        "Systematic Literature Review",
        "SmartPLS Training",
        "Research Methodology"
      ],
      image: "/workshop-new.jpg"
    },
    {
      id: "information-security",
      title: "Information Security Workshops",
      description: "Specialized training programs focused on cybersecurity, data protection, and information security best practices.",
      icon: Shield,
      count: 4,
      featured: false,
      link: "/workshops/information-security",
      workshops: [
        "Cybersecurity Fundamentals",
        "Data Protection & Privacy",
        "Network Security",
        "Information Security Management"
      ]
    },
    {
      id: "executive-education",
      title: "Executive Education",
      description: "Leadership and management training programs designed for senior executives and administrators in higher education.",
      icon: Users2,
      count: 3,
      featured: false,
      link: "/workshops/executive-education",
      workshops: [
        "Strategic Leadership",
        "Higher Education Management",
        "Policy Development & Implementation"
      ]
    },
    {
      id: "non-academic",
      title: "Non-Academic Training",
      description: "Professional development programs for administrative and support staff in academic institutions.",
      icon: GraduationCap,
      count: 5,
      featured: false,
      link: "/workshops/non-academic",
      workshops: [
        "Administrative Excellence",
        "Customer Service Skills",
        "Office Management",
        "Communication Skills",
        "Professional Development"
      ]
    },
    {
      id: "guest-lectures",
      title: "Guest Lectures & Webinars",
      description: "Invited lectures and online seminars by distinguished scholars and experts in humanities and social sciences.",
      icon: BookOpen,
      count: 12,
      featured: true,
      link: "/programs/guest-lectures",
      workshops: [
        "Research Methodology Seminars",
        "Contemporary Issues in Social Sciences",
        "Academic Writing Workshops",
        "Publication Strategies"
      ],
      image: "/guest-lecture-2019.jpg"
    }
  ]

  const upcomingHighlights = [
    {
      title: "Certificate Course on Introduction to SPSS for Statistical Analysis",
      date: "October 2023",
      type: "Academic Training",
      status: "Registration Closed",
      fee: "LKR 15,000"
    },
    {
      title: "Workshop on Structural Equation Modeling (with AMOS)",
      date: "Available upon request",
      type: "Academic Training",
      status: "Available",
      fee: "LKR 18,000"
    },
    {
      title: "Workshop on Using NVivo for Qualitative Research",
      date: "Available upon request",
      type: "Academic Training",
      status: "Available",
      fee: "LKR 12,000"
    },
    {
      title: "Certificate in Mastering Systematic Literature Review",
      date: "Available upon request",
      type: "Academic Training",
      status: "Available",
      fee: "LKR 16,000"
    }
  ]

  const statistics = [
    { label: "Workshops Conducted", value: "50+", icon: Calendar },
    { label: "Participants Trained", value: "1000+", icon: Users },
    { label: "Training Programs", value: "15+", icon: Award },
    { label: "Expert Instructors", value: "25+", icon: GraduationCap }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Workshops & Training Programs</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive professional development and training programs designed to enhance research skills,
                academic competencies, and professional capabilities in humanities and social sciences.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of training programs designed for different professional levels and specializations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshopCategories.map((category) => (
                <Card key={category.id} className={`hover:shadow-lg transition-shadow duration-200 ${category.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  {category.image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.featured && (
                        <Badge variant="default">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <Badge variant="secondary">{category.count} programs</Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Available Programs:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {category.workshops.slice(0, 3).map((workshop, idx) => (
                          <li key={idx}>• {workshop}</li>
                        ))}
                        {category.workshops.length > 3 && (
                          <li className="text-primary">• +{category.workshops.length - 3} more</li>
                        )}
                      </ul>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={category.link}>
                        Explore Programs
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming & Available Programs</h2>
              <p className="text-lg text-muted-foreground">
                Current training opportunities and scheduled workshops
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingHighlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg leading-tight">{highlight.title}</CardTitle>
                      <Badge variant={highlight.status === "Available" ? "default" : "secondary"}>
                        {highlight.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {highlight.date}
                      </div>
                      <Badge variant="outline">{highlight.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{highlight.fee}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/programs/academic-workshops">View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose NCAS Training */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose NCAS Training?</h2>
              <p className="text-lg text-muted-foreground">
                Quality education and professional development from Sri Lanka's premier research institution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Faculty</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn from distinguished academics and industry experts with international experience
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Practical Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Hands-on training with real-world applications and industry-relevant skills
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Recognized Certificates</h3>
                  <p className="text-sm text-muted-foreground">
                    Internationally recognized certificates endorsed by NCAS and partner institutions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Networking</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with peers, researchers, and professionals in your field of study
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Training Program Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  For more information about our training programs, registration details, or custom training solutions,
                  please contact the NCAS Training Division.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      6A, Sukhastan Gardens<br />
                      Ward Place, Colombo – 07<br />
                      Sri Lanka
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Contact Details</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>📞 Phone: +94 011 2680849</p>
                      <p>📠 Fax: +94 011 269 3975</p>
                      <p>✉️ Email: info@ncas.ac.lk</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Workshops are conducted at NCAS premises or partner institutions. Online and hybrid options are available for most programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

            <Footer />
    </div>
  )
}

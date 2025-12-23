import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Award, BookOpen, Calculator, BarChart3, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Academic Training Workshops | NCAS Programs",
  description: "Professional training workshops in research methodology, statistical analysis, and academic skills development offered by NCAS.",
}

export default function AcademicWorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: "Certificate Course on Introduction to SPSS for Statistical Analysis",
      description: "Comprehensive training in SPSS software for statistical data analysis, covering basic to advanced statistical techniques.",
      date: "October 2023",
      duration: "2 Weeks",
      time: "9:00 AM - 4:00 PM",
      location: "NCAS Training Center",
      fee: "LKR 15,000",
      instructor: "NCAS Statistics Faculty",
      level: "Beginner to Intermediate",
      image: "/workshop-new.jpg",
      registrationClosed: true,
      registrationDeadline: "October 6, 2023",
      topics: [
        "Introduction to SPSS Interface",
        "Data Entry and Management",
        "Descriptive Statistics",
        "Inferential Statistics",
        "Correlation and Regression",
        "ANOVA and t-tests",
        "Chi-square Tests",
        "Data Visualization",
        "Report Generation"
      ],
      prerequisites: [
        "Basic computer literacy",
        "Understanding of basic mathematics",
        "No prior statistical knowledge required"
      ],
      materials: [
        "SPSS software access",
        "Course manual and datasets",
        "Certificate of completion",
        "Lunch and refreshments"
      ]
    },
    {
      id: 2,
      title: "Workshop on Structural Equation Modeling (with AMOS) for Quantitative Research",
      description: "Advanced workshop on structural equation modeling using AMOS software for complex quantitative research analysis.",
      date: "Available upon request",
      duration: "3 Days",
      time: "9:00 AM - 5:00 PM",
      location: "NCAS Conference Hall",
      fee: "LKR 18,000",
      instructor: "Quantitative Research Experts",
      level: "Advanced",
      image: "",
      registrationClosed: false,
      topics: [
        "Introduction to Structural Equation Modeling",
        "AMOS Software Interface",
        "Confirmatory Factor Analysis",
        "Path Analysis",
        "Model Specification and Identification",
        "Model Fit Assessment",
        "Mediation and Moderation Analysis",
        "Multi-group Analysis",
        "Advanced SEM Techniques"
      ],
      prerequisites: [
        "Basic knowledge of statistics",
        "Familiarity with SPSS or similar software",
        "Understanding of research methodology"
      ],
      materials: [
        "AMOS software (trial version)",
        "Workshop manual and datasets",
        "Certificate of completion",
        "Lunch and refreshments"
      ]
    },
    {
      id: 3,
      title: "Workshop on Using NVivo for Qualitative Research",
      description: "Hands-on training in NVivo software for qualitative data analysis, coding, and thematic analysis.",
      date: "Available upon request",
      duration: "2 Days",
      time: "9:00 AM - 4:00 PM",
      location: "NCAS Computer Lab",
      fee: "LKR 12,000",
      instructor: "Qualitative Research Specialists",
      level: "Intermediate",
      image: "",
      registrationClosed: false,
      topics: [
        "Introduction to Qualitative Research",
        "NVivo Interface and Navigation",
        "Data Import and Organization",
        "Coding Techniques and Strategies",
        "Theme Development and Analysis",
        "Query Tools and Advanced Search",
        "Visualization and Reporting",
        "Mixed Methods Integration",
        "Best Practices in Qualitative Analysis"
      ],
      prerequisites: [
        "Basic research experience",
        "Understanding of qualitative methods",
        "Computer literacy"
      ],
      materials: [
        "NVivo software license (30 days)",
        "Sample datasets and projects",
        "Workshop handbook",
        "Certificate of participation"
      ]
    },
    {
      id: 4,
      title: "Certificate Course in Mastering Systematic Literature Review with Bibliometric Analysis",
      description: "Comprehensive training in systematic literature review techniques, manuscript writing, and bibliometric analysis.",
      date: "Available upon request",
      duration: "3 Days",
      time: "9:00 AM - 4:00 PM",
      location: "NCAS Training Center",
      fee: "LKR 16,000",
      instructor: "Research Methodology Experts",
      level: "Intermediate to Advanced",
      image: "",
      registrationClosed: false,
      topics: [
        "Principles of Systematic Literature Review",
        "Search Strategies and Database Navigation",
        "Inclusion/Exclusion Criteria",
        "Critical Appraisal Techniques",
        "Data Extraction and Synthesis",
        "Bibliometric Analysis Methods",
        "Manuscript Writing and Structure",
        "Publication Strategies",
        "Avoiding Plagiarism and Bias"
      ],
      prerequisites: [
        "Basic academic writing skills",
        "Access to academic databases",
        "Research experience preferred"
      ],
      materials: [
        "Literature review templates",
        "Bibliometric analysis tools",
        "Sample manuscripts",
        "Certificate of completion"
      ]
    },
    {
      id: 5,
      title: "Partial Least Square Structural Equation Modeling (with SmartPLS)",
      description: "Advanced training in PLS-SEM using SmartPLS software for complex research modeling and analysis.",
      date: "Available upon request",
      duration: "2 Days",
      time: "9:00 AM - 5:00 PM",
      location: "NCAS Conference Hall",
      fee: "LKR 14,000",
      instructor: "PLS-SEM Specialists",
      level: "Advanced",
      image: "",
      registrationClosed: false,
      topics: [
        "Introduction to PLS-SEM",
        "SmartPLS Software Interface",
        "Measurement Model Assessment",
        "Structural Model Evaluation",
        "Mediation and Moderation Analysis",
        "Higher-order Constructs",
        "Multi-group Analysis",
        "Model Validation Techniques",
        "Reporting PLS-SEM Results"
      ],
      prerequisites: [
        "Basic knowledge of statistics",
        "Understanding of research methodology",
        "Familiarity with quantitative methods"
      ],
      materials: [
        "SmartPLS software",
        "Workshop datasets",
        "Comprehensive manual",
        "Certificate of completion"
      ]
    },
    {
      id: 6,
      title: "Calling Applications for Partial Funding for Advanced Postgraduate Studies – 2023",
      description: "NCAS funding opportunity for advanced postgraduate studies in humanities and social sciences.",
      date: "2023",
      duration: "Ongoing",
      time: "Applications accepted year-round",
      location: "Online Application",
      fee: "No application fee",
      instructor: "NCAS Academic Committee",
      level: "Postgraduate",
      image: "",
      registrationClosed: false,
      type: "funding",
      fundingAmount: "Partial funding available",
      eligibility: [
        "Sri Lankan citizens",
        "Enrolled in postgraduate programs",
        "Research in humanities/social sciences",
        "Good academic standing",
        "Demonstrated research potential"
      ],
      applicationRequirements: [
        "Completed application form",
        "Research proposal",
        "Academic transcripts",
        "CV and publications",
        "Supervisor recommendation",
        "Budget justification"
      ]
    }
  ]

  const workshopCategories = [
    {
      category: "Statistical Software Training",
      icon: Calculator,
      count: 3,
      description: "SPSS, AMOS, SmartPLS training",
      workshops: ["SPSS Course", "AMOS Workshop", "SmartPLS Training"]
    },
    {
      category: "Qualitative Research Methods",
      icon: BookOpen,
      count: 2,
      description: "NVivo and qualitative analysis techniques",
      workshops: ["NVivo Workshop", "Literature Review Course"]
    },
    {
      category: "Research Methodology",
      icon: BarChart3,
      count: 4,
      description: "Advanced research methods and techniques",
      workshops: ["SEM with AMOS", "PLS-SEM", "Systematic Reviews", "Research Methods"]
    },
    {
      category: "Funding & Scholarships",
      icon: Award,
      count: 1,
      description: "Funding opportunities for postgraduate studies",
      workshops: ["Partial Funding Program"]
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Academic Training Workshops</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional development training programs designed to enhance research skills and academic competencies in humanities and social sciences.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Categories Overview */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Workshop Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workshopCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <Badge variant="secondary">{category.count} workshops</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Available Workshops</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {workshops.map((workshop) => (
                <Card key={workshop.id} className="hover:shadow-lg transition-shadow duration-200">
                  {workshop.image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={workshop.registrationClosed ? "destructive" : "default"}>
                        {workshop.registrationClosed ? "Registration Closed" : "Available"}
                      </Badge>
                      <Badge variant="outline">{workshop.level}</Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">{workshop.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{workshop.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{workshop.instructor}</span>
                      </div>
                    </div>

                    {workshop.fee && (
                      <div className="text-center">
                        <span className="text-lg font-semibold text-primary">{workshop.fee}</span>
                      </div>
                    )}

                    {workshop.type === "funding" && workshop.fundingAmount && (
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <span className="text-lg font-semibold text-green-700">{workshop.fundingAmount}</span>
                      </div>
                    )}

                    {workshop.registrationDeadline && (
                      <div className="text-center text-sm text-muted-foreground">
                        Registration Deadline: {workshop.registrationDeadline}
                      </div>
                    )}

                    <div className="flex gap-2">
                      {!workshop.registrationClosed && workshop.type !== "funding" && (
                        <Button className="flex-1">
                          Register Now
                        </Button>
                      )}
                      {workshop.type === "funding" && (
                        <Button className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          Apply Now
                        </Button>
                      )}
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>

                    {/* Topics Preview */}
                    {workshop.topics && workshop.topics.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Key Topics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {workshop.topics.slice(0, 4).map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {workshop.topics.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{workshop.topics.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Eligibility for Funding */}
                    {workshop.eligibility && (
                      <div>
                        <h4 className="font-semibold mb-2">Eligibility:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {workshop.eligibility.slice(0, 3).map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  For more information about Academic Training Workshops and registration details, please contact NCAS.
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
                    Workshops are conducted at NCAS premises or partner institutions. Custom schedules and corporate training programs are also available upon request.
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

import { Metadata } from "next"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ExternalLink, BookOpen, Users, Award, Calendar, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Guidelines & Policies | NCAS",
  description: "Comprehensive guidelines and policies for research grants, scholarships, publications, and academic programs at NCAS.",
}

export default function GuidelinesPage() {
  const guidelineCategories = [
    {
      id: "research-grants",
      title: "Research Grants Guidelines",
      description: "Complete guidelines for applying to NCAS research funding programs",
      icon: Award,
      count: 4,
      color: "bg-blue-50 border-blue-200",
      documents: [
        {
          title: "Short Term Research Grants Guidelines",
          description: "Guidelines for short-term research funding applications",
          type: "PDF",
          size: "2.1 MB",
          lastUpdated: "2024",
          downloadUrl: "/grants/short-term"
        },
        {
          title: "Partial Funding for Postgraduate Studies",
          description: "Application guidelines for postgraduate funding",
          type: "PDF",
          size: "1.8 MB",
          lastUpdated: "2025",
          downloadUrl: "/grants/partial-funding"
        },
        {
          title: "NCAS Guidelines Version 04",
          description: "Comprehensive research funding guidelines",
          type: "PDF",
          size: "3.2 MB",
          lastUpdated: "2024",
          downloadUrl: "/grants/forms-guidelines"
        },
        {
          title: "Tripartite Agreement",
          description: "Agreement template for funded research",
          type: "DOCX",
          size: "245 KB",
          lastUpdated: "2024",
          downloadUrl: "/grants/forms-guidelines"
        }
      ]
    },
    {
      id: "scholarships",
      title: "Scholarship Guidelines",
      description: "Guidelines for NCAS scholarship and fellowship programs",
      icon: BookOpen,
      count: 3,
      color: "bg-green-50 border-green-200",
      documents: [
        {
          title: "NCAS-QUT PhD Scholarships",
          description: "Guidelines for joint PhD scholarship program",
          type: "PDF",
          size: "1.5 MB",
          lastUpdated: "2024",
          downloadUrl: "/scholarships"
        },
        {
          title: "Other Scholarships & Fellowships",
          description: "Information on additional funding opportunities",
          type: "PDF",
          size: "890 KB",
          lastUpdated: "2024",
          downloadUrl: "/scholarships"
        },
        {
          title: "Application Checklists",
          description: "Local and overseas application checklists",
          type: "DOCX",
          size: "156 KB",
          lastUpdated: "2025",
          downloadUrl: "/grants/partial-funding"
        }
      ]
    },
    {
      id: "publications",
      title: "Publication Guidelines",
      description: "Guidelines for NCAS publication awards and academic publishing",
      icon: FileText,
      count: 2,
      color: "bg-purple-50 border-purple-200",
      documents: [
        {
          title: "NCAS Publication Awards",
          description: "Guidelines for publication award applications",
          type: "PDF",
          size: "1.2 MB",
          lastUpdated: "2024",
          downloadUrl: "/grants/publication-awards"
        },
        {
          title: "Journal Publication Guidelines",
          description: "Standards for publishing in NCAS journals",
          type: "PDF",
          size: "756 KB",
          lastUpdated: "2024",
          downloadUrl: "/publications"
        }
      ]
    },
    {
      id: "academic-programs",
      title: "Academic Program Guidelines",
      description: "Guidelines for academic programs, diplomas, and certifications",
      icon: Users,
      count: 3,
      color: "bg-orange-50 border-orange-200",
      documents: [
        {
          title: "Diploma Program Guidelines",
          description: "Guidelines for diploma and certificate programs",
          type: "PDF",
          size: "1.8 MB",
          lastUpdated: "2025",
          downloadUrl: "/programs/diplomas"
        },
        {
          title: "Workshop Registration Guidelines",
          description: "Guidelines for workshop and training program registration",
          type: "PDF",
          size: "945 KB",
          lastUpdated: "2024",
          downloadUrl: "/workshops"
        },
        {
          title: "Certificate Course Guidelines",
          description: "Guidelines for certificate course enrollment",
          type: "PDF",
          size: "1.1 MB",
          lastUpdated: "2024",
          downloadUrl: "/programs/certificates"
        }
      ]
    },
    {
      id: "policies",
      title: "Institutional Policies",
      description: "NCAS institutional policies and governance documents",
      icon: Shield,
      count: 4,
      color: "bg-red-50 border-red-200",
      documents: [
        {
          title: "Universities Act No. 16 of 1978",
          description: "Sri Lankan Universities Act governing higher education",
          type: "PDF",
          size: "4.2 MB",
          lastUpdated: "1978",
          downloadUrl: "/about/universities-act"
        },
        {
          title: "Universities Act Amendments",
          description: "Amendments to the Universities Act",
          type: "PDF",
          size: "2.8 MB",
          lastUpdated: "2023",
          downloadUrl: "/about/universities-act"
        },
        {
          title: "Universities Establishments Code",
          description: "Code governing university establishments",
          type: "PDF",
          size: "3.1 MB",
          lastUpdated: "2020",
          downloadUrl: "/about/universities-act"
        },
        {
          title: "Examination By-Laws",
          description: "By-laws for MPhil/PhD examinations",
          type: "PDF",
          size: "1.9 MB",
          lastUpdated: "2024",
          downloadUrl: "/register/bylaws"
        }
      ]
    },
    {
      id: "strategic-plans",
      title: "Strategic & Corporate Plans",
      description: "NCAS strategic planning documents and corporate plans",
      icon: Calendar,
      count: 5,
      color: "bg-indigo-50 border-indigo-200",
      documents: [
        {
          title: "Strategic Plan 2024-2028",
          description: "NCAS strategic plan for 2024-2028",
          type: "PDF",
          size: "2.4 MB",
          lastUpdated: "2024",
          downloadUrl: "/about/strategic-plan-2024-2028"
        },
        {
          title: "Strategic Plan 2025-2029",
          description: "Updated strategic plan for 2025-2029",
          type: "PDF",
          size: "2.6 MB",
          lastUpdated: "2025",
          downloadUrl: "/about/strategic-plan-2025-2029"
        },
        {
          title: "Corporate Plan 2023-2027",
          description: "NCAS corporate plan for 2023-2027",
          type: "PDF",
          size: "3.1 MB",
          lastUpdated: "2023",
          downloadUrl: "/about/corporate-plan-2023-2027"
        },
        {
          title: "Action Plan 2025",
          description: "Annual action plan for 2025",
          type: "PDF",
          size: "1.7 MB",
          lastUpdated: "2025",
          downloadUrl: "/about/action-plan"
        },
        {
          title: "Master Procurement Plan 2025",
          description: "Procurement plan for 2025",
          type: "PDF",
          size: "2.2 MB",
          lastUpdated: "2025",
          downloadUrl: "/about/master-procurement-plan"
        }
      ]
    }
  ]

  const quickLinks = [
    {
      title: "Application Forms",
      description: "Download application forms for various programs",
      link: "/register/application-form",
      icon: FileText
    },
    {
      title: "Research Ethics",
      description: "Guidelines for research ethics and integrity",
      link: "/research",
      icon: Shield
    },
    {
      title: "Intellectual Property",
      description: "IP policies and guidelines for researchers",
      link: "/research",
      icon: BookOpen
    },
    {
      title: "Conflict of Interest",
      description: "Policies on conflict of interest disclosure",
      link: "/about",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Guidelines & Policies</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive collection of guidelines, policies, and procedural documents for NCAS programs,
                research funding, scholarships, and academic governance.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={link.link}>Access</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guidelines Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Document Categories</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {guidelineCategories.map((category) => (
                <Card key={category.id} className={`hover:shadow-lg transition-shadow ${category.color}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{category.count} documents</Badge>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {category.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{doc.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{doc.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>Type: {doc.type}</span>
                            <span>Size: {doc.size}</span>
                            <span>Updated: {doc.lastUpdated}</span>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={doc.downloadUrl}>
                            <Download className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Important Notices</h2>
              <p className="text-lg text-muted-foreground">
                Key information and updates regarding NCAS guidelines and policies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Document Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    All guidelines and policies are regularly updated. Please ensure you are using the most recent versions
                    of all documents. Check the "Last Updated" date on each document.
                  </p>
                  <div className="text-sm">
                    <p className="font-medium">Latest Updates:</p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Partial Funding Guidelines 2025 - January 2025</li>
                      <li>Strategic Plan 2025-2029 - December 2024</li>
                      <li>Action Plan 2025 - January 2025</li>
                      <li>Master Procurement Plan 2025 - December 2024</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">Contact for Clarifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you need clarification on any guidelines or policies, or require assistance with applications,
                    please contact the relevant NCAS department.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Research Grants:</span>
                      <span className="text-muted-foreground">grants@ncas.ac.lk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Scholarships:</span>
                      <span className="text-muted-foreground">scholarships@ncas.ac.lk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Academic Programs:</span>
                      <span className="text-muted-foreground">programs@ncas.ac.lk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">General Inquiries:</span>
                      <span className="text-muted-foreground">info@ncas.ac.lk</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Statistics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Document Access Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Policy Documents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Application Forms</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Monthly Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      </div>
  )
}
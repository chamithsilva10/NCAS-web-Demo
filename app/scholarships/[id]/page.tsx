import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Clock, FileText, ArrowLeft, Download, Users } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const getScholarship = (id: string) => {
  const scholarships = [
    {
      id: 1,
      title: "NCAS Postgraduate Research Grants",
      description: "Partial funding support for advanced postgraduate studies in humanities and social sciences",
      fullDescription: `
        The NCAS Postgraduate Research Grants program provides crucial financial support to outstanding doctoral candidates pursuing research in humanities and social sciences. This competitive program aims to foster the next generation of scholars and researchers in these vital fields.
        
        Our grants are designed to support various aspects of doctoral research, including fieldwork, data collection, conference presentations, and publication costs. Recipients also gain access to NCAS's extensive research facilities and benefit from mentorship by our distinguished faculty.
        
        The program particularly encourages interdisciplinary research that bridges traditional academic boundaries and addresses contemporary social challenges. We welcome applications from candidates whose research has the potential for significant scholarly and societal impact.
      `,
      amount: "Up to $5,000",
      duration: "1-2 years",
      deadline: "2024-04-30",
      eligibility: "PhD candidates in humanities/social sciences",
      type: "Local",
      status: "Open",
      requirements: [
        "Currently enrolled in a PhD program at a recognized university",
        "Research proposal clearly aligned with humanities or social sciences",
        "Academic transcripts showing strong academic performance",
        "Three letters of recommendation from academic referees",
        "Detailed budget breakdown and justification",
        "Evidence of institutional support from home university",
      ],
      benefits: [
        "Financial support up to $5,000 for research expenses",
        "Access to NCAS research facilities and resources",
        "Mentorship opportunities with senior researchers",
        "Support for conference presentations and publications",
        "Networking opportunities with fellow researchers",
        "Certificate of completion and recognition",
      ],
      applicationDocuments: [
        "Completed application form",
        "Research proposal (max 3,000 words)",
        "Academic transcripts",
        "Three letters of recommendation",
        "Budget breakdown and justification",
        "CV/Resume",
        "Writing sample (published or unpublished work)",
      ],
      selectionCriteria: [
        "Academic excellence and research potential",
        "Quality and feasibility of research proposal",
        "Alignment with NCAS research priorities",
        "Potential for scholarly and societal impact",
        "Strength of recommendations",
        "Financial need assessment",
      ],
    },
  ]

  return scholarships.find((scholarship) => scholarship.id === Number.parseInt(id))
}

export default function ScholarshipDetailPage({ params }: { params: { id: string } }) {
  const scholarship = getScholarship(params.id)

  if (!scholarship) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <main>
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/scholarships">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Scholarships
                </Button>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                  <Badge variant="default">{scholarship.type}</Badge>
                  <Badge variant={scholarship.status === "Open" ? "default" : "secondary"}>{scholarship.status}</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guidelines
                  </Button>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">{scholarship.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{scholarship.description}</p>

              {/* Key Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Amount</div>
                    <div className="text-muted-foreground">{scholarship.amount}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Duration</div>
                    <div className="text-muted-foreground">{scholarship.duration}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Deadline</div>
                    <div className="text-muted-foreground">{new Date(scholarship.deadline).toLocaleDateString()}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About This Program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {scholarship.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements and Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {scholarship.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {scholarship.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Application Documents */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scholarship.applicationDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                      <FileText className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Selection Criteria */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Selection Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {scholarship.selectionCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-6">
                  Don't miss this opportunity to advance your research with NCAS support
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Start Application</Button>
                  <Button variant="outline" size="lg">
                    Contact Support
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Application deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

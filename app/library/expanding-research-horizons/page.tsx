

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Users, BookOpen, Wifi, Home, FileText } from "lucide-react"
import Link from "next/link"

export default function ExpandingResearchHorizonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Expanding Research Horizons</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Opportunities for International Scholars - Doctoral, Postdoctoral, and Senior Research Fellowships
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Doctoral/Postdoctoral/Senior Research Fellowships for International Scholars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-justify leading-relaxed">
                    National Centre for Advanced Studies in Humanities (NCAS), a seat for Higher Education and Research,
                    is happy to invite the scholars from overseas to come and join to continue their studies/research/doctoral/post-doctoral
                    studies by affiliating to the NCAS. The NCAS established its policy Decision at its 21st meeting of the Council of Regents
                    held on the 19th January 2024 under the auspices of the Hon. Minister of Education, the Chairman of the Council of Regents
                    of the NCAS with the concurrence of its members by reviewing its vested powers under the NCAS Ordinance No. 02 of 2005
                    (as amended in 2008) enacted by Section 24 (A) of the Universities Act No. 16 of 1978.
                  </p>

                  <p className="text-justify leading-relaxed">
                    The interested scholars are invited to submit their research proposals/work plan emphasizing the field of study and the
                    duration of their visit, also emphasizing the benefit that can make to sustain/place Sri Lanka in the global community
                    through the new research findings.
                  </p>

                  <p className="text-justify leading-relaxed">
                    Optionally, the scholars may visit NCAS and serve as volunteers to introduce the Master classes, Courses and become
                    International Course Coordinators during the period they visit Sri Lanka through NCAS. For those who wish to do so may
                    send their proposals/courses well in advance to the NCAS in order to obtain the concurrence from the statutory bodies
                    prior to offering such courses/programmes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Facilities Provided */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Facilities Provided by NCAS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Note:</strong> The NCAS will not provide any financial remunerations/honorarium to the visiting research fellows/scholars,
                    and they must cover their own expenses.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Wifi className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Study Facilities</h4>
                      <p className="text-sm text-muted-foreground">Study room with computer and other storage facilities with free Wi-Fi connectivity</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Library Access</h4>
                      <p className="text-sm text-muted-foreground">The use of NCAS library and facilitate to access other libraries, with the concurrence of the relevant authorities</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Official Support</h4>
                      <p className="text-sm text-muted-foreground">Upon request, NCAS will issue an official letter of invitation to obtain necessary visas and other official communications</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Home className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Accommodation Coordination</h4>
                      <p className="text-sm text-muted-foreground">Accommodation can be coordinated upon the request of the visiting scholar</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  How to Apply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Please send your expression of interest with your CV and the area of interest to:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-sm">directoroffice@ncas.ac.lk</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1">
                      <Link href="mailto:directoroffice@ncas.ac.lk?subject=Research Fellowship Application">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Expression of Interest
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <Link href="/contact">
                        Contact NCAS
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Program Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm">Eligibility</h4>
                  <p className="text-sm text-muted-foreground">International scholars interested in humanities and social sciences research</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Duration</h4>
                  <p className="text-sm text-muted-foreground">Flexible - based on research proposal</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Funding</h4>
                  <p className="text-sm text-muted-foreground">Self-funded (NCAS provides facilities only)</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Location</h4>
                  <p className="text-sm text-muted-foreground">NCAS, Colombo, Sri Lanka</p>
                </div>
              </CardContent>
            </Card>

            {/* Related Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/grants/qut-scholarships" className="block">
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium text-sm">NCAS-QUT PhD Scholarships</h4>
                    <p className="text-xs text-muted-foreground">Joint program with Queensland University of Technology</p>
                  </div>
                </Link>
                <Link href="/international" className="block">
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium text-sm">Visiting Research Fellowships</h4>
                    <p className="text-xs text-muted-foreground">Short-term research visits</p>
                  </div>
                </Link>
                <Link href="/grants/research-colloquium" className="block">
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium text-sm">Research Colloquium</h4>
                    <p className="text-xs text-muted-foreground">Present and discuss research</p>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Address:</strong></p>
                  <p className="text-muted-foreground">
                    National Centre for Advanced Studies<br />
                    6A, Sukhastan Gardens<br />
                    Ward Place, Colombo – 07<br />
                    Sri Lanka
                  </p>
                  <p><strong>Phone:</strong> +94 011 2680849</p>
                  <p><strong>Fax:</strong> +94 011 269 3975</p>
                  <p><strong>Email:</strong> info@ncas.ac.lk</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Research Opportunities */}
        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/library/research-opportunities">
              ← Back to Research Opportunities
            </Link>
          </Button>
        </div>
      </main>
      </div>
  )
}
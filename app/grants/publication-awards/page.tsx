

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Calendar, Award, FileText } from "lucide-react"
import Link from "next/link"

export default function PublicationAwardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">NCAS Publication Awards</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Financial support for authors publishing original manuscripts in Humanities and Social Sciences.
            The awards provide funding for the publication of selected books, monographs, reviews, and textbooks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Award Type</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Publication Grant</div>
              <p className="text-xs text-muted-foreground">For selected manuscripts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Eligibility</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Sri Lankan Authors</div>
              <p className="text-xs text-muted-foreground">From universities</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Deadline</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">30 March 2024</div>
              <p className="text-xs text-muted-foreground">Application closing date</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                About the Award
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The National Centre for Advanced Studies (NCAS) invites authors/researchers from universities
                in Sri Lanka to submit their original manuscripts (books/monographs/reviews/textbooks) to be
                considered for the NCAS Publication Awards.
              </p>
              <p className="text-muted-foreground">
                The Awards provide financial support to authors who wish to publish books in the Humanities
                and Social Sciences fields. The award will support the publication of ONE selected manuscript.
              </p>
              <div className="pt-4">
                <Badge variant="secondary" className="mr-2">Humanities</Badge>
                <Badge variant="secondary" className="mr-2">Social Sciences</Badge>
                <Badge variant="secondary">Original Research</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Application Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Detailed guidelines and application forms are available for download.
                Please review all requirements carefully before submitting your application.
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="https://ncas.ac.lk/wp-content/uploads/2024/02/Invitation-for-applications-for-NCAS-Grant-Scheme-for-supporting-2024new.pdf" target="_blank">
                    <Download className="h-4 w-4 mr-2" />
                    Download Guidelines (PDF)
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Opens in new tab - PDF document
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Who Can Apply:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Authors/researchers from Sri Lankan universities</li>
                <li>• Original manuscripts in Humanities and Social Sciences</li>
                <li>• Books, monographs, reviews, or textbooks</li>
                <li>• High-quality academic work</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Selection Process:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Peer review by academic experts</li>
                <li>• Evaluation of scholarly merit</li>
                <li>• Contribution to the field</li>
                <li>• Publication readiness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Application Deadline</h2>
            <p className="text-2xl font-bold text-primary mb-2">30 March 2024</p>
            <p className="text-muted-foreground">
              Submit your application before the deadline to be considered for the NCAS Publication Award.
            </p>
          </div>
        </div>
      </main>
      </div>
  )
}
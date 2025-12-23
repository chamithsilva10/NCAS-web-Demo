import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, Users, DollarSign } from "lucide-react"

export default function ShortTermGrantsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Short Term Research Grants</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NCAS invites applications for Short Term Research Grants to support innovative research in humanities and social sciences.
          </p>
        </div>

        {/* Grant Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Eligibility</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Permanent academic staff members of Sri Lankan universities are eligible to apply.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Duration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Grants are awarded for a period of 12 months.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Amount</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Each grant provides Rs. 300,000 for research expenses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Badge className="h-5 w-5" />
                <span>Available Grants</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                5 grants available: 3 for young researchers and 2 for senior researchers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Application Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Apply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Interested applicants should submit their research proposals according to the guidelines provided in the application form.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex items-center space-x-2">
                  <a href="https://ncas.ac.lk/wp-content/uploads/2025/03/APLLICATION-FOR-THE-SHORT-TERM-RESEARCH-GRANT.doc" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    <span>Download Application Form</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For more information about the Short Term Research Grants program, please contact the NCAS Secretariat.
            </p>
            <div className="mt-4">
              <p className="font-medium">Email: info@ncas.ac.lk</p>
              <p className="font-medium">Phone: +94 011 2680849</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
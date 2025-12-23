import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function ExecutiveEducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Executive Education</h1>
          <div className="mb-8">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            This program is currently under development. Please check back later for updates.
          </p>
        </div>

        {/* Program Details */}
        <Card>
          <CardHeader>
            <CardTitle>Program Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Executive Education programs at NCAS are designed to enhance leadership and management skills for professionals in various sectors.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Status</h4>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Duration</h4>
                <p className="text-muted-foreground">To be announced</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Target Audience</h4>
                <p className="text-muted-foreground">Executives and managers</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Application</h4>
                <p className="text-muted-foreground">Not yet available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For more information about Executive Education programs, please contact NCAS.
            </p>
            <div className="mt-4">
              <p className="font-medium">Address: 6A, Sukhastan Gardens, Ward Place, Colombo – 07, Sri Lanka</p>
              <p className="font-medium">Phone: +94 011 2680849</p>
              <p className="font-medium">Fax: +94 011 269 3975</p>
              <p className="font-medium">Email: info@ncas.ac.lk</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
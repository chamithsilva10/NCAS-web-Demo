import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TourismPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT</h1>
          <div className="mb-8">
            <Image
              src="/diploma-tourism-hospitality.png"
              alt="DIPLOMA IN TOURISM AND HOSPITALITY MANAGEMENT"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <Button asChild size="lg">
            <a href="https://forms.gle/BsfJRh7tceCsagwa9" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>

        {/* Program Details */}
        <Card>
          <CardHeader>
            <CardTitle>Program Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Diploma in Tourism and Hospitality Management provides comprehensive training in all aspects of the tourism and hospitality industry, with a focus on the Sri Lankan tourism sector.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Duration</h4>
                <p className="text-muted-foreground">1 Year</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mode</h4>
                <p className="text-muted-foreground">Part-time</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Start Date</h4>
                <p className="text-muted-foreground">September 4, 2025</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Application</h4>
                <p className="text-muted-foreground">Online via Google Forms</p>
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
              For more information about the Diploma in Tourism and Hospitality Management program, please contact NCAS.
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
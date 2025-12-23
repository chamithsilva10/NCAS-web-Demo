import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function InformationSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Information Security Workshops</h1>
          <div className="mb-8">
            <Image
              src="https://localhost/wp-content/uploads/2019/02/itsecurity__1.jpg"
              alt="Information Security for Executives - How to manage internal IT threats in organizations - ncas sri lanka"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Information Security for Executives - How to manage internal IT threats in organizations</h2>
        </div>

        {/* Program Details */}
        <Card>
          <CardHeader>
            <CardTitle>Workshop Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This workshop focuses on managing internal IT threats in organizations, providing executives with essential knowledge and strategies for information security.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Target Audience</h4>
                <p className="text-muted-foreground">Executives and IT managers</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Duration</h4>
                <p className="text-muted-foreground">To be announced</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mode</h4>
                <p className="text-muted-foreground">Workshop format</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">NCAS premises</p>
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
              For more information about Information Security Workshops, please contact NCAS.
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
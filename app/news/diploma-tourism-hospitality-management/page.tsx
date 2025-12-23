import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diploma in Tourism and Hospitality Management | NCAS',
  description: 'Diploma in Tourism and Hospitality Management - NCAS Professional Development Program',
}

export default function DiplomaTourismHospitalityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Diploma in Tourism and Hospitality Management</h1>
          <p className="text-lg text-muted-foreground">Professional Development Program</p>
        </div>

        {/* Course Banner */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/diploma-tourism-hospitality.png"
            alt="Diploma in Tourism and Hospitality Management"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Program Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              The Diploma in Tourism and Hospitality Management is designed to provide comprehensive knowledge and practical skills in the tourism and hospitality industry. This program equips participants with the essential competencies needed to excel in various roles within the tourism sector.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold mb-3">Key Learning Outcomes:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Understanding of tourism industry dynamics</li>
                  <li>• Hospitality management principles</li>
                  <li>• Customer service excellence</li>
                  <li>• Event planning and management</li>
                  <li>• Sustainable tourism practices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Target Audience:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Tourism industry professionals</li>
                  <li>• Hospitality workers</li>
                  <li>• Entrepreneurs in tourism sector</li>
                  <li>• Career changers seeking tourism opportunities</li>
                  <li>• Graduates looking to specialize in tourism</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Duration & Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Program Duration: 6-12 months</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Flexible scheduling with weekend and evening classes available
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">
                Apply now to join this comprehensive tourism and hospitality management program.
              </p>
              <Button asChild className="w-full">
                <a
                  href="https://forms.gle/BsfJRh7tceCsagwa9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Apply Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-medium mb-2">For more information about the program:</p>
              <div className="space-y-2 text-sm">
                <p><strong>National Centre for Advanced Studies in Humanities and Social Sciences (NCAS)</strong></p>
                <p>6A, Sukhastan Gardens, Ward Place, Colombo – 07, Sri Lanka</p>
                <p>Tel: +94 011 2680849 | Fax: +94 011 269 3975</p>
                <p>Email: info@ncas.ac.lk</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Information */}
        <div className="text-center text-sm text-muted-foreground">
          <p>National Centre for Advanced Studies in Humanities & Social Sciences</p>
          <p>6A, Sukhastan Gardens, Ward Place, Colombo – 07, Sri Lanka</p>
          <p>Tel: +94 011 2680849 | Fax: +94 011 269 3975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  )
}
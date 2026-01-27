import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Mail, MapPin, Phone, Printer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Short Term Research Grants | NCAS',
  description: 'Invitation for Applications for Short-Term Research Grants 2025 - NCAS',
}

export default function ShortTermResearchGrantsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Short-Term Research Grants</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">INVITATION FOR APPLICATIONS FOR SHORT-TERM RESEARCH GRANTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                The National Centre for Advanced Studies in Humanities and Social Sciences (NCAS) [under the purview of the Universities Act No. 16 of 1978] is happy to announce the "Calling for Invitations for Short Term Research Grants" from the academics of the State Universities in Sri Lanka. There are Five (05) grants for the year 2025 and the grants will be awarded on competitive basis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Vision and Mission</h3>
              <p className="leading-relaxed">
                The vision and the mission of NCAS by granting so is to initiate and promote new research and studies in the field of Social Sciences and Humanities. In its diverse scope of studies, the academics of the state Universities are expected to carry on inter-disciplinary and multi-disciplinary studies that can benefit our societies and help develop economies, lifestyles and wellbeing. Though extensive and remarkable studies are carried out, there are certain untouched areas of study that need to have a proper attention and to be attended by experts for the preservation and sustenance of the authentic qualities in order to be eligible for the grant.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Grant Details</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Months Duration</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">Rs. 300,000/-</div>
                    <div className="text-sm text-muted-foreground">Grant Amount</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Total Grants</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Permanent Academic staff members of the state Universities</li>
                <li>Five (05) research scholarships available</li>
                <li>Three (03) grants for young researchers</li>
                <li>Two (02) grants for senior researchers in the field of Humanities and Social Sciences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Application Requirements</h3>
              <p className="mb-4">Academics of the state Universities in Sri Lanka are invited to submit their individual/collaborative research projects following the standard application format, along with their curriculum vitae proving their research capacities and contribution.</p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-medium">Important Notes:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>The completed application and research proposal must be sent to the Director</li>
                  <li>Send soft copy to: director@ncas.ac.lk</li>
                  <li>The 'Application for Short Term Grants' must be written on the top left corner of the application</li>
                  <li>Application format can be found at ncas.ac.lk/short-term-grants</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Director, National Centre for Advanced Studies in Humanities and Social Sciences (NCAS)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p>6A, Sukhastan Gardens</p>
                      <p>Ward Place</p>
                      <p>Colombo 07</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Tel: +94 011 2680849</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="h-5 w-5 text-blue-600" />
                    <span>Fax: +94 011 269 3975</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Email: director@ncas.ac.lk</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a
                  href="/downloads/APLLICATION-FOR-THE-SHORT-TERM-RESEARCH-GRANT.doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Application Form
                </a>
              </Button>
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
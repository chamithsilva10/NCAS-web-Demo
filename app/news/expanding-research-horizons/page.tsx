import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Mail, MapPin, Phone, Printer, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Expanding Research Horizons | NCAS',
  description: 'Opportunities for International Scholars - Doctoral/Postdoctoral/Senior Research Fellowships',
}

export default function ExpandingResearchHorizonsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Expanding Research Horizons</h1>
        <p className="text-lg text-center mb-8 text-muted-foreground">
          Opportunities for International Scholars
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Doctoral/Postdoctoral/Senior Research Fellowships for International Scholars</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                "National Centre for Advanced Studies in Humanities (NCAS), a seat for Higher Education and Research, is happy to invite the scholars from overseas to come and join to continue their studies/research/doctoral/post-doctoral studies by affiliating to the NCAS."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Established at the 21st meeting of the Council of Regents held on 19th January 2024
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Eligibility & Requirements</h3>
              <p className="leading-relaxed mb-4">
                The interested scholars are invited to submit their research proposals/work plan emphasizing the field of study and the duration of their visit, also emphasizing the benefit that can make to sustain/place Sri Lanka in the global community through the new research findings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Optional Opportunities</h3>
              <p className="leading-relaxed">
                Optionally, the scholars may visit NCAS and serve as volunteers to introduce the Master classes, Courses and become International Course Coordinators during the period they visit Sri Lanka through NCAS. For those who wish to do so may send their proposals/courses well in advance to the NCAS in order to obtain the concurrence from the statutory bodies prior to offering such courses/programmes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Facilities Provided by NCAS</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium mb-3 text-green-800">Important Note:</p>
                <p className="text-green-700 mb-4">
                  The NCAS will not disclose any financial remunerations/honorarium to the visiting research fellows/scholars, and will stay solely of their own expenses. However, the NCAS will provide the following facilities to the interested fellows:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Study room with computer and other storage facilities with free Wi-Fi connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>The use of NCAS library and facilitate to access the other libraries, with the concurrence of the relevant authorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Upon the request/expression of interest made by the scholar/research fellow, the NCAS will issue an official letter of invitation to obtain necessary visas and other official communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Accommodation can be coordinated upon the request of the delegate overseas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-medium">Application Process:</p>
                <p className="mt-2">Please send your expression of interest with your CV and the area of interest to:</p>
                <p className="font-mono bg-white p-2 rounded mt-2 border">directoroffice@ncas.ac.lk</p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <a
                  href="https://ncas.ac.lk/wp-content/uploads/2014/10/LETTER-OF-INVITATIN-OVERSEAS-FELLOWS_n_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Invitation Letter
                </a>
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>directoroffice@ncas.ac.lk</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p>National Centre for Advanced Studies in Humanities and Social Sciences (NCAS)</p>
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
                    <span>Email: info@ncas.ac.lk</span>
                  </div>
                </div>
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
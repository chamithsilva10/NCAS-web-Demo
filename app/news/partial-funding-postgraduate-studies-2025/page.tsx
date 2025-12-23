import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Mail, MapPin, Phone, Printer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partial Funding for Advanced Postgraduate Studies 2025 | NCAS',
  description: 'Calling Applications for Partial Funding for Advanced Postgraduate Studies – 2025 (2nd Round) - NCAS',
}

export default function PartialFunding2025Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Partial Funding for Advanced Postgraduate Studies 2025</h1>
        <p className="text-lg text-center mb-8 text-muted-foreground">
          2nd Round Applications
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">CALLING APPLICATIONS FOR PARTIAL FUNDING FOR ADVANCED POSTGRADUATE STUDIES – 2025</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                The National Centre for Advanced Studies in Humanities and Social Sciences (NCAS) invites applications for partial funding for advanced postgraduate studies for the year 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Download Application Materials</h3>
                  <div className="space-y-3">
                    <Button asChild className="w-full justify-start">
                      <a
                        href="https://ncas.ac.lk/wp-content/uploads/2025/03/Grant-Application-2025-2nd-Round.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Letter – Calling Applications
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start">
                      <a
                        href="https://ncas.ac.lk/wp-content/uploads/2025/03/NEW-APPLICATION-FORM-2025-2nd-Round.doc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Application Form - 2025 (2nd Round)
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start">
                      <a
                        href="https://ncas.ac.lk/wp-content/uploads/2025/03/APPLICATION-CHECK-LIST-OVERSEAS.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Application Check List (Overseas)
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start">
                      <a
                        href="https://ncas.ac.lk/wp-content/uploads/2025/03/APPLICATION-CHECK-LIST-LOCAL.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Application Check List (Local)
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Guidelines & Agreements</h3>
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a
                        href="https://ncas.ac.lk/wp-content/uploads/2025/03/NCAS-guidelines-Version-04-05.08.2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Revised Guidelines for Postgraduate Grant Scheme
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start">
                      <a
                        href="https://ncas.ac.lk/wp-content/uploads/2025/03/Tripartite-Agreement-Version-04-05.08.2024.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Tripartite Funding Agreement
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Important Information</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Applications for the 2nd Round of 2025 are now open</li>
                  <li>Please ensure all required documents are submitted according to the check lists</li>
                  <li>Review the guidelines carefully before applying</li>
                  <li>The tripartite agreement must be signed by all parties</li>
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
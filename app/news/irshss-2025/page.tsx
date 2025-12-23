import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IRSHSS 2025 - 7th International Research Symposium | NCAS',
  description: '7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025 - AI in Higher Education: Prospects and Challenges',
}

export default function Irshss2025Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">7th International Research Symposium in Humanities and Social Sciences</h1>
          <h2 className="text-2xl text-blue-600 font-semibold mb-2">(IRSHSS) 2025</h2>
          <p className="text-lg text-muted-foreground">AI in Higher Education: Prospects and Challenges</p>
        </div>

        {/* Symposium Banner */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/irsssh-2025.png"
            alt="IRSHSS 2025 Banner"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Key Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">30th – 31st October</div>
              <div className="text-sm text-muted-foreground">2025</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-lg font-semibold">National Center for Advanced Studies</div>
              <div className="text-sm text-muted-foreground">in Humanities and Social Sciences</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Deadline Closed
              </Badge>
              <div className="text-sm text-muted-foreground mt-2">Extended Abstracts</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Background and Rationale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              The rapid evolution of technology—driven most visibly by breakthroughs in Artificial Intelligence (AI)—is reshaping higher education worldwide, with Sri Lanka deeply implicated in this transformation. Intelligent tutoring systems, adaptive learning platforms, AI‑supported teaching tools, and institution‑wide administrative applications have already begun to streamline operations, personalize learning, and foster innovative pedagogies.
            </p>
            <p className="leading-relaxed">
              Large Language Models (LLMs) such as ChatGPT, Gemini AI, and Copilot exemplify AI's potential to disrupt conventional educational practices. These tools facilitate real‑time writing support, discipline‑specific research assistance, curriculum design, and data‑driven decision-making. Yet, alongside these benefits emerge pressing concerns: academic integrity, research ethics, data privacy, algorithmic bias, unequal access to infrastructure, and the urgent need for AI literacy among educators and students.
            </p>
            <p className="leading-relaxed">
              Against this backdrop, the 7ᵗʿ International Symposium on Humanities and Social Sciences (IRSHSS) 2025 seeks to provide a vibrant forum for scholars, practitioners, technologists, and policymakers to interrogate AI's multifaceted impact on higher education. The conference will enable participants to share empirical findings, compare regional approaches, and collaboratively chart pathways toward inclusive, ethical, and sustainable AI integration that enhances institutional Key Performance Indicators (KPIs).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Map Current & Emerging Roles of AI in Teaching, Learning, Research, and Administration within Higher‑Education Institutions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Promote responsible use of AI, foregrounding ethics, academic honesty, data protection, and transparency in algorithmic decision‑making.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Facilitate stakeholder collaboration to ensure equitable access and inclusive adoption of AI across diverse cultural and economic contexts.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Showcase effective practice through case studies that demonstrate pedagogically sound and institutionally efficient AI applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Develop guiding standards for sustainable, context‑sensitive AI strategies that strengthen educational quality and integrity.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Symposium Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Submissions may address, but are not limited to, the following themes:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• AI‑Enhanced Teaching & Learning: innovations, adaptive pedagogies, and student engagement</li>
                <li>• Curriculum Design & Academic Advising: AI‑supported modelling, personal‑learning pathways, and skills forecasting</li>
                <li>• Research, Writing, and Scholarly Communication: AI tools for literature review, data analysis, and knowledge dissemination</li>
                <li>• Data Bias & Privacy: challenges and mitigation strategies in AI‑driven educational environments</li>
              </ul>
              <ul className="space-y-2">
                <li>• Implementation Case Studies: successes and obstacles across varied cultural, economic, and institutional settings</li>
                <li>• Policy & Governance: regulatory frameworks, quality assurance, and institutional readiness for AI adoption</li>
                <li>• Inclusive Education: leveraging AI to bridge access gaps and support learners with diverse needs</li>
                <li>• Strategic Planning & Support Services: AI as both a challenge and an opportunity for educational leadership</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Call for Extended Abstracts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed">
              The National Centre for Advanced Studies in Humanities and Social Sciences (NCAS) invites researchers, scholars, practitioners, and graduate students to submit extended abstracts (1000–1500 words) or workshop/panel proposals that align with the above themes. Interdisciplinary and innovative contributions are especially welcome.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-semibold text-red-800">Important Notice:</p>
              <p className="text-red-700">The deadline for submitting extended abstracts is now closed.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Key Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Call for abstracts</span>
                <span className="font-semibold">20.06.2025 – 14.07.2025</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Reviewing of Abstracts</span>
                <span className="font-semibold">15.07.2025 – 14.08.2025</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Notification of Acceptance/Revisions</span>
                <span className="font-semibold">15.08.2025 – 30.08.2025</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>Acceptance of revised/updated abstracts</span>
                <span className="font-semibold">01.09.2025 – 15.09.2025</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The accepted extended abstracts will be presented at the Symposium and published in the Symposium Proceedings. Selected full papers at the Symposium will be published in Sri Lanka Journal of Advanced Research Studies in Humanities and Social Sciences (SLJARHSS).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-lg font-semibold text-green-600">Early Bird</div>
                <div className="text-2xl font-bold">Rs. 3000/-</div>
                <div className="text-sm text-muted-foreground">Closed 30 August 2025</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-lg font-semibold text-blue-600">Regular</div>
                <div className="text-2xl font-bold">Rs. 5000/-</div>
                <div className="text-sm text-muted-foreground">Local Participants</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-lg font-semibold text-purple-600">Overseas</div>
                <div className="text-2xl font-bold">50 USD</div>
                <div className="text-sm text-muted-foreground">International Participants</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The registration fee should be credited to the NCAS Bank Account No: 3532126, named 'National Centre for Advanced Studies in Humanities & Social Sciences' at the Bank of Ceylon – Independence Square/Torrington Square Branch.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">IRSHSS 2025 Secretariat</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>symposium2025@ncas.ac.lk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+94 707507700 (WhatsApp)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Symposium Chairs</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Symposium Co-Chair: Dr. Sampath Chandrasena</p>
                    <div className="flex items-center gap-2 ml-4">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+94 712416533 (WhatsApp)</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Symposium Chair: Professor (Mrs.) Prashanthi Narangoda</p>
                    <div className="flex items-center gap-2 ml-4">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+94 714929621 (WhatsApp)</span>
                    </div>
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
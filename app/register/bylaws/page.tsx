import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText, Scale, Users, GraduationCap, AlertTriangle } from "lucide-react"

export default function BylawsPage() {
  const bylawSections = [
    {
      title: "General Provisions",
      icon: Scale,
      items: [
        "Establishment and objectives of NCAS",
        "Legal status and governance structure",
        "Academic freedom and institutional autonomy",
        "Non-discrimination and equal opportunity policies",
      ],
    },
    {
      title: "Academic Regulations",
      icon: GraduationCap,
      items: [
        "Admission requirements and procedures",
        "Academic standards and assessment criteria",
        "Degree requirements and graduation policies",
        "Academic misconduct and disciplinary procedures",
      ],
    },
    {
      title: "Student Rights and Responsibilities",
      icon: Users,
      items: [
        "Student rights and academic freedom",
        "Code of conduct and behavioral expectations",
        "Grievance procedures and appeals process",
        "Student representation and participation",
      ],
    },
    {
      title: "Research and Ethics",
      icon: FileText,
      items: [
        "Research ethics and integrity standards",
        "Intellectual property and publication policies",
        "Human subjects research protocols",
        "Data protection and confidentiality requirements",
      ],
    },
  ]

  const keyPolicies = [
    {
      policy: "Admission Policy",
      description:
        "Comprehensive guidelines for student admission, including eligibility criteria, selection procedures, and appeal processes.",
      lastUpdated: "January 2024",
      status: "Current",
    },
    {
      policy: "Academic Assessment Policy",
      description:
        "Standards for academic evaluation, grading systems, thesis examination, and quality assurance procedures.",
      lastUpdated: "March 2024",
      status: "Current",
    },
    {
      policy: "Research Ethics Policy",
      description:
        "Guidelines for ethical conduct in research, including human subjects protection and data management protocols.",
      lastUpdated: "February 2024",
      status: "Current",
    },
    {
      policy: "Student Disciplinary Policy",
      description: "Procedures for addressing academic misconduct, behavioral violations, and disciplinary actions.",
      lastUpdated: "December 2023",
      status: "Under Review",
    },
  ]

  const amendments = [
    {
      date: "March 2024",
      title: "Amendment to Academic Assessment Regulations",
      description: "Updated thesis examination procedures and external examiner requirements",
      type: "Academic",
    },
    {
      date: "January 2024",
      title: "Revision of Admission Criteria",
      description: "Modified English proficiency requirements for international students",
      type: "Admission",
    },
    {
      date: "November 2023",
      title: "Research Ethics Guidelines Update",
      description: "Enhanced data protection measures and consent procedures",
      type: "Research",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">NCAS Bylaws and Regulations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive guidelines governing academic programs, student conduct, research ethics, and institutional
            policies at the National Centre for Advanced Studies.
          </p>
          <div className="flex justify-center gap-4">
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download Complete Bylaws
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Quick Reference Guide
            </Button>
          </div>
        </div>

        {/* Bylaw Sections */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Bylaw Sections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bylawSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Key Policies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Key Policies</h2>
          <div className="space-y-4">
            {keyPolicies.map((policy, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{policy.policy}</h3>
                    <div className="flex gap-2">
                      <Badge variant={policy.status === "Current" ? "default" : "secondary"}>{policy.status}</Badge>
                      <Badge variant="outline">{policy.lastUpdated}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{policy.description}</p>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Policy
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Amendments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Recent Amendments</h2>
          <div className="space-y-4">
            {amendments.map((amendment, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{amendment.title}</h3>
                      <p className="text-sm text-muted-foreground">{amendment.date}</p>
                    </div>
                    <Badge variant="outline">{amendment.type}</Badge>
                  </div>
                  <p className="text-muted-foreground">{amendment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">Important Notice</h3>
                <p className="text-orange-800 mb-4">
                  All students, faculty, and staff are required to familiarize themselves with these bylaws and
                  regulations. Ignorance of the rules does not excuse non-compliance. Regular updates are communicated
                  through official channels.
                </p>
                <div className="space-y-2 text-sm text-orange-700">
                  <p>• Bylaws are reviewed annually by the Academic Council</p>
                  <p>• Students receive orientation on key policies during registration</p>
                  <p>• Faculty handbook contains detailed implementation guidelines</p>
                  <p>• Questions about bylaws should be directed to the Registrar's Office</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Clarification?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Registrar's Office</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 registrar@ncas.ac.lk</p>
                  <p>📞 +94 11 2345 680</p>
                  <p>🕒 Mon-Fri: 8:30 AM - 4:30 PM</p>
                  <p>📍 Administration Building, Ground Floor</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Student Affairs</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 studentaffairs@ncas.ac.lk</p>
                  <p>📞 +94 11 2345 681</p>
                  <p>🕒 Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>📍 Student Services Center</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

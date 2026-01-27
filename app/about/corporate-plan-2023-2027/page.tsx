import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Target } from "lucide-react"
import Image from "next/image"

export default function CorporatePlan2023Page() {
  const documents = [
    {
      title: "Corporate Plan 2023-2027",
      description: "NCAS Corporate Plan outlining organizational goals and development strategies for 2023-2027.",
      url: "/downloads/CORPORATE-PLAN-2023-2027.pdf",
      type: "Corporate Plan",
      year: "2023-2027"
    },
    {
      title: "Strategic Plan 2025-2029",
      description: "Strategic plan for NCAS covering the period 2025-2029 with key objectives and initiatives.",
      url: "/downloads/STRATEGIC-PLAN-2025-2029.pdf",
      type: "Strategic Plan",
      year: "2025-2029"
    },
    {
      title: "Strategic Plan 2024-2028",
      description: "Comprehensive strategic plan outlining NCAS's vision and strategic direction for 2024-2028.",
      url: "/downloads/Strategic-Plan-2024.pdf",
      type: "Strategic Plan",
      year: "2024-2028"
    },
    {
      title: "Action Plan 2025",
      description: "Detailed action plan for 2025 outlining specific activities and performance targets.",
      url: "/downloads/ACTION-PLAN-2025.pdf",
      type: "Action Plan",
      year: "2025"
    },
    {
      title: "Performance Against Action Plan 2023",
      description: "Report on performance against the 2023 action plan with achievements and outcomes.",
      url: "/downloads/PERFORMANCE-AGAINST-ACTION-PLAN-2023.pdf",
      type: "Performance Report",
      year: "2023"
    },
    {
      title: "Master Procurement Plan 2025",
      description: "Master procurement plan for 2025 detailing procurement activities and requirements.",
      url: "/downloads/MASTER-PROCUREMENT-PLAN-2025-SIGNED.pdf",
      type: "Procurement Plan",
      year: "2025"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/ncas-logo.png"
              alt="NCAS Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Corporate Plan 2023-2027</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NCAS Corporate Plan and related strategic documents for organizational development and planning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{doc.year}</span>
                      <Target className="h-4 w-4 ml-2" />
                      <span>{doc.type}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {doc.description}
                </p>
                <Button asChild size="sm" className="w-full">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Additional Resources</h3>
            <p className="text-muted-foreground text-sm mb-4">
              For more information about NCAS organizational structure and governance, please visit our related pages.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" asChild>
                <a href="/about/organizational-structure">Organizational Structure</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/about/vision-mission">Vision & Mission</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/about/objectives">Objectives</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
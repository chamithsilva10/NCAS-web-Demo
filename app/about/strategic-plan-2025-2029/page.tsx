import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export default function StrategicPlan2025Page() {
  const planUrl = "/downloads/STRATEGIC-PLAN-2025-2029.pdf"

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Strategic Plan 2025-2029</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NCAS Strategic Plan for the period 2025-2029, outlining our vision, goals, and strategic initiatives.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <FileText className="h-12 w-12 text-primary" />
                <div>
                  <CardTitle className="text-2xl">NCAS Strategic Plan 2025-2029</CardTitle>
                  <p className="text-muted-foreground">PDF Document</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                This strategic plan outlines NCAS's vision, mission, objectives, and key strategies for the period
                2025-2029. It provides a roadmap for advancing research excellence in humanities and social sciences.
              </p>
              <Button asChild size="lg" className="w-full">
                <a href={planUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  View Strategic Plan
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function UniversitiesActPage() {
  const actUrl = "https://www.ugc.ac.lk/index.php?option=com_content&view=article&id=1768&Itemid=196&lang=en"

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Universities Act</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Universities Act, No. 16 of 1978, which provides the legal framework for higher education in Sri Lanka.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <ExternalLink className="h-12 w-12 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Universities Act, No. 16 of 1978</CardTitle>
                  <p className="text-muted-foreground">University Grants Commission</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                The Universities Act provides the legal basis for the establishment and governance of universities
                and higher education institutions in Sri Lanka. It outlines the powers and functions of the University
                Grants Commission and the framework for academic governance.
              </p>
              <Button asChild size="lg" className="w-full">
                <a href={actUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Universities Act
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function OrdinancePage() {
  const ordinanceDocuments = [
    {
      title: "NCAS Ordinance No. 02 of 2005 - English Version",
      url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-English.pdf",
      language: "English",
    },
    {
      title: "NCAS Ordinance Amendments 2008 - English Version",
      url: "https://ncas.ac.lk/wp-content/uploads/2014/10/Ncas_Ordinance_Amendments.pdf",
      language: "English",
    },
    {
      title: "NCAS Ordinance No. 02 of 2005 - Sinhala Version",
      url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-Sinhala.pdf",
      language: "Sinhala",
    },
    {
      title: "NCAS Ordinance No. 02 of 2005 - Tamil Version",
      url: "https://ncas.ac.lk/wp-content/uploads/2014/10/ncasordinance-Tamil.pdf",
      language: "Tamil",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">NCAS Ordinance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The legal foundation of the National Centre for Advanced Studies in Humanities and Social Sciences,
            established by Ordinance No. 02 of 2005 under Section 24A of the Universities Act, No. 16 of 1978.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ordinanceDocuments.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Language: {doc.language}</p>
                  </div>
                  <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Legal Establishment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The NCAS was legally established by Ordinance No. 02 of 2005 and was promulgated in Gazette
              Extraordinary No. 1415/17 of 19th October 2005 under Section 24A of the Universities Act, No. 16 of 1978.
            </p>
            <p className="text-muted-foreground">
              This ordinance provides the legal framework for the establishment, governance, and operations of the
              National Centre for Advanced Studies in Humanities and Social Sciences.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
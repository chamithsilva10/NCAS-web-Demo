import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professor Shihan de Silva Jayasuriya | Visiting Research Fellow | NCAS",
  description:
    "Profile of Professor Shihan de Silva Jayasuriya, Visiting Research Fellow at NCAS from 11 June 2024, conducting research on the lacemaking industry in Sri Lanka.",
}

export default function ShihanPage() {
  const qualifications = [
    {
      degree: "PhD",
      institution: "University of Westminster, UK",
      year: "2004",
      dissertation:
        "Indo-Portuguese of Ceylon: History, Linguistics and Literature",
      supervisor: "Professor Philip Baker",
      examiners: "Professor David Brookshaw and Dr Patricia Odber Baubeta",
    },
    {
      degree: "MSc – Finance",
      institution: "University of London, UK",
      year: "1995",
      dissertation: "Corporate Governance and the Takeover Market",
      supervisor: "Professor Norvald Smith",
    },
    {
      degree: "BSc – Economics (Honours Second Class Upper Division)",
      institution: "University of London, UK",
      year: "1993",
      dissertation: "Central Banks and Monetary Policy",
      supervisor: "Professor Vittorio Grilli",
    },
    {
      degree: "Diploma – Linguistics",
      institution: "University of Westminster, UK",
      year: "1998",
    },
    {
      degree: "Diploma – Piano Performance",
      institution: "London College of Music, University of West London",
      year: "2015",
    },
  ]

  const awards = [
    "International Institute of Macau Award for trilingual (English, Portuguese, Sinhala) translation of book on Luso-Asians of Sri Lanka, 2021.",
    "Cassal Trust Award Fund: to Organise a tribute conference for the distinguished Creole Linguist late Professor Philip Baker, 2021.",
    "Coffin Fund Award: to convene a symposium on Transoceanic Lusitanian Linguistics and Cultures, 2021.",
    "University of Hawaii Distinguished: Rama Watumull Collaborative Lecture Series award from the Center for South Asian Studies & Student Equity, Excellence and Diversity.",
  ]

  const formerPositions = [
    "Visiting Fellow, Lucy Cavendish College, University of Cambridge",
    "Visiting Professor, College of International Relations, Ritsumeikan University, Kyoto, Japan",
    "Collaborative Lecturer, University of Hawaii, USA",
    "Visiting Lecturer, Japan Society for the Promotion of Science: Unfree Labour from a Historical Perspective",
    "Visiting Fellow, International Institute of Social History (IISG), Amsterdam",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-36 h-36 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl font-bold text-white">S</span>
            </div>
            <div>
              <Badge className="mb-3 bg-white/20 text-white border-white/30">Visiting Research Fellow</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Professor Shihan de Silva Jayasuriya</h1>
              <p className="text-primary-foreground/90 text-lg mb-1">
                Appointed as Visiting Research Fellow of NCAS from 11 June 2024
              </p>
              <p className="text-primary-foreground/80 text-sm">
                University of Westminster, UK · Institute of Commonwealth Studies, University of London
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">

          {/* Research at NCAS */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Research at NCAS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Professor Shihan de Silva Jayasuriya is conducting a study on the{" "}
                <strong>lacemaking industry in the Southern Province of Sri Lanka</strong>. She is researching product
                variation, marketing strategies, and exposure to global markets to ascertain how the craft can be
                safeguarded and how the income of culture bearers can be enhanced.
              </p>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualifications.map((q, i) => (
                  <div key={i} className="border-l-4 border-primary/30 pl-4 py-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold">{q.degree}</span>
                      <Badge variant="outline" className="text-xs">{q.year}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{q.institution}</p>
                    {q.dissertation && (
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="font-medium">Dissertation:</span> {q.dissertation}
                      </p>
                    )}
                    {q.supervisor && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Supervisor:</span> {q.supervisor}
                      </p>
                    )}
                    {q.examiners && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Examiners:</span> {q.examiners}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Former Visiting Positions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Former Visiting Positions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {formerPositions.map((pos, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{pos}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

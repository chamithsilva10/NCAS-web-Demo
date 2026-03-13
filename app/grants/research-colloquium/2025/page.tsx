import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Colloquium 2025 | NCAS",
  description:
    "NCAS Research Colloquium 2025 – presentations and abstracts from NCAS grantees showcasing their latest research findings.",
}

const presentations = [
  { no: "01", name: "Arivarasy Thanushan", institution: "University of Jaffna", title: "Practices of Disciplinary Literacy for ESL Higher Educational students in Sri Lanka: In between access and Transformation" },
  { no: "02", name: "Sakeena, MNF", institution: "University of Colombo", title: "The role of digital inclusion in mitigating social exclusion among youth in the marginalized community: a case study of Sri Lanka's tea estate" },
  { no: "03", name: "Ambepitiya Wijethunga Gamage Champa Nilanthi Wijethunga", institution: "Sabaragamuwa University of Sri Lanka", title: "Impact of Financial Market Development on Environmental Quality in Australia" },
  { no: "04", name: "Binendri Perera", institution: "University of Colombo", title: "Positioning local government gender quotas within local democracy" },
  { no: "05", name: "DMTP Dassanayake", institution: "University of Sri Jayewardenepura", title: "How do organizations change with the internal adoption of social innovation to create social and economic value" },
  { no: "06", name: "Madukala J I", institution: "University of Sri Jayewardenepura", title: "Who Gets Mismatched? An Analysis of the Determinants and Trends of Educational Mismatch in Sri Lanka (2019–2023)" },
  { no: "07", name: "H.K.I. Sewwandi", institution: "University of Kelaniya", title: "Blended Librarianship: Exploring a Concept to Support Teaching and Learning in Sri Lankan Universities in the Digital Era" },
  { no: "08", name: "H.M. Nishanthi", institution: "University of Kelaniya", title: "Empathetic Leadership as a Catalyst for Enhanced Job Performance: A Conceptual Exploration" },
  { no: "09", name: "Hemanthi Hidellaarachchi", institution: "University of Ruhuna", title: "Academic Language support Given to Students in the English Medium Instruction" },
  { no: "10", name: "Hasitha Pathirana", institution: "University of Kelaniya", title: "Queering the Sri Lankan Middle Class: Negotiating Norms and Morals" },
  { no: "11", name: "K.G.N.U Ranaweera", institution: "University of Sri Jayewardenepura", title: "Gender and Urban Spaces: Understanding Female Fear of Crime in Colombo, Sri Lanka" },
  { no: "12", name: "Indeewari K. Galagama", institution: "University of Kelaniya", title: "Echoes of Silence: Unravelling Enforced Disappearances and the Quest for Reconciliation in the Aftermath of the JVP Insurgency in Sri Lanka" },
  { no: "13", name: "Ms. Nilanthini Chenthurran", institution: "Eastern University", title: "The impact of British colonial rule on Tamil-speaking communities of the Eastern Province of Sri Lanka from 1850 to 1948 AD" },
  { no: "14", name: "P.N Gardihewa", institution: "University of Kelaniya", title: "A Role of 21st Century Skills in Undergraduate Employability: An Investigation Studies" },
  { no: "15", name: "Satya Ramanayake", institution: "University of Moratuwa", title: "European Sovereign Credit Crisis - Difference-in-difference Test" },
  { no: "16", name: "Thanuka Mahesha de Silva", institution: "University of Ruhuna", title: "Toward an understanding of customer intention to co-create with anthropomorphic embodied conversational agents in customer-facing services" },
]

export default function ResearchColloquium2025Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Grants</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RESEARCH COLLOQUIUM 2025</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Annual research colloquium showcasing the latest research findings from NCAS scholars
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Users className="h-5 w-5" />
            <span>{presentations.length} Presentations</span>
          </div>
        </div>
      </section>

      {/* Presentations Table */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Presentations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 text-left">
                      <th className="px-4 py-3 font-semibold w-12">No.</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">University / Institute</th>
                      <th className="px-4 py-3 font-semibold">Abstract Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presentations.map((p, i) => (
                      <tr key={i} className="border-t hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-4 text-muted-foreground">{p.no}</td>
                        <td className="px-4 py-4 font-medium">{p.name}</td>
                        <td className="px-4 py-4 text-muted-foreground">{p.institution}</td>
                        <td className="px-4 py-4 text-muted-foreground">{p.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

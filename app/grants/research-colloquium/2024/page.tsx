import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Colloquium 2024 | NCAS",
  description:
    "NCAS Research Colloquium 2024 – presentations and abstracts from NCAS grantees showcasing their research.",
}

const presentations = [
  { no: "01", name: "Ms. Nilanthini Chenthurran", institution: "Eastern University", title: "Colonial Impact on Tamil-speaking Communities of the Eastern Province of Sri Lanka" },
  { no: "02", name: "Mr. Manoj Jinadasa", institution: "University of Kelaniya", title: "Rural Young Men, Facebook and Same-Sex Relationships in Sri Lanka" },
  { no: "03", name: "Ms. Sashika Karunanayake", institution: "The Open University of Sri Lanka", title: "What are the Professional development needs of Novice Principals in Sri Lanka" },
  { no: "04", name: "Dr. M K Nadeeka Damayanthi", institution: "University of Kelaniya", title: "Impact of Social Norms and Human Behaviour on Policy Implementation: A Case of national Solid Waste Management Policy in Sri Lanka" },
  { no: "05", name: "Ms. Hemanthi Hidellaarachchi", institution: "University of Ruhuna", title: "Investigating the Alignment between an English Language Academic Support Course and Students' Transition to English Medium Instruction at a Sri Lankan University" },
  { no: "06", name: "Ms. K G N U Ranaweera", institution: "University of Sri Jayewardenepura", title: "Gender and Urban Spaces: Understanding Female Fear of Crime in Colombo, Sri Lanka" },
  { no: "07", name: "Mr. Thanuka Mahesha de Silva", institution: "University of Ruhuna", title: "Toward an Understanding of Customer Intention to Co-create with Anthropomorphic Embodied Conversational Agents in Customer-facing Utilitarian-dominant Services" },
  { no: "08", name: "Mr. Hasitha Pathirana", institution: "University of Kelaniya", title: "Tracing Subaltern Sexual Citizenship in Sri Lanka" },
  { no: "09", name: "Ms. A W G C Wijethunga, Mr. M M Rahman, Mr. Rapan Sarker", institution: "Sabaragamuwa University of Sri Lanka", title: "Fitness of Kuznets Curve in Understanding the Link between Financial Development and Environmental Quality in Australia" },
  { no: "10", name: "Mr. N Sivakaran", institution: "University of Jaffna", title: "The Rational Collective will Formation in the Constitutional State in Sri Lanka: A Study Based on Habermas's Theory of Communicative Action and Deliberative Discourse" },
  { no: "11", name: "Ms. S S Ramanayake", institution: "University of Moratuwa", title: "Sovereign Credit and Domestic Stock and Bond Market Co-movement" },
  { no: "12", name: "Ms. J I Madukala", institution: "University of Sri Jayawardenapura", title: "Educational Mismatch and Graduate Earnings: A Longitudinal Analysis of the New Zealand Labour Market Analysis" },
  { no: "13", name: "Ms. P N Gardihewa", institution: "Gampaha Wickramarachchi University of Indigenous Medicine", title: "Examining Crucial Employability Skills via a Labour Market Perspective: Adopting to the Needs of the 21st–Century Workforce" },
  { no: "14", name: "Ms. I K Galagama", institution: "University of Kelaniya", title: "The Enforced Disappearances in Hindering Human Security and Truth and Reconciliation: A Case Study of Sri Lanka" },
  { no: "15", name: "Ms. H K I Sewwandi", institution: "University of Kelaniya", title: "Blended Librarianship: Exploring a Concept to Support Teaching and Learning in Sri Lankan Universities in the Digital Era" },
  { no: "16", name: "Mr. D M T P Dassanayake", institution: "University of Sri Jayewardenepura", title: "How do Organizations Change with the Internal Adoption of Social Innovation to Create Social and Economic Value" },
  { no: "17", name: "Ms. Binendri Perera", institution: "University of Colombo", title: "Significance of a Feminist Constitutional Analysis of Local Government" },
  { no: "18", name: "H.M. Menaka", institution: "University of Kelaniya", title: "Leader Narcissism and Employee Job Performance" },
]

export default function ResearchColloquium2024Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Grants</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RESEARCH COLLOQUIUM 2024</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Showcasing research by NCAS grantees – presentations and abstracts
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

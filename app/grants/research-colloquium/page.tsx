

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, BookOpen, Award } from "lucide-react"

const colloquiumParticipants = [
  {
    id: 1,
    name: "Arivarasy Thanushan",
    university: "University of Jaffna",
    title: "Practices of Disciplinary Literacy for ESL Higher Educational students in Sri Lanka: In between access and Transformation"
  },
  {
    id: 2,
    name: "Sakeena, MNF",
    university: "University of Colombo",
    title: "The role of digital inclusion in mitigating social exclusion among youth in the marginalized community: a case study of Sri Lanka's tea estate"
  },
  {
    id: 3,
    name: "Ambepitiya Wijethunga Gamage Champa Nilanthi Wijethunga",
    university: "Sabaragamuwa University of Sri Lanka",
    title: "Impact of Financial Market Development on Environmental Quality in Australia"
  },
  {
    id: 4,
    name: "Binendri Perera",
    university: "University of Colombo",
    title: "Positioning local government gender quotas within local democracy"
  },
  {
    id: 5,
    name: "DMTP Dassanayake",
    university: "University of Sri Jayewardenepura",
    title: "How do organizations change with the internal adoption of social innovation to create social and economic value"
  },
  {
    id: 6,
    name: "Madukala J I",
    university: "University of Sri Jayewardenepura",
    title: "Who Gets Mismatched? An Analysis of the Determinants and Trends of Educational Mismatch in Sri Lanka (2019–2023)"
  },
  {
    id: 7,
    name: "H.K.I. Sewwandi",
    university: "University of Kelaniya",
    title: "Blended Librarianship: Exploring a Concept to Support Teaching and Learning in Sri Lankan Universities in the Digital Era"
  },
  {
    id: 8,
    name: "H.M. Nishanthi",
    university: "University of Kelaniya",
    title: "Empathetic Leadership as a Catalyst for Enhanced Job Performance: A Conceptual Exploration"
  },
  {
    id: 9,
    name: "Hemanthi Hidellaarachchi",
    university: "University of Ruhuna",
    title: "Academic Language support Given to Students in the English Medium Instruction"
  },
  {
    id: 10,
    name: "Hasitha Pathirana",
    university: "University of Kelaniya",
    title: "Queering the Sri Lankan Middle Class: Negotiating Norms and Morals"
  },
  {
    id: 11,
    name: "K.G.N.U Ranaweera",
    university: "University of Sri Jayewardenepura",
    title: "Gender and Urban Spaces: Understanding Female Fear of Crime in Colombo, Sri Lanka"
  },
  {
    id: 12,
    name: "Indeewari K. Galagama",
    university: "University of Kelaniya",
    title: "Echoes of Silence: Unravelling Enforced Disappearances and the Quest for Reconciliation in the Aftermath of the JVP Insurgency in Sri Lanka"
  },
  {
    id: 13,
    name: "Ms. Nilanthini Chenthurran",
    university: "Eastern University",
    title: "The impact of British colonial rule on Tamil-speaking communities of the Eastern Province of Sri Lanka from 1850 to 1948 AD"
  },
  {
    id: 14,
    name: "P.N Gardihewa",
    university: "University of Kelaniya",
    title: "A Role of 21st Century Skills in Undergraduate Employability : An Investigation Studies"
  },
  {
    id: 15,
    name: "Satya Ramanayake",
    university: "University of Moratuwa",
    title: "European Sovereign Credit Crisis- Difference-in-difference Test"
  },
  {
    id: 16,
    name: "Thanuka Mahesha de Silva",
    university: "University of Ruhuna",
    title: "Toward an understanding of customer intention to co-create with anthropomorphic embodied conversational agents in customer-facing services"
  }
]

export default function ResearchColloquiumPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Colloquium 2025</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NCAS Research Colloquium showcasing innovative research projects from emerging scholars
            in humanities and social sciences across Sri Lankan universities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{colloquiumParticipants.length}</div>
              <p className="text-xs text-muted-foreground">Research scholars</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Universities</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(colloquiumParticipants.map(p => p.university)).size}
              </div>
              <p className="text-xs text-muted-foreground">Institutions represented</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Research Areas</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Diverse</div>
              <p className="text-xs text-muted-foreground">Humanities & Social Sciences</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the Colloquium</h2>
          <p className="text-muted-foreground mb-4">
            The NCAS Research Colloquium provides a platform for emerging researchers to present their work,
            receive feedback from peers and established scholars, and network with fellow researchers.
            This year's colloquium features presentations from scholars across multiple Sri Lankan universities,
            covering diverse topics in humanities and social sciences.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              2025
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Participants & Abstracts</h2>
          <div className="grid gap-6">
            {colloquiumParticipants.map((participant) => (
              <Card key={participant.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg mb-2">{participant.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{participant.university}</Badge>
                    </div>
                    <Badge variant="outline">#{participant.id.toString().padStart(2, '0')}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium text-foreground mb-2">Abstract Title:</h3>
                  <p className="text-muted-foreground">{participant.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      </div>
  )
}
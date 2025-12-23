import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const colloquium2024 = [
  { no: 1, name: "Ms. Nilanthini Chenthurran", university: "Eastern University", title: "Colonial Impact on Tamil-speaking Communities of the Eastern Province of Sri Lanka" },
  { no: 2, name: "Mr. Manoj Jinadasa", university: "University of Kelaniya", title: "Rural Young Men, Facebook and Same-Sex Relationships in Sri Lanka" },
  { no: 3, name: "Ms. Sashika Karunanayake", university: "The Open University of Sri Lanka", title: "What are the Professional development needs of Novice Principals in Sri Lanka" },
  { no: 4, name: "Dr. M K Nadeeka Damayanthi", university: "University of Kelaniya", title: "Impact of Social Norms and Human Behaviour on Policy Implementation: A Case of national Solid Waste Management Policy in Sri Lanka" },
  { no: 5, name: "Ms. Hemanthi Hidellaarachchi", university: "University of Ruhuna", title: "Investigating the Alignment between an English Language Academic Support Course and Students' Transition to English Medium Instruction at a Sri Lankan University" },
  { no: 6, name: "Ms. K G N U Ranaweera", university: "University of Sri Jayewardenepura", title: "Gender and Urban Spaces: Understanding Female Fear of Crime in Colombo, Sri Lanka" },
  { no: 7, name: "Mr. Thanuka Mahesha de Silva", university: "University of Ruhuna", title: "Toward an Understanding of Customer Intention to Co-create with Anthropomorphic Embodied Conversational Agents in Customer-facing Utilitarian-dominant Services" },
  { no: 8, name: "Mr. Hasitha Pathirana", university: "University of Kelaniya", title: "Tracing Subaltern Sexual Citizenship in Sri Lanka" },
  { no: 9, name: "Ms. A W G C Wijethunga, Mr. M M Rahman, Mr. Rapan Sarker", university: "Sabaragamuwa University of Sri Lanka", title: "Fitness of Kuznets Curve in Understanding the Link between Financial Development and Environmental Quality in Australia" },
  { no: 10, name: "Mr. N Sivakaran", university: "University of Jaffna", title: "The Rational Collective will Formation in the Constitutional State in Sri Lanka: A Study Based on Habermas's Theory of Communicative Action and Deliberative Discourse" },
  { no: 11, name: "Ms. S S Ramanayake", university: "University of Moratuwa", title: "Sovereign Credit and Domestic Stock and Bond Market Co-movement" },
  { no: 12, name: "Ms. J I Madukala", university: "University of Sri Jayawardenapura", title: "Educational Mismatch and Graduate Earnings: A Longitudinal Analysis of the New Zealand Labour Market Analysis" },
  { no: 13, name: "Ms. P N Gardihewa", university: "Gampaha Wickramarachchi University of Indigenous Medicine", title: "Examining Crucial Employability Skills via a Labour Market Perspective: Adopting to the Needs of the 21st –Century Workforce" },
  { no: 14, name: "Ms. I k Galagama", university: "University of Kelaniya", title: "The Enforced Disappearances in Hindering Human Security and Truth and Reconciliation: A Case Study of Sri Lanka" },
  { no: 15, name: "Ms. H K I Sewwandi", university: "University of Kelaniya", title: "Blended Librarianship: Exploring a Concept to Support Teaching and Learning in Sri Lankan Universities in the Digital Era" },
  { no: 16, name: "Mr. D M T P Dassanayake", university: "University of Sri Jayewardenepura", title: "How do Organizations Change with the Internal Adoption of Social Innovation to Create Social and Economic Value" },
  { no: 17, name: "Ms. Binendri Perera", university: "University of Colombo", title: "Significance of a Feminist Constitutional Analysis of Local Government" },
  { no: 18, name: "H.M. Menaka", university: "University of Kelaniya", title: "Leader Narcissism and Employee Job Performance" },
];

const colloquium2025 = [
  { no: 1, name: "Arivarasy Thanushan", university: "University of Jaffna", title: "Practices of Disciplinary Literacy for ESL Higher Educational students in Sri Lanka: In between access and Transformation" },
  { no: 2, name: "Sakeena, MNF", university: "University of Colombo", title: "The role of digital inclusion in mitigating social exclusion among youth in the marginalized community: a case study of Sri Lanka's tea estate" },
  { no: 3, name: "Ambepitiya Wijethunga Gamage Champa Nilanthi Wijethunga", university: "Sabaragamuwa University of Sri Lanka", title: "Impact of Financial Market Development on Environmental Quality in Australia" },
  { no: 4, name: "Binendri Perera", university: "University of Colombo", title: "Positioning local government gender quotas within local democracy" },
  { no: 5, name: "DMTP Dassanayake", university: "University of Sri Jayewardenepura", title: "How do organizations change with the internal adoption of social innovation to create social and economic value" },
  { no: 6, name: "Madukala J I", university: "University of Sri Jayewardenepura", title: "Who Gets Mismatched? An Analysis of the Determinants and Trends of Educational Mismatch in Sri Lanka (2019–2023" },
  { no: 7, name: "H.K.I. Sewwandi", university: "University of Kelaniya", title: "Blended Librarianship: Exploring a Concept to Support Teaching and Learning in Sri Lankan Universities in the Digital Era" },
  { no: 8, name: "H.M. Nishanthi", university: "University of Kelaniya", title: "Empathetic Leadership as a Catalyst for Enhanced Job Performance: A Conceptual Exploration" },
  { no: 9, name: "Hemanthi Hidellaarachchi", university: "University of Ruhuna", title: "Academic Language support Given to Students in the English Medium Instruction" },
  { no: 10, name: "Hasitha Pathirana", university: "University of Kelaniya", title: "Queering the Sri Lankan Middle Class: Negotiating Norms and Morals" },
  { no: 11, name: "K.G.N.U Ranaweera", university: "University of Sri Jayewardenepura", title: "Gender and Urban Spaces: Understanding Female Fear of Crime in Colombo, Sri Lanka" },
  { no: 12, name: "Indeewari K. Galagama", university: "University of Kelaniya", title: "Echoes of Silence: Unravelling Enforced Disappearances and the Quest for Reconciliation in the Aftermath of the JVP Insurgency in Sri Lanka" },
  { no: 13, name: "Ms. Nilanthini Chenthurran", university: "Eastern University", title: "The impact of British colonial rule on Tamil-speaking communities of the Eastern Province of Sri Lanka from 1850 to 1948 AD" },
  { no: 14, name: "P.N Gardihewa", university: "University of Kelaniya", title: "A Role of 21st Century Skills in Undergraduate Employability : An Investigation Studies" },
  { no: 15, name: "Satya Ramanayake", university: "University of Moratuwa", title: "European Sovereign Credit Crisis- Difference-in-difference Test" },
  { no: 16, name: "Thanuka Mahesha de Silva", university: "University of Ruhuna", title: "Toward an understanding of customer intention to co-create with anthropomorphic embodied conversational agents in customer-facing services" },
];

export default function ColloquiumPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Research Colloquium</h1>
      <Tabs defaultValue="2024" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="2024">2024</TabsTrigger>
          <TabsTrigger value="2025">2025</TabsTrigger>
        </TabsList>
        <TabsContent value="2024">
          <Card>
            <CardHeader>
              <CardTitle>RESEARCH COLLOQUIUM 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/ncas-research-colloquium.jpg" alt="Research Colloquium 2024" className="w-full mb-6" />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>University/ Institute</TableHead>
                    <TableHead>Abstract Title</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {colloquium2024.map((item) => (
                    <TableRow key={item.no}>
                      <TableCell>{item.no}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.university}</TableCell>
                      <TableCell>{item.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="2025">
          <Card>
            <CardHeader>
              <CardTitle>RESEARCH COLLOQUIUM 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/flyer-2025.jpg" alt="Research Colloquium 2025" className="w-full mb-6" />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>University/ Institute</TableHead>
                    <TableHead>Abstract Title</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {colloquium2025.map((item) => (
                    <TableRow key={item.no}>
                      <TableCell>{item.no}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.university}</TableCell>
                      <TableCell>{item.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
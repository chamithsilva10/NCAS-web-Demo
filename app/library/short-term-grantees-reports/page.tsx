import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Short-Term Grantees Research Reports | NCAS",
  description: "Research reports submitted by NCAS Short-Term Grant recipients for 2024 and 2025.",
}

const reports2024Round1 = [
  {
    no: "01",
    name: "Dr. E.M.P.C.S. Ekanayake",
    institution: "Dean, Faculty of Arts, University of Peradeniya, Peradeniya",
    title:
      "Meaningful Citizenship for Hill Country Tamils in Sri Lanka through Education: History in Text Books to Promote Multiculturalism and Co-Existence in a Multi-Ethnic Country",
    start: "01 October 2024",
    end: "30 September 2025",
  },
  {
    no: "02",
    name: "Professor W.M.P. Sudarshana Bandara",
    institution: "Department of Fine Arts, Faculty of Arts, University of Peradeniya, Peradeniya",
    title:
      "The Grammar of Art in Buddhist Mural Paintings of the Kandyan Tradition as a Method of Expression (with special reference to Central Kandyan and Southern Province Traditions in Sri Lanka)",
    start: "01 October 2024",
    end: "30 September 2025",
  },
  {
    no: "03",
    name: "Mr. P. Vijith Rohan Fernando",
    institution:
      "Department of Christian Culture and Western Classical Culture, Faculty of Humanities, University of Kelaniya, Kelaniya",
    title:
      "Passion Play on Marcan Jesus: A New Paradigm in Sri Lankan Passion Play Based on Modern Biblical Exegesis",
    start: "01 October 2024",
    end: "30 September 2025",
  },
]

const reports2024Round2 = [
  {
    no: "01",
    name: "Professor Anton Piyrathne",
    institution:
      "Dean, Faculty of Humanities and Social Sciences, Open University of Sri Lanka, Nawala, Nugegoda",
    title:
      "Survival of Religious Beliefs within the Indian Origin Plantation Tamil Community against the Changing Socio-Economic Order in Sri Lanka",
    start: "01 February 2025",
    end: "31 January 2026",
  },
  {
    no: "02",
    name: "Mr. V. Alagarathnam",
    institution:
      "Senior Lecturer, Department of Philosophy and Value Studies, Faculty of Arts and Culture, Eastern University, Sri Lanka, Chenkallady",
    title:
      "Assessing the Impact of Transportation Accessibility and Affordability on the Socio-Economic Development of the Urban Poor: A Comparative Study of Colombo and Batticaloa",
    start: "01 February 2025",
    end: "31 January 2026",
  },
]

const reports2025Round1 = [
  {
    no: "01",
    name: "K.V.J. Koshalee",
    institution:
      "Lecturer in Archaeology, Department of History and Archaeology, Faculty of Humanities and Social Sciences, University of Ruhuna, Sri Lanka",
    title:
      "Evolving Divinity: Tracing the Religious Conception of the Buddha in the Colossal Statues of Sri Lanka",
    start: "01 July 2025",
    end: "30 June 2026",
  },
]

function ReportTable({
  reports,
}: {
  reports: { no: string; name: string; institution: string; title: string; start: string; end: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 text-left">
            <th className="px-4 py-3 font-semibold w-12">No.</th>
            <th className="px-4 py-3 font-semibold">Name &amp; Institution</th>
            <th className="px-4 py-3 font-semibold">Research Title</th>
            <th className="px-4 py-3 font-semibold whitespace-nowrap">Period</th>
            <th className="px-4 py-3 font-semibold">Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i} className="border-t hover:bg-muted/20 transition-colors">
              <td className="px-4 py-4 text-muted-foreground">{r.no}</td>
              <td className="px-4 py-4">
                <p className="font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.institution}</p>
              </td>
              <td className="px-4 py-4 text-muted-foreground">{r.title}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <p className="text-xs text-muted-foreground">{r.start}</p>
                <p className="text-xs text-muted-foreground">to</p>
                <p className="text-xs text-muted-foreground">{r.end}</p>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center gap-1 text-xs text-primary cursor-not-allowed opacity-60">
                  <FileText className="h-3 w-3" />
                  View Report
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ShortTermGranteesReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Library</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Short-Term Grantees Research Reports</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Research reports submitted by NCAS Short-Term Grant recipients
          </p>
        </div>
      </section>

      {/* Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-14">

          {/* 2024 – 1st Round */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">SHORT-TERM GRANTS Reports – 2024</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Badge>1st Round</Badge>
                </h3>
                <ReportTable reports={reports2024Round1} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Badge variant="secondary">2nd Round</Badge>
                </h3>
                <ReportTable reports={reports2024Round2} />
              </div>
            </CardContent>
          </Card>

          {/* 2025 – 1st Round */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">SHORT-TERM GRANTS Reports – 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Badge>1st Round</Badge>
                </h3>
                <ReportTable reports={reports2025Round1} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

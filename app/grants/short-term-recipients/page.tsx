"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, AlertCircle, Award, Users, Calendar } from "lucide-react"

const grants2024 = {
  firstRound: [
    {
      no: 1,
      name: "Dr. E.M.P.C.S. Ekanayake",
      position: "Dean, Faculty of Arts",
      institution: "University of Peradeniya",
      project: "Meaningful Citizenship for Hill Country Tamils in Sri Lanka through Education: History in Text Books to Promote Multiculturalism and Co-Existence in a Multi-Ethnic Country",
      startDate: "01 October 2024",
      endDate: "30 September 2025",
      status: "Completed"
    },
    {
      no: 2,
      name: "Professor W.M.P. Sudarshana Bandara",
      position: "Department of Fine Arts, Faculty of Arts",
      institution: "University of Peradeniya",
      project: "The Grammar of Art in Buddhist Mural Paintings of the Kandyan Tradition as a Method of Expression",
      startDate: "01 October 2024",
      endDate: "30 September 2025",
      status: "Completed"
    },
    {
      no: 3,
      name: "Mr. P. Vijith Rohan Fernando",
      position: "Department of Christian Culture and Western Classical Culture, Faculty of Humanities",
      institution: "University of Kelaniya",
      project: "Passion Play on Marcan Jesus: A New Paradigm in Sri Lankan Passion Play Based on Modern Biblical Exegesis",
      startDate: "01 October 2024",
      endDate: "30 September 2025",
      status: "Completed"
    }
  ],
  secondRound: [
    {
      no: 1,
      name: "Professor Anton Piyarathne",
      position: "Dean, Faculty of Humanities and Social Sciences",
      institution: "Open University of Sri Lanka",
      project: "Survival of Religious Beliefs within the Indian Origin Plantation Tamil Community against the Changing Socio-Economic Order in Sri Lanka",
      startDate: "01 February 2025",
      endDate: "31 January 2026",
      status: "Extension Requested"
    },
    {
      no: 2,
      name: "Mr. V. Alagarathnam",
      position: "Senior Lecturer, Department of Philosophy and Value Studies, Faculty of Arts and Culture",
      institution: "Eastern University, Sri Lanka",
      project: "Assessing the Impact of Transportation Accessibility and Affordability on the Socio-Economic Development of the Urban Poor: A Comparative Study of Colombo and Batticaloa",
      startDate: "01 February 2025",
      endDate: "31 January 2026",
      status: "Completed"
    }
  ]
}

const grants2025 = {
  firstRound: [
    {
      no: 1,
      name: "K.V.J. Koshalee",
      position: "Lecturer in Archaeology, Department of History and Archaeology, Faculty of Humanities and Social Sciences",
      institution: "University of Ruhuna",
      project: "Evolving Divinity: Tracing the Religious Conception of the Buddha in the Colossal Statues of Sri Lanka",
      startDate: "01 July 2025",
      endDate: "30 June 2026",
      status: "Under Review"
    }
  ],
  secondRound: [
    {
      no: 1,
      name: "Dr. Ms. A.M.S. Achala Abeykoon",
      position: "Faculty of Social Sciences",
      institution: "University of Kelaniya",
      project: "Artificial Intelligence Adoption in Sri Lankan Television Newsrooms: Implications for Media Education and Professional Competency Development",
      startDate: "10 January 2026",
      endDate: "09 January 2027",
      status: "Awarded"
    },
    {
      no: 2,
      name: "Professor Y.A. Karunarathne",
      position: "Department of Geography, Faculty of Arts",
      institution: "University of Colombo",
      project: "An Investigation of the Geographies of Social Resilience to Compounding Extreme Rainfall Hazards: A Case Study of the Extreme Rainfall Event of 2nd June 2024 in the Wet Zone of Sri Lanka",
      startDate: "10 January 2026",
      endDate: "09 January 2027",
      status: "Awarded"
    },
    {
      no: 3,
      name: "Professor M.G. Lalith Ananda",
      position: "Department of English and Linguistics, Faculty of Humanities and Social Sciences",
      institution: "University of Sri Jayewardenepura",
      project: "Language Shift among the Vedda Community of Sri Lanka: Patterns, Causes, and the Influence of Sinhala",
      startDate: "10 January 2026",
      endDate: "09 January 2027",
      status: "Awarded"
    },
    {
      no: 4,
      name: "Professor W.A.S.S. Wijesinghe",
      position: "Department of Legal Studies, Faculty of Humanities and Social Sciences",
      institution: "The Open University of Sri Lanka",
      project: "Re-imagining Sri Lanka's Intellectual Property Framework for the Age of Artificial Intelligence: A Comparative Legal Analysis",
      startDate: "10 January 2026",
      endDate: "09 January 2027",
      status: "Awarded"
    },
    {
      no: 5,
      name: "Senior Professor (Mrs.) R.L.S. Fernando",
      position: "Department of Public Administration, Faculty of Management Studies and Commerce",
      institution: "University of Sri Jayewardenepura",
      project: "Determinants of Blended Learning Acceptance among Undergraduates: Evidence from the Faculty of Humanities and Social Sciences of a Selected State University in Sri Lanka",
      startDate: "10 January 2026",
      endDate: "09 January 2027",
      status: "Awarded"
    }
  ]
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200"><CheckCircle className="h-3 w-3 mr-1" /> Completed</Badge>
    case "Awarded":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200"><Award className="h-3 w-3 mr-1" /> Awarded</Badge>
    case "Under Review":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"><Clock className="h-3 w-3 mr-1" /> Under Review</Badge>
    case "Extension Requested":
      return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200"><AlertCircle className="h-3 w-3 mr-1" /> Extension Requested</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

function GrantsTable({ grants }: { grants: typeof grants2024.firstRound }) {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">No.</TableHead>
            <TableHead>Researcher</TableHead>
            <TableHead className="min-w-[300px]">Research Project</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grants.map((grant) => (
            <TableRow key={grant.no}>
              <TableCell className="font-medium">{grant.no}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{grant.name}</div>
                  <div className="text-sm text-muted-foreground">{grant.position}</div>
                  <div className="text-sm text-muted-foreground">{grant.institution}</div>
                </div>
              </TableCell>
              <TableCell className="text-sm">{grant.project}</TableCell>
              <TableCell className="text-sm">
                <div>{grant.startDate}</div>
                <div className="text-muted-foreground">to {grant.endDate}</div>
              </TableCell>
              <TableCell>{getStatusBadge(grant.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function ShortTermRecipientsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Short-Term Grants
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Short-Term Grant Recipients</h1>
            <p className="text-xl text-primary-foreground/90">
              List of researchers who have received NCAS Short-Term Research Grants
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">11</div>
              <div className="text-sm text-muted-foreground">Total Recipients</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">2024 Recipients</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">2025 Recipients</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Universities Represented</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="2025" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="2025">2025 Awards</TabsTrigger>
            <TabsTrigger value="2024">2024 Awards</TabsTrigger>
          </TabsList>

          {/* 2025 Tab */}
          <TabsContent value="2025" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Award of Short-Term Grants 2025 - 1st Round
                </CardTitle>
                <CardDescription>
                  Grants awarded in the first round of 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GrantsTable grants={grants2025.firstRound} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Award of Short-Term Grants 2025 - 2nd Round
                </CardTitle>
                <CardDescription>
                  Grants awarded in the second round of 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GrantsTable grants={grants2025.secondRound} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2024 Tab */}
          <TabsContent value="2024" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Award of Short-Term Grants 2024 - 1st Round
                </CardTitle>
                <CardDescription>
                  Grants awarded in the first round of 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GrantsTable grants={grants2024.firstRound} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Award of Short-Term Grants 2024 - 2nd Round
                </CardTitle>
                <CardDescription>
                  Grants awarded in the second round of 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GrantsTable grants={grants2024.secondRound} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Info Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>About Short-Term Research Grants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The NCAS Short-Term Research Grant scheme supports researchers from Sri Lankan universities 
              and higher education institutions to conduct research in humanities and social sciences. 
              The grants typically cover a period of 12 months and are awarded twice a year.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Eligibility</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Full-time academics at recognized universities</li>
                  <li>• Research in humanities and social sciences</li>
                  <li>• Clear research objectives and methodology</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Grant Benefits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Financial support for research activities</li>
                  <li>• Duration of 12 months</li>
                  <li>• Progress monitoring and support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CouncilRegentsPage() {
  const regents = [
    {
      name: "Hon. Dr. Harini Amarasuriya",
      position: "Chairman, COR",
      institution: "Prime Minister and the Minister Ministry of Education, Higher Education and Vocational Education",
      expertise: "",
    },
    {
      name: "Senior Professor Kapila Seneviratne",
      position: "Chairman, UGC",
      institution: "",
      expertise: "",
    },
    {
      name: "Senior Professor Prashanthi Narangoda",
      position: "Director, NCAS",
      institution: "",
      expertise: "",
    },
    {
      name: "Professor W M P S Bandara",
      position: "UGC Nominee",
      institution: "Department of Fine Arts, University of Peradeniya",
      expertise: "",
    },
    {
      name: "Ven. Prof. Pinnawala Sangasumana Thero",
      position: "UGC Nominee",
      institution: "Department of Geography, University of Sri Jayewardenepura",
      expertise: "",
    },
    {
      name: "Professor T. Sanathanane",
      position: "Head, Dept. of Fine Arts",
      institution: "Faculty of Arts, University of Jaffna",
      expertise: "",
    },
    {
      name: "Mr. I. Renuka Priyantha",
      position: "Dean",
      institution: "Faculty of Humanities and Social Sciences, University of Ruhuna",
      expertise: "",
    },
    {
      name: "Prof. S. Raguram",
      position: "Dean",
      institution: "Faculty of Arts, University of Jaffna",
      expertise: "",
    },
    {
      name: "Professor N S Punchihewa",
      position: "Dean",
      institution: "Faculty of Law, University of Colombo",
      expertise: "",
    },
    {
      name: "Dr. E.M.P.C.S. Ekanayake",
      position: "Dean",
      institution: "Faculty of Arts, University of Peradeniya",
      expertise: "",
    },
    {
      name: "Senior Professor L Manawaddu",
      position: "Dean",
      institution: "Faculty of Arts, University of Colombo",
      expertise: "",
    },
    {
      name: "Professor M M Gunathilake",
      position: "Dean",
      institution: "Faculty of Social Sciences, University of Kelaniya",
      expertise: "",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Council of Regents</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Council of Regents provides strategic oversight and academic governance for NCAS, ensuring excellence in
            humanities and social sciences research and education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {regents.map((regent, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{regent.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {regent.position}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Institution:</strong> {regent.institution}
                </p>
                <p className="text-muted-foreground">
                  <strong>Expertise:</strong> {regent.expertise}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Role and Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Academic Oversight</h3>
              <p className="text-muted-foreground">
                The Council provides strategic direction for academic programs, research initiatives, and maintains the
                highest standards of scholarly excellence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Policy Development</h3>
              <p className="text-muted-foreground">
                Develops and reviews policies related to research grants, academic collaborations, and institutional
                partnerships.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Ensures that all NCAS programs and activities meet international standards and contribute to the
                advancement of knowledge in humanities and social sciences.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CouncilManagementPage() {
  const members = [
    {
      name: "Senior Professor Prashanthi Narangoda",
      position: "Director, NCAS",
      institution: "Chairman Council of Management of NCAS",
      expertise: "",
    },
    {
      name: "Professor R M K Ratnayake",
      position: "UGC Nominee",
      institution: "Department of Geography, Faculty of Humanities and Social Sciences, University of Sri Jayewardenepura",
      expertise: "",
    },
    {
      name: "Professor M G L Ananda",
      position: "UGC Nominee",
      institution: "Faculty of Humanities and Social Sciences, University of Sri Jayewardenapura",
      expertise: "",
    },
    {
      name: "Professor Wimal Hewamanage",
      position: "UGC Nominee",
      institution: "Department of Buddhist Studies, Faculty of Arts, University of Colombo",
      expertise: "",
    },
    {
      name: "Dr. (Mrs.) D V M De Silva",
      position: "Dean",
      institution: "Faculty of Education, Open University of Sri Lanka",
      expertise: "",
    },
    {
      name: "Professor Shirantha Heenkenda",
      position: "Dean",
      institution: "Faculty of Humanities and Social Sciences, University of Sri Jayewardenepura",
      expertise: "",
    },
    {
      name: "Professor Nishantha Sampath Punchihewa",
      position: "Dean",
      institution: "Faculty of Law, University of Colombo",
      expertise: "",
    },
    {
      name: "Dr. E M P C S Ekanayake",
      position: "Dean",
      institution: "Faculty of Arts, University of Peradeniya",
      expertise: "",
    },
    {
      name: "Senior Professor L Manawadu",
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
    {
      name: "Ms. R A D R Ranasinghe",
      position: "Treasury Representative",
      institution: "Director, Department of Management Services",
      expertise: "",
    },
    {
      name: "Senior Asst. Bursar",
      position: "",
      institution: "NCAS",
      expertise: "",
    },
    {
      name: "Senior Asst. Registrar",
      position: "",
      institution: "NCAS",
      expertise: "",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Council of Management</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Council of Management oversees the operational and administrative functions of NCAS, ensuring effective implementation of policies and programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {member.position}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Institution:</strong> {member.institution}
                </p>
                {member.expertise && (
                  <p className="text-muted-foreground">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                )}
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
              <h3 className="font-semibold mb-2">Operational Management</h3>
              <p className="text-muted-foreground">
                The Council manages day-to-day operations, financial planning, and resource allocation for NCAS programs and initiatives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Program Implementation</h3>
              <p className="text-muted-foreground">
                Oversees the implementation of academic programs, research grants, and collaborative projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Administrative Oversight</h3>
              <p className="text-muted-foreground">
                Ensures compliance with institutional policies, regulatory requirements, and maintains effective administrative systems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
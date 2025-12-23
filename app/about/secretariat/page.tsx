import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecretariatPage() {
  const staff = [
    {
      name: "Senior Professor Prashanthi Narangoda",
      position: "Director",
      department: "",
    },
    {
      name: "Research Fellow",
      position: "Vacant",
      department: "",
    },
    {
      name: "Dr. Sampath Chandrasena",
      position: "Senior Assistant Librarian",
      department: "Head/Library & IT, Academic Coordinator",
    },
    {
      name: "Ms. H G D Sriyani",
      position: "Senior Assistant Registrar",
      department: "Acting",
    },
    {
      name: "Mr. M P Bandara",
      position: "Senior Assistant Bursar",
      department: "Acting",
    },
    {
      name: "Library Information Assistant",
      position: "Vacant",
      department: "",
    },
    {
      name: "Mr. K M G G Dhanushka",
      position: "Management Assistant",
      department: "Book Keeping (Gr. II)",
    },
    {
      name: "Mr. R K P I Rathnayake",
      position: "Management Assistant",
      department: "Gr. III",
    },
    {
      name: "Mr. V Hettiarachchi",
      position: "Management Assistant",
      department: "Gr. III",
    },
    {
      name: "Management Assistant",
      position: "Vacant",
      department: "Gr. III",
    },
    {
      name: "Management Assistant",
      position: "Vacant",
      department: "Gr. III",
    },
    {
      name: "Mr. C D Sikurajapathi",
      position: "Driver",
      department: "",
    },
    {
      name: "Mr. H S B Karunarathna",
      position: "Works Aid",
      department: "Gr. III",
    },
    {
      name: "Mr. P P K Balasuriya",
      position: "Works Aid",
      department: "Gr. III",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">NCAS Secretariat</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The dedicated administrative and support staff who ensure the smooth operation of NCAS activities and programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Position:</strong> {member.position}
                </p>
                {member.department && (
                  <p className="text-muted-foreground">
                    <strong>Department:</strong> {member.department}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
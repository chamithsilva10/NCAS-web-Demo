import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreviousDirectorsPage() {
  const directors = [
    {
      name: "Senior Professor Premakumara de Silva",
      position: "Acting Director",
      tenure: "2021-2022",
    },
    {
      name: "Senior Professor Janitha A Liyanage",
      position: "Acting Director",
      tenure: "2020-2021",
    },
    {
      name: "Professor Lal Mervin Dharmasiri",
      position: "Director",
      tenure: "2019 (Full time), 2018 (Acting)",
    },
    {
      name: "Professor P S M Gunaratne",
      position: "Acting Director",
      tenure: "2016-2018",
    },
    {
      name: "Dr. R.M.K. Rathnayaka",
      position: "Acting Director",
      tenure: "2011-2015",
    },
    {
      name: "Professor Laksiri Fernando",
      position: "Director",
      tenure: "2008-2011",
    },
    {
      name: "Professor Rohan Rajapaksha",
      position: "Acting Director",
      tenure: "2007-2008",
    },
    {
      name: "Professor Dayalal Abeysekara",
      position: "Director",
      tenure: "2006",
    },
    {
      name: "Professor Senaka Bandaranayake",
      position: "Founder Director",
      tenure: "2005",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Previous Directors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legacy of leadership and vision that has shaped NCAS into a premier institution for humanities and social sciences research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{director.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Position:</strong> {director.position}
                </p>
                <p className="text-muted-foreground">
                  <strong>Tenure:</strong> {director.tenure}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
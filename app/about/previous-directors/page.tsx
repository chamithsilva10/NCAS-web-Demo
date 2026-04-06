import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function PreviousDirectorsPage() {
  // Photos are cloned from ncas.ac.lk and served from local public assets.
  const directors = [
    {
      name: "Senior Professor Prashanthi Narangoda",
      position: "Director",
      tenure: "2023-2026",
      image: "/images/previous-directors/prashanthi-narangoda.jpg",
    },
    {
      name: "Senior Professor Premakumara de Silva",
      position: "Acting Director",
      tenure: "2021-2022",
      image: "/images/previous-directors/premakumara-de-silva.jpg",
    },
    {
      name: "Senior Professor Janitha A Liyanage",
      position: "Acting Director",
      tenure: "2020-2021",
      image: "/images/previous-directors/janitha-a-liyanage.jpg",
    },
    {
      name: "Professor Lal Mervin Dharmasiri",
      position: "Director",
      tenure: "2019 (Full time), 2018 (Acting)",
      image: "/images/previous-directors/lal-mervin-dharmasiri.jpg",
    },
    {
      name: "Professor P S M Gunaratne",
      position: "Acting Director",
      tenure: "2016-2018",
      image: "/images/previous-directors/p-s-m-gunaratne.jpg",
    },
    {
      name: "Dr. R.M.K. Rathnayaka",
      position: "Acting Director",
      tenure: "2011-2015",
      image: "/images/previous-directors/rmk-rathnayaka.jpg",
    },
    {
      name: "Professor Laksiri Fernando",
      position: "Director",
      tenure: "2008-2011",
      image: "/images/previous-directors/laksiri-fernando.jpg",
    },
    {
      name: "Professor Rohan Rajapaksha",
      position: "Acting Director",
      tenure: "2007-2008",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Professor Dayalal Abeysekara",
      position: "Director",
      tenure: "2006",
      image: "/images/previous-directors/dayalal-abeysekara.jpg",
    },
    {
      name: "Professor Senaka Bandaranayake",
      position: "Founder Director",
      tenure: "2005",
      image: "/images/previous-directors/senaka-bandaranayake.jpg",
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
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-muted">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
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
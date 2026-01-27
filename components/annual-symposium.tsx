import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Award, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AnnualSymposium() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Annual Research Symposium</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our flagship annual research symposium showcasing cutting-edge research in humanities and social sciences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">7th International Research Symposium in Humanities and Social Sciences (IRSHSS) 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">January 16-17, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">BMICH, Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Theme: AI in Higher Education: Innovations, Challenges, and Future Directions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">63+ Research Papers Presented</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3 flex-wrap">
                  <Button asChild>
                    <Link href="/information/symposium-2025">
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/library/proceedings/2025">
                      View Proceedings
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Image
              src="/academic-conference.png"
              alt="7th International Research Symposium 2025"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
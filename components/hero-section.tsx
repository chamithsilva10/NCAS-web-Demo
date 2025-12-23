import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            National Centre for Advanced Studies in <span className="text-primary">Humanities & Social Sciences</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Leading research institution dedicated to advancing knowledge in humanities and social sciences through
            innovative research, scholarly excellence, and academic collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              View Publications
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-muted-foreground">Research Publications</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">150+</div>
              <div className="text-muted-foreground">Research Fellows</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">25+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Users, Building, Award, BookOpen, Globe, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StructurePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Organizational Structure</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              The governance and administrative framework of NCAS
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">NCAS Organizational Structure</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Official organizational chart showing the hierarchy and reporting structure
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/organizational-structure.png"
                alt="NCAS Organizational Structure"
                className="max-w-full h-auto shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, DollarSign, ExternalLink } from "lucide-react"
import Link from "next/link"

const jobOpenings = [
  {
    id: 1,
    title: "Research Fellow",
    department: "Research Division",
    type: "Full-time",
    location: "Colombo",
    salary: "Competitive",
    deadline: "December 31, 2025",
    description: "We are seeking a highly motivated Research Fellow to join our team in conducting cutting-edge research in humanities and social sciences.",
    requirements: [
      "PhD in Humanities/Social Sciences or related field",
      "Strong research and publication record",
      "Experience in qualitative/quantitative research methods",
      "Excellent written and verbal communication skills",
      "Ability to work independently and in teams"
    ],
    benefits: [
      "Competitive salary package",
      "Research funding opportunities",
      "Professional development support",
      "Collaborative research environment",
      "Work-life balance initiatives"
    ]
  },
  {
    id: 2,
    title: "Program Coordinator",
    department: "Academic Programs",
    type: "Full-time",
    location: "Colombo",
    salary: "Attractive package",
    deadline: "November 30, 2025",
    description: "Join our Academic Programs team as a Program Coordinator to support the development and implementation of educational initiatives.",
    requirements: [
      "Master's degree in Education or related field",
      "3+ years experience in program coordination",
      "Strong organizational and project management skills",
      "Experience in academic program development",
      "Proficiency in MS Office and database management"
    ],
    benefits: [
      "Dynamic work environment",
      "Professional growth opportunities",
      "Health and wellness benefits",
      "Flexible working arrangements",
      "Learning and development programs"
    ]
  },
  {
    id: 3,
    title: "Library Assistant",
    department: "Library Services",
    type: "Full-time",
    location: "Colombo",
    salary: "Based on experience",
    deadline: "October 31, 2025",
    description: "We are looking for a dedicated Library Assistant to support our library operations and digital resource management.",
    requirements: [
      "Bachelor's degree in Library Science or related field",
      "Knowledge of library management systems",
      "Strong attention to detail",
      "Good communication skills",
      "Computer literacy and database skills"
    ],
    benefits: [
      "Stable employment",
      "Library resources access",
      "Professional development",
      "Team-oriented environment",
      "Contributory pension scheme"
    ]
  }
]

export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Career Opportunities at NCAS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our team of dedicated professionals working to advance research and education
            in humanities and social sciences. We offer exciting career opportunities in a dynamic
            and supportive work environment.
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Current Job Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <p className="text-muted-foreground mb-2">{job.department}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline" className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline: {job.deadline}
                      </div>
                      <Button asChild>
                        <Link href="https://ncas.ac.lk/vacancies/" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Requirements
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Join NCAS */}
        <div className="bg-muted/50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Why Join NCAS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Meaningful Work</h3>
              <p className="text-sm text-muted-foreground">
                Contribute to advancing knowledge in humanities and social sciences
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Work-Life Balance</h3>
              <p className="text-sm text-muted-foreground">
                Flexible working arrangements and supportive environment
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Competitive Benefits</h3>
              <p className="text-sm text-muted-foreground">
                Attractive salary packages and comprehensive benefits
              </p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Application Process</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. Review job requirements carefully</li>
                <li>2. Prepare your CV and cover letter</li>
                <li>3. Submit application through the link provided</li>
                <li>4. Shortlisted candidates will be contacted</li>
                <li>5. Attend interview and assessment</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-2">Required Documents</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Updated CV/Resume</li>
                <li>• Cover letter</li>
                <li>• Academic certificates</li>
                <li>• Professional references</li>
                <li>• Any relevant publications</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground mb-4">
              For more information about current vacancies and detailed application procedures,
              please visit our official vacancies page.
            </p>
            <Button asChild size="lg">
              <Link href="https://ncas.ac.lk/vacancies/" target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Vacancies
              </Link>
            </Button>
          </div>
        </div>
      </main>
      </div>
  )
}
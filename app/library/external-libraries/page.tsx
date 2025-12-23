import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Key, Globe, Unlock, MapPin, Database, HelpCircle, ExternalLink } from "lucide-react"

export default function ExternalLibrariesPage() {
  const internationalDatabases = [
    {
      name: "JSTOR",
      description: "Digital library with academic journals, books, and primary sources",
      subjects: ["Humanities", "Social Sciences", "Arts"],
      access: "Full Access",
      type: "Academic Database",
      resources: "12M+ articles",
      url: "https://jstor.org",
    },
    {
      name: "Project MUSE",
      description: "Scholarly literature from university presses and scholarly societies",
      subjects: ["Literature", "History", "Philosophy", "Cultural Studies"],
      access: "Full Access",
      type: "Academic Database",
      resources: "800+ journals",
      url: "https://muse.jhu.edu",
    },
    {
      name: "Oxford Academic",
      description: "Oxford University Press journals and academic publications",
      subjects: ["Humanities", "Social Sciences", "Law", "Medicine"],
      access: "Selected Journals",
      type: "Publisher Platform",
      resources: "400+ journals",
      url: "https://academic.oup.com",
    },
    {
      name: "Cambridge Core",
      description: "Cambridge University Press academic content platform",
      subjects: ["Humanities", "Social Sciences", "Science"],
      access: "Selected Journals",
      type: "Publisher Platform",
      resources: "380+ journals",
      url: "https://cambridge.org/core",
    },
  ]

  const openAccessResources = [
    {
      name: "Directory of Open Access Journals (DOAJ)",
      description: "Community-curated online directory of open access journals",
      subjects: ["All Disciplines"],
      access: "Open Access",
      type: "Directory",
      resources: "17,000+ journals",
      url: "https://doaj.org",
    },
    {
      name: "arXiv",
      description: "Open-access repository of electronic preprints",
      subjects: ["Physics", "Mathematics", "Computer Science", "Economics"],
      access: "Open Access",
      type: "Preprint Repository",
      resources: "2M+ papers",
      url: "https://arxiv.org",
    },
    {
      name: "PLOS ONE",
      description: "Open access peer-reviewed scientific journal",
      subjects: ["Science", "Medicine", "Engineering"],
      access: "Open Access",
      type: "Journal",
      resources: "300K+ articles",
      url: "https://plosone.org",
    },
    {
      name: "Humanities Commons",
      description: "Open access repository for humanities scholarship",
      subjects: ["Humanities", "Social Sciences"],
      access: "Open Access",
      type: "Repository",
      resources: "25K+ works",
      url: "https://hcommons.org",
    },
  ]

  const regionalResources = [
    {
      name: "South Asian Studies Portal",
      description: "Specialized database for South Asian research and publications",
      subjects: ["South Asian Studies", "History", "Culture"],
      access: "Full Access",
      type: "Regional Database",
      resources: "50K+ documents",
      region: "South Asia",
    },
    {
      name: "Asian Digital Library",
      description: "Comprehensive collection of Asian academic resources",
      subjects: ["Asian Studies", "Literature", "Philosophy"],
      access: "Partial Access",
      type: "Digital Library",
      resources: "100K+ items",
      region: "Asia",
    },
    {
      name: "Sri Lanka Journal Online",
      description: "Platform for Sri Lankan academic journals and publications",
      subjects: ["All Disciplines"],
      access: "Full Access",
      type: "National Platform",
      resources: "150+ journals",
      region: "Sri Lanka",
    },
    {
      name: "SAARC Documentation Centre",
      description: "Regional documentation and information center",
      subjects: ["Regional Studies", "Development", "Policy"],
      access: "Full Access",
      type: "Documentation Center",
      resources: "25K+ documents",
      region: "SAARC Countries",
    },
  ]

  const specializedDatabases = [
    {
      name: "Anthropology Plus",
      description: "Comprehensive database for anthropological research",
      subjects: ["Anthropology", "Archaeology", "Cultural Studies"],
      access: "Full Access",
      type: "Specialized Database",
      coverage: "1960-present",
    },
    {
      name: "Historical Abstracts",
      description: "Bibliography of historical literature from 1450 to present",
      subjects: ["History", "Historical Research"],
      access: "Full Access",
      type: "Specialized Database",
      coverage: "1450-present",
    },
    {
      name: "Philosopher's Index",
      description: "International database of philosophical literature",
      subjects: ["Philosophy", "Ethics", "Logic"],
      access: "Full Access",
      type: "Specialized Database",
      coverage: "1940-present",
    },
    {
      name: "Sociological Abstracts",
      description: "Comprehensive database for sociology and related disciplines",
      subjects: ["Sociology", "Social Work", "Community Development"],
      access: "Full Access",
      type: "Specialized Database",
      coverage: "1952-present",
    },
  ]

  const accessInstructions = [
    {
      userType: "NCAS Faculty & Staff",
      instructions: [
        "Use your NCAS credentials to access institutional subscriptions",
        "VPN access required for off-campus use",
        "Contact library@ncas.ac.lk for access issues",
      ],
    },
    {
      userType: "Students",
      instructions: [
        "Use student ID and password for authentication",
        "Access available through campus network",
        "Limited concurrent users for some databases",
      ],
    },
    {
      userType: "External Researchers",
      instructions: [
        "Apply for guest access through library services",
        "Temporary access available for collaborative projects",
        "Contact partnerships@ncas.ac.lk for arrangements",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">External Library Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access to international databases, open access repositories, and specialized collections to support your
              research and academic pursuits.
            </p>
          </div>

          {/* Access Instructions */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Access Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {accessInstructions.map((instruction, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-semibold text-primary">{instruction.userType}</h3>
                      <ul className="space-y-2">
                        {instruction.instructions.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* International Databases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6" />
              International Databases
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {internationalDatabases.map((database, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{database.name}</CardTitle>
                      <Badge variant={database.access === "Full Access" ? "default" : "secondary"}>
                        {database.access}
                      </Badge>
                    </div>
                    <CardDescription>{database.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {database.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{database.type}</span>
                        <span>{database.resources}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Database
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Access Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Unlock className="h-6 w-6" />
              Open Access Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {openAccessResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {resource.access}
                      </Badge>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {resource.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.resources}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Resource
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regional Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Regional Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regionalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <Badge variant="outline">{resource.region}</Badge>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {resource.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.resources}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Resource
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specialized Databases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Database className="h-6 w-6" />
              Specialized Databases
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {specializedDatabases.map((database, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{database.name}</CardTitle>
                    <CardDescription>{database.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {database.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{database.type}</span>
                        <span>Coverage: {database.coverage}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Database
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Library Support</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📧 library@ncas.ac.lk</p>
                    <p>📞 +94 11 2345 678</p>
                    <p>🕒 Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>🕒 Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Research Support</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📧 research@ncas.ac.lk</p>
                    <p>📞 +94 11 2345 679</p>
                    <p>🕒 Mon-Fri: 9:00 AM - 5:00 PM</p>
                    <p>📅 Appointments available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

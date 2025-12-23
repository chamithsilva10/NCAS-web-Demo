"use client"

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "404 - Page Not Found | NCAS",
  description: "The page you are looking for could not be found. National Centre for Advanced Studies in Humanities & Social Sciences (NCAS)",
}

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-8xl font-bold text-primary mb-4">404</div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Home className="mr-2 h-5 w-5" />
                    Go to Homepage
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.history.back()}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* NCAS Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/ncas-logo.png"
                    alt="NCAS Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-2xl">National Centre for Advanced Studies in Humanities & Social Sciences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground">
                    6A, Sukhastan Gardens, Ward Place, Colombo – 07, Sri Lanka
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium">Tel:</span>
                      <span className="ml-2">+94 011 2680849</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Fax:</span>
                      <span className="ml-2">+94 011 269 3975</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Email:</span>
                      <span className="ml-2">info@ncas.ac.lk</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                      href="https://www.ugc.ac.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border rounded-lg hover:bg-muted transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      University Grants Commission
                    </Link>
                    <Link
                      href="https://www.mohe.gov.lk/index.php?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border rounded-lg hover:bg-muted transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ministry of Higher Education
                    </Link>
                    <Link
                      href="http://ministry%20of%20education/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border rounded-lg hover:bg-muted transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ministry of Education
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Site Navigation */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Explore Our Website</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About NCAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/about" className="text-primary hover:underline">About Us</Link></li>
                    <li><Link href="/about/council-regents" className="text-primary hover:underline">Council of Regents</Link></li>
                    <li><Link href="/about/council-management" className="text-primary hover:underline">Council of Management</Link></li>
                    <li><Link href="/about/director" className="text-primary hover:underline">Director</Link></li>
                    <li><Link href="/about/secretariat" className="text-primary hover:underline">NCAS Secretariat</Link></li>
                    <li><Link href="/about/vision-mission" className="text-primary hover:underline">Vision & Mission</Link></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Grants & Scholarships */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Grants & Scholarships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/grants" className="text-primary hover:underline">Grants</Link></li>
                    <li><Link href="/grants/short-term" className="text-primary hover:underline">Short Term Research Grants</Link></li>
                    <li><Link href="/grants/partial-funding" className="text-primary hover:underline">Partial Funding</Link></li>
                    <li><Link href="/scholarships" className="text-primary hover:underline">Scholarships</Link></li>
                    <li><Link href="/grants/profiles-phd" className="text-primary hover:underline">PhD Profiles</Link></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Programs & Research */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Programs & Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/programs" className="text-primary hover:underline">Programs</Link></li>
                    <li><Link href="/research" className="text-primary hover:underline">Research</Link></li>
                    <li><Link href="/workshops" className="text-primary hover:underline">Workshops</Link></li>
                    <li><Link href="/publications" className="text-primary hover:underline">Publications</Link></li>
                    <li><Link href="/news" className="text-primary hover:underline">News & Events</Link></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Information & Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Information & Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/information" className="text-primary hover:underline">Information</Link></li>
                    <li><Link href="/library" className="text-primary hover:underline">Library</Link></li>
                    <li><Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                    <li><Link href="/register" className="text-primary hover:underline">Register</Link></li>
                    <li><Link href="/international" className="text-primary hover:underline">International</Link></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Gallery & More */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gallery & More</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/gallery" className="text-primary hover:underline">Gallery</Link></li>
                    <li><Link href="/about/ordinance" className="text-primary hover:underline">Universities Act</Link></li>
                    <li><Link href="/about/strategic-plan-2024-2028" className="text-primary hover:underline">Strategic Plans</Link></li>
                    <li><Link href="/about/action-plan" className="text-primary hover:underline">Action Plans</Link></li>
                    <li><Link href="/about/master-procurement-plan" className="text-primary hover:underline">Procurement Plans</Link></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Our Site</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find what you're looking for? Try our advanced search.
                  </p>
                  <Link href="/search">
                    <Button className="w-full">
                      <Search className="mr-2 h-4 w-4" />
                      Advanced Search
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/ncas-logo.png"
                alt="NCAS Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="text-lg font-semibold">About NCAS</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4 text-pretty">
              The National Centre for Advanced Studies in Humanities & Social Sciences is dedicated to fostering
              excellence in research and academic collaboration.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/scholarships"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/grants"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Research Grants
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Digital Library
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <div className="text-primary-foreground/80">
                  <p>National Centre for Advanced Studies</p>
                  <p>in Humanities & Social Sciences</p>
                  <p>No. 35, Bullers Lane</p>
                  <p>Colombo 07, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+94 11 2680849</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@ncas.ac.lk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 National Centre for Advanced Studies in Humanities & Social Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

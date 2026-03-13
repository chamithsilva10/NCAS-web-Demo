"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import { AdvancedSearch } from "@/components/advanced-search"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "/about",
      submenu: [
        { name: "Council of Regents", href: "/about/council-regents" },
        { name: "Council of Management", href: "/about/council-management" },
        { name: "Director", href: "/about/director" },
        { name: "Previous Directors", href: "/about/previous-directors" },
        { name: "NCAS Secretariat", href: "/about/secretariat" },
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Objectives", href: "/about/objectives" },
        { name: "Organizational Structure", href: "/about/structure" },
        { name: "Ordinance", href: "/about/ordinance" },
        { name: "Strategic Plan 2024-2028", href: "/about/strategic-plan-2024-2028" },
        { name: "Strategic Plan 2025-2029", href: "/about/strategic-plan-2025-2029" },
        { name: "Corporate Plan 2023-2027", href: "/about/corporate-plan-2023-2027" },
        { name: "Action Plan", href: "/about/action-plan" },
        { name: "Master Procurement Plan", href: "/about/procurement-plan" },
        { name: "Universities Act", href: "/about/universities-act" },
      ],
    },
    {
      name: "Grants",
      href: "/grants",
      submenu: [
        { name: "Grantees", href: "/grants/grantees" },
        { name: "Profiles of PhDs Completed", href: "/grants/profiles-phd" },
          { name: "Research Colloquium 2024", href: "/grants/research-colloquium/2024" },
          { name: "Research Colloquium 2025", href: "/grants/research-colloquium/2025" },
        { name: "Partial Funding for Advanced Studies", href: "/grants/partial-funding" },
        { name: "Forms & Guidelines", href: "/grants/forms-guidelines" },
        { name: "Short Term Research Grants", href: "/grants/short-term" },
        { name: "Short-Term Grant Recipients", href: "/grants/short-term-recipients" },
        { name: "NCAS Publication Awards", href: "/grants/publication-awards" },
        { name: "NCAS-QUT PhD Scholarships", href: "/grants/qut-scholarships" },
        { name: "Other Scholarships", href: "/grants/other-scholarships" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      submenu: [
        { name: "Post Graduate", href: "/programs/postgraduate" },
        { name: "Diploma in Smart Library Technologies", href: "/programs/diploma-library" },
        { name: "Diploma in Elder Care Management", href: "/programs/diploma-elder-care" },
        { name: "Diploma in Tourism & Hospitality", href: "/programs/diploma-tourism" },
        { name: "Certificate in Research Methodology", href: "/programs/certificates/research-methodology" },
        { name: "Certificate in SPSS Analysis", href: "/programs/certificates/spss" },
        { name: "Certificate in Literature Review & Bibliometric Analysis", href: "/programs/certificates/literature-review-course" },
        { name: "Workshop on Structural Equation Modeling (AMOS)", href: "/programs/workshops/structural-equation-modeling-amos" },
        { name: "Workshop on NVivo for Qualitative Research", href: "/programs/workshops/nvivo-qualitative-research" },
        { name: "Workshop on SmartPLS Structural Equation Modeling", href: "/programs/workshops/smartpls-structural-equation-modeling" },
        { name: "Workshops & Training", href: "/workshops" },
        { name: "Academic Training Workshops", href: "/programs/academic-workshops" },
        { name: "Executive Education", href: "/programs/executive-education" },
        { name: "Guest Lectures/Webinars", href: "/programs/guest-lectures" },
      ],
    },
    {
      name: "Information",
      href: "/information",
      submenu: [
        { name: "Vacancies", href: "/information/vacancies" },
        { name: "Gallery", href: "/information/gallery" },
        { name: "7th International Research Symposium 2025", href: "/information/symposium-2025" },
        { name: "6th International Research Symposium 2024", href: "/information/symposium-2024" },
        { name: "5th International Research Symposium 2023", href: "/information/symposium-2023" },
        { name: "4th International Research Symposium 2022", href: "/information/symposium-2022" },
        { name: "Council Meetings", href: "/information/council-meetings" },
      ],
    },
    {
      name: "Library",
      href: "/library",
      submenu: [
        { name: "NCAS Journal", href: "/library/journal" },
        { name: "Thesis & Dissertations", href: "/library/thesis-dissertations" },
          { name: "Short-Term Grantees Research Reports", href: "/library/short-term-grantees-reports" },
        { name: "Digital Repository", href: "/library/digital-repository" },
        { name: "Symposium Proceedings", href: "/library/proceedings" },
        { name: "External Digital Libraries", href: "/library/external-libraries" },
        { name: "Expanding Research Horizons", href: "/library/expanding-research-horizons" },
      ],
    },
    {
      name: "Register for MPhil/PhD",
      href: "/register",
      submenu: [
        { name: "Download Application Form", href: "/register/application-form" },
        { name: "By Laws to award MPhil/PhD", href: "/register/bylaws" },
      ],
    },
    {
      name: "International Collaborations",
      href: "/international",
      submenu: [
        { name: "International Collaborations", href: "/international" },
        { name: "Life Learning Center", href: "/international/life-learning-center" },
        { name: "Visiting Research Fellows", href: "/international/visiting-research-fellows" },
        { name: "Prof. Shihan de Silva Jayasuriya", href: "/international/visiting-fellows/shihan-de-silva-jayasuriya" },
      ],
    },
  ]

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5); }
        }

        .animate-bounce-in {
          animation: bounceIn 0.4s ease-out;
        }

        .glass-navbar {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(59, 130, 246, 0.75) 50%, rgba(37, 99, 235, 0.85) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(30, 64, 175, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-navbar-scrolled {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.9) 50%, rgba(37, 99, 235, 0.95) 100%);
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          box-shadow: 0 10px 40px rgba(30, 64, 175, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .nav-item {
          position: relative;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #93c5fd, #ffffff, #93c5fd);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-item:hover::before {
          width: 80%;
        }

        .nav-item:hover {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border-radius: 8px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover::after {
          opacity: 1;
        }

        .dropdown-item {
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 197, 253, 0.1));
          padding-left: 1rem;
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #3b82f6, #60a5fa);
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }

        .dropdown-item:hover::before {
          transform: scaleY(1);
        }

        .glass-dropdown {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.98));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 20px 50px rgba(30, 64, 175, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        }

        .mobile-menu-enter {
          animation: slideInLeft 0.3s ease-out;
        }

        .mobile-menu-exit {
          animation: slideInLeft 0.3s ease-out reverse;
        }

        .stagger-animation {
          animation: slideDown 0.3s ease-out;
        }

        /* Stagger delays for desktop navigation */
        ${Array.from({ length: 12 }, (_, i) => `.stagger-${i} { animation-delay: ${i * 0.08}s; }`).join('\n')}

        /* Stagger delays for dropdown items */
        ${Array.from({ length: 20 }, (_, i) => `.stagger-sub-${i} { animation-delay: ${i * 0.05}s; }`).join('\n')}

        /* Stagger delays for mobile navigation */
        ${Array.from({ length: 9 }, (_, i) => `.mobile-stagger-${i} { animation-delay: ${i * 0.1}s; }`).join('\n')}

        /* Stagger delays for mobile submenu items */
        ${Array.from({ length: 20 }, (_, i) => `.mobile-sub-stagger-${i} { animation-delay: ${i * 0.05}s; }`).join('\n')}

        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
          transition: filter 0.3s ease;
        }

        .logo-glow:hover {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.6));
        }

        .search-button {
          position: relative;
          overflow: hidden;
        }

        .search-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
          transition: all 0.6s ease;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .search-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .menu-button {
          position: relative;
          overflow: hidden;
        }

        .menu-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .menu-button:hover::before {
          left: 100%;
        }

        .backdrop-blur-custom {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* Responsive navigation improvements */
        @media (max-width: 1280px) {
          .nav-item {
            font-size: 0.7rem;
            padding: 0.5rem 0.5rem;
          }
        }

        @media (max-width: 1024px) {
          .nav-item {
            font-size: 0.65rem;
            padding: 0.4rem 0.4rem;
          }

          .logo-glow:hover {
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.4));
          }
        }

        @media (max-width: 768px) {
          .nav-item {
            font-size: 0.6rem;
            padding: 0.375rem 0.375rem;
          }

          .logo-glow {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.2));
          }

          .search-button {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.4);
          }

          .contact-button {
            font-size: 0.7rem;
            padding: 0.375rem 0.5rem;
          }
        }

        @media (max-width: 640px) {
          .search-button {
            background: rgba(59, 130, 246, 0.15);
            border: 1px solid rgba(59, 130, 246, 0.5);
          }

          .contact-button {
            font-size: 0.65rem;
            padding: 0.3rem 0.4rem;
          }
        }

        /* Search button enhancements */
        .search-button:hover {
          transform: scale(1.05);
          background: rgba(59, 130, 246, 0.1) !important;
        }

        .search-button:active {
          transform: scale(0.95);
        }

        .search-button {
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .search-button:hover {
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        /* Contact button special styling */
        .contact-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .contact-button:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
        }

        /* Floating mobile contact button matches desktop contact styling */
        .floating-contact {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.25);
          min-width: 56px;
          min-height: 56px;
          padding: 0.5rem 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .floating-contact:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-2px) scale(1.03);
        }

        /* Ensure buttons are always visible */
        .button-container {
          position: relative;
          z-index: 10;
        }

        /* Mobile button visibility */
        @media (max-width: 1024px) {
          .search-button {
            background: rgba(59, 130, 246, 0.05);
            border: 1px solid rgba(59, 130, 246, 0.3);
          }

          .contact-button {
            font-size: 0.8rem;
            padding: 0.5rem 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .search-button {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.4);
          }

          .contact-button {
            font-size: 0.75rem;
            padding: 0.4rem 0.6rem;
          }
        }

        /* Better mobile menu scrolling */
        .mobile-menu-scroll {
          max-height: 70vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
        }

        .mobile-menu-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .mobile-menu-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .mobile-menu-scroll::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 2px;
        }

        .mobile-menu-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-navbar-scrolled'
          : 'glass-navbar'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/ncas-logo.png"
                  alt="NCAS Logo"
                  width={220}
                  height={220}
                  className="object-contain transition-transform duration-300 group-hover:scale-105 -my-8"
                  style={{ background: 'transparent' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - Single unified nav */}
            <nav className="hidden lg:flex items-center space-x-0.5">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="nav-item relative flex items-center space-x-1 text-white/90 hover:text-white transition-all duration-300 text-[13px] font-medium py-2 px-2.5 rounded-md whitespace-nowrap"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {/* Invisible bridge to prevent hover gap */}
                      <div className="absolute top-full left-0 right-0 h-2" />
                      {activeDropdown === item.name && (
                        <div
                          className="glass-dropdown absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-64 rounded-xl z-50 overflow-hidden animate-bounce-in"
                        >
                          <div className="p-2 max-h-80 overflow-y-auto">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="dropdown-item block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-item relative text-white/90 hover:text-white transition-all duration-300 text-[13px] font-medium py-2 px-2.5 rounded-md whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side: Search + Contact Us + Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <AdvancedSearch />

              {/* Contact Us Button - Always visible on desktop */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Contact Us
              </Link>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/50 shadow-xl mobile-menu-scroll">
            {navigation.map((item, index) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2.5 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg text-sm font-medium transition-all duration-300"
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg text-sm font-medium transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Contact Us */}
            <div className="border-t border-border/50 pt-4 mt-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

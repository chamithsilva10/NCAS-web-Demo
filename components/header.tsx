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
        { name: "Research Colloquium", href: "/grants/research-colloquium" },
        { name: "Partial Funding for Advanced Studies", href: "/grants/partial-funding" },
        { name: "Forms & Guidelines", href: "/grants/forms-guidelines" },
        { name: "Short Term Research Grants", href: "/grants/short-term" },
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
        { name: "Digital Repository", href: "/library/digital-repository" },
        { name: "Journal", href: "/library/journal" },
        { name: "Symposium Proceedings", href: "/library/proceedings" },
        { name: "Research Opportunities", href: "/library/research-opportunities" },
        { name: "Grantees Thesis & Dissertations", href: "/library/thesis-dissertations" },
        { name: "External Digital Libraries", href: "/library/external-libraries" },
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
    { name: "International Collaborations", href: "/international" },
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

        .animate-bounce-in {
          animation: bounceIn 0.4s ease-out;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::before {
          width: 100%;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          border-radius: 8px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover::after {
          opacity: 0.1;
        }

        .dropdown-item {
          position: relative;
          overflow: hidden;
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .dropdown-item:hover::before {
          left: 100%;
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
          ? 'bg-background/95 backdrop-blur-custom shadow-2xl border-b border-border/50'
          : 'bg-background/90 backdrop-blur-custom'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo - Enhanced Left Positioning */}
            <div className="flex-shrink-0 flex items-center space-x-3 lg:space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="logo-glow relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/ncas-logo.png"
                    alt="NCAS Logo"
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                  />
                </div>
                <div className="hidden sm:flex flex-col">
                  <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary leading-tight">
                    NCAS
                  </h1>
                  <p className="text-xs lg:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary/70 leading-tight max-w-xs">
                    National Centre for Advanced Studies
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Responsive */}
            <nav className="hidden lg:flex flex-1 justify-center space-x-1 xl:space-x-2 mx-2 xl:mx-4 max-w-3xl">
              {navigation.slice(0, 6).map((item, index) => (
                <div key={item.name} className={`relative group stagger-${index}`}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="nav-item relative flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 text-xs xl:text-sm font-medium py-2 px-2 xl:px-3 rounded-md group-hover:scale-105 whitespace-nowrap"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      {activeDropdown === item.name && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 xl:w-72 bg-background/95 backdrop-blur-custom border border-border/50 rounded-xl shadow-2xl z-50 overflow-hidden animate-bounce-in"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2 max-h-96 overflow-y-auto">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`dropdown-item block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 rounded-lg transition-all duration-300 transform hover:translate-x-1 stagger-sub-${subIndex}`}
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
                      className="nav-item relative text-foreground hover:text-primary transition-all duration-300 text-xs xl:text-sm font-medium py-2 px-2 xl:px-3 rounded-md hover:scale-105 whitespace-nowrap"
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Extra Navigation Items - Hidden on smaller screens */}
            <nav className="hidden xl:flex flex-1 justify-center space-x-1 xl:space-x-2 mx-2 max-w-xs">
              {navigation.slice(6).map((item, index) => (
                <div key={item.name} className={`relative group stagger-${index + 6}`}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="nav-item relative flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 text-xs xl:text-sm font-medium py-2 px-2 xl:px-3 rounded-md group-hover:scale-105 whitespace-nowrap"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      {activeDropdown === item.name && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 xl:w-72 bg-background/95 backdrop-blur-custom border border-border/50 rounded-xl shadow-2xl z-50 overflow-hidden animate-bounce-in"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2 max-h-96 overflow-y-auto">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`dropdown-item block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 rounded-lg transition-all duration-300 transform hover:translate-x-1 stagger-sub-${subIndex}`}
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
                      className="nav-item relative text-foreground hover:text-primary transition-all duration-300 text-xs xl:text-sm font-medium py-2 px-2 xl:px-3 rounded-md hover:scale-105 whitespace-nowrap"
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Contact - Moved more to the left */}
            <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0 button-container">
              {/* Advanced Search Component */}
              <AdvancedSearch />

              {/* Contact Us Button - Desktop - More Visible (show earlier at md) */}
              <div className="hidden md:block">
                <Link
                  href="/contact"
                  className="contact-button relative text-white transition-all duration-300 text-sm font-medium py-2 px-4 rounded-lg whitespace-nowrap shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="menu-button lg:hidden relative p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative z-10">
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </div>
              </Button>
            </div>
          </div>          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 pt-4 pb-6 space-y-1 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-custom border-t border-border/50 rounded-b-xl shadow-xl mobile-menu-scroll">
              {/* Mobile Search */}
              <div className="mb-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 py-3 hover:bg-primary/10 transition-all duration-300"
                  onClick={() => {
                    // Trigger search modal for mobile
                    const searchElement = document.querySelector('[data-search-trigger]');
                    if (searchElement) {
                      (searchElement as HTMLElement).click();
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  <Search className="h-4 w-4" />
                  <span>Search NCAS</span>
                </Button>
              </div>

              {navigation.map((item, index) => (
                <div key={item.name} className={`stagger-animation mobile-stagger-${index}`}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span className="truncate">{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 flex-shrink-0 ${
                            activeDropdown === item.name ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1 animate-in slide-in-from-left-4 duration-300">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`dropdown-item block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 rounded-md transition-all duration-300 transform hover:translate-x-1 mobile-sub-stagger-${subIndex}`}
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
                      className="block px-3 py-2 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Us */}
              <div className="border-t border-border/50 pt-3 mt-3">
                <Link
                  href="/contact"
                  className="contact-button block px-3 py-3 text-center text-white rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          {/* Floating Contact button for small screens: always visible on mobile for quick access */}
          <div className="md:hidden fixed bottom-4 right-4 z-50">
            <Link
              href="/contact"
              aria-label="Contact us"
              className="floating-contact inline-flex items-center justify-center p-3 rounded-full text-white shadow-lg transition-transform duration-150 hover:scale-105"
            >
              <span className="sr-only">Contact Us</span>
              {/* simple label for small screens */}
              <span className="text-sm font-semibold">Contact</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

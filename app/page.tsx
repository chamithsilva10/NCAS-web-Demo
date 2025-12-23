import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LatestNews } from "@/components/latest-news"
import { AnnualSymposium } from "@/components/annual-symposium"
import { QuickLinks } from "@/components/quick-links"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LatestNews />
        <AnnualSymposium />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  )
}

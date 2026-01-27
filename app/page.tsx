import { HeroSection } from "@/components/hero-section"
import { LatestNews } from "@/components/latest-news"
import { AnnualSymposium } from "@/components/annual-symposium"
import { QuickLinks } from "@/components/quick-links"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LatestNews />
      <AnnualSymposium />
      <QuickLinks />
    </main>
  )
}

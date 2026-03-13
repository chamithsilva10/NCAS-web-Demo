"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"
import Image from "next/image"
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heroSlides = Array.from({ length: 20 }, (_, i) => `/photos/2026-jan/jan-2026-${String(i + 1).padStart(2, "0")}.jpg`)

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => setActiveSlide(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api || isPaused) return

    const timer = window.setInterval(() => {
      api.scrollNext()
    }, 4000)

    return () => {
      window.clearInterval(timer)
    }
  }, [api, isPaused])

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

          <div
            className="mb-12 max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent className="-ml-0">
                {heroSlides.map((src, index) => (
                  <CarouselItem key={src} className="pl-0">
                    <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                      <Image
                        src={src}
                        alt={`NCAS event photo ${index + 1}`}
                        fill
                        priority={index < 2}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />
                      <div className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-black/35 px-3 py-1 text-xs text-white backdrop-blur">
                        NCAS Highlights 2026
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-4 translate-y-0 border-white/45 bg-black/35 text-white hover:bg-black/55" />
              <CarouselNext className="right-4 top-4 translate-y-0 border-white/45 bg-black/35 text-white hover:bg-black/55" />
            </Carousel>

            <div className="mt-4 flex items-center justify-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index ? "w-8 bg-primary" : "w-2.5 bg-primary/35 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>
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

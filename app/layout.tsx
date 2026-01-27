import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "National Centre for Advanced Studies in Humanities & Social Sciences (NCAS)",
  description: "NCAS - Leading research institution for advanced studies in humanities and social sciences",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <div className="pt-20">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

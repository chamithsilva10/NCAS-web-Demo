import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User, Award, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NCAS Publication Awards 2024 | NCAS News',
  description: 'Recognizing excellence in academic publishing. Submit your best work for consideration in our annual publication awards.',
}

export default function PublicationAwardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/news">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                March 5, 2024
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                Publications Committee
              </div>
            </div>
            <CardTitle className="text-3xl leading-tight">NCAS Publication Awards 2024</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed">
The NCAS Publication Awards celebrate outstanding contributions to academic literature in humanities and social sciences. We invite researchers to submit their best publications for consideration in various categories.

Award Categories:
• Best Journal Article in Humanities
• Best Journal Article in Social Sciences
• Best Book Publication
• Best Edited Volume
• Emerging Scholar Publication Award
• International Collaboration Publication Award

Submission Deadline: April 30, 2024
Award Ceremony: June 15, 2024

For more information and submission guidelines, please contact the Publications Committee at publications@ncas.ac.lk
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This content has been cloned from the NCAS website.
                For the most up-to-date information, please visit the official NCAS website.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
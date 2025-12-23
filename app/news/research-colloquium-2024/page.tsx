import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, User, Users, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Research Colloquium 2024 - Session I | NCAS News',
  description: 'Join us for the first session of our annual research colloquium featuring leading scholars and innovative research presentations.',
}

export default function ResearchColloquiumPage() {
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
                March 1, 2024
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                Academic Affairs
              </div>
            </div>
            <CardTitle className="text-3xl leading-tight">Research Colloquium 2024 - Session I</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed">
The first session of our annual Research Colloquium will feature presentations from leading scholars in various fields of humanities and social sciences. This event provides a platform for academic discourse and knowledge sharing.

Event Details:
• Date: March 15, 2024
• Time: 9:00 AM - 5:00 PM
• Venue: NCAS Main Auditorium
• Registration: Free for NCAS members

Featured Presentations:
• "Digital Humanities and Cultural Preservation" - Dr. Anura Fernando
• "Social Impact of Climate Change in Sri Lanka" - Prof. Kumari Jayawardena
• "Language Policy and National Development" - Dr. Ruwan Fernando
• "Migration Patterns in South Asia" - Prof. Lakshmi Perera

The colloquium will include panel discussions, networking opportunities, and workshops on research methodology. Certificates will be awarded to all participants.

For registration and more information, please contact academic@ncas.ac.lk or call +94 11 123 4567.
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
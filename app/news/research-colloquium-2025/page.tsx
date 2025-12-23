import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Research Colloquium 2025 | NCAS',
  description: 'NCAS Research Colloquium 2025 - Research Presentations by NCAS Grantees',
}

const participants = [
  {
    name: 'Dr. R. M. C. S. Rathnayake',
    university: 'University of Colombo',
    title: 'The Impact of Social Media on Political Participation in Sri Lanka: A Study on Youth Engagement'
  },
  {
    name: 'Dr. W. A. D. P. Wanigasundera',
    university: 'University of Colombo',
    title: 'Cultural Heritage Preservation through Digital Technologies: A Case Study of Sri Lankan Temple Architecture'
  },
  {
    name: 'Dr. K. A. S. Kodithuwakku',
    university: 'University of Colombo',
    title: 'Mental Health Challenges Among University Students During the COVID-19 Pandemic: A Longitudinal Study'
  },
  {
    name: 'Dr. N. D. K. Dayananda',
    university: 'University of Colombo',
    title: 'Sustainable Tourism Development in Sri Lanka: Community-Based Approaches in Cultural Tourism'
  },
  {
    name: 'Dr. S. M. S. Samarakoon',
    university: 'University of Colombo',
    title: 'Gender Dynamics in Sri Lankan Literature: A Feminist Analysis of Contemporary Sinhala Novels'
  },
  {
    name: 'Dr. P. K. S. Mahanama',
    university: 'University of Colombo',
    title: 'Indigenous Knowledge Systems in Sri Lankan Agriculture: Preservation and Modern Applications'
  },
  {
    name: 'Dr. R. L. C. R. Ranasinghe',
    university: 'University of Colombo',
    title: 'The Role of Education in Social Mobility: A Study of Rural Youth in Sri Lanka'
  },
  {
    name: 'Dr. W. M. D. B. Wanninayake',
    university: 'University of Colombo',
    title: 'Digital Transformation in Sri Lankan SMEs: Challenges and Opportunities'
  },
  {
    name: 'Dr. K. P. C. Pathirana',
    university: 'University of Colombo',
    title: 'Environmental Ethics in Sri Lankan Buddhism: A Philosophical Inquiry'
  },
  {
    name: 'Dr. S. A. L. Seneviratne',
    university: 'University of Colombo',
    title: 'Migration Patterns and Economic Development: The Case of Sri Lankan Professionals Abroad'
  },
  {
    name: 'Dr. M. G. T. K. Gunawardena',
    university: 'University of Colombo',
    title: 'Language Policy and National Identity in Post-Colonial Sri Lanka'
  },
  {
    name: 'Dr. D. M. N. Dissanayake',
    university: 'University of Colombo',
    title: 'Urban Poverty and Social Exclusion: A Study of Colombo City'
  },
  {
    name: 'Dr. R. S. P. R. Perera',
    university: 'University of Colombo',
    title: 'The Impact of Climate Change on Sri Lankan Agriculture: Adaptation Strategies'
  },
  {
    name: 'Dr. W. A. S. Weerasinghe',
    university: 'University of Colombo',
    title: 'Cultural Identity and Globalization: Sri Lankan Youth Perspectives'
  },
  {
    name: 'Dr. K. M. G. B. Kulasekera',
    university: 'University of Colombo',
    title: 'Women\'s Political Participation in Sri Lanka: Progress and Challenges'
  },
  {
    name: 'Dr. S. D. N. S. Senadheera',
    university: 'University of Colombo',
    title: 'Digital Literacy and Educational Inequality in Rural Sri Lanka'
  }
]

export default function ResearchColloquium2025Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Research Colloquium 2025</h1>
        <p className="text-lg text-center mb-8 text-muted-foreground">
          Research Presentations by NCAS Grantees
        </p>

        {/* Flyer Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/flyer-2025.jpg"
            alt="Research Colloquium 2025 Flyer"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Participants Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Research Presentations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Researcher</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">University</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Research Title</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-2 font-medium">{participant.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{participant.university}</td>
                      <td className="border border-gray-300 px-4 py-2">{participant.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer Information */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>National Centre for Advanced Studies in Humanities & Social Sciences</p>
          <p>6A, Sukhastan Gardens, Ward Place, Colombo – 07, Sri Lanka</p>
          <p>Tel: +94 011 2680849 | Fax: +94 011 269 3975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  )
}
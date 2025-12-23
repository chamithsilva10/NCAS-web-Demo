import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, ArrowLeft } from 'lucide-react';

const proceedings2022 = {
  title: "4th International Research Symposium on Social Sciences and Humanities (IRSSSH) 2022",
  subtitle: "Advances in Social Sciences and Humanities: Challenges and Opportunities",
  date: "November 17-18, 2022",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  description: "The 4th International Research Symposium on Social Sciences and Humanities (IRSSSH) 2022 was held on November 17-18, 2022, at the National Centre for Advanced Studies in Humanities and Social Sciences in Colombo, Sri Lanka. The symposium focused on 'Advances in Social Sciences and Humanities: Challenges and Opportunities'.",
  fullProceedings: {
    title: "Complete Symposium Proceedings",
    description: "Full proceedings containing all papers presented at the symposium",
    file: "/proceedings/2022/IRSSSH_2022_Symposium_Proceedings.pdf",
    fileSize: "Large PDF"
  },
  videos: [
    {
      title: "Inauguration Ceremony - November 17, 2022",
      description: "Opening ceremony of the symposium",
      type: "video"
    },
    {
      title: "Parallel Technical Session 01 (Part 01) - November 18, 2022",
      description: "First part of parallel technical sessions",
      type: "video"
    },
    {
      title: "Parallel Technical Session 01 (Part 02) - November 18, 2022",
      description: "Second part of parallel technical sessions",
      type: "video"
    },
    {
      title: "Parallel Technical Session 02 - November 18, 2022",
      description: "Second parallel technical session",
      type: "video"
    }
  ]
};

export default function Proceedings2022Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/library/proceedings">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Proceedings
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2022.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2022.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2022.date}</p>
            <p className="text-gray-500">{proceedings2022.venue}</p>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-gray-700">{proceedings2022.description}</p>
          </CardContent>
        </Card>

        {/* Full Proceedings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">Complete Proceedings</CardTitle>
            <CardDescription>Download the full symposium proceedings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{proceedings2022.fullProceedings.title}</h3>
                <p className="text-sm text-gray-600">{proceedings2022.fullProceedings.description}</p>
                <p className="text-xs text-gray-500 mt-1">{proceedings2022.fullProceedings.fileSize}</p>
              </div>
              <Button asChild>
                <a href={proceedings2022.fullProceedings.file} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Videos Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">Symposium Videos</CardTitle>
            <CardDescription>Recorded sessions from the symposium</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {proceedings2022.videos.map((video, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.description}</p>
                      <Badge variant="secondary" className="mt-2">{video.type}</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="ml-4" disabled>
                      <FileText className="mr-2 h-4 w-4" />
                      View Video
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Videos are currently not available for download. They were originally hosted on the external NCAS website.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2022 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}
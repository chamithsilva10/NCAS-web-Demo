import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2019 = {
  title: "2nd International Symposium on Social Science and Humanities (ISSSH) 2019",
  subtitle: "Development Towards Sustainability",
  date: "December 12-13, 2019",
  venue: "National Centre for Advanced Studies in Humanities and Social Sciences, Colombo, Sri Lanka",
  description: "The 2nd International Symposium on Social Science and Humanities (ISSSH) 2019 was held on December 12-13, 2019, at the National Centre for Advanced Studies in Humanities and Social Sciences in Colombo, Sri Lanka. The symposium focused on 'Development Towards Sustainability'.",
  fullProceedings: {
    title: "Complete Symposium Proceedings",
    description: "Full proceedings containing all papers presented at the symposium",
    file: "/proceedings/2019/2nd-International-Symposium-on-Social-Science-and-Humanities-ISSSH-2019_Development-Towards-Sustainability-Symposium-Proceeding-.pdf",
    fileSize: "PDF Document"
  }
};

export default function Proceedings2019Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2019.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2019.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2019.date}</p>
            <p className="text-gray-500">{proceedings2019.venue}</p>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-gray-700">{proceedings2019.description}</p>
          </CardContent>
        </Card>

        {/* Full Proceedings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">Complete Proceedings</CardTitle>
            <CardDescription>Download the full symposium proceedings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{proceedings2019.fullProceedings.title}</h3>
                <p className="text-sm text-gray-600">{proceedings2019.fullProceedings.description}</p>
                <p className="text-xs text-gray-500 mt-1">{proceedings2019.fullProceedings.fileSize}</p>
              </div>
              <Button asChild>
                <a href={proceedings2019.fullProceedings.file} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2019 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}
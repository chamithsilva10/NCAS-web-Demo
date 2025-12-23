import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';

const proceedings2020 = {
  title: "3rd International Research Symposium on Social Sciences and Humanities (IRSSSH) 2020",
  subtitle: "Advances in Social Sciences and Humanities: Challenges and Opportunities",
  date: "January 22-23, 2021",
  venue: "Auditorium, University Grants Commission, Sri Lanka",
  description: "The 3rd International Research Symposium on Social Sciences and Humanities (IRSSSH) 2020 was held on January 22-23, 2021, at the Auditorium of the University Grants Commission in Sri Lanka. The symposium focused on 'Advances in Social Sciences and Humanities: Challenges and Opportunities'.",
  fullProceedings: {
    title: "Complete Symposium Proceedings",
    description: "Full proceedings containing all papers presented at the symposium",
    file: "/proceedings/2020/IRSSSH2020_Symposium_Proceeding.pdf",
    fileSize: "PDF Document"
  }
};

export default function Proceedings2020Page() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{proceedings2020.title}</h1>
            <h2 className="text-xl text-gray-600 mb-2">{proceedings2020.subtitle}</h2>
            <p className="text-gray-500 mb-2">{proceedings2020.date}</p>
            <p className="text-gray-500">{proceedings2020.venue}</p>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-gray-700">{proceedings2020.description}</p>
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
                <h3 className="font-medium text-gray-900 mb-1">{proceedings2020.fullProceedings.title}</h3>
                <p className="text-sm text-gray-600">{proceedings2020.fullProceedings.description}</p>
                <p className="text-xs text-gray-500 mt-1">{proceedings2020.fullProceedings.fileSize}</p>
              </div>
              <Button asChild>
                <a href={proceedings2020.fullProceedings.file} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2020 National Centre for Advanced Studies in Humanities and Social Sciences</p>
          <p>Tel: +94 011 2685849 | Fax: +94 011 2693975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  );
}
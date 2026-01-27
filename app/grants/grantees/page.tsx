import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GranteesPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Grantees</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Grantees – Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3>M Phil/Ph D Grantee's Six-monthly Progress Report</h3>
              <Button asChild>
                <a href="/downloads/Six-Monthly-Progress-Report-F02-UPDATED.doc" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>Inception Report 01</h3>
              <Button asChild>
                <a href="/downloads/Progress-report-Inception.doc" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>Voluntary Declaration of Funds Utilized/ to be Utilized Under NCAS Grant</h3>
              <Button asChild>
                <a href="/downloads/VD-FORM-F03.doc" download>Download</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Grant Guideline</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h3>BY-LAWS GOVERNING THE PARTIAL FUNDING FOR MPHIL/PHD- POSTGRADUATE GRANT SCHEME VERSION 01</h3>
            <Button asChild>
              <a href="/downloads/NCAS-GRANT-SCHEME-BY-LAWS-VERSION-01-UPDATED.pdf" download>Download</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Funding Agreement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3>Tripartite Funding Agreement</h3>
              <Button asChild>
                <a href="/downloads/Final-Tripartite-Agreement-NCAS-VERSION-04.docx" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>Self declaration form</h3>
              <Button asChild>
                <a href="/downloads/New-SELF-DECLARATION-08.01.2024.docx" download>Download</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

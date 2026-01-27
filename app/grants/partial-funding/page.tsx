import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PartialFundingPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Partial Funding for Advanced Postgraduate Studies – 2025</h1>
      <Card className="mb-6">
        <CardContent className="p-6">
          <img src="/grant-2025.png" alt="Partial Funding 2025" className="w-full mb-6" />
          <div className="space-y-4">
            <div>
              <h3>Letter – Calling Applications</h3>
              <Button asChild>
                <a href="/downloads/Grant-Application-2025-2nd-Round.pdf" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>APPLICATION FORM -2025 – 2nd Round</h3>
              <Button asChild>
                <a href="/downloads/NEW-APPLICATION-FORM-2025-2nd-Round.doc" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>APPLICATION CHECK LIST OVERSEAS</h3>
              <Button asChild>
                <a href="/downloads/APPLICATION-CHECK-LIST-OVERSEAS.docx" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>APPLICATION CHECK LIST LOCAL</h3>
              <Button asChild>
                <a href="/downloads/APPLICATION-CHECK-LIST-LOCAL.docx" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>Revised Guidelines for Postgraduate Grant Scheme</h3>
              <Button asChild>
                <a href="/downloads/NCAS-guidelines-Version-04-05.08.2024.pdf" download>Download</a>
              </Button>
            </div>
            <div>
              <h3>Tripartite Funding Agreement</h3>
              <Button asChild>
                <a href="/downloads/Tripartite-Agreement-Version-04-05.08.2024.docx" download>Download</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
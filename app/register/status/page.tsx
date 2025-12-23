"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, FileText, Clock, CheckCircle, XCircle, AlertCircle, Download, Mail } from "lucide-react"

export default function ApplicationStatusPage() {
  const [applicationId, setApplicationId] = useState("")
  const [email, setEmail] = useState("")
  const [applicationData, setApplicationData] = useState(null)

  // Mock application data
  const mockApplication = {
    id: "NCAS2024001234",
    applicantName: "John Doe",
    program: "PhD in Literature Studies",
    submissionDate: "2024-02-15",
    status: "Under Review",
    progress: 60,
    timeline: [
      {
        stage: "Application Submitted",
        date: "2024-02-15",
        status: "completed",
        description: "Application and documents received",
      },
      {
        stage: "Initial Review",
        date: "2024-02-20",
        status: "completed",
        description: "Application reviewed for completeness",
      },
      {
        stage: "Academic Review",
        date: "2024-03-01",
        status: "in-progress",
        description: "Under review by academic committee",
      },
      {
        stage: "Interview",
        date: "2024-03-15",
        status: "pending",
        description: "Interview scheduling pending",
      },
      {
        stage: "Final Decision",
        date: "2024-03-30",
        status: "pending",
        description: "Final admission decision",
      },
    ],
    documents: [
      { name: "Application Form", status: "verified", uploadDate: "2024-02-15" },
      { name: "Academic Transcripts", status: "verified", uploadDate: "2024-02-15" },
      { name: "Research Proposal", status: "verified", uploadDate: "2024-02-15" },
      { name: "References", status: "pending", uploadDate: "2024-02-16" },
      { name: "English Proficiency", status: "verified", uploadDate: "2024-02-15" },
    ],
    nextSteps: [
      "Await academic committee review completion",
      "Prepare for potential interview",
      "Check email regularly for updates",
    ],
    estimatedDecision: "2024-03-30",
  }

  const handleSearch = () => {
    if (applicationId && email) {
      setApplicationData(mockApplication)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "pending":
        return <AlertCircle className="h-5 w-5 text-gray-400" />
      case "rejected":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "default"
      case "pending":
        return "secondary"
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Application Status</h1>
          <p className="text-muted-foreground">Track your MPhil/PhD application progress and view important updates.</p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Check Application Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="applicationId">Application ID</Label>
                <Input
                  id="applicationId"
                  placeholder="e.g., NCAS2024001234"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleSearch} className="w-full md:w-auto">
              <Search className="h-4 w-4 mr-2" />
              Check Status
            </Button>
          </CardContent>
        </Card>

        {/* Application Details */}
        {applicationData && (
          <div className="space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Application Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium">Application ID</Label>
                      <p className="font-mono text-sm">{applicationData.id}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Applicant Name</Label>
                      <p>{applicationData.applicantName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Program</Label>
                      <p>{applicationData.program}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium">Submission Date</Label>
                      <p>{applicationData.submissionDate}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Current Status</Label>
                      <Badge variant="secondary">{applicationData.status}</Badge>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Estimated Decision</Label>
                      <p>{applicationData.estimatedDecision}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Label className="text-sm font-medium">Progress</Label>
                  <Progress value={applicationData.progress} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-1">{applicationData.progress}% complete</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Application Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationData.timeline.map((stage, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{getStatusIcon(stage.status)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold">{stage.stage}</h3>
                          <span className="text-sm text-muted-foreground">{stage.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Document Status */}
            <Card>
              <CardHeader>
                <CardTitle>Document Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {applicationData.documents.map((doc, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">Uploaded: {doc.uploadDate}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(doc.status)}>{doc.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {applicationData.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Application
                  </Button>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Admissions
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Update Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Admissions Office</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 admissions@ncas.ac.lk</p>
                  <p>📞 +94 11 2345 678</p>
                  <p>🕒 Mon-Fri: 8:30 AM - 4:30 PM</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Technical Support</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 support@ncas.ac.lk</p>
                  <p>📞 +94 11 2345 679</p>
                  <p>🕒 Mon-Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

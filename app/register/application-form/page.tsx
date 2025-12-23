"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Download, Upload, FileText, AlertCircle } from "lucide-react"

export default function ApplicationFormPage() {
  const [formData, setFormData] = useState({
    personalInfo: {},
    academicInfo: {},
    researchProposal: {},
    documents: {},
  })

  const requiredDocuments = [
    "Academic transcripts (certified copies)",
    "Degree certificates (certified copies)",
    "Research proposal (2000-3000 words)",
    "Two academic references",
    "English proficiency certificate (if applicable)",
    "Passport-size photographs (2)",
    "Copy of national ID/passport",
    "CV/Resume",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">MPhil/PhD Application Form</h1>
          <p className="text-muted-foreground mb-6">
            Complete all sections carefully. Fields marked with * are required.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Form
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Application Guidelines
            </Button>
          </div>
        </div>

        {/* Application Form */}
        <form className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" required />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Permanent Address *</Label>
                <Textarea id="address" required />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="nationality">Nationality *</Label>
                  <Input id="nationality" required />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input id="dateOfBirth" type="date" required />
                </div>
                <div>
                  <Label htmlFor="gender">Gender *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Program Applied For *</Label>
                <RadioGroup className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mphil" id="mphil" />
                    <Label htmlFor="mphil">MPhil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phd" id="phd" />
                    <Label htmlFor="phd">PhD</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>Study Mode *</Label>
                <RadioGroup className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fulltime" id="fulltime" />
                    <Label htmlFor="fulltime">Full-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parttime" id="parttime" />
                    <Label htmlFor="parttime">Part-time</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="researchArea">Proposed Research Area *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select research area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="literature">Literature Studies</SelectItem>
                    <SelectItem value="linguistics">Linguistics</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="philosophy">Philosophy</SelectItem>
                    <SelectItem value="sociology">Sociology</SelectItem>
                    <SelectItem value="anthropology">Anthropology</SelectItem>
                    <SelectItem value="political-science">Political Science</SelectItem>
                    <SelectItem value="economics">Economics</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="interdisciplinary">Interdisciplinary Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="proposedSupervisor">Proposed Supervisor (if any)</Label>
                <Input id="proposedSupervisor" />
              </div>
            </CardContent>
          </Card>

          {/* Educational Background */}
          <Card>
            <CardHeader>
              <CardTitle>Educational Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Undergraduate Degree</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ugDegree">Degree Title *</Label>
                    <Input id="ugDegree" required />
                  </div>
                  <div>
                    <Label htmlFor="ugInstitution">Institution *</Label>
                    <Input id="ugInstitution" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="ugYear">Year of Graduation *</Label>
                    <Input id="ugYear" type="number" required />
                  </div>
                  <div>
                    <Label htmlFor="ugClass">Class/Grade *</Label>
                    <Input id="ugClass" required />
                  </div>
                  <div>
                    <Label htmlFor="ugGPA">GPA/Percentage *</Label>
                    <Input id="ugGPA" required />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Postgraduate Degree (if applicable)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pgDegree">Degree Title</Label>
                    <Input id="pgDegree" />
                  </div>
                  <div>
                    <Label htmlFor="pgInstitution">Institution</Label>
                    <Input id="pgInstitution" />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="pgYear">Year of Graduation</Label>
                    <Input id="pgYear" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="pgClass">Class/Grade</Label>
                    <Input id="pgClass" />
                  </div>
                  <div>
                    <Label htmlFor="pgGPA">GPA/Percentage</Label>
                    <Input id="pgGPA" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Proposal */}
          <Card>
            <CardHeader>
              <CardTitle>Research Proposal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="researchTitle">Proposed Research Title *</Label>
                <Input id="researchTitle" required />
              </div>
              <div>
                <Label htmlFor="researchSummary">Research Summary (500 words max) *</Label>
                <Textarea
                  id="researchSummary"
                  rows={6}
                  placeholder="Provide a brief summary of your proposed research..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="researchObjectives">Research Objectives *</Label>
                <Textarea
                  id="researchObjectives"
                  rows={4}
                  placeholder="List your main research objectives..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="methodology">Proposed Methodology *</Label>
                <Textarea id="methodology" rows={4} placeholder="Describe your research methodology..." required />
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Document Requirements</h3>
                      <p className="text-blue-800 text-sm mt-1">
                        All documents must be in PDF format, maximum 5MB each. Certified copies required for official
                        documents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm">{doc}</span>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Declaration */}
          <Card>
            <CardHeader>
              <CardTitle>Declaration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="accuracy" required />
                  <Label htmlFor="accuracy" className="text-sm leading-relaxed">
                    I declare that all information provided in this application is true and accurate to the best of my
                    knowledge.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to abide by the rules and regulations of NCAS and understand that any false information may
                    result in rejection of my application.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed">
                    I consent to the processing of my personal data for the purpose of this application and academic
                    administration.
                  </Label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <Label htmlFor="signature">Digital Signature *</Label>
                  <Input id="signature" placeholder="Type your full name" required />
                </div>
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input id="date" type="date" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center gap-4">
            <Button type="button" variant="outline" size="lg">
              Save as Draft
            </Button>
            <Button type="submit" size="lg">
              Submit Application
            </Button>
          </div>
        </form>

        {/* Application Fee Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Application Fee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Local Students</h3>
                <p className="text-2xl font-bold text-primary">LKR 5,000</p>
                <p className="text-sm text-muted-foreground">Non-refundable application fee</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">International Students</h3>
                <p className="text-2xl font-bold text-primary">USD 50</p>
                <p className="text-sm text-muted-foreground">Non-refundable application fee</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Payment Methods</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Bank transfer to NCAS account</li>
                <li>• Online payment via university portal</li>
                <li>• Cash payment at NCAS office</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

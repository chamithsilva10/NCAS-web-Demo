"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  FileText,
  Download,
  Upload,
  Calendar,
  DollarSign,
  User,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"

const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nationality: z.string().min(1, "Nationality is required"),

  // Academic Information
  currentInstitution: z.string().min(1, "Current institution is required"),
  currentPosition: z.string().min(1, "Current position is required"),
  highestDegree: z.string().min(1, "Highest degree is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),

  // Grant Information
  grantType: z.string().min(1, "Grant type is required"),
  projectTitle: z.string().min(10, "Project title must be at least 10 characters"),
  projectDescription: z.string().min(100, "Project description must be at least 100 characters"),
  requestedAmount: z.string().min(1, "Requested amount is required"),
  projectDuration: z.string().min(1, "Project duration is required"),

  // Additional Information
  previousGrants: z.string().optional(),
  references: z.string().min(1, "References are required"),

  // Agreements
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
  dataProcessingConsent: z.boolean().refine((val) => val === true, "You must consent to data processing"),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

export default function FormsGuidelinesPage() {
  const [activeTab, setActiveTab] = useState("guidelines")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: "",
      currentInstitution: "",
      currentPosition: "",
      highestDegree: "",
      fieldOfStudy: "",
      grantType: "",
      projectTitle: "",
      projectDescription: "",
      requestedAmount: "",
      projectDuration: "",
      previousGrants: "",
      references: "",
      termsAccepted: false,
      dataProcessingConsent: false,
    },
  })

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Application submitted:", data)
      setSubmitSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const grantTypes = [
    { value: "research", label: "Research Grants (Up to LKR 500,000)" },
    { value: "phd", label: "PhD Scholarships (Full funding)" },
    { value: "publication", label: "Publication Awards (LKR 25,000 - 100,000)" },
    { value: "short-term", label: "Short Term Grants (Up to LKR 150,000)" },
  ]

  const guidelines = [
    {
      title: "Eligibility Criteria",
      icon: User,
      items: [
        "Must be a citizen or permanent resident of Sri Lanka",
        "Hold a minimum of a Bachelor's degree from a recognized institution",
        "Demonstrate proficiency in English (written and spoken)",
        "Have a clear research proposal aligned with NCAS priorities",
        "Not currently receiving similar funding from other sources",
      ],
    },
    {
      title: "Application Requirements",
      icon: FileText,
      items: [
        "Completed application form with all required fields",
        "Detailed research proposal (maximum 5,000 words)",
        "Academic transcripts and certificates",
        "Two academic references from recognized scholars",
        "Detailed budget breakdown and justification",
        "CV/Resume highlighting relevant experience",
      ],
    },
    {
      title: "Selection Process",
      icon: CheckCircle,
      items: [
        "Initial screening for eligibility and completeness",
        "Peer review by subject matter experts",
        "Evaluation by NCAS Grant Review Committee",
        "Interview or presentation (for shortlisted candidates)",
        "Final selection and award notification",
        "Grant agreement and disbursement procedures",
      ],
    },
    {
      title: "Important Deadlines",
      icon: Calendar,
      items: [
        "Research Grants: Applications due March 31st annually",
        "PhD Scholarships: Applications due May 15th annually",
        "Publication Awards: Rolling applications throughout the year",
        "Short Term Grants: Applications due 60 days before project start",
        "Late applications will not be considered",
      ],
    },
  ]

  const documents = [
    {
      name: "Grant Application Form",
      description: "Official application form for all grant types",
      format: "PDF",
      size: "2.3 MB",
      required: true,
    },
    {
      name: "Research Proposal Template",
      description: "Structured template for research proposals",
      format: "DOCX",
      size: "1.1 MB",
      required: true,
    },
    {
      name: "Budget Template",
      description: "Excel template for budget breakdown",
      format: "XLSX",
      size: "0.8 MB",
      required: true,
    },
    {
      name: "Reference Form",
      description: "Form for academic references",
      format: "PDF",
      size: "0.5 MB",
      required: true,
    },
    {
      name: "Grant Guidelines Handbook",
      description: "Comprehensive guide to NCAS grants",
      format: "PDF",
      size: "5.2 MB",
      required: false,
    },
    {
      name: "Sample Successful Proposals",
      description: "Examples of funded research proposals",
      format: "PDF",
      size: "3.7 MB",
      required: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Grant Application Forms & Guidelines</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Complete guide to applying for NCAS research grants and funding opportunities
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="application">Apply Online</TabsTrigger>
            <TabsTrigger value="status">Check Status</TabsTrigger>
          </TabsList>

          {/* Guidelines Tab */}
          <TabsContent value="guidelines" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Application Guidelines</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Please read these guidelines carefully before submitting your application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {guidelines.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Notice */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertCircle className="h-5 w-5" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-700">
                <p className="mb-4">
                  All applications must be submitted through the official NCAS online portal. Email submissions will not
                  be accepted. Incomplete applications or those missing required documents will be automatically
                  rejected.
                </p>
                <p>
                  For technical assistance with the application process, please contact our support team at
                  grants@ncas.ac.lk or call +94 11 269 1058 during office hours.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Required Documents & Forms</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Download all necessary forms and templates for your grant application
              </p>
            </div>

            <div className="grid gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className={doc.required ? "border-primary/20" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            {doc.name}
                            {doc.required && <Badge variant="destructive">Required</Badge>}
                          </h3>
                          <p className="text-muted-foreground">{doc.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>Format: {doc.format}</span>
                            <span>Size: {doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Info className="h-5 w-5" />
                  Document Submission Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700">
                <ul className="space-y-2">
                  <li>• Ensure all documents are in the specified formats (PDF, DOCX, XLSX)</li>
                  <li>• File sizes should not exceed 10MB per document</li>
                  <li>• Use clear, descriptive filenames (e.g., "JohnDoe_ResearchProposal.pdf")</li>
                  <li>• All documents must be in English or accompanied by certified translations</li>
                  <li>• Scan documents at minimum 300 DPI for clarity</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Application Tab */}
          <TabsContent value="application" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Online Grant Application</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete your grant application using our secure online form
              </p>
            </div>

            {submitSuccess ? (
              <Card className="max-w-2xl mx-auto border-green-200 bg-green-50">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Application Submitted Successfully!</h3>
                  <p className="text-green-700 mb-6">
                    Your application has been received and assigned reference number{" "}
                    <strong>
                      NCAS-2024-
                      {Math.floor(Math.random() * 10000)
                        .toString()
                        .padStart(4, "0")}
                    </strong>
                    . You will receive a confirmation email shortly.
                  </p>
                  <Button onClick={() => setSubmitSuccess(false)}>Submit Another Application</Button>
                </CardContent>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-4xl mx-auto">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>Please provide your personal details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="nationality"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nationality *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your nationality" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Academic Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Academic Information
                      </CardTitle>
                      <CardDescription>Please provide your academic background</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="currentInstitution"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Institution *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your current institution" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="currentPosition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Position *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your current position" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="highestDegree"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Highest Degree *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your highest degree" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                  <SelectItem value="master">Master's Degree</SelectItem>
                                  <SelectItem value="phd">PhD</SelectItem>
                                  <SelectItem value="postdoc">Post-Doctoral</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="fieldOfStudy"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Field of Study *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your field of study" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Grant Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Grant Information
                      </CardTitle>
                      <CardDescription>Details about your grant application</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="grantType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grant Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select grant type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {grantTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your project title" {...field} />
                            </FormControl>
                            <FormDescription>Provide a clear, concise title for your research project</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Description *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Provide a detailed description of your research project..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Minimum 100 characters. Describe your research objectives, methodology, and expected
                              outcomes.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="requestedAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Requested Amount (LKR) *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter requested amount" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectDuration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Duration *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select duration" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="3-months">3 months</SelectItem>
                                  <SelectItem value="6-months">6 months</SelectItem>
                                  <SelectItem value="12-months">12 months</SelectItem>
                                  <SelectItem value="18-months">18 months</SelectItem>
                                  <SelectItem value="24-months">24 months</SelectItem>
                                  <SelectItem value="36-months">36 months</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Additional Information</CardTitle>
                      <CardDescription>Optional details to support your application</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="previousGrants"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous Grants (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="List any previous grants or funding you have received..."
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>Include grant names, amounts, and years if applicable</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="references"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Academic References *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Provide contact details for two academic references..."
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Include names, positions, institutions, and contact information
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>

                  {/* File Upload Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5" />
                        Document Upload
                      </CardTitle>
                      <CardDescription>Upload required supporting documents</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm font-medium mb-1">Research Proposal</p>
                          <p className="text-xs text-muted-foreground mb-3">PDF, max 10MB</p>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm font-medium mb-1">CV/Resume</p>
                          <p className="text-xs text-muted-foreground mb-3">PDF, max 5MB</p>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm font-medium mb-1">Academic Transcripts</p>
                          <p className="text-xs text-muted-foreground mb-3">PDF, max 10MB</p>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm font-medium mb-1">Budget Breakdown</p>
                          <p className="text-xs text-muted-foreground mb-3">Excel/PDF, max 5MB</p>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Terms and Conditions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Terms and Conditions</CardTitle>
                      <CardDescription>Please read and accept the following terms</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>I accept the terms and conditions *</FormLabel>
                              <FormDescription>
                                I have read and agree to the NCAS grant terms and conditions, including reporting
                                requirements and fund usage guidelines.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dataProcessingConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Data processing consent *</FormLabel>
                              <FormDescription>
                                I consent to NCAS processing my personal data for the purpose of grant application
                                evaluation and administration.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px]">
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </TabsContent>

          {/* Status Tab */}
          <TabsContent value="status" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Check Application Status</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Track the progress of your grant application
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Application Status Lookup</CardTitle>
                <CardDescription>Enter your application reference number to check status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="referenceNumber">Reference Number</Label>
                  <Input id="referenceNumber" placeholder="Enter your reference number (e.g., NCAS-2024-1234)" />
                </div>
                <Button className="w-full">Check Status</Button>
              </CardContent>
            </Card>

            {/* Sample Status Display */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Application Status: NCAS-2024-1234</CardTitle>
                <CardDescription>Submitted on March 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Application Submitted</p>
                        <p className="text-sm text-green-600">March 15, 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Initial Review Completed</p>
                        <p className="text-sm text-green-600">March 22, 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-blue-600 rounded-full animate-pulse" />
                      <div>
                        <p className="font-medium text-blue-800">Under Expert Review</p>
                        <p className="text-sm text-blue-600">In progress</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-gray-400 rounded-full" />
                      <div>
                        <p className="font-medium text-gray-600">Committee Review</p>
                        <p className="text-sm text-gray-500">Pending</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-gray-400 rounded-full" />
                      <div>
                        <p className="font-medium text-gray-600">Final Decision</p>
                        <p className="text-sm text-gray-500">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Next Steps</h4>
                  <p className="text-sm text-blue-700">
                    Your application is currently under expert review. This process typically takes 4-6 weeks. You will
                    be notified by email once the review is complete and your application moves to the next stage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

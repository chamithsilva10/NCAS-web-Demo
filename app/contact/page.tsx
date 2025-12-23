"use client"

import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          subject: '',
          message: ''
        })

        // Show different message for demo mode
        if (data.demo) {
          setTimeout(() => {
            alert('Demo Mode: Message logged to server console. Configure SMTP in .env.local to send real emails.')
          }, 1000)
        }
      } else {
        const error = await response.json()
        setSubmitStatus('error')
        setErrorMessage(error.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "National Centre for Advanced Studies",
        "in Humanities & Social Sciences (NCAS)",
        "No. 35, Bullers Lane, Colombo 07",
        "Sri Lanka",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 11 269 1056", "+94 11 269 1057"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ncas.ac.lk", "research@ncas.ac.lk", "admin@ncas.ac.lk"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:30 AM - 4:30 PM", "Saturday: 8:30 AM - 12:30 PM", "Sunday: Closed"],
    },
  ]

  const departments = [
    {
      name: "Research Department",
      email: "research@ncas.ac.lk",
      phone: "+94 11 269 1058",
      head: "Dr. Priyani Fernando",
    },
    {
      name: "Academic Affairs",
      email: "academic@ncas.ac.lk",
      phone: "+94 11 269 1059",
      head: "Prof. Asanka Perera",
    },
    {
      name: "Publications",
      email: "publications@ncas.ac.lk",
      phone: "+94 11 269 1060",
      head: "Dr. Malini Jayawardena",
    },
    {
      name: "Training & Workshops",
      email: "training@ncas.ac.lk",
      phone: "+94 11 269 1061",
      head: "Dr. Chaminda Silva",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/ncas-logo.png"
                alt="NCAS Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Get in touch with our team for inquiries, collaborations, or support
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="h-5 w-5" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution</Label>
                    <Input
                      id="organization"
                      placeholder="Enter your organization name"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="training">Training & Workshops</SelectItem>
                        <SelectItem value="publications">Publications</SelectItem>
                        <SelectItem value="scholarships">Scholarships & Fellowships</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Required fields. We typically respond within 24-48 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Contact Info */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Department Contacts</CardTitle>
                <CardDescription>Direct contact information for specific departments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">{dept.name}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Head: {dept.head}</p>
                      <p>Email: {dept.email}</p>
                      <p>Phone: {dept.phone}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Find us in the heart of Colombo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">No. 35, Bullers Lane, Colombo 07</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about NCAS
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can I apply for research collaboration?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contact our Research Department at research@ncas.ac.lk with your proposal. We review applications
                  quarterly and welcome both local and international collaborations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are workshops open to international participants?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, most of our workshops welcome international participants. Some are offered online to accommodate
                  global participation. Check individual workshop details for specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I access NCAS publications?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our publications are available through our website and academic databases. Contact
                  publications@ncas.ac.lk for specific requests or subscription information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I visit the NCAS library?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our library is open to researchers and students by appointment. Please contact us in advance to
                  arrange access and discuss your research needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

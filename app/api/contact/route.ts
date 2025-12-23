import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received form data:', body)

    const { firstName, lastName, email, phone, organization, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TEMP: Force demo mode for debugging
    console.log('FORCED DEMO MODE - logging message instead of sending email')

    // Log the email data for development/demo purposes
    console.log('=== CONTACT FORM SUBMISSION ===')
    console.log('Name:', `${firstName} ${lastName}`)
    console.log('Email:', email)
    console.log('Phone:', phone || 'Not provided')
    console.log('Organization:', organization || 'Not provided')
    console.log('Subject:', subject)
    console.log('Message:', message)
    console.log('================================')

    // Return success for demo purposes
    return NextResponse.json(
      {
        message: 'Message received! (Demo mode - check server logs)',
        demo: true
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const { to, subject, text, html } = await request.json()

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL || 'notifications@flowbank.com',
      subject,
      text,
      html,
    }

    await sgMail.send(msg)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 
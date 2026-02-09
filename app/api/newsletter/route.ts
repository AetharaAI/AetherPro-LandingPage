import { NextRequest, NextResponse } from 'next/server'
import { writeContact } from '@/lib/contacts'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    await writeContact({
      email,
      source: 'newsletter',
    })

    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM,
          to: email,
          subject: 'Welcome to AetherPro',
          html: '<p>Welcome to AetherPro Technologies. You are now subscribed to sovereign AI updates.</p>',
        }),
      })
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

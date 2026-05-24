import { NextRequest, NextResponse } from 'next/server'
import { writeContact } from '@/lib/contacts'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, companyName, professionalEmail, primaryUseCase, referral } = body

    if (
      !fullName ||
      !companyName ||
      !primaryUseCase ||
      !professionalEmail ||
      !professionalEmail.includes('@')
    ) {
      return NextResponse.json(
        { error: 'All fields are required and a valid email address is needed.' },
        { status: 400 }
      )
    }

    await writeContact({
      email: professionalEmail,
      fullName,
      companyName,
      primaryUseCase,
      referral,
      source: 'request-access',
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
          to: professionalEmail,
          subject: 'AetherPro Request Access Confirmation',
          html: '<p>Thanks for your AetherPro request. Our team will follow up with next steps.</p>',
        }),
      })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Request access error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

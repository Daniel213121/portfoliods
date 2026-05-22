import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/schema/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO   = 'danielsackitey10@gmail.com'
const FROM = 'Portfolio Contact <onboarding@resend.dev>'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, email, type, message } = parsed.data

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Portfolio] ${type} enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9f8f6;border-radius:12px;">
          <h2 style="margin:0 0 4px;font-size:22px;color:#111;">New enquiry from your portfolio</h2>
          <p style="margin:0 0 24px;font-size:13px;color:#888;">${new Date().toUTCString()}</p>

          <table style="width:100%;border-collapse:collapse;font-size:14px;color:#444;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#111;width:110px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e5e5;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#111;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e5e5;">
                <a href="mailto:${email}" style="color:#e05c1a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#111;">Project type</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e5e5;">${type}</td>
            </tr>
          </table>

          <div style="margin-top:24px;">
            <p style="font-weight:600;color:#111;margin:0 0 8px;font-size:14px;">Message</p>
            <p style="margin:0;font-size:15px;line-height:1.7;color:#444;white-space:pre-wrap;">${message}</p>
          </div>

          <div style="margin-top:32px;padding:16px;background:#111;border-radius:8px;text-align:center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(type)} enquiry"
               style="color:#e05c1a;font-weight:600;font-size:14px;text-decoration:none;">
              Reply to ${name} →
            </a>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

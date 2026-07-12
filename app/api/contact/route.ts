import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const DEFAULT_RECEIVER = 'ashwitsharma834@gmail.com';

async function analyzeLeadWithAI(name: string, phone: string, service: string, description: string) {
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!openaiKey) {
    return { priority: 'medium', category: 'general' };
  }

  try {
    const openai = new OpenAI({ apiKey: openaiKey });
    const prompt = `Analyze this lead inquiry and provide a brief JSON response with priority (high/medium/low) and category.

Name: ${name}
Phone: ${phone}
Service: ${service}
Description: ${description}

Respond ONLY with valid JSON: {"priority": "high|medium|low", "category": "string", "sentiment": "positive|neutral|negative"}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
    });

    const content = response.choices?.[0]?.message?.content?.trim();
    if (content) {
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('AI analysis failed:', error);
  }

  return { priority: 'medium', category: 'inquiry', sentiment: 'neutral' };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const description = String(body.description || '').trim();
    const service = String(body.service || 'General service inquiry').trim();

    if (!name || !phone || !description) {
      return NextResponse.json({ error: 'Name, phone, and description are required.' }, { status: 400 });
    }

    // Analyze lead with AI
    const leadAnalysis = await analyzeLeadWithAI(name, phone, service, description);

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const hasSmtpConfig = Boolean(smtpHost && smtpUser && smtpPassword);

    if (!hasSmtpConfig) {
      console.warn('SMTP is not configured. Lead received but email notification was skipped.', {
        name,
        phone,
        service,
        leadAnalysis,
      });

      return NextResponse.json(
        {
          ok: true,
          message: 'Your request was received successfully. Email delivery is not configured yet, so we will follow up manually.',
          leadId: `lead_${Date.now()}`,
          analysis: leadAnalysis,
          emailSent: false,
        },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const toEmail = process.env.CONTACT_EMAIL || DEFAULT_RECEIVER;
    const subject = `[${leadAnalysis.priority.toUpperCase()}] New service request from ${name}`;
    const timestamp = new Date().toISOString();

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
        <h2 style="color: #6366f1;">New Service Request</h2>
        
        <div style="background: #f0f4ff; padding: 12px; border-radius: 8px; margin: 16px 0;">
          <p><strong>Lead Priority:</strong> ${leadAnalysis.priority}</p>
          <p><strong>Category:</strong> ${leadAnalysis.category}</p>
          <p><strong>Sentiment:</strong> ${leadAnalysis.sentiment}</p>
          <p><strong>Received:</strong> ${timestamp}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 12px;">Lead Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Requested Service:</strong> ${service}</p>
        </div>

        <div style="background: #f9fafb; padding: 16px; border-left: 4px solid #6366f1; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Description</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${description}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
        <p style="font-size: 12px; color: #6b7280;">This is an automated lead notification from BrandMatrix. Reply directly to ${toEmail} to follow up.</p>
      </div>
    `;

    // Send to admin
    await transporter.sendMail({
      from: `"BrandMatrix Leads" <${smtpUser}>`,
      to: toEmail,
      subject,
      text: `Service Request from ${name}\n\nName: ${name}\nPhone: ${phone}\nRequested Service: ${service}\n\nDescription:\n${description}\n\nLead Analysis:\nPriority: ${leadAnalysis.priority}\nCategory: ${leadAnalysis.category}\nSentiment: ${leadAnalysis.sentiment}`,
      html: htmlBody,
    });

    // Send confirmation to user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
        <h2 style="color: #6366f1;">Thank You, ${name}!</h2>
        <p>We've received your service request and will review it shortly. Our team will contact you within 24 hours.</p>
        
        <div style="background: #f0f4ff; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0;">What's next?</h4>
          <ul>
            <li>Our team will review your request</li>
            <li>We'll call or message you at ${phone}</li>
            <li>We'll share a custom proposal and timeline</li>
          </ul>
        </div>

        <p style="font-size: 12px; color: #6b7280;">Best regards,<br>The BrandMatrix Team</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"BrandMatrix" <${smtpUser}>`,
      to: phone.includes('@') ? phone : smtpUser,
      subject: 'We received your service request',
      html: confirmationHtml,
    });

    return NextResponse.json({
      ok: true,
      message: 'Request sent successfully.',
      leadId: `lead_${Date.now()}`,
      analysis: leadAnalysis,
    });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Unable to send contact request. Please try again.' }, { status: 500 });
  }
}

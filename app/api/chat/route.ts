import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const SERVICE_KNOWLEDGE_BASE = [
  {
    keywords: ['tools', 'software', 'use'],
    response: `We use industry-leading tools for our services:\n\n• Adobe After Effects - Professional motion graphics and animation\n• Adobe Premiere Pro - Video editing and production\n• Alight Motion - Mobile video animation and effects\n\nThese tools help us create stunning visual content for your brand.`,
  },
  {
    keywords: ['digital marketing', 'marketing', 'content', 'logo', 'thumbnail', 'video editing'],
    response: `Our Digital Marketing Services include:\n\n• Content Production - Professional content creation for all platforms\n• Logo Design - Custom brand identity and professional logos\n• Thumbnail Design - Eye-catching thumbnails for maximum engagement\n• Short Video Editing - Professional editing using After Effects, Premiere Pro, and Alight Motion\n\nAll services are tailored to boost your online presence and engagement.`,
  },
  {
    keywords: ['web development', 'website', 'mlm', 'school', 'hospital', 'management', 'system'],
    response: `Our Web Development Services include:\n\n• MLM Website - Complete MLM platform with commission tracking, downline management, and user portal\n• School Management System - Student database, attendance tracking, grades, and parent communication\n• Hospital Management Website - Appointment booking, patient records, staff management, and billing\n\nAll websites are modern, responsive, and production-ready.`,
  },
  {
    keywords: ['price', 'cost', 'pricing', 'package', 'monthly', 'yearly'],
    response: `We offer flexible SaaS pricing with both monthly and yearly packages:\n\n• Starter Plan - Perfect for small businesses\n• Professional Plan - Best for growing companies\n• Enterprise Plan - Complete solution for large organizations\n\nCheck the pricing section for detailed information and features.`,
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'support'],
    response: `Great question! You can reach out to us through:\n\n• Email - Contact our team for inquiries\n• Phone - Call us for quick support\n• Contact Form - Fill out the form on our website\n\nWe are ready to help with your project.`,
  },
];

function getFallbackResponse(prompt: string) {
  const lowerPrompt = prompt.toLowerCase();
  for (const item of SERVICE_KNOWLEDGE_BASE) {
    if (item.keywords.some((keyword) => lowerPrompt.includes(keyword))) {
      return item.response;
    }
  }

  return `Thanks for your question! I'm familiar with our Digital Marketing services, Web Development services, and our tools. Feel free to ask about any of these topics or request a custom service inquiry.`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = String(body.prompt || '').trim();

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
  }

  const openaiKey = process.env.OPENAI_API_KEY;

  if (openaiKey) {
    try {
      const openai = new OpenAI({ apiKey: openaiKey });
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful digital marketing agency assistant that answers questions about services, pricing, tools, and project inquiries in a friendly and concise way.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 250,
      });

      const text = completion.choices?.[0]?.message?.content?.trim();
      if (text) {
        return NextResponse.json({ text });
      }
    } catch (error) {
      console.error('OpenAI request failed:', error);
    }
  }

  return NextResponse.json({ text: getFallbackResponse(prompt) });
}

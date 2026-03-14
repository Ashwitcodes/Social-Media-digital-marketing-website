import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
}

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BrandMatrix - Digital Marketing & Software Development Services',
  description: 'Professional digital marketing and custom software development services. Flexible SaaS pricing with monthly and yearly plans. Transform your business with expert strategies.',
  keywords: 'digital marketing, software development, web development, SaaS, marketing agency, custom software',
  authors: [{ name: 'BrandMatrix Team' }],
  creator: 'BrandMatrix',
  publisher: 'BrandMatrix',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/brand-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/brand-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/brand-logo.png',
        type: 'image/jpeg',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'BrandMatrix - Digital Marketing & Software Development',
    description: 'Professional digital marketing and software development services with flexible SaaS pricing.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandMatrix - Digital Marketing & Software Development',
    description: 'Professional digital marketing and software development services',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

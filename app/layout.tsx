import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://capital-holding.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Capital Holding — Investing With a Long View',
  description:
    'Capital Holding is a founder-led investment firm. One thesis, held from Luxembourg, Dubai, and Miami.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Capital Holding',
    title: 'Capital Holding',
    description: 'Investing with a long view. Luxembourg, Dubai, and Miami.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dubai at dusk, the towers over the water',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capital Holding',
    description: 'Investing with a long view. Luxembourg, Dubai, and Miami.',
    images: ['/og.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

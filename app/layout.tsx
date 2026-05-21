import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daniel Sackitey — Full-Stack Developer',
  description:
    'Full-stack developer and founder of Prime Tech Support, building fast, conversion-driven web products from Accra, Ghana.',
  openGraph: {
    title: 'Daniel Sackitey — Full-Stack Developer',
    description: 'Fast, modern web products for businesses and startups.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

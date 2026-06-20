import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Tech Support — Web Development Studio',
  description:
    'Prime Tech Support is a web development studio founded by Daniel, building fast, conversion-driven web products from Accra, Ghana.',
  openGraph: {
    title: 'Prime Tech Support — Web Development Studio',
    description: 'Fast, modern web products for businesses and startups, founded by Daniel.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  )
}

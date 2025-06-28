import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealtyEaseAI - Virtual Business Card',
  description: 'AI-Powered Real Estate Solutions by Kathy Tiburcio, Founder & CEO',
  openGraph: {
    title: 'RealtyEaseAI - Virtual Business Card',
    description: 'AI-Powered Real Estate Solutions by Kathy Tiburcio, Founder & CEO',
    url: 'https://realtyeaseai.com',
    siteName: 'RealtyEaseAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealtyEaseAI - Virtual Business Card',
    description: 'AI-Powered Real Estate Solutions by Kathy Tiburcio, Founder & CEO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
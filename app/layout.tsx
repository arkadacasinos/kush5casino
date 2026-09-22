import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kush5casino.vercel.app/'),
  title: 'Kush Casino — официальный сайт и рабочее зеркало',
  description: 'Kush Casino: понятный гид по официальному сайту, рабочему зеркалу, играм онлайн и безопасному входу с телефона для совершеннолетних игроков.',
  keywords: ['Kush Casino', 'Kush Casino официальный сайт', 'Kush Casino зеркало', 'куш казино играть онлайн'],
  alternates: { canonical: 'https://kush5casino.vercel.app/' },
  robots: { index: true, follow: true },
  icons: { icon: '/kush-favicon.png', apple: '/kush-favicon.png' },
  openGraph: {
    title: 'Kush Casino — официальный сайт и рабочее зеркало',
    description: 'Понятный гид по входу, играм онлайн и рабочему зеркалу Kush Casino.',
    url: 'https://kush5casino.vercel.app/',
    siteName: 'Kush Casino',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1714',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
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

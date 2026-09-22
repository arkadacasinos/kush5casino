import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kush Casino — официальный сайт для игры онлайн с телефона',
  description: 'Kush Casino: официальный сайт для мобильной игры онлайн. Узнайте, как найти актуальный вход, выбрать слоты и настольные игры, проверить зеркало и играть ответственно с телефона.',
  metadataBase: new URL('https://kush5casino.vercel.app/'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: '#101311', colorScheme: 'dark', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Kush Casino — игра начинается с правильного выбора" />
        <meta property="og:description" content="Понятный гид по Kush Casino для мобильной игры онлайн." />
        <meta property="og:url" content="https://kush5casino.vercel.app/" />
        <link rel="canonical" href="https://kush5casino.vercel.app/" />
      </head>
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}

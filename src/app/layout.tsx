import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/theme'
import { Header, Footer } from '@/components'

const inter = Inter({ weight: ['400','500','600'], subsets: ['latin'], display: 'swap', variable: '--font-inter', preload: true, fallback: ['system-ui','arial','sans-serif'], adjustFontFallback: true })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ally360-web.netlify.app'
const ogImage = `${baseUrl}/og/ally360-og.png`

export const metadata: Metadata = {
  title: 'Ally360 - ERP para PYMEs Colombianas',
  description: 'Sistema ERP completo diseñado especialmente para pequeñas y medianas empresas en Colombia.',
  keywords: ["ERP", "Colombia", "PYMEs", "gestión empresarial", "inventario", "ventas", "software empresarial"],
  authors: [{ name: "Ally360" }],
  creator: "Ally360",
  publisher: "Ally360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ally360 - ERP para PYMEs Colombianas',
    description: 'Sistema ERP completo diseñado especialmente para pequeñas y medianas empresas en Colombia.',
    url: baseUrl,
    siteName: 'Ally360',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Ally360' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@ally360',
    title: 'Ally360 - ERP para PYMEs Colombianas',
    description: 'Sistema ERP completo diseñado especialmente para PYMEs en Colombia.',
    images: [ogImage],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  },
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#00B0F0" />
        <link rel="preload" href="/logo/logo-ally360-transparente.png" as="image" type="image/png" />
        {/* JSON-LD Organization */}
        <script type="application/ld+json" suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ally360',
            url: baseUrl,
            logo: `${baseUrl}/logo/logo-ally360-transparente.png`,
            sameAs: [] // agrega redes reales
          }) }} />
        {/* JSON-LD WebSite + SearchAction */}
        <script type="application/ld+json" suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: baseUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${baseUrl}/buscar?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          }) }} />
      </head>
      <body className={`antialiased ${inter.className}`}>
        <ThemeProvider>
          <Header />
          <main style={{ paddingTop: 'var(--header-height, 80px)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

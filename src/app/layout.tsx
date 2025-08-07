import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme";

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ally360 - ERP para PYMEs Colombianas",
  description: "Sistema ERP completo diseñado especialmente para pequeñas y medianas empresas en Colombia. Gestiona inventario, ventas, finanzas y más.",
  keywords: ["ERP", "Colombia", "PYMEs", "gestión empresarial", "inventario", "ventas", "software empresarial"],
  authors: [{ name: "Ally360" }],
  creator: "Ally360",
  publisher: "Ally360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ally360.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ally360 - ERP para PYMEs Colombianas",
    description: "Sistema ERP completo diseñado especialmente para pequeñas y medianas empresas en Colombia.",
    url: 'https://ally360.co',
    siteName: 'Ally360',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ally360 - ERP para PYMEs Colombianas",
    description: "Sistema ERP completo diseñado especialmente para pequeñas y medianas empresas en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

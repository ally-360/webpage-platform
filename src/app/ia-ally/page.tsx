import { Metadata } from 'next';
import IAAllyPage from './IAAllyPage';

export const metadata: Metadata = {
  title: 'IA Ally - Asistente Virtual Inteligente | Ally360',
  description: 'Descubre cómo la Inteligencia Artificial de Ally360 revoluciona la gestión empresarial. Consultas instantáneas, análisis inteligentes y recomendaciones personalizadas para tu negocio.',
  keywords: 'inteligencia artificial, asistente virtual, chatbot empresarial, IA para empresas, análisis de datos, recomendaciones inteligentes, Ally360',
  authors: [{ name: 'Ally360' }],
  creator: 'Ally360',
  publisher: 'Ally360',
  metadataBase: new URL('https://ally360.co'),
  alternates: {
    canonical: '/ia-ally',
  },
  openGraph: {
    title: 'IA Ally - Asistente Virtual Inteligente | Ally360',
    description: 'Descubre cómo la Inteligencia Artificial de Ally360 revoluciona la gestión empresarial. Consultas instantáneas, análisis inteligentes y recomendaciones personalizadas para tu negocio.',
    url: '/ia-ally',
    siteName: 'Ally360',
    type: 'website',
    images: [
      {
        url: '/og/ally360-og.png',
        width: 1200,
        height: 630,
        alt: 'IA Ally - Asistente Virtual Inteligente de Ally360',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA Ally - Asistente Virtual Inteligente | Ally360',
    description: 'Descubre cómo la Inteligencia Artificial de Ally360 revoluciona la gestión empresarial.',
    images: ['/og/ally360-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google97ed61642c3f5585',
  },
};

export default function Page() {
  return <IAAllyPage />;
}

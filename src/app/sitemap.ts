import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://ally360-web.netlify.app'
  // Añade aquí rutas existentes reales del sitio
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/planes`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contacto`, changeFrequency: 'yearly', priority: 0.6 },
  ]
  return routes
}

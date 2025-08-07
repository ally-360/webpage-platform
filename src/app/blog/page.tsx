import { BlogIndexPage } from './BlogIndexPage'
import { getAllBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Ally360 - Consejos y Guías para PYMEs',
  description: 'Descubre consejos prácticos, guías paso a paso y las mejores prácticas para hacer crecer tu PYME con Ally360. Todo lo que necesitas saber sobre ERP, facturación electrónica y gestión empresarial.',
  keywords: 'blog, PYME, ERP, facturación electrónica, gestión empresarial, consejos negocio, Colombia',
  openGraph: {
    title: 'Blog Ally360 - Consejos y Guías para PYMEs',
    description: 'Descubre consejos prácticos y guías para hacer crecer tu PYME.',
    type: 'website',
    url: '/blog',
    images: [
      {
        url: '/assets/images/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Ally360',
      },
    ],
  },
}

export default function BlogPage() {
  // ✅ Esto se ejecuta en el servidor
  const posts = getAllBlogPosts()
  
  return <BlogIndexPage posts={posts} />
}

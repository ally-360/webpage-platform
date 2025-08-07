export interface BlogPost {
  title: string
  description: string
  slug: string
  category: string
  tags?: string[]
  author: string
  publishedAt?: string
  date: string
  image?: string
  featured?: boolean
  readTime?: string
  content?: string
}

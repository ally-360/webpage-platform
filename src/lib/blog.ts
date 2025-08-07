import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types/blog'

const BLOG_PATH = path.join(process.cwd(), 'content/blog')

export function getBlogPosts(): BlogPost[] {
  try {
    // Check if blog directory exists
    if (!fs.existsSync(BLOG_PATH)) {
      console.warn('Blog directory not found:', BLOG_PATH)
      return []
    }

    const files = fs.readdirSync(BLOG_PATH)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    
    const posts = mdxFiles.map(filename => {
      const filePath = path.join(BLOG_PATH, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data: frontMatter } = matter(fileContent)
      
      return {
        ...frontMatter,
        slug: frontMatter.slug || filename.replace('.mdx', ''),
      } as BlogPost
    })

    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date)
      const dateB = new Date(b.publishedAt || b.date)
      return dateB.getTime() - dateA.getTime()
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPost(slug: string): (BlogPost & { content: string }) | null {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data: frontMatter, content } = matter(fileContent)
    
    return {
      ...frontMatter,
      slug: frontMatter.slug || slug,
      content,
    } as BlogPost & { content: string }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    if (!fs.existsSync(BLOG_PATH)) {
      return []
    }

    const files = fs.readdirSync(BLOG_PATH)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''))
  } catch (error) {
    console.error('Error getting blog slugs:', error)
    return []
  }
}

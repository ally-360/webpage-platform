'use client'

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { brandGradients } from '@/config/theme-config'
import type { BlogPost } from '@/types/blog'

interface BlogIndexPageProps {
  posts: BlogPost[]
}

export function BlogIndexPage({ posts }: BlogIndexPageProps) {
  const featuredPosts = posts.filter((post: BlogPost) => post.featured)
  const regularPosts = posts.filter((post: BlogPost) => !post.featured)

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: brandGradients.primary,
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textAlign: 'center',
                mb: 2,
              }}
            >
              Blog Ally360
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Consejos prácticos, guías paso a paso y las mejores estrategias para hacer crecer tu PYME
            </Typography>
          </motion.div>
        </Container>

        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'url("/assets/patterns/dots.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '50px 50px',
          }}
        />
      </Box>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
            }}
          >
            Artículos Destacados
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {featuredPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BlogCard post={post} variant="featured" />
              </motion.div>
            ))}
          </Box>
        </Container>
      )}

      {/* All Posts Section */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
          }}
        >
          Todos los Artículos
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {regularPosts.map((post: BlogPost, index: number) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

interface BlogCardProps {
  post: BlogPost
  variant?: 'featured' | 'regular'
}

function BlogCard({ post, variant = 'regular' }: BlogCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -4 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: isFeatured ? 250 : 200 }}>
        <Image
          src={post.image || '/assets/images/blog-placeholder.svg'}
          alt={post.title}
          fill
          unoptimized
          style={{ objectFit: 'cover' }}
          sizes={
            isFeatured
              ? '(max-width: 768px) 100vw, 50vw'
              : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          }
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 1,
          }}
        >
          <Chip
            label={post.category}
            size="small"
            sx={{
              background: brandGradients.accent,
              color: 'white',
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack spacing={2}>
          <Box>
            <Typography
              variant={isFeatured ? 'h4' : 'h5'}
              component="h3"
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: isFeatured
                  ? { xs: '1.5rem', md: '1.8rem' }
                  : { xs: '1.2rem', md: '1.4rem' },
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: isFeatured ? 3 : 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.5,
              }}
            >
              {post.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {post.tags?.slice(0, isFeatured ? 4 : 3).map((tag: string) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.75rem',
                  height: 24,
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 'auto',
              pt: 2,
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {new Date(post.publishedAt || post.date).toLocaleDateString(
                'es-CO',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
              {post.readTime && ` • ${post.readTime}`}
            </Typography>
            <Button
              component={Link}
              href={`/blog/${post.slug}`}
              variant="text"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(25, 118, 210, 0.04)',
                },
              }}
            >
              Leer más →
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

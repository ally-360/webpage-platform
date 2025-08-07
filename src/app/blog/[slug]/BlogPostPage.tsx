'use client'

import {
  Box,
  Container,
  Typography,
  Chip,
  Avatar,
  Stack,
  Divider,
  Button,
} from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack, AccessTime, Person } from '@mui/icons-material'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { brandGradients } from '@/config/theme-config'
import type { BlogPost } from '@/types/blog'
import { TagBadge } from '@/components/blog/TagBadge'
import { BlogCTA } from '@/components/blog/BlogCTA'

interface Props {
  post: BlogPost & { content: string }
}

import React from 'react'

const mdxComponents = {
  TagBadge,
  BlogCTA,
  h1: (props: React.ComponentProps<'h1'>) => (
    <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 700 }} {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600 }} {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3, mb: 2, fontWeight: 600 }} {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <Typography variant="body1" paragraph sx={{ mb: 2, lineHeight: 1.7 }} {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <Box component="ul" sx={{ mb: 2, pl: 3, '& li': { mb: 1 } }} {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <Box component="ol" sx={{ mb: 2, pl: 3, '& li': { mb: 1 } }} {...props} />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: '4px solid',
        borderColor: 'primary.main',
        pl: 3,
        py: 2,
        my: 3,
        bgcolor: 'grey.50',
        fontStyle: 'italic',
        '& p': { mb: 0 },
      }}
      {...props}
    />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <Box
      component="code"
      sx={{
        bgcolor: 'grey.100',
        px: 1,
        py: 0.5,
        borderRadius: 1,
        fontFamily: 'monospace',
        fontSize: '0.9em',
      }}
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <Box
      component="pre"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        p: 3,
        borderRadius: 2,
        overflow: 'auto',
        my: 3,
        '& code': {
          bgcolor: 'transparent',
          px: 0,
          py: 0,
          color: 'inherit',
        },
      }}
      {...props}
    />
  ),
  table: (props: React.ComponentProps<'table'>) => (
    <Box
      component="table"
      sx={{
        width: '100%',
        mb: 3,
        borderCollapse: 'collapse',
        '& th, & td': {
          border: '1px solid',
          borderColor: 'grey.300',
          px: 2,
          py: 1,
          textAlign: 'left',
        },
        '& th': {
          bgcolor: 'grey.100',
          fontWeight: 600,
        },
      }}
      {...props}
    />
  ),
}

export function BlogPostPage({ post }: Props) {
  return (
    <Box>
      {/* Back Button */}
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Button
          component={Link}
          href="/blog"
          startIcon={<ArrowBack />}
          sx={{
            mb: 3,
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Volver al Blog
        </Button>
      </Container>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category Badge */}
          <Box sx={{ mb: 3 }}>
            <Chip
              label={post.category}
              sx={{
                background: brandGradients.accent,
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {post.title}
          </Typography>

          {/* Meta Information */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            sx={{ mb: 4 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 32, height: 32 }}>
                <Person />
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                Por {post.author}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {new Date(post.publishedAt || post.date).toLocaleDateString(
                  'es-CO',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
                {post.readTime && ` • ${post.readTime} de lectura`}
              </Typography>
            </Stack>
          </Stack>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4 }}>
              {post.tags.map((tag: string) => (
                <TagBadge key={tag} label={tag} />
              ))}
            </Stack>
          )}
        </motion.div>
      </Container>

      {/* Featured Image */}
      {post.image && (
        <Container maxWidth="lg" sx={{ mb: 6 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 250, md: 400 },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </Box>
        </Container>
      )}

      {/* Content */}
      <Container maxWidth="md" sx={{ pb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              '& > *:first-of-type': { mt: 0 },
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            <MDXRemote 
              source={post.content} 
              components={mdxComponents}
            />
          </Box>
        </motion.div>

        <Divider sx={{ my: 6 }} />

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            ¿Te gustó este artículo?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Descubre cómo Ally360 puede ayudarte a optimizar la gestión de tu PYME
          </Typography>
          <Button
            component={Link}
            href="/contacto"
            variant="contained"
            size="large"
            sx={{
              background: brandGradients.primary,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Solicitar Demo Gratuita
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

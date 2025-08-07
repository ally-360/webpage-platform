import { Typography, Button, Paper } from '@mui/material'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { brandGradients } from '@/config/theme-config'

interface BlogCTAProps {
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  variant?: 'primary' | 'secondary'
}

export function BlogCTA({ 
  title = "¿Listo para optimizar tu PYME?", 
  description = "Descubre cómo Ally360 puede transformar la gestión de tu empresa", 
  ctaText = "Comenzar Ahora", 
  ctaLink = "/contacto",
  variant = "primary" 
}: BlogCTAProps) {
  return (
    <Paper
      component={motion.div}
      whileHover={{ y: -2 }}
      sx={{
        p: 4,
        my: 4,
        textAlign: 'center',
        background: variant === 'primary' 
          ? brandGradients.primary 
          : brandGradients.secondary,
        color: 'white',
        borderRadius: 2,
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.15)',
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.5rem', md: '2rem' },
        }}
      >
        {title}
      </Typography>
      
      <Typography
        variant="body1"
        paragraph
        sx={{
          mb: 3,
          opacity: 0.9,
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        {description}
      </Typography>
      
      <Button
        component={Link}
        href={ctaLink}
        variant="contained"
        size="large"
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          color: variant === 'primary' ? 'primary.main' : 'secondary.main',
          fontWeight: 600,
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          '&:hover': {
            bgcolor: 'white',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {ctaText}
      </Button>
    </Paper>
  )
}

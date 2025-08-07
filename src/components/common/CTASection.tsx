'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { brandGradients, shadows } from '../../config/theme-config';

interface CTAActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

interface CTASectionProps {
  // Content props
  title: string;
  subtitle?: string;
  description?: string;
  
  // Action buttons
  primaryAction: CTAActionButton;
  secondaryAction?: CTAActionButton;
  
  // Styling props
  gradient?: string;
  variant?: 'primary' | 'secondary' | 'hero' | 'cta' | 'custom';
  backgroundColor?: string;
  textColor?: string;
  
  // Layout props
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  py?: number | object;
  
  // Animation props
  animationType?: 'fade' | 'slideUp' | 'slideDown' | 'scale';
  animationDelay?: number;
  
  // Additional props
  id?: string;
  className?: string;
}

const getGradientByVariant = (variant: string) => {
  switch (variant) {
    case 'hero':
      return brandGradients.hero;
    case 'primary':
      return brandGradients.primary;
    case 'secondary':
      return brandGradients.secondary;
    case 'cta':
    default:
      return brandGradients.cta;
  }
};

const getAnimationVariants = (type: string) => {
  switch (type) {
    case 'slideUp':
      return {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };
    case 'slideDown':
      return {
        initial: { opacity: 0, y: -30 },
        animate: { opacity: 1, y: 0 },
      };
    case 'scale':
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
      };
    case 'fade':
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      };
  }
};

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  gradient,
  variant = 'cta',
  backgroundColor,
  textColor = '#ffffff',
  maxWidth = 'md',
  py = { xs: 8, md: 12 },
  animationType = 'slideUp',
  animationDelay = 0,
  id,
  className,
}) => {
  const theme = useTheme();
  const backgroundGradient = gradient || getGradientByVariant(variant);
  const animationVariants = getAnimationVariants(animationType);

  const handleAction = (action: CTAActionButton) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      if (action.href.startsWith('http') || action.href.startsWith('mailto') || action.href.startsWith('tel')) {
        window.open(action.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = action.href;
      }
    }
  };

  return (
    <Box
      component="section"
      id={id}
      className={className}
      sx={{
        py,
        color: textColor,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: backgroundColor || theme.palette.primary.main,
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: backgroundGradient,
        }}
      />
      
      {/* Background decoration pattern (optional) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <Container maxWidth={maxWidth} sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={animationVariants.initial}
          whileInView={animationVariants.animate}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6, 
            delay: animationDelay,
            ease: "easeOut"
          }}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Title */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                maxWidth: '800px',
              }}
            >
              {title}
            </Typography>
            
            {/* Subtitle */}
            {subtitle && (
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 500,
                  opacity: 0.9,
                  maxWidth: '600px',
                }}
              >
                {subtitle}
              </Typography>
            )}
            
            {/* Description */}
            {description && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  opacity: 0.85,
                  maxWidth: '500px',
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
            )}
            
            {/* Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              sx={{ mt: 4 }}
            >
              {/* Primary Action */}
              <Button
                variant={primaryAction.variant || 'contained'}
                size={primaryAction.size || 'large'}
                startIcon={primaryAction.startIcon}
                endIcon={primaryAction.endIcon}
                onClick={() => handleAction(primaryAction)}
                sx={{
                  bgcolor: 'background.paper',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  boxShadow: shadows.button,
                  '&:hover': {
                    bgcolor: 'background.paper',
                    boxShadow: shadows.buttonHover,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {primaryAction.label}
              </Button>
              
              {/* Secondary Action */}
              {secondaryAction && (
                <Button
                  variant={secondaryAction.variant || 'outlined'}
                  size={secondaryAction.size || 'large'}
                  startIcon={secondaryAction.startIcon}
                  endIcon={secondaryAction.endIcon}
                  onClick={() => handleAction(secondaryAction)}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                    color: textColor,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 1)',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;

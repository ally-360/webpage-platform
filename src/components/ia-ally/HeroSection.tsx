'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
  Chip,
} from '@mui/material';
import {
  SmartToy as BotIcon,
  AutoAwesome as SparkleIcon,
  Security as SecurityIcon,
  TrendingUp as TrendIcon,
  PlayArrow as PlayIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { HERO_CONTENT, ANIMATIONS, GRADIENTS } from '../../constants/ia-ally';

// Mapping de iconos
const iconMap = {
  sparkle: SparkleIcon,
  security: SecurityIcon,
  trend: TrendIcon,
};

interface HeroSectionProps {
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        background: GRADIENTS.primary,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 176, 240, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 76, 151, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(45deg, transparent 49%, rgba(0, 176, 240, 0.08) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 76, 151, 0.08) 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={ANIMATIONS.staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={ANIMATIONS.fadeInUp}>
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
              >
                <Avatar
                  sx={{
                    background: GRADIENTS.button,
                    width: 120,
                    height: 120,
                    fontSize: '4rem',
                    margin: '0 auto 2rem',
                    boxShadow: '0 0 50px rgba(0, 176, 240, 0.6)',
                    border: '3px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <BotIcon fontSize="large" />
                </Avatar>
              </motion.div>
            </motion.div>

            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                  fontWeight: 800,
                  mb: 3,
                  color: '#fff',
                  textShadow: '0 0 30px rgba(0, 176, 240, 0.4)',
                  lineHeight: 1.1,
                }}
              >
                {HERO_CONTENT.title}{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    background: GRADIENTS.text,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {HERO_CONTENT.titleHighlight}
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                {HERO_CONTENT.subtitle}
              </Typography>
            </motion.div>

            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ justifyContent: 'center', alignItems: 'center', mb: 6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayIcon />}
                  onClick={onPrimaryButtonClick}
                  sx={{
                    background: GRADIENTS.button,
                    color: '#fff',
                    px: 6,
                    py: 2,
                    fontWeight: 600,
                    borderRadius: 3,
                    fontSize: '1.2rem',
                    minWidth: 200,
                    boxShadow: '0 8px 25px rgba(0, 176, 240, 0.4)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 35px rgba(0, 176, 240, 0.5)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {HERO_CONTENT.primaryButtonText}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ChatIcon />}
                  onClick={onSecondaryButtonClick}
                  sx={{
                    borderColor: '#00B0F0',
                    color: '#00B0F0',
                    px: 6,
                    py: 2,
                    fontWeight: 600,
                    borderWidth: 2,
                    minWidth: 200,
                    '&:hover': {
                      borderColor: '#00E0FF',
                      color: '#00E0FF',
                      backgroundColor: 'rgba(0, 176, 240, 0.1)',
                      borderWidth: 2,
                    },
                  }}
                >
                  {HERO_CONTENT.secondaryButtonText}
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                {HERO_CONTENT.badges.map((badge, index) => {
                  const IconComponent = iconMap[badge.iconKey as keyof typeof iconMap];
                  return (
                    <Chip 
                      key={index}
                      icon={IconComponent ? <IconComponent /> : undefined}
                      label={badge.label}
                      sx={{ 
                        backgroundColor: 'rgba(0, 176, 240, 0.2)', 
                        color: '#fff',
                        border: '1px solid rgba(0, 176, 240, 0.3)',
                        '& .MuiChip-icon': { color: '#00B0F0' }
                      }}
                    />
                  );
                })}
              </Stack>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;

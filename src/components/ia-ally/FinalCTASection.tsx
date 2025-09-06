'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FINAL_CTA_CONTENT, ANIMATIONS, GRADIENTS } from '../../constants/ia-ally';

interface FinalCTASectionProps {
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <Box
      sx={{
        py: 8,
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
            radial-gradient(circle at 80% 80%, rgba(0, 76, 151, 0.15) 0%, transparent 50%)
          `,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={ANIMATIONS.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: '#fff',
                  textShadow: '0 0 20px rgba(0, 176, 240, 0.3)',
                }}
              >
                {FINAL_CTA_CONTENT.title}{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    background: GRADIENTS.text,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {FINAL_CTA_CONTENT.titleHighlight}
                </Box>
              </Typography>
            </motion.div>
            
            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 6,
                  lineHeight: 1.6,
                }}
              >
                {FINAL_CTA_CONTENT.subtitle}
              </Typography>
            </motion.div>
            
            <motion.div variants={ANIMATIONS.fadeInUp}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={onPrimaryButtonClick}
                  sx={{
                    background: GRADIENTS.button,
                    color: '#fff',
                    px: 8,
                    py: 2.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    fontSize: '1.2rem',
                    minWidth: 220,
                    boxShadow: '0 8px 25px rgba(0, 176, 240, 0.4)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 35px rgba(0, 176, 240, 0.5)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {FINAL_CTA_CONTENT.primaryButtonText}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={onSecondaryButtonClick}
                  sx={{
                    borderColor: '#00B0F0',
                    color: '#00B0F0',
                    px: 8,
                    py: 2.5,
                    fontWeight: 600,
                    borderWidth: 2,
                    minWidth: 220,
                    '&:hover': {
                      borderColor: '#00E0FF',
                      color: '#00E0FF',
                      backgroundColor: 'rgba(0, 176, 240, 0.1)',
                      borderWidth: 2,
                    },
                  }}
                >
                  {FINAL_CTA_CONTENT.secondaryButtonText}
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FinalCTASection;

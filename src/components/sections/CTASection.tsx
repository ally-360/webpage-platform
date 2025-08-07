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
import {
  PlayArrow as PlayArrowIcon,
  GetApp as GetAppIcon,
} from '@mui/icons-material';

export default function CTASection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="cta-final"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        }}
      />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center">
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 3,
              }}
            >
              ¿Listo para transformar tu negocio?
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                fontWeight: 400,
                fontSize: { xs: '1.125rem', md: '1.5rem' },
                lineHeight: 1.4,
                opacity: 0.9,
              }}
            >
              Únete a más de 500+ empresas colombianas que ya confían en Ally360 
              para gestionar y hacer crecer sus negocios.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrowIcon />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: theme.shadows[8],
                  '&:hover': {
                    bgcolor: 'grey.100',
                    boxShadow: theme.shadows[12],
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Ver Demo en Vivo
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<GetAppIcon />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Prueba Gratuita 30 días
              </Button>
            </Stack>

            {/* Trust indicators */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 2, md: 4 },
                flexWrap: 'wrap',
                opacity: 0.8,
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                ✓ Sin tarjeta de crédito
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                ✓ Configuración gratuita
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                ✓ Soporte en español
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                ✓ Migración incluida
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

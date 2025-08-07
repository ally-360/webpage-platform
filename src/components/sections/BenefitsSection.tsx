'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloudIcon from '@mui/icons-material/Cloud';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { shadows } from '../../config/theme-config';

const benefits = [
  {
    icon: LightbulbIcon,
    title: 'Simple y accesible',
    description: 'Diseñado para que cualquier empresario lo use, sin necesidad de conocimientos técnicos.',
    color: '#004C97',
  },
  {
    icon: DashboardIcon,
    title: 'Todo en un solo lugar',
    description: 'Facturación electrónica, inventario, reportes, POS y más, integrados y fáciles de usar.',
    color: '#00B0F0',
  },
  {
    icon: VerifiedIcon,
    title: 'Cumples con la DIAN sin estrés',
    description: 'Genera, valida y envía tus facturas electrónicas conforme a la Resolución 000042.',
    color: '#004C97',
  },
  {
    icon: CloudIcon,
    title: '100% en la nube',
    description: 'Accede desde cualquier dispositivo, en cualquier momento.',
    color: '#00B0F0',
  },
  {
    icon: TrendingUpIcon,
    title: 'Crece con tu empresa',
    description: 'Empieza pequeño y escala sin cambiar de sistema.',
    color: '#004C97',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BenefitsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#004C97',
                }}
              >
                ¿Por qué elegir{' '}
                <Box component="span" sx={{ color: '#00B0F0' }}>
                  Ally360?
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'text.secondary',
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Ally360 integra todas las áreas de tu empresa en un solo sistema, 
                optimizando procesos y mejorando la productividad de tu equipo.
              </Typography>
            </motion.div>
          </Box>

          {/* Benefits Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div key={benefit.title} variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: shadows.cardHover,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3} alignItems="flex-start">
                        {/* Icon */}
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '16px',
                            backgroundColor: `${benefit.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 1,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 32, color: benefit.color }} />
                        </Box>

                        {/* Content */}
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '1.25rem',
                              fontWeight: 600,
                              mb: 2,
                              color: 'text.primary',
                            }}
                          >
                            {benefit.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.6,
                            }}
                          >
                            {benefit.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontSize: '1.1rem',
                }}
              >
                ¿Quieres ver cómo Ally360 puede transformar tu negocio?
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Box
                  component="a"
                  href="#demo"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: shadows.hero,
                    },
                  }}
                >
                  Solicitar Demo Gratuita
                </Box>
                <Box
                  component="a"
                  href="/planes"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    border: '2px solid',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Ver Planes
                </Box>
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

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
import InventoryIcon from '@mui/icons-material/Inventory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';

const benefits = [
  {
    icon: InventoryIcon,
    title: 'Gestión de Inventario Inteligente',
    description: 'Control completo de stock, alertas automáticas de reposición y trazabilidad total de productos.',
    color: '#2196f3',
  },
  {
    icon: TrendingUpIcon,
    title: 'Ventas & CRM Integrado',
    description: 'Gestiona clientes, cotizaciones, órdenes y seguimiento postventa en una sola plataforma.',
    color: '#4caf50',
  },
  {
    icon: AccountBalanceIcon,
    title: 'Finanzas & Contabilidad',
    description: 'Facturación electrónica, reportes financieros y cumplimiento tributario colombiano automático.',
    color: '#ff9800',
  },
  {
    icon: PeopleIcon,
    title: 'Recursos Humanos',
    description: 'Nómina, control de asistencia y gestión de empleados adaptado a la legislación colombiana.',
    color: '#9c27b0',
  },
  {
    icon: AnalyticsIcon,
    title: 'Análisis & Reportes',
    description: 'Dashboard ejecutivo con métricas clave y reportes personalizables para tomar mejores decisiones.',
    color: '#f44336',
  },
  {
    icon: SecurityIcon,
    title: 'Seguridad & Respaldos',
    description: 'Encriptación de datos, respaldos automáticos y cumplimiento con normativas de privacidad.',
    color: '#607d8b',
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
                  color: 'text.primary',
                }}
              >
                Todo lo que necesitas para{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  hacer crecer
                </Box>{' '}
                tu negocio
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
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
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
                      boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
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

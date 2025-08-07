'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { shadows } from '../../config/theme-config';
import {
  Check as CheckIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const pricingPlans = [
  {
    name: 'Básico',
    price: '89,000',
    period: '/mes',
    description: 'Perfecto para pequeños negocios que están empezando',
    popular: false,
    features: [
      'Hasta 2 usuarios',
      'Gestión básica de inventario',
      'Facturación electrónica',
      'Reportes básicos',
      'Soporte por email',
      'Respaldo diario',
    ],
    buttonText: 'Comenzar Gratis',
    buttonVariant: 'outlined' as const,
  },
  {
    name: 'Profesional',
    price: '149,000',
    period: '/mes',
    description: 'La opción más popular para empresas en crecimiento',
    popular: true,
    features: [
      'Hasta 5 usuarios',
      'Gestión avanzada de inventario',
      'Facturación electrónica completa',
      'Reportes avanzados y dashboards',
      'Gestión de clientes y proveedores',
      'Soporte telefónico prioritario',
      'Integración con bancos',
      'Respaldo en tiempo real',
    ],
    buttonText: 'Prueba Gratuita 30 días',
    buttonVariant: 'contained' as const,
  },
  {
    name: 'Empresarial',
    price: '249,000',
    period: '/mes',
    description: 'Para empresas que necesitan funcionalidades avanzadas',
    popular: false,
    features: [
      'Usuarios ilimitados',
      'Múltiples sucursales',
      'Inventario multi-bodega',
      'Reportes personalizados',
      'API y integraciones',
      'Soporte técnico dedicado',
      'Capacitación personalizada',
      'Respaldo y seguridad enterprise',
    ],
    buttonText: 'Contactar Ventas',
    buttonVariant: 'outlined' as const,
  },
];

export default function PricingSection() {

  return (
    <Box
      component="section"
      id="planes"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Planes que se adaptan a tu negocio
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Elige el plan perfecto para tu empresa. Todos incluyen prueba gratuita y soporte técnico.
            </Typography>
            <Chip
              label="🎉 Primer mes GRATIS para nuevos clientes"
              color="success"
              sx={{
                fontWeight: 600,
                fontSize: '0.875rem',
                px: 2,
                py: 1,
              }}
            />
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                elevation={plan.popular ? 8 : 0}
                sx={{
                  height: '100%',
                  border: plan.popular ? '2px solid' : '1px solid',
                  borderColor: plan.popular ? 'primary.main' : 'divider',
                  borderRadius: 3,
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: shadows.pricing,
                    transform: plan.popular ? 'scale(1.05)' : 'translateY(-4px)',
                  },
                }}
              >
                {plan.popular && (
                  <Chip
                    icon={<StarIcon />}
                    label="Más Popular"
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontWeight: 600,
                      zIndex: 1,
                    }}
                  />
                )}

                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Plan Header */}
                  <Box textAlign="center" mb={3}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {plan.description}
                    </Typography>
                    
                    {/* Price */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'center',
                          gap: 0.5,
                        }}
                      >
                        <Typography variant="h6" component="span">COP$</Typography>
                        {plan.price.toLocaleString()}
                        <Typography variant="body2" color="text.secondary">
                          {plan.period}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Features */}
                  <List sx={{ mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckIcon sx={{ color: 'success.main', fontSize: '1.25rem' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { fontSize: '0.875rem' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* CTA Button */}
                  <Button
                    variant={plan.buttonVariant}
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: 2,
                      ...(plan.popular && {
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                      }),
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box textAlign="center" mt={8}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '0.875rem', md: '1rem' },
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              <strong>¿Necesitas un plan personalizado?</strong> Contáctanos para empresas con 
              requerimientos específicos o múltiples sucursales.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="body2" color="text.secondary">
                ✓ Sin permanencia mínima
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ✓ Migración gratuita
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ✓ Soporte incluido
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

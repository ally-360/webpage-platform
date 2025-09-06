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
import { FreeTrialButton } from '@/components/common';
import { useExternalRedirect } from '@/hooks/use-external-redirect';
import {
  Check as CheckIcon,
  Star as StarIcon,
  SmartToy as BotIcon,
  AutoAwesome as SparkleIcon,
} from '@mui/icons-material';

const pricingPlans = [
  {
    name: 'Ally Kickstart',
    price: '50,000',
    period: '/mes',
    description: 'Perfecto para microempresas que inician su digitalización',
    popular: false,
    hasAI: false,
    features: [
      'Facturación electrónica ilimitada DIAN',
      'Hasta 2 usuarios (Admin + Contador)',
      '1 bodega',
      'POS básico para ventas simples',
      'Contabilidad básica integrada',
      'Soporte vía chat estándar',
    ],
    buttonText: 'Comenzar Gratis',
    buttonVariant: 'outlined' as const,
  },
  {
    name: 'Ally Boost',
    price: '75,000',
    period: '/mes',
    description: 'La opción más popular - Impulsa ventas con IA integrada',
    popular: true,
    hasAI: true,
    aiFeature: 'Chatbot IA Ally360',
    features: [
      'Todo lo de Kickstart +',
      'Hasta 600 facturas electrónicas/mes',
      'Hasta 5 usuarios (todos los roles)',
      'Hasta 3 bodegas + traslados',
      'POS avanzado',
      'Reportes avanzados y analítica',
      'Envío facturas por WhatsApp',
      'Soporte prioritario',
    ],
    buttonText: 'Prueba Gratuita 30 días',
    buttonVariant: 'contained' as const,
  },
  {
    name: 'Ally Supreme',
    price: '116,000',
    period: '/mes',
    description: 'Para empresas que necesitan funcionalidades completas',
    popular: false,
    hasAI: true,
    aiFeature: 'Chatbot IA Ally360 Premium',
    features: [
      'Todo lo de Boost +',
      'Facturación electrónica ilimitada',
      'Hasta 10 usuarios (todos los roles)',
      'Hasta 10 bodegas + traslados',
      'POS completo',
      'Integraciones y API abierta',
      'Envío masivo por WhatsApp',
      'Soporte personalizado + onboarding',
    ],
    buttonText: 'Contactar Ventas',
    buttonVariant: 'outlined' as const,
  },
];

export default function PricingSection() {
  const { requestDemo } = useExternalRedirect();

  const renderPricingButton = (plan: typeof pricingPlans[0]) => {
    // Si el botón contiene "Gratis", "Gratuita" o "30 días", usar FreeTrialButton
    if (plan.buttonText.includes('Gratis') || plan.buttonText.includes('Gratuita') || plan.buttonText.includes('30 días')) {
      return (
        <FreeTrialButton
          variant={plan.buttonVariant}
          size="large"
          fullWidth
          trialDays={30}
          returnUrl={`/planes/${plan.name.toLowerCase()}`}
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
        </FreeTrialButton>
      );
    }
    
    // Si es "Contactar Ventas", usar requestDemo
    if (plan.buttonText.includes('Contactar') || plan.buttonText.includes('Ventas')) {
      return (
        <Button
          variant={plan.buttonVariant}
          color="primary"
          size="large"
          fullWidth
          onClick={() => requestDemo(`/planes/${plan.name.toLowerCase()}`)}
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
      );
    }

    // Botón por defecto para otros casos
    return (
      <FreeTrialButton
        variant={plan.buttonVariant}
        size="large"
        fullWidth
        trialDays={30}
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
      </FreeTrialButton>
    );
  };

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
              Elige el plan perfecto para tu empresa. Boost y Supreme incluyen Chatbot IA. Todos con prueba gratuita y soporte técnico.
            </Typography>
            <Chip
              icon={<BotIcon />}
              label="🎉 Planes con IA disponibles - Primer mes GRATIS"
              color="primary"
              sx={{
                fontWeight: 600,
                fontSize: '0.875rem',
                px: 2,
                py: 1,
                background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                color: 'white',
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
                  overflow: 'visible',
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

                {/* AI Badge para planes que incluyen IA */}
                {plan.hasAI && (
                  <Chip
                    icon={<BotIcon />}
                    label="IA"
                    sx={{
                      position: 'absolute',
                      top: plan.popular ? 20 : -8,
                      right: -8,
                      zIndex: 2,
                      background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      boxShadow: '0 4px 12px rgba(0, 176, 240, 0.4)',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { 
                          boxShadow: '0 4px 12px rgba(0, 176, 240, 0.4)',
                        },
                        '50%': { 
                          boxShadow: '0 8px 20px rgba(0, 176, 240, 0.6)',
                          transform: 'scale(1.05)',
                        },
                      },
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

                  {/* AI Feature destacado */}
                  {plan.hasAI && plan.aiFeature && (
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        background: 'linear-gradient(135deg, rgba(0, 176, 240, 0.1) 0%, rgba(0, 76, 151, 0.05) 100%)',
                        border: '1px solid rgba(0, 176, 240, 0.3)',
                        borderRadius: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'linear-gradient(90deg, #00B0F0, #004C97, #00B0F0)',
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s linear infinite',
                          '@keyframes shimmer': {
                            '0%': { backgroundPosition: '200% 0' },
                            '100%': { backgroundPosition: '-200% 0' },
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SparkleIcon sx={{ color: '#00B0F0', fontSize: '1.2rem' }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#004C97',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                          }}
                        >
                          {plan.aiFeature}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#333',
                          fontSize: '0.8rem',
                          fontStyle: 'italic',
                          mt: 0.5,
                        }}
                      >
                        Asistente virtual inteligente incluido
                      </Typography>
                    </Box>
                  )}

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
                  {renderPricingButton(plan)}
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
              requerimientos específicos o múltiples sucursales. Incluye IA personalizada.
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

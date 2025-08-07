'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Inventory as InventoryIcon,
  Sell as SellIcon,
  AccountBalance as AccountBalanceIcon,
  BarChart as BarChartIcon,
  People as PeopleIcon,
  Cloud as CloudIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <InventoryIcon />,
    title: 'Gestión de Inventario',
    description: 'Control total de tu stock, alertas automáticas y reportes detallados.',
  },
  {
    icon: <SellIcon />,
    title: 'Ventas y Facturación',
    description: 'Procesa ventas rápidamente con facturación electrónica integrada.',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Control Financiero',
    description: 'Gestiona tu flujo de caja, cuentas por cobrar y pagar en tiempo real.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Reportes Inteligentes',
    description: 'Toma decisiones informadas con dashboards y análisis avanzados.',
  },
  {
    icon: <PeopleIcon />,
    title: 'Gestión de Clientes',
    description: 'Administra tu cartera de clientes y mejora las relaciones comerciales.',
  },
  {
    icon: <CloudIcon />,
    title: 'En la Nube',
    description: 'Accede desde cualquier lugar, respaldo automático y máxima seguridad.',
  },
];

export default function WhatIsAlly360Section() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="que-es-ally360"
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
              ¿Qué es Ally360?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
              }}
            >
              Un sistema ERP completo diseñado específicamente para pequeñas y medianas empresas colombianas. 
              Integra todas las áreas de tu negocio en una sola plataforma.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: theme.shadows[8],
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      '& svg': {
                        fontSize: '1.75rem',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

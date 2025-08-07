'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Storefront as StorefrontIcon,
  Restaurant as RestaurantIcon,
  LocalShipping as LocalShippingIcon,
  MedicalServices as MedicalServicesIcon,
  Build as BuildIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const targetSegments = [
  {
    icon: <StorefrontIcon />,
    title: 'Retail y Comercio',
    description: 'Tiendas, boutiques, supermercados y centros comerciales.',
    color: '#1976d2',
    businesses: ['Tiendas de ropa', 'Ferreterías', 'Supermercados', 'Farmacias'],
  },
  {
    icon: <RestaurantIcon />,
    title: 'Restaurantes y Food Service',
    description: 'Restaurantes, cafeterías, panaderías y servicios de catering.',
    color: '#ed6c02',
    businesses: ['Restaurantes', 'Cafeterías', 'Panaderías', 'Food trucks'],
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Distribución y Logística',
    description: 'Distribuidoras, importadoras y empresas de logística.',
    color: '#2e7d32',
    businesses: ['Distribuidoras', 'Importadoras', 'Transportadoras', 'Almacenes'],
  },
  {
    icon: <MedicalServicesIcon />,
    title: 'Servicios de Salud',
    description: 'Consultorios, clínicas, laboratorios y centros médicos.',
    color: '#d32f2f',
    businesses: ['Consultorios', 'Laboratorios', 'Clínicas', 'Ópticas'],
  },
  {
    icon: <BuildIcon />,
    title: 'Servicios Técnicos',
    description: 'Talleres, servicios técnicos y empresas de mantenimiento.',
    color: '#7b1fa2',
    businesses: ['Talleres', 'Electricistas', 'Plomería', 'Carpintería'],
  },
  {
    icon: <SchoolIcon />,
    title: 'Educación y Capacitación',
    description: 'Instituciones educativas, academias y centros de formación.',
    color: '#1565c0',
    businesses: ['Colegios', 'Academias', 'Universidades', 'Institutos'],
  },
];

export default function TargetSegmentSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="segmento-objetivo"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
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
              Diseñado para tu Sector
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
              }}
            >
              Ally360 se adapta a las necesidades específicas de diferentes sectores empresariales, 
              ofreciendo funcionalidades personalizadas para cada tipo de negocio.
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
          {targetSegments.map((segment, index) => (
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
                  borderRadius: 3,
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    borderColor: segment.color,
                    boxShadow: theme.shadows[12],
                    transform: 'translateY(-8px)',
                    '& .segment-avatar': {
                      transform: 'scale(1.1)',
                      boxShadow: theme.shadows[8],
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, pt: 6 }}>
                  <Avatar
                    className="segment-avatar"
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: segment.color,
                      mb: 3,
                      mx: 'auto',
                      transition: 'all 0.3s ease-in-out',
                      '& svg': {
                        fontSize: '2rem',
                      },
                    }}
                  >
                    {segment.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    component="h3"
                    textAlign="center"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {segment.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ lineHeight: 1.6, mb: 3 }}
                  >
                    {segment.description}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center">
                    {segment.businesses.map((business, idx) => (
                      <Chip
                        key={idx}
                        label={business}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: segment.color,
                          color: segment.color,
                          '&:hover': {
                            bgcolor: `${segment.color}15`,
                          },
                        }}
                      />
                    ))}
                  </Box>
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
              }}
            >
              <strong>¿No encuentras tu sector?</strong> Ally360 es flexible y se adapta a cualquier tipo de negocio. 
              Contáctanos para conocer cómo podemos ayudarte.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

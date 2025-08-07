'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote as QuoteIcon } from '@mui/icons-material';

const testimonials = [
  {
    name: 'María González',
    position: 'Gerente General',
    company: 'Boutique Elegancia',
    location: 'Bogotá, Colombia',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    testimonial: 'Ally360 transformó completamente la gestión de mi boutique. Ahora tengo control total sobre mi inventario y las ventas se procesan mucho más rápido. Lo recomiendo 100%.',
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Propietario',
    company: 'Ferretería El Tornillo',
    location: 'Medellín, Colombia',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    testimonial: 'Desde que implementamos Ally360, nuestros reportes financieros son más precisos y ahorramos horas de trabajo administrativo cada semana. Excelente inversión.',
  },
  {
    name: 'Ana Lucía Torres',
    position: 'Administradora',
    company: 'Restaurante Sabor Paisa',
    location: 'Cali, Colombia',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    testimonial: 'La gestión de proveedores y el control de costos nunca había sido tan sencillo. Ally360 nos ayudó a optimizar nuestras operaciones y aumentar la rentabilidad.',
  },
  {
    name: 'Jorge Ramírez',
    position: 'Director',
    company: 'Distribuidora Andina',
    location: 'Barranquilla, Colombia',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    testimonial: 'Como distribuidora, manejamos grandes volúmenes de productos. Ally360 nos permite tener trazabilidad completa y nuestros clientes están más satisfechos con nuestro servicio.',
  },
  {
    name: 'Isabella Herrera',
    position: 'Gerente de Operaciones',
    company: 'Farmacia Central',
    location: 'Bucaramanga, Colombia',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    testimonial: 'La facturación electrónica integrada y el manejo de inventario con fechas de vencimiento son fundamentales en nuestro sector. Ally360 cumple con todos nuestros requerimientos.',
  },
  {
    name: 'Diego Martínez',
    position: 'Contador',
    company: 'Taller Automotriz Express',
    location: 'Cartagena, Colombia',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    testimonial: 'Los reportes contables son precisos y están siempre actualizados. El soporte técnico es excelente, siempre están dispuestos a ayudarnos cuando lo necesitamos.',
  },
];

export default function TestimonialsSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="testimonios"
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
              Lo que dicen nuestros clientes
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
              Más de 500+ empresas colombianas confían en Ally360 para gestionar sus operaciones diarias.
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
          {testimonials.map((testimonial, index) => (
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
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: theme.shadows[8],
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', position: 'relative' }}>
                  {/* Quote Icon */}
                  <QuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontSize: '2rem',
                      color: 'primary.light',
                      opacity: 0.3,
                    }}
                  />

                  {/* Rating */}
                  <Box sx={{ mb: 3 }}>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#FFD700',
                        },
                      }}
                    />
                  </Box>

                  {/* Testimonial Text */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 4,
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      color: 'text.primary',
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </Typography>

                  {/* Author Info */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        bgcolor: 'primary.main',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', fontSize: '0.8rem' }}
                      >
                        {testimonial.position}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="primary.main"
                        sx={{ display: 'block', fontWeight: 500, fontSize: '0.8rem' }}
                      >
                        {testimonial.company}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', fontSize: '0.75rem' }}
                      >
                        {testimonial.location}
                      </Typography>
                    </Box>
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
              ¿Quieres ser el próximo caso de éxito? <strong>Únete a la familia Ally360</strong> 
              y descubre cómo podemos transformar tu negocio.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

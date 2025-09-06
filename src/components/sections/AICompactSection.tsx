'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Avatar,
  Stack,
} from '@mui/material';
import {
  SmartToy as BotIcon,
  TrendingUp as TrendIcon,
  Lightbulb as InsightIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AICompactSection() {
  const quickFeatures = [
    {
      icon: <BotIcon />,
      title: "Consultas instantáneas",
      description: "\"¿Cuál fue mi producto más vendido ayer?\""
    },
    {
      icon: <TrendIcon />,
      title: "Análisis inteligentes",
      description: "\"Compara las ventas de este mes vs el año pasado\""
    },
    {
      icon: <InsightIcon />,
      title: "Recomendaciones personalizadas",
      description: "\"¿Qué estrategia recomiendas para mi inventario?\""
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #000511 0%, #001122 25%, #002244 50%, #003366 75%, #004477 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 176, 240, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 76, 151, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
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
            linear-gradient(45deg, transparent 49%, rgba(0, 176, 240, 0.1) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 76, 151, 0.1) 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={fadeInUp}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                    width: 64,
                    height: 64,
                    fontSize: '2rem',
                    boxShadow: '0 0 30px rgba(0, 176, 240, 0.5)',
                  }}
                >
                  <BotIcon fontSize="large" />
                </Avatar>
              </Box>
              
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#fff',
                  textShadow: '0 0 20px rgba(0, 176, 240, 0.3)',
                }}
              >
                Tu{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    background: 'linear-gradient(135deg, #00B0F0 0%, #00E0FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Asesor Digital
                </Box>
                {' '}con IA
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                El primer chatbot empresarial que entiende tu negocio y te ayuda a tomar decisiones informadas
              </Typography>
            </motion.div>
          </Box>

          {/* Quick Demo Chat */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(0, 176, 240, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden',
                  maxWidth: 500,
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, rgba(0, 176, 240, 0.1) 0%, rgba(0, 76, 151, 0.1) 100%)',
                    p: 2,
                    borderBottom: '1px solid rgba(0, 176, 240, 0.2)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BotIcon sx={{ color: '#00B0F0', mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '1rem',
                      }}
                    >
                      Ally IA - Asistente Virtual
                    </Typography>
                    <Box
                      sx={{
                        ml: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#4CAF50',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { opacity: 1 },
                          '50%': { opacity: 0.5 },
                          '100%': { opacity: 1 },
                        },
                      }}
                    />
                  </Box>
                </Box>
                
                <Box sx={{ p: 3 }}>
                  {/* User Question */}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                        color: '#fff',
                        px: 2.5,
                        py: 1.5,
                        borderRadius: '16px 16px 4px 16px',
                        maxWidth: '80%',
                        boxShadow: '0 4px 12px rgba(0, 176, 240, 0.3)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        ¿Cuáles son mis productos con menor rotación?
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* AI Answer */}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar
                        sx={{
                          background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                          width: 28,
                          height: 28,
                          mr: 1.5,
                          mt: 0.5,
                        }}
                      >
                        <BotIcon fontSize="small" />
                      </Avatar>
                      <Box
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                          px: 2.5,
                          py: 1.5,
                          borderRadius: '16px 16px 16px 4px',
                          maxWidth: '80%',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                          Tus productos con menor rotación son: Chaqueta de Invierno (45 días) y Zapatos Formales (30 días). 
                          <Box component="span" sx={{ color: '#00E0FF', fontWeight: 500 }}>
                            {' '}Te recomiendo crear una promoción del 20% para acelerar ventas.
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </motion.div>

          {/* Quick Features */}
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
                mb: 6,
              }}
            >
              {quickFeatures.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 176, 240, 0.2)',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 176, 240, 0.2)',
                      borderColor: '#00B0F0',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                        width: 40,
                        height: 40,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#00E0FF',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              ))}
            </Box>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  fontWeight: 600,
                  color: '#fff',
                  mb: 3,
                }}
              >
                Reduce riesgos y toma mejores decisiones con{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    background: 'linear-gradient(135deg, #00B0F0 0%, #00E0FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  datos reales
                </Box>
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                    color: '#fff',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: '0 6px 20px rgba(0, 176, 240, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 176, 240, 0.4)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Probar la IA gratis
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#00B0F0',
                    color: '#00B0F0',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#00E0FF',
                      color: '#00E0FF',
                      backgroundColor: 'rgba(0, 176, 240, 0.1)',
                    },
                  }}
                >
                  Ver más servicios
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
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
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  mb: 4,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  🚀 Líder en ERP para PYMEs colombianas
                </Typography>
              </Box>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Potencia tu PyME con el{' '}
                <Box component="span" sx={{ color: '#FFD700' }}>
                  ERP #1
                </Box>{' '}
                de Colombia
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: 5,
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Gestiona inventario, ventas, finanzas y más en un solo lugar. 
                Diseñado especialmente para pequeñas y medianas empresas colombianas.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp}>
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
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    backgroundColor: '#FFD700',
                    color: '#1a1a1a',
                    '&:hover': {
                      backgroundColor: '#FFC700',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Prueba Gratis 30 Días
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayCircleOutlineIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver Demo
                </Button>
              </Stack>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeInUp}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Confían en nosotros más de 5,000 empresas colombianas
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {/* Placeholder for client logos */}
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        width: 120,
                        height: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        Cliente {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Box
              sx={{
                width: 24,
                height: 40,
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '12px',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: 4,
                  height: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '2px',
                  top: 6,
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

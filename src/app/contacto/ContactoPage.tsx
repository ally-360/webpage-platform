'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Alert,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  QuestionAnswer as QuestionAnswerIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Schedule as ScheduleIcon,
  PersonOutline as PersonOutlineIcon,
  Support as SupportIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { brandGradients, shadows } from '../../config/theme-config';
import CTASection from '../../components/common/CTASection';

// Animation variants
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

// Support features data
const supportFeatures = [
  {
    icon: ScheduleIcon,
    title: 'Estamos para ti 24/7',
    description: 'Tienes a todo un equipo dispuesto a ponerse la 10 por tu negocio.',
  },
  {
    icon: PersonOutlineIcon,
    title: 'Soporte personalizado',
    description: 'Nos adaptamos a tu agenda y te ayudamos en el momento que lo necesitas. ¡Tú pones las reglas!',
  },
  {
    icon: SupportIcon,
    title: 'Apoyo impulsado por humanos',
    description: 'Tendrás a una persona real a tu disposición para entender tu caso.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Crecemos contigo',
    description: 'Tus observaciones y necesidades nutren a nuestro equipo para implementar mejoras.',
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string;
}

export default function ContactoPage() {
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[+]?[\d\s-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Ingresa un teléfono válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Crear FormData con todos los campos del formulario
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);
      
      // Agregar campos manualmente para asegurar compatibilidad
      formData.append('form-name', 'contact');
      
      // Método recomendado para Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Limpiar formulario después del envío exitoso
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        setErrors({});
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: brandGradients.subtle.blue,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 76, 151, 0.1) 0%, transparent 70%)',
            opacity: 0.6,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 176, 240, 0.1) 0%, transparent 70%)',
            opacity: 0.4,
          }}
        />

        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Box textAlign="center" sx={{ maxWidth: 800, mx: 'auto' }}>
              <motion.div variants={fadeInUp}>
                <QuestionAnswerIcon
                  sx={{
                    fontSize: { xs: 60, md: 80 },
                    color: 'primary.main',
                    mb: 4,
                  }}
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    color: '#004C97',
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  ¿Tienes preguntas o quieres una demo?
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: 'text.secondary',
                    lineHeight: 1.5,
                    maxWidth: 700,
                    mx: 'auto',
                  }}
                >
                  Estamos para ti 24/7. Nuestro equipo está listo para ponerse la 10 por tu negocio.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Form & Info Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'start',
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              sx={{
                p: { xs: 3, md: 5 },
                boxShadow: shadows.card,
                borderRadius: 4,
                height: '100%',
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#004C97',
                }}
              >
                Envíanos un mensaje
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, fontSize: '1.1rem' }}
              >
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </Typography>

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  Error al enviar el mensaje. Por favor intenta nuevamente.
                </Alert>
              )}

              <Box
                component="form"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contacto?success=true"
                onSubmit={handleSubmit}
              >
                {/* Netlify form setup */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field para prevenir spam */}
                <Box sx={{ display: 'none' }}>
                  <label>
                    No llenes este campo si eres humano:
                    <input 
                      name="bot-field" 
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Nombre completo *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                    }}
                    inputProps={{
                      'aria-label': 'Nombre completo',
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Correo electrónico *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                    }}
                    inputProps={{
                      'aria-label': 'Correo electrónico',
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Número de contacto *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                    variant="outlined"
                    placeholder="+57 300 123 4567"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                    }}
                    inputProps={{
                      'aria-label': 'Número de contacto',
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange('company')}
                    variant="outlined"
                    placeholder="Nombre de tu empresa (opcional)"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                    }}
                    inputProps={{
                      'aria-label': 'Empresa',
                    }}
                  />
                  
                  <Box sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
                    <TextField
                      fullWidth
                      label="Mensaje *"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                      variant="outlined"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        },
                      }}
                      inputProps={{
                        'aria-label': 'Mensaje',
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      sx={{
                        mt: 2,
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        background: brandGradients.cta,
                        boxShadow: shadows.button,
                        textTransform: 'none',
                        '&:hover': {
                          boxShadow: shadows.buttonHover,
                          transform: 'translateY(-2px)',
                        },
                        '&:disabled': {
                          opacity: 0.7,
                          transform: 'none',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Stack spacing={4} sx={{ height: '100%' }}>
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: brandGradients.cta,
                  color: 'white',
                  boxShadow: shadows.hero,
                  borderRadius: 4,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                  Contáctanos directamente
                </Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <EmailIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Correo electrónico
                    </Typography>
                    <Link
                      href="mailto:soporte@ally360.co"
                      color="inherit"
                      sx={{ 
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      soporte@ally360.co
                    </Link>
                  </Box>
                  
                  <Box>
                    <WhatsAppIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      WhatsApp / Teléfono
                    </Typography>
                    <Link
                      href="https://wa.me/573101234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{ 
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      +57 310 123 4567
                    </Link>
                  </Box>
                </Stack>
              </Card>

              {/* Business Hours */}
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  boxShadow: shadows.card,
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'grey.200',
                }}
              >
                <ScheduleIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#004C97' }}>
                  Horarios de atención
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Lunes a Viernes<br />
                    <Box component="span" color="text.secondary">8:00 AM - 6:00 PM</Box>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Sábados<br />
                    <Box component="span" color="text.secondary">9:00 AM - 2:00 PM</Box>
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      p: 2,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      🚨 Soporte de emergencia 24/7
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Support Features Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: 'background.grey',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Box textAlign="center" sx={{ mb: 6 }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    fontWeight: 700,
                    color: '#004C97',
                    mb: 2,
                  }}
                >
                  ¿Por qué elegir nuestro soporte?
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ maxWidth: 600, mx: 'auto' }}
                >
                  Soporte humano, personalizado y disponible cuando lo necesites
                </Typography>
              </motion.div>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {supportFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      textAlign: 'center',
                      boxShadow: shadows.card,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: shadows.cardHover,
                      },
                    }}
                  >
                    <CardContent sx={{ '&:last-child': { pb: 3 } }}>
                      <feature.icon
                        sx={{
                          fontSize: 60,
                          color: 'primary.main',
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: '#004C97',
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ 
                          lineHeight: 1.6,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <CTASection
        title="¿Necesitas ayuda inmediata?"
        subtitle="Nuestro equipo está en línea y listo para ayudarte"
        description="Agenda una demo personalizada o chatea con nosotros ahora mismo"
        variant="cta"
        primaryAction={{
          label: "Chatear por WhatsApp",
          href: "https://wa.me/573101234567?text=Hola%2C%20necesito%20ayuda%20con%20Ally360",
          startIcon: <WhatsAppIcon />,
        }}
        secondaryAction={{
          label: "Llamar ahora",
          href: "tel:+573101234567",
          variant: "outlined",
          startIcon: <PhoneIcon />,
        }}
        maxWidth="md"
        py={{ xs: 8, md: 12 }}
        animationType="slideUp"
      />
    </Box>
  );
}

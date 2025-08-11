'use client';

import React, { memo, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

const navigationSections = [
  {
    title: 'Producto',
    links: [
      { label: 'Características', href: '/#que-es-ally360' },
      { label: 'Beneficios', href: '/#beneficios' },
      { label: 'Sectores', href: '/#segmento-objetivo' },
      { label: 'Comparativo', href: '/#comparativo' },
      { label: 'Planes', href: '/planes' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Acerca de', href: '/acerca' },
      { label: 'Testimonios', href: '/#testimonios' },
      { label: 'Blog', href: '/blog' },
      { label: 'Casos de éxito', href: '/casos-exito' },
      { label: 'Carrera', href: '/carrera' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de ayuda', href: '/ayuda' },
      { label: 'Documentación', href: '/docs' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Estado del servicio', href: '/status' },
      { label: 'Comunidad', href: '/comunidad' },
      { label: 'API', href: '/api' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos de servicio', href: '/terminos' },
      { label: 'Política de privacidad', href: '/privacidad' },
      { label: 'Política de cookies', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
      { label: 'SLA', href: '/sla' },
      { label: 'Licencias', href: '/licencias' },
    ],
  },
];

const Footer = memo(() => {
  const socialLinks = useMemo(() => [
    { icon: <Facebook />, href: 'https://facebook.com/ally360co', label: 'Facebook' },
    { icon: <Twitter />, href: 'https://twitter.com/ally360co', label: 'Twitter' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/company/ally360co', label: 'LinkedIn' },
    { icon: <Instagram />, href: 'https://instagram.com/ally360co', label: 'Instagram' },
  ], []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: '2fr repeat(4, 1fr)' 
              },
              gap: 4,
            }}
          >
            {/* Company Info */}
            <Box>
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    width: 140,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'primary.main',
                    borderRadius: 1,
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      fontSize: '1.125rem',
                    }}
                  >
                    Ally360
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="grey.300" sx={{ mb: 3, lineHeight: 1.6 }}>
                  El ERP más completo y fácil de usar para pequeñas y medianas empresas colombianas. 
                  Gestiona tu negocio desde una sola plataforma.
                </Typography>

                {/* Contact Info */}
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: '1rem', color: 'primary.main' }} />
                    <Typography variant="body2" color="grey.300">
                      +57 (1) 234-5678
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: '1rem', color: 'primary.main' }} />
                    <Typography variant="body2" color="grey.300">
                      hola@ally360.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ fontSize: '1rem', color: 'primary.main' }} />
                    <Typography variant="body2" color="grey.300">
                      Bogotá, Colombia
                    </Typography>
                  </Box>
                </Stack>

                {/* Social Links */}
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component={MuiLink}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'grey.400',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'grey.800',
                        },
                      }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* Navigation Sections */}
            {navigationSections.map((section, index) => (
              <Box key={index}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.links.map((link, linkIndex) => (
                    <MuiLink
                      key={linkIndex}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: 'grey.300',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.2s ease-in-out',
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'grey.800' }} />
        
        {/* Bottom Section */}
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="grey.400">
            © {currentYear} Ally360. Todos los derechos reservados.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography
              variant="body2"
              sx={{ 
                color: 'grey.400',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              🇨🇴 Hecho en Colombia con ❤️
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer;

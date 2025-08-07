'use client';

import React from 'react';
import {
  PlayArrow as PlayArrowIcon,
  GetApp as GetAppIcon,
} from '@mui/icons-material';
import CTASectionComponent from '../common/CTASection';

export default function CTASection() {
  return (
    <CTASectionComponent
      id="cta-final"
      title="¿Listo para transformar tu negocio?"
      subtitle="Únete a más de 1,000 PYMEs que ya confían en Ally360"
      description="Comienza tu prueba gratuita hoy y descubre cómo podemos ayudarte a crecer"
      variant="cta"
      primaryAction={{
        label: "Comenzar Prueba Gratuita",
        href: "/contacto",
        startIcon: <PlayArrowIcon />,
      }}
      secondaryAction={{
        label: "Descargar Brochure",
        href: "/brochure-ally360.pdf",
        variant: "outlined",
        endIcon: <GetAppIcon />,
      }}
      maxWidth="md"
      py={{ xs: 8, md: 12 }}
      animationType="slideUp"
    />
  );
}

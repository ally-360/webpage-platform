'use client';

import React, { memo } from 'react';
import { Box } from '@mui/material';
import {
  HeroSection,
  ChatDemoSection,
  CapabilitiesSection,
  UseCasesSection,
  FAQSection,
  FinalCTASection,
  StructuredData,
} from '../../components/ia-ally';
import useIAAllyOptimization from '../../hooks/useIAAllyOptimization';

// Memoizar el componente principal para optimización
const IAAllyPage = memo(() => {
  const { intersectionRef } = useIAAllyOptimization();

  // Handlers para acciones de botones
  const handlePrimaryButtonClick = () => {
    // Redirigir a registro/prueba gratuita
    window.open('https://ally360.co/registro', '_blank');
  };

  const handleSecondaryButtonClick = () => {
    // Scroll suave a la sección de demo
    const demoSection = document.getElementById('chat-demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUseCaseCTAClick = () => {
    // Redirigir a personalización
    window.open('https://ally360.co/demo', '_blank');
  };

  const handleFinalCTAButtons = () => {
    // Redirigir a registro o demo
    window.open('https://ally360.co/registro', '_blank');
  };

  const handleDemoButtonClick = () => {
    // Redirigir a demo
    window.open('https://ally360.co/demo', '_blank');
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData />
      
      <Box 
        ref={intersectionRef}
        sx={{ 
          minHeight: '100vh', 
          overflow: 'hidden',
          // Optimización para mejor rendimiento
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      >
      {/* Hero Section */}
      <HeroSection 
        onPrimaryButtonClick={handlePrimaryButtonClick}
        onSecondaryButtonClick={handleSecondaryButtonClick}
      />

      {/* Interactive Chat Demo */}
      <Box id="chat-demo-section">
        <ChatDemoSection 
          onCTAClick={handleDemoButtonClick}
        />
      </Box>

      {/* AI Capabilities Section */}
      <CapabilitiesSection />

      {/* Use Cases by Role */}
      <UseCasesSection 
        onCTAClick={handleUseCaseCTAClick}
      />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTASection 
        onPrimaryButtonClick={handleFinalCTAButtons}
        onSecondaryButtonClick={handleDemoButtonClick}
      />
    </Box>
    </>
  );
});

IAAllyPage.displayName = 'IAAllyPage';

export default IAAllyPage;

'use client';

import { memo } from 'react';

const StructuredData = memo(() => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'IA Ally - Asistente Virtual Inteligente',
    description: 'Inteligencia Artificial de Ally360 que revoluciona la gestión empresarial con consultas instantáneas, análisis inteligentes y recomendaciones personalizadas.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'COP',
      description: 'Prueba gratuita disponible'
    },
    creator: {
      '@type': 'Organization',
      name: 'Ally360',
      url: 'https://ally360.co',
    },
    featureList: [
      'Consultas instantáneas sobre tu negocio',
      'Análisis inteligentes de datos',
      'Recomendaciones personalizadas',
      'Integración con sistemas ERP',
      'Análisis de ventas y rendimiento',
      'Gestión de inventario inteligente',
      'Predicciones de flujo de caja',
      'Reportes automatizados'
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Small and Medium Business Owners'
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es IA Ally y cómo puede ayudar a mi empresa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IA Ally es un asistente virtual inteligente que te permite hacer consultas instantáneas sobre tu negocio, obtener análisis de datos y recibir recomendaciones personalizadas para mejorar tu gestión empresarial.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué tipo de consultas puedo hacer a IA Ally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puedes consultar sobre ventas, inventario, análisis financiero, rendimiento de productos, comportamiento de clientes, predicciones de flujo de caja y mucho más. IA Ally entiende el contexto de tu negocio.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo se integra IA Ally con mi sistema actual?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IA Ally se integra perfectamente con Ally360 y otros sistemas ERP. La integración es sencilla y no requiere cambios importantes en tu operación actual.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Es seguro usar IA Ally con mis datos empresariales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutamente. IA Ally utiliza los más altos estándares de seguridad y privacidad. Tus datos están protegidos con encriptación de extremo a extremo y cumplimos con todas las regulaciones de protección de datos.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
    </>
  );
});

StructuredData.displayName = 'StructuredData';

export default StructuredData;

'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  // Gestión Operativa Icons
  PointOfSale as POSIcon,
  Inventory as InventoryIcon,
  ShoppingCart as ShoppingIcon,
  Sell as SellIcon,
  
  // Facturación Icons
  Receipt as ReceiptIcon,
  Description as DocumentIcon,
  Verified as VerifiedIcon,
  
  // Reportes Icons
  Dashboard as DashboardIcon,
  Assessment as ReportIcon,
  Psychology as AIIcon,
  
  // Control Empresarial Icons
  People as PeopleIcon,
  Business as BusinessIcon,
  Contacts as ContactsIcon,
  
  // CTA Icons
  Rocket as RocketIcon,
  PlayArrow as PlayIcon,
  
  // AI Chatbot Icons
  AutoAwesome as SparkleIcon,
  SmartToy as BotIcon,
  TrendingUp as TrendIcon,
  Lightbulb as InsightIcon,
  Speed as FastIcon,
  Security as SecurityIcon,
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
      staggerChildren: 0.1
    }
  }
};

// Types
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  title: string;
  color: string;
  services: Service[];
}

// Service data structure
const serviceCategories: ServiceCategory[] = [
  {
    id: 'operativa',
    title: 'Gestión Operativa',
    color: '#004C97',
    services: [
      {
        title: 'Ventas',
        description: 'Controla cotizaciones, ventas y facturación en segundos. Compatible con POS y venta multicanal.',
        icon: <SellIcon />,
      },
      {
        title: 'Compras y proveedores',
        description: 'Registra órdenes de compra, pagos, y controla relaciones con tus proveedores.',
        icon: <ShoppingIcon />,
      },
      {
        title: 'Inventario multibodega',
        description: 'Administra tus productos, traslados entre bodegas y existencias mínimas en tiempo real.',
        icon: <InventoryIcon />,
      },
      {
        title: 'Punto de venta (POS)',
        description: 'Factura en caja fácilmente, gestiona múltiples métodos de pago y turnos de vendedores.',
        icon: <POSIcon />,
      },
    ],
  },
  {
    id: 'facturacion',
    title: 'Cumplimiento y facturación electrónica',
    color: '#00B0F0',
    services: [
      {
        title: 'Facturación electrónica DIAN',
        description: 'Cumple con la Resolución 000042. Genera, envía y almacena automáticamente tus facturas válidas ante la DIAN.',
        icon: <ReceiptIcon />,
      },
      {
        title: 'Gestión de documentos tributarios',
        description: 'Notas crédito, notas débito, retenciones automáticas y soporte contable.',
        icon: <DocumentIcon />,
      },
      {
        title: 'Validación de datos y errores',
        description: 'Detección automática de errores comunes de facturación para evitar rechazos de la DIAN.',
        icon: <VerifiedIcon />,
      },
    ],
  },
  {
    id: 'reportes',
    title: 'Reportes e inteligencia de negocio',
    color: '#004C97',
    services: [
      {
        title: 'Dashboard de rendimiento',
        description: 'KPIs en tiempo real: ventas, gastos, inventario, facturas y clientes.',
        icon: <DashboardIcon />,
      },
      {
        title: 'Reportes financieros básicos',
        description: 'Flujo de caja, ventas por periodo, clientes frecuentes, productos más vendidos.',
        icon: <ReportIcon />,
      },
      {
        title: 'Proyecciones con IA (planes avanzados)',
        description: 'Estimaciones de ventas e inventario con base en comportamiento histórico.',
        icon: <AIIcon />,
      },
    ],
  },
  {
    id: 'control',
    title: 'Control empresarial',
    color: '#00B0F0',
    services: [
      {
        title: 'Usuarios y roles',
        description: 'Controla permisos por área: administración, contabilidad, vendedores, bodegueros.',
        icon: <PeopleIcon />,
      },
      {
        title: 'Multiempresa y multibodega',
        description: 'Administra varias empresas y bodegas desde una sola cuenta.',
        icon: <BusinessIcon />,
      },
      {
        title: 'Gestión de contactos (clientes y proveedores)',
        description: 'Historial de compras, datos de contacto, facturación y geolocalización.',
        icon: <ContactsIcon />,
      },
    ],
  },
];

// ServiceCard Component
function ServiceCard({ service, categoryColor }: { service: Service; categoryColor: string }) {
  const theme = useTheme();

  return (
    <motion.div variants={fadeInUp}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #e0e0e0',
          borderRadius: 3,
          '&:hover': {
            boxShadow: theme.shadows[8],
            transform: 'translateY(-4px)',
            borderColor: categoryColor,
          },
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
            <Avatar
              sx={{
                backgroundColor: `${categoryColor}15`,
                color: categoryColor,
                mr: 2,
                width: 56,
                height: 56,
              }}
            >
              {service.icon}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: '#333333',
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Box>
          
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontSize: '0.95rem',
            }}
          >
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ServiceSection Component
function ServiceSection({ category }: { category: ServiceCategory }) {
  return (
    <Box sx={{ mb: 8 }}>
      <motion.div variants={fadeInUp}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 700,
            mb: 4,
            color: category.color,
            textAlign: 'center',
          }}
        >
          {category.title}
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {category.services.map((service: Service, index: number) => (
          <ServiceCard
            key={index}
            service={service}
            categoryColor={category.color}
          />
        ))}
      </Box>
    </Box>
  );
}

// CallToActionBanner Component
function CallToActionBanner() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #004C97 0%, #0066CC 100%)',
        color: '#004C97',
        py: 8,
        px: 4,
        borderRadius: 4,
        textAlign: 'center',
        mt: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Avatar
            sx={{
              backgroundColor: 'rgba(0, 76, 151, 0.1)',
              color: '#fff',
              width: 80,
              height: 80,
              fontSize: '2rem',
            }}
          >
            <RocketIcon fontSize="large" />
          </Avatar>
        </Box>
        
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 700,
            mb: 3,
            color: '#fff',
          }}
        >
          Ally360 es más que un ERP. Es la solución completa para tu empresa.
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            mb: 4,
            color: '#fff',
            opacity: 0.8,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Prueba todos nuestros servicios gratis durante 30 días y comienza a digitalizar tu operación.
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
              backgroundColor: '#fff',
              color: '#004C97',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#003d7a',
                color: '#fff',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Probar gratis
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<PlayIcon />}
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Solicitar demo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// AI Chatbot Section Component
function AIChatbotSection() {
  const chatMessages = [
    {
      question: "¿Cuál fue el producto que más vendí ayer?",
      answer: "Tu producto más vendido ayer fue 'Camiseta Polo Azul' con 15 unidades vendidas, generando $450.000 en ingresos."
    },
    {
      question: "¿Qué productos rotan más lento en mi inventario?",
      answer: "Los productos con menor rotación son: Chaqueta de Invierno (45 días sin venta) y Zapatos Formales (30 días). Te recomiendo crear una promoción del 20% para acelerar la rotación."
    },
    {
      question: "Compara las ventas de este mes con el año pasado",
      answer: "Las ventas de este mes son 23% superiores al mismo periodo del año pasado. Has vendido $2.1M vs $1.7M. ¡Excelente crecimiento!"
    }
  ];

  const features = [
    {
      icon: <BotIcon />,
      title: "Consultas instantáneas",
      description: "Pregunta en lenguaje natural y obtén respuestas inmediatas sobre tu negocio"
    },
    {
      icon: <TrendIcon />,
      title: "Análisis inteligentes",
      description: "Procesa múltiples variables para generar insights complejos y útiles"
    },
    {
      icon: <InsightIcon />,
      title: "Recomendaciones personalizadas",
      description: "Recibe sugerencias basadas en el comportamiento de tu negocio"
    },
    {
      icon: <FastIcon />,
      title: "Respuestas en segundos",
      description: "Accede a información crítica sin navegar entre múltiples pantallas"
    },
    {
      icon: <SecurityIcon />,
      title: "100% seguro",
      description: "Protegido bajo las leyes de Habeas Data, solo accedes a tu información"
    },
    {
      icon: <SparkleIcon />,
      title: "Mejora continua",
      description: "Aprende de tu negocio para dar recomendaciones cada vez más precisas"
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
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                    width: 80,
                    height: 80,
                    fontSize: '2.5rem',
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
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
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
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                El primer chatbot empresarial que entiende tu negocio. Pregunta, analiza y toma decisiones informadas con el poder de la Inteligencia Artificial integrada a todos tus datos.
              </Typography>
            </Box>
          </motion.div>

          {/* Interactive Chat Demo */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ mb: 8 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(0, 176, 240, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden',
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
                        textAlign: 'center',
                      }}
                    >
                      Ally IA - Asistente Virtual
                    </Typography>
                    <Box
                      sx={{
                        ml: 2,
                        width: 8,
                        height: 8,
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
                
                <Box sx={{ p: 4, maxHeight: 400, overflowY: 'auto' }}>
                  {chatMessages.map((message, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                      {/* User Question */}
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                        <Box
                          sx={{
                            background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                            color: '#fff',
                            px: 3,
                            py: 2,
                            borderRadius: '20px 20px 5px 20px',
                            maxWidth: '70%',
                            boxShadow: '0 4px 12px rgba(0, 176, 240, 0.3)',
                          }}
                        >
                          <Typography variant="body1" sx={{ fontSize: '0.95rem' }}>
                            {message.question}
                          </Typography>
                        </Box>
                      </Box>
                      
                      {/* AI Answer */}
                      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                          <Avatar
                            sx={{
                              background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                              width: 32,
                              height: 32,
                              mr: 2,
                              mt: 0.5,
                            }}
                          >
                            <BotIcon fontSize="small" />
                          </Avatar>
                          <Box
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: '#fff',
                              px: 3,
                              py: 2,
                              borderRadius: '20px 20px 20px 5px',
                              maxWidth: '70%',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            <Typography variant="body1" sx={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                              {message.answer}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 600,
                mb: 6,
                color: '#fff',
                textAlign: 'center',
              }}
            >
              ¿Por qué la IA de Ally360 es diferente?
            </Typography>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 176, 240, 0.2)',
                      borderRadius: 3,
                      p: 3,
                      height: '100%',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 176, 240, 0.2)',
                        borderColor: '#00B0F0',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                          width: 48,
                          height: 48,
                          mr: 2,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#fff',
                          fontWeight: 600,
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  color: '#fff',
                  mb: 4,
                }}
              >
                Reduce riesgos, toma mejores decisiones con{' '}
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
              
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                  color: '#fff',
                  px: 6,
                  py: 2,
                  fontWeight: 600,
                  borderRadius: 3,
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 25px rgba(0, 176, 240, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 35px rgba(0, 176, 240, 0.4)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Probar la IA gratis
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

// Main ServiciosPage Component
export default function ServiciosPage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F8F9FA' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                    color: '#004C97',
                    lineHeight: 1.2,
                  }}
                >
                  Todos los servicios que tu empresa necesita,{' '}
                  <Box component="span" sx={{ color: '#00B0F0' }}>
                    en un solo lugar
                  </Box>
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: '#666',
                    lineHeight: 1.6,
                    maxWidth: 800,
                    mx: 'auto',
                  }}
                >
                  Desde la primera venta hasta el control total del inventario y la contabilidad. 
                  Con Ally360 gestionas todo desde una sola plataforma.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Services Sections */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Gestión Operativa */}
          <ServiceSection key={serviceCategories[0].id} category={serviceCategories[0]} />
        </motion.div>
      </Container>

      {/* AI Chatbot Section */}
      <AIChatbotSection />

      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Rest of service categories */}
          {serviceCategories.slice(1).map((category) => (
            <ServiceSection key={category.id} category={category} />
          ))}
        </motion.div>

        {/* Call to Action Banner */}
        <CallToActionBanner />
      </Container>
    </Box>
  );
}

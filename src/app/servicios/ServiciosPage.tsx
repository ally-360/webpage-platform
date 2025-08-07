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
          {serviceCategories.map((category) => (
            <ServiceSection key={category.id} category={category} />
          ))}
        </motion.div>

        {/* Call to Action Banner */}
        <CallToActionBanner />
      </Container>
    </Box>
  );
}

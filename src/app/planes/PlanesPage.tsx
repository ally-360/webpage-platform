'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  PointOfSale as POSIcon,
  Assessment as ReportIcon,
  Support as SupportIcon,
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
      staggerChildren: 0.2
    }
  }
};

// Plan data structure
const plans = [
  {
    id: 'esencial',
    name: 'Plan Esencial',
    price: 39900,
    target: 'Emprendedores y microempresas',
    description: 'Perfecto para emprender con las herramientas básicas',
    isPopular: false,
    buttonText: 'Probar gratis 30 días',
    buttonVariant: 'outlined' as const,
    features: [
      { text: 'Hasta 100 facturas electrónicas mensuales', icon: <SecurityIcon /> },
      { text: '1 usuario + 1 contador', icon: <PeopleIcon /> },
      { text: '1 bodega', icon: <InventoryIcon /> },
      { text: 'POS y ventas simples', icon: <POSIcon /> },
      { text: 'Soporte por chat', icon: <SupportIcon /> },
    ],
  },
  {
    id: 'avanzado',
    name: 'Plan Avanzado',
    price: 79900,
    target: 'Pequeñas empresas en crecimiento',
    description: 'El más elegido por empresas que buscan crecer',
    isPopular: true,
    buttonText: 'Solicitar demo',
    buttonVariant: 'contained' as const,
    features: [
      { text: 'Facturación electrónica ilimitada', icon: <SecurityIcon /> },
      { text: 'Hasta 4 usuarios', icon: <PeopleIcon /> },
      { text: 'Hasta 3 bodegas', icon: <InventoryIcon /> },
      { text: 'Traslados de inventario', icon: <POSIcon /> },
      { text: 'Reportes básicos', icon: <ReportIcon /> },
      { text: 'Soporte prioritario', icon: <SupportIcon /> },
    ],
  },
  {
    id: 'elite',
    name: 'Plan Elite',
    price: 149900,
    target: 'Empresas medianas con operaciones complejas',
    description: 'Funcionalidades completas para operaciones avanzadas',
    isPopular: false,
    buttonText: 'Agendar llamada',
    buttonVariant: 'outlined' as const,
    features: [
      { text: 'Facturación ilimitada', icon: <SecurityIcon /> },
      { text: 'Hasta 15 usuarios', icon: <PeopleIcon /> },
      { text: 'Hasta 10 bodegas', icon: <InventoryIcon /> },
      { text: 'KPIs, presupuestos, conciliación', icon: <ReportIcon /> },
      { text: 'CRM básico incluido', icon: <BusinessIcon /> },
      { text: 'Soporte personalizado', icon: <SupportIcon /> },
    ],
  },
];

// Comparison data
const comparisonFeatures = [
  {
    feature: 'Facturación electrónica',
    esencial: 'Hasta 100',
    avanzado: 'Ilimitada',
    elite: 'Ilimitada',
  },
  {
    feature: 'Usuarios incluidos',
    esencial: '1 + contador',
    avanzado: '4',
    elite: '15',
  },
  {
    feature: 'Bodegas',
    esencial: '1',
    avanzado: '3',
    elite: '10',
  },
  {
    feature: 'POS y ventas',
    esencial: true,
    avanzado: true,
    elite: true,
  },
  {
    feature: 'Traslados entre bodegas',
    esencial: false,
    avanzado: true,
    elite: true,
  },
  {
    feature: 'Reportes financieros avanzados',
    esencial: false,
    avanzado: 'Básico',
    elite: 'Completo',
  },
  {
    feature: 'CRM integrado',
    esencial: false,
    avanzado: false,
    elite: true,
  },
  {
    feature: 'Soporte',
    esencial: 'Básico',
    avanzado: 'Prioritario',
    elite: 'Personalizado',
  },
];

// FAQ data
const faqData = [
  {
    question: '¿Los planes tienen permanencia mínima?',
    answer: 'No, todos nuestros planes son sin permanencia. Puedes cancelar en cualquier momento sin penalización.',
  },
  {
    question: '¿Cómo funciona la facturación electrónica con la DIAN?',
    answer: 'Ally360 está certificado por la DIAN y cumple con la Resolución 000042. Generamos, validamos y enviamos tus facturas electrónicas automáticamente.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y PSE. El pago es mensual y se debita automáticamente.',
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: 'Sí, puedes cambiar de plan cuando quieras. Los cambios se aplican inmediatamente y se prorratea el costo.',
  },
  {
    question: '¿Ofrecen una versión de prueba?',
    answer: 'Sí, ofrecemos 30 días gratuitos para que pruebes todas las funcionalidades sin compromiso.',
  },
];

// PricingCard Component
function PricingCard({ plan }: { plan: typeof plans[0] }) {
  const theme = useTheme();

  return (
    <motion.div variants={fadeInUp}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          border: plan.isPopular ? `2px solid ${theme.palette.primary.main}` : '1px solid #e0e0e0',
          boxShadow: plan.isPopular ? theme.shadows[8] : theme.shadows[2],
          '&:hover': {
            boxShadow: theme.shadows[12],
            transform: 'translateY(-4px)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {plan.isPopular && (
          <Chip
            label="Más Popular"
            color="primary"
            icon={<StarIcon />}
            sx={{
              position: 'absolute',
              top: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 600,
              zIndex: 1,
            }}
          />
        )}

        <CardContent sx={{ flexGrow: 1, p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 1, color: '#004C97' }}>
              {plan.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {plan.target}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 1 }}>
              <Typography variant="h3" component="span" sx={{ fontWeight: 700, color: '#004C97' }}>
                ${plan.price.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                / mes
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {plan.description}
            </Typography>
          </Box>

          <Stack spacing={2} sx={{ mb: 4 }}>
            {plan.features.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ color: '#00B0F0', mr: 2, fontSize: '1.2rem' }}>
                  {feature.icon}
                </Box>
                <Typography variant="body2">{feature.text}</Typography>
              </Box>
            ))}
          </Stack>

          <Button
            variant={plan.buttonVariant}
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
              ...(plan.buttonVariant === 'contained' && {
                backgroundColor: '#004C97',
                '&:hover': {
                  backgroundColor: '#003d7a',
                },
              }),
              ...(plan.buttonVariant === 'outlined' && {
                borderColor: '#004C97',
                color: '#004C97',
                '&:hover': {
                  borderColor: '#003d7a',
                  backgroundColor: 'rgba(0, 76, 151, 0.04)',
                },
              }),
            }}
          >
            {plan.buttonText}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Comparison Table Component
function PlanComparison() {
  const [showComparison, setShowComparison] = useState(false);

  const renderCellValue = (value: string | boolean | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckIcon sx={{ color: '#4caf50' }} />
      ) : (
        <CancelIcon sx={{ color: '#f44336' }} />
      );
    }
    return value;
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button
          variant="outlined"
          onClick={() => setShowComparison(!showComparison)}
          sx={{
            borderColor: '#004C97',
            color: '#004C97',
            '&:hover': {
              borderColor: '#003d7a',
              backgroundColor: 'rgba(0, 76, 151, 0.04)',
            },
          }}
        >
          {showComparison ? 'Ocultar' : 'Ver'} comparación detallada
        </Button>
      </Box>

      {showComparison && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Característica</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>Esencial</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, backgroundColor: '#e3f2fd' }}>
                    Avanzado
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>Elite</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonFeatures.map((row, index) => (
                  <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                    <TableCell sx={{ fontWeight: 500 }}>{row.feature}</TableCell>
                    <TableCell align="center">{renderCellValue(row.esencial)}</TableCell>
                    <TableCell align="center" sx={{ backgroundColor: '#f3f8ff' }}>
                      {renderCellValue(row.avanzado)}
                    </TableCell>
                    <TableCell align="center">{renderCellValue(row.elite)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      )}
    </Box>
  );
}

// FAQ Component
function FaqAccordion() {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 700,
          textAlign: 'center',
          mb: 6,
          color: '#004C97',
        }}
      >
        Preguntas Frecuentes
      </Typography>

      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              '& .MuiAccordionSummary-content': {
                margin: '12px 0',
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

// CTA Banner Component
function CtaBanner() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #004C97 0%, #0066CC 100%)',
        color: 'white',
        py: 8,
        mt: 8,
        borderRadius: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 700,
            mb: 3,
          }}
        >
          ¿Listo para transformar tu negocio con Ally360?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            mb: 4,
            opacity: 0.9,
          }}
        >
          Comienza gratis por 30 días o agenda una demo personalizada.
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
              backgroundColor: 'white',
              color: '#004C97',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Probar gratis
          </Button>
          <Button
            variant="outlined"
            size="large"
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
            Agendar demo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// Main Page Component
export default function PlanesPage() {
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
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
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
                  Planes diseñados para cada etapa de tu negocio
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: '#666',
                    lineHeight: 1.6,
                    maxWidth: 700,
                    mx: 'auto',
                  }}
                >
                  Desde emprendedores hasta empresas con múltiples sedes. Escoge el plan que mejor se adapte a ti. 
                  Todos incluyen facturación electrónica DIAN y soporte.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Pricing Cards Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4 
            }}
          >
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </Box>
        </motion.div>

        {/* Plan Comparison */}
        <PlanComparison />

        {/* FAQ Section */}
        <FaqAccordion />

        {/* CTA Banner */}
        <CtaBanner />
      </Container>
    </Box>
  );
}

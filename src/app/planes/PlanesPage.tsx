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
  Switch,
  FormControlLabel,
  Badge,
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
  SmartToy as BotIcon,
  AutoAwesome as SparkleIcon,
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
    id: 'kickstart',
    name: 'Ally Kickstart',
    monthlyPrice: 50000,
    yearlyPrice: 600000,
    target: 'Microempresas que inician su digitalización',
    description: 'Herramientas esenciales para cumplir requisitos básicos',
    isPopular: false,
    buttonText: 'Probar gratis 30 días',
    buttonVariant: 'outlined' as const,
    hasAI: false,
    features: [
      { text: 'Facturación electrónica ilimitada DIAN', icon: <SecurityIcon /> },
      { text: 'Hasta 2 usuarios (Admin + Contador)', icon: <PeopleIcon /> },
      { text: '1 bodega', icon: <InventoryIcon /> },
      { text: 'POS básico para ventas simples', icon: <POSIcon /> },
      { text: 'Contabilidad básica integrada', icon: <ReportIcon /> },
      { text: 'Soporte vía chat estándar', icon: <SupportIcon /> },
      { text: '1 GB de almacenamiento', icon: <SecurityIcon /> },
    ],
  },
  {
    id: 'boost',
    name: 'Ally Boost',
    monthlyPrice: 75000,
    yearlyPrice: 900000,
    target: 'Pequeñas empresas en crecimiento',
    description: 'El más elegido - Impulsa ventas con IA integrada',
    isPopular: true,
    buttonText: 'Solicitar demo',
    buttonVariant: 'contained' as const,
    hasAI: true,
    features: [
      { text: 'Todo lo de Kickstart +', icon: <CheckIcon /> },
      { text: 'Hasta 600 facturas electrónicas/mes', icon: <SecurityIcon /> },
      { text: 'Hasta 5 usuarios (todos los roles)', icon: <PeopleIcon /> },
      { text: 'Hasta 3 bodegas + traslados', icon: <InventoryIcon /> },
      { text: 'POS avanzado', icon: <POSIcon /> },
      { text: 'Reportes avanzados y analítica', icon: <ReportIcon /> },
      { text: 'Envío facturas por WhatsApp', icon: <BusinessIcon /> },
      { text: 'Soporte prioritario', icon: <SupportIcon /> },
      { text: '3 GB de almacenamiento', icon: <SecurityIcon /> },
    ],
    aiFeature: {
      title: 'Chatbot IA Ally360',
      description: 'Asistente virtual inteligente para consultas de negocio',
      icon: <BotIcon />,
    },
  },
  {
    id: 'supreme',
    name: 'Ally Supreme',
    monthlyPrice: 116000,
    yearlyPrice: 1400000,
    target: 'Empresas medianas con operaciones complejas',
    description: 'Solución completa todo-en-uno',
    isPopular: false,
    buttonText: 'Agendar llamada',
    buttonVariant: 'outlined' as const,
    hasAI: true,
    features: [
      { text: 'Todo lo de Boost +', icon: <CheckIcon /> },
      { text: 'Facturación electrónica ilimitada', icon: <SecurityIcon /> },
      { text: 'Hasta 10 usuarios (todos los roles)', icon: <PeopleIcon /> },
      { text: 'Hasta 10 bodegas + traslados', icon: <InventoryIcon /> },
      { text: 'POS completo', icon: <POSIcon /> },
      { text: 'Integraciones y API abierta', icon: <ReportIcon /> },
      { text: 'Envío masivo por WhatsApp', icon: <BusinessIcon /> },
      { text: 'Soporte personalizado + onboarding', icon: <SupportIcon /> },
      { text: '5 GB de almacenamiento', icon: <SecurityIcon /> },
    ],
    aiFeature: {
      title: 'Chatbot IA Ally360 Premium',
      description: 'IA avanzada con análisis predictivos y recomendaciones',
      icon: <BotIcon />,
    },
  },
];

// Comparison data
const comparisonFeatures = [
  {
    feature: 'Precio mensual',
    kickstart: 'COP $50,000',
    boost: 'COP $75,000',
    supreme: 'COP $116,000',
  },
  {
    feature: 'Precio anual (2 meses gratis)',
    kickstart: 'COP $600,000',
    boost: 'COP $900,000',
    supreme: 'COP $1,400,000',
  },
  {
    feature: 'Facturación electrónica',
    kickstart: 'Ilimitada',
    boost: 'Hasta 600/mes',
    supreme: 'Ilimitada',
  },
  {
    feature: 'Usuarios incluidos',
    kickstart: '2 (Admin + Contador)',
    boost: '5 (todos los roles)',
    supreme: '10 (todos los roles)',
  },
  {
    feature: 'Bodegas/Sucursales',
    kickstart: '1',
    boost: '3',
    supreme: '10',
  },
  {
    feature: 'Traslados entre bodegas',
    kickstart: false,
    boost: true,
    supreme: true,
  },
  {
    feature: 'Terminal POS',
    kickstart: 'Básico',
    boost: 'Avanzado',
    supreme: 'Completo',
  },
  {
    feature: 'Chatbot IA Ally360',
    kickstart: false,
    boost: true,
    supreme: true,
  },
  {
    feature: 'Envío facturas WhatsApp',
    kickstart: false,
    boost: 'Sí',
    supreme: 'Masivo',
  },
  {
    feature: 'Almacenamiento',
    kickstart: '1 GB',
    boost: '3 GB',
    supreme: '5 GB',
  },
  {
    feature: 'Reportes y analítica',
    kickstart: 'Básicos',
    boost: 'Avanzados',
    supreme: 'Completos + API',
  },
  {
    feature: 'Soporte',
    kickstart: 'Chat estándar',
    boost: 'Prioritario',
    supreme: 'Personalizado + onboarding',
  },
];

// FAQ data
const faqData = [
  {
    question: '¿Los planes tienen permanencia mínima?',
    answer: 'No, todos nuestros planes son sin permanencia. Puedes cancelar en cualquier momento sin penalización.',
  },
  {
    question: '¿Qué es el Chatbot IA Ally360 incluido en los planes Boost y Supreme?',
    answer: 'Es un asistente virtual inteligente que responde consultas sobre tu negocio en tiempo real, analiza datos y te brinda recomendaciones personalizadas para mejorar tu gestión empresarial.',
  },
  {
    question: '¿Cómo funciona la facturación electrónica con la DIAN?',
    answer: 'Ally360 está certificado por la DIAN y cumple con la Resolución 000042. Generamos, validamos y enviamos tus facturas electrónicas automáticamente.',
  },
  {
    question: '¿Cuál es la diferencia entre el pago mensual y anual?',
    answer: 'Con el pago anual obtienes 2 meses gratis (equivalente a un 16.7% de descuento). Puedes cambiar entre modalidades cuando gustes.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y PSE. El pago se debita automáticamente según tu plan elegido.',
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
function PricingCard({ plan, isYearly }: { plan: typeof plans[0], isYearly: boolean }) {
  const theme = useTheme();
  const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const monthlyEquivalent = isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;

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
          overflow: 'visible',
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

        {/* AI Badge para planes que incluyen IA */}
        {plan.hasAI && (
          <Box
            sx={{
              position: 'absolute',
              top: plan.isPopular ? 20 : -8,
              right: -8,
              zIndex: 2,
            }}
          >
            <Badge
              badgeContent={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0, 176, 240, 0.4)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { 
                        boxShadow: '0 4px 12px rgba(0, 176, 240, 0.4)',
                      },
                      '50%': { 
                        boxShadow: '0 8px 20px rgba(0, 176, 240, 0.6)',
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <BotIcon sx={{ fontSize: '1rem' }} />
                  IA
                </Box>
              }
            />
          </Box>
        )}

        <CardContent sx={{ flexGrow: 1, p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 1, color: '#004C97' }}>
              {plan.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
              {plan.target}
            </Typography>
            
            {/* Precio */}
            <Box sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 1 }}>
                <Typography variant="h3" component="span" sx={{ fontWeight: 700, color: '#004C97' }}>
                  ${currentPrice.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {isYearly ? '/año' : '/mes'}
                </Typography>
              </Box>
              
              {isYearly && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                  <Chip
                    label="2 MESES GRATIS"
                    size="small"
                    sx={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                    }}
                  />
                </Box>
              )}
              
              {isYearly && (
                <Typography variant="body2" color="text.secondary">
                  Equivale a ${monthlyEquivalent.toLocaleString()}/mes
                </Typography>
              )}
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {plan.description}
            </Typography>
          </Box>

          {/* AI Feature destacado */}
          {plan.hasAI && plan.aiFeature && (
            <Box
              sx={{
                mb: 3,
                p: 2,
                background: 'linear-gradient(135deg, rgba(0, 176, 240, 0.1) 0%, rgba(0, 76, 151, 0.05) 100%)',
                border: '1px solid rgba(0, 176, 240, 0.3)',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #00B0F0, #004C97, #00B0F0)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                  '@keyframes shimmer': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                  },
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#004C97',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  <SparkleIcon sx={{ color: '#00B0F0' }} />
                  {plan.aiFeature.title}
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#333',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                }}
              >
                {plan.aiFeature.description}
              </Typography>
            </Box>
          )}

          {/* Features */}
          <Stack spacing={1.5} sx={{ mb: 4 }}>
            {plan.features.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ color: '#00B0F0', mr: 2, fontSize: '1.1rem' }}>
                  {feature.icon}
                </Box>
                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                  {feature.text}
                </Typography>
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
                  <TableCell align="center" sx={{ fontWeight: 700 }}>Ally Kickstart</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, backgroundColor: '#e3f2fd' }}>
                    Ally Boost
                    <Chip
                      icon={<BotIcon />}
                      label="IA"
                      size="small"
                      sx={{
                        ml: 1,
                        background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                        color: 'white',
                        fontSize: '0.7rem',
                      }}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>
                    Ally Supreme
                    <Chip
                      icon={<BotIcon />}
                      label="IA"
                      size="small"
                      sx={{
                        ml: 1,
                        background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                        color: 'white',
                        fontSize: '0.7rem',
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonFeatures.map((row, index) => (
                  <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                    <TableCell sx={{ fontWeight: 500 }}>{row.feature}</TableCell>
                    <TableCell align="center">{renderCellValue(row.kickstart)}</TableCell>
                    <TableCell align="center" sx={{ backgroundColor: '#f3f8ff' }}>
                      {renderCellValue(row.boost)}
                    </TableCell>
                    <TableCell align="center">{renderCellValue(row.supreme)}</TableCell>
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
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 176, 240, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 176, 240, 0.15) 0%, transparent 50%)
          `,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          ¿Listo para transformar tu negocio con Ally360?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
          <BotIcon sx={{ color: '#00B0F0', fontSize: '2rem', mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              opacity: 0.9,
            }}
          >
            Incluye Chatbot IA en planes Ally Boost y Ally Supreme
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            mb: 4,
            opacity: 0.8,
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
            Probar gratis 30 días
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
            Agendar demo con IA
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

// Main Page Component
export default function PlanesPage() {
  const [isYearly, setIsYearly] = useState(false);

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
                    mb: 4,
                  }}
                >
                  Desde emprendedores hasta empresas con múltiples sedes. Escoge el plan que mejor se adapte a ti. 
                  Todos incluyen facturación electrónica DIAN y soporte.
                </Typography>
                
                {/* Price Toggle Switch */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 2, 
                    mb: 2,
                    p: 2,
                    backgroundColor: 'rgba(0, 76, 151, 0.05)',
                    borderRadius: 3,
                    border: '1px solid rgba(0, 76, 151, 0.1)',
                  }}
                >
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: !isYearly ? 600 : 400,
                      color: !isYearly ? '#004C97' : '#666',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Mensual
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isYearly}
                        onChange={(e) => setIsYearly(e.target.checked)}
                        sx={{
                          '& .MuiSwitch-switchBase.Mui-checked': {
                            color: '#00B0F0',
                          },
                          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: '#00B0F0',
                          },
                        }}
                      />
                    }
                    label=""
                    sx={{ margin: 0 }}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: isYearly ? 600 : 400,
                        color: isYearly ? '#004C97' : '#666',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Anual
                    </Typography>
                    {isYearly && (
                      <Chip
                        label="2 MESES GRATIS"
                        size="small"
                        sx={{
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          animation: 'bounce 2s infinite',
                          '@keyframes bounce': {
                            '0%, 20%, 50%, 80%, 100%': {
                              transform: 'translateY(0)',
                            },
                            '40%': {
                              transform: 'translateY(-5px)',
                            },
                            '60%': {
                              transform: 'translateY(-3px)',
                            },
                          },
                        }}
                      />
                    )}
                  </Box>
                </Box>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: 'italic' }}
                >
                  💡 Los planes Ally Boost y Ally Supreme incluyen Chatbot con IA
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
              <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
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

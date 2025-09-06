'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
  Avatar,
  Chip,
  Paper,
  IconButton,
  Fade,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  SmartToy as BotIcon,
  AutoAwesome as SparkleIcon,
  TrendingUp as TrendIcon,
  Lightbulb as InsightIcon,
  Speed as FastIcon,
  Security as SecurityIcon,
  DataUsage as DataIcon,
  Insights as AnalyticsIcon,
  PlayArrow as PlayIcon,
  ExpandMore as ExpandMoreIcon,
  Send as SendIcon,
  Mic as MicIcon,
  Chat as ChatIcon,
  BusinessCenter as CEOIcon,
  Handshake as SalesIcon,
  Inventory as WarehouseIcon,
  Analytics as AccountantIcon,
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

export default function IAAllyPage() {
  const [activeChat, setActiveChat] = useState(0);
  
  const chatScenarios = [
    {
      category: "Ventas y rendimiento",
      color: "#00B0F0",
      conversations: [
        {
          question: "¿Cuáles fueron mis productos más vendidos esta semana?",
          answer: "Esta semana tus productos estrella fueron: 1) Camiseta Polo Azul (45 unidades - $1.350.000), 2) Zapatos Deportivos Nike (23 unidades - $1.610.000), 3) Chaqueta Casual (18 unidades - $900.000). En total generaste $3.860.000 con estos 3 productos.",
          insights: "📈 Las camisetas tienen 15% más demanda los viernes. Considera aumentar el stock para ese día."
        },
        {
          question: "Compara mis ventas de este mes con el mismo mes del año pasado",
          answer: "Excelentes noticias! Este mes has vendido $8.2M comparado con $6.1M del mismo periodo 2024. Eso representa un crecimiento del 34.4%. Tu mejor categoría ha sido 'Ropa Casual' con +67% de crecimiento.",
          insights: "🎯 Recomiendo ampliar el inventario de ropa casual para capitalizar esta tendencia."
        },
        {
          question: "¿Qué cliente me genera más ingresos actualmente?",
          answer: "Tu cliente VIP es 'Distribuidora El Sol Ltda.' con $2.4M en compras este año (18% de tus ingresos totales). Le siguen 'Comercial Andina' ($1.8M) y 'Textiles del Valle' ($1.2M).",
          insights: "💡 Considera crear un programa de fidelidad especial para estos 3 clientes top."
        }
      ]
    },
    {
      category: "Inventario y logística", 
      color: "#004C97",
      conversations: [
        {
          question: "¿Qué productos están próximos a agotarse?",
          answer: "Tienes 5 productos en nivel crítico: Chaqueta Invierno (2 unidades restantes, se agota en 3 días), Zapatos Formales (4 unidades, 5 días), Camiseta Blanca talla M (1 unidad, 1 día). Debes reordenar urgentemente.",
          insights: "⚠️ He creado automáticamente las órdenes de compra sugeridas. Solo necesitas aprobarlas."
        },
        {
          question: "¿Cuáles son mis productos de rotación más lenta?",
          answer: "Los productos con menor rotación son: Abrigo de Lana (67 días sin venta), Botas de Trabajo (45 días), Suéter Gris (38 días). Representan $890.000 en capital inmovilizado.",
          insights: "💰 Sugerencia: Crea una promoción '3x2' para estos productos y libera capital de trabajo."
        },
        {
          question: "Recomiéndame la mejor estrategia para optimizar mi inventario",
          answer: "Basado en tu historial, te recomiendo: 1) Reduce 30% el stock de productos estacionales, 2) Aumenta 25% las referencias que rotan semanalmente, 3) Implementa el sistema ABC para priorizar productos clase A.",
          insights: "📊 Esta optimización podría liberar $1.2M en capital y reducir 40% tus costos de almacenamiento."
        }
      ]
    },
    {
      category: "Análisis financiero",
      color: "#00E0FF", 
      conversations: [
        {
          question: "¿Cómo está mi flujo de caja proyectado para los próximos 30 días?",
          answer: "Tu flujo de caja luce saludable: Ingresos esperados $4.2M, gastos fijos $2.1M, pagos a proveedores $1.3M. Tendrás un excedente de $800.000. Sin embargo, la semana del 15-22 será ajustada.",
          insights: "💳 Recomiendo gestionar el pago de 'Proveedor XYZ' para el día 25 en lugar del 18."
        },
        {
          question: "¿Cuál es mi margen de utilidad real por categoría de producto?",
          answer: "Tus márgenes por categoría: Ropa Casual (42%), Zapatos (35%), Accesorios (67%), Ropa Formal (28%). Los accesorios son tu categoría más rentable, mientras que ropa formal necesita revisión de precios.",
          insights: "🎯 Impulsa la venta de accesorios y considera ajustar precios en ropa formal (+8%)."
        }
      ]
    }
  ];

  const aiCapabilities = [
    {
      icon: <ChatIcon />,
      title: "Lenguaje Natural",
      description: "Habla con Ally como si fuera tu asesor de confianza. Entiende tu jerga empresarial y responde de manera conversacional.",
      features: ["Preguntas en español coloquial", "Comprende contexto empresarial", "Respuestas personalizadas"]
    },
    {
      icon: <DataIcon />,
      title: "Acceso Total a Datos", 
      description: "Conectado a todos los módulos de Ally360. Analiza ventas, inventario, finanzas, clientes y proveedores simultáneamente.",
      features: ["Datos en tiempo real", "Análisis multidimensional", "Historial completo"]
    },
    {
      icon: <AnalyticsIcon />,
      title: "Análisis Predictivo",
      description: "No solo muestra lo que pasó, sino que predice tendencias, demanda futura y riesgos potenciales.",
      features: ["Proyecciones de ventas", "Alertas preventivas", "Tendencias de mercado"]
    },
    {
      icon: <InsightIcon />,
      title: "Recomendaciones Inteligentes",
      description: "Genera sugerencias específicas basadas en mejores prácticas del sector y el comportamiento único de tu negocio.",
      features: ["Optimización de precios", "Estrategias de inventario", "Oportunidades de crecimiento"]
    },
    {
      icon: <SecurityIcon />,
      title: "Seguridad Empresarial",
      description: "Cumple con todas las normativas de protección de datos. Solo accedes a información de tu empresa según tus permisos.",
      features: ["Habeas Data compatible", "Roles y permisos", "Encriptación avanzada"]
    },
    {
      icon: <FastIcon />,
      title: "Respuestas Instantáneas", 
      description: "Procesa miles de registros en segundos. Lo que tomaría horas de análisis manual, lo tienes al instante.",
      features: ["Consultas complejas < 3seg", "Cálculos automáticos", "Reportes on-demand"]
    }
  ];

  const useCases = [
    {
      role: "CEO / Gerente",
      icon: <CEOIcon />,
      color: "#00B0F0",
      bgGradient: "linear-gradient(135deg, #00B0F0 0%, #004C97 100%)",
      needs: [
        "¿Cómo va mi empresa comparado con el trimestre anterior?",
        "¿Cuáles son mis 3 productos más rentables?", 
        "¿Qué riesgos financieros debo atender esta semana?"
      ]
    },
    {
      role: "Vendedor",
      icon: <SalesIcon />,
      color: "#00E0FF",
      bgGradient: "linear-gradient(135deg, #00E0FF 0%, #00B0F0 100%)",
      needs: [
        "¿Qué cliente no me ha comprado en 30 días?",
        "¿Cuál es el historial de compras de este cliente?",
        "¿Qué productos debo recomendar basado en sus compras anteriores?"
      ]
    },
    {
      role: "Bodeguero",
      icon: <WarehouseIcon />,
      color: "#4CAF50",
      bgGradient: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
      needs: [
        "¿Qué productos debo reabastecer urgentemente?",
        "¿Cuánto inventario necesito para la próxima semana?",
        "¿Qué productos están vencidos o próximos a vencer?"
      ]
    },
    {
      role: "Contador",
      icon: <AccountantIcon />,
      color: "#FF6B35",
      bgGradient: "linear-gradient(135deg, #FF6B35 0%, #D84315 100%)",
      needs: [
        "¿Cuántas facturas están pendientes por cobrar?",
        "¿Cuál es mi flujo de caja real vs proyectado?",
        "¿Qué gastos han aumentado más este mes?"
      ]
    }
  ];

  const faqs = [
    {
      question: "¿Qué tan segura es mi información con la IA?",
      answer: "La IA de Ally360 cumple con todas las normativas de protección de datos personales (Habeas Data) en Colombia. Tus datos nunca salen de la plataforma, están encriptados, y solo usuarios autorizados pueden acceder según sus roles y permisos. Además, la IA no comparte información entre empresas diferentes."
    },
    {
      question: "¿Puedo hacer preguntas sobre datos históricos?",
      answer: "¡Por supuesto! La IA tiene acceso a todo tu historial desde que comenzaste a usar Ally360. Puedes preguntar sobre ventas del año pasado, comparar periodos específicos, analizar tendencias estacionales, y mucho más. Entre más datos históricos tengas, más precisas serán las recomendaciones."
    },
    {
      question: "¿Funciona para empresas de cualquier tamaño?",
      answer: "Sí, la IA se adapta al volumen de tu negocio. Desde una micro-empresa con pocas transacciones hasta una PYME con miles de productos y clientes. La IA aprende los patrones específicos de tu industria y tamaño de empresa para dar recomendaciones más acertadas."
    },
    {
      question: "¿Necesito capacitación especial para usarla?",
      answer: "No necesitas ser experto en tecnología. La IA entiende preguntas en español natural, como si hablaras con un asesor humano. Solo escribe o habla tu pregunta normalmente: '¿cómo van las ventas?' o '¿qué debo comprar para la próxima semana?'. Es así de sencillo."
    },
    {
      question: "¿Qué pasa si la IA no entiende mi pregunta?",
      answer: "Si la IA no comprende completamente tu consulta, te pedirá que la reformules o te sugerirá preguntas similares que sí puede responder. Además, está en constante aprendizaje, así que mejora su comprensión con cada interacción."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 15 },
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
              radial-gradient(circle at 20% 20%, rgba(0, 176, 240, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 76, 151, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
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
              linear-gradient(45deg, transparent 49%, rgba(0, 176, 240, 0.08) 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, rgba(0, 76, 151, 0.08) 50%, transparent 51%)
            `,
            backgroundSize: '60px 60px',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={fadeInUp}>
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const
                  }}
                >
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                      width: 120,
                      height: 120,
                      fontSize: '4rem',
                      margin: '0 auto 2rem',
                      boxShadow: '0 0 50px rgba(0, 176, 240, 0.6)',
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <BotIcon fontSize="large" />
                  </Avatar>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                    fontWeight: 800,
                    mb: 3,
                    color: '#fff',
                    textShadow: '0 0 30px rgba(0, 176, 240, 0.4)',
                    lineHeight: 1.1,
                  }}
                >
                  Ally{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      background: 'linear-gradient(135deg, #00B0F0 0%, #00E0FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    IA
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 4,
                    maxWidth: 800,
                    mx: 'auto',
                  }}
                >
                  El primer asistente de inteligencia artificial diseñado exclusivamente para empresarios
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  sx={{ justifyContent: 'center', alignItems: 'center', mb: 6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                      color: '#fff',
                      px: 6,
                      py: 2,
                      fontWeight: 600,
                      borderRadius: 3,
                      fontSize: '1.2rem',
                      minWidth: 200,
                      boxShadow: '0 8px 25px rgba(0, 176, 240, 0.4)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 35px rgba(0, 176, 240, 0.5)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Probar gratis ahora
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ChatIcon />}
                    sx={{
                      borderColor: '#00B0F0',
                      color: '#00B0F0',
                      px: 6,
                      py: 2,
                      fontWeight: 600,
                      borderWidth: 2,
                      minWidth: 200,
                      '&:hover': {
                        borderColor: '#00E0FF',
                        color: '#00E0FF',
                        backgroundColor: 'rgba(0, 176, 240, 0.1)',
                        borderWidth: 2,
                      },
                    }}
                  >
                    Ver demo en vivo
                  </Button>
                </Stack>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                  <Chip 
                    icon={<SparkleIcon />}
                    label="Respuestas instantáneas"
                    sx={{ 
                      backgroundColor: 'rgba(0, 176, 240, 0.2)', 
                      color: '#fff',
                      border: '1px solid rgba(0, 176, 240, 0.3)',
                      '& .MuiChip-icon': { color: '#00B0F0' }
                    }}
                  />
                  <Chip 
                    icon={<SecurityIcon />}
                    label="100% seguro"
                    sx={{ 
                      backgroundColor: 'rgba(0, 176, 240, 0.2)', 
                      color: '#fff',
                      border: '1px solid rgba(0, 176, 240, 0.3)',
                      '& .MuiChip-icon': { color: '#00B0F0' }
                    }}
                  />
                  <Chip 
                    icon={<TrendIcon />}
                    label="Análisis predictivo"
                    sx={{ 
                      backgroundColor: 'rgba(0, 176, 240, 0.2)', 
                      color: '#fff',
                      border: '1px solid rgba(0, 176, 240, 0.3)',
                      '& .MuiChip-icon': { color: '#00B0F0' }
                    }}
                  />
                </Stack>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Interactive Chat Demo */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                color: '#333',
                textAlign: 'center',
              }}
            >
              Experimenta el poder de{' '}
              <Box 
                component="span" 
                sx={{ 
                  background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ally IA
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.2rem',
                color: '#666',
                textAlign: 'center',
                mb: 6,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Selecciona un escenario y descubre cómo Ally IA puede transformar la gestión de tu empresa
            </Typography>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ mb: 4 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                {chatScenarios.map((scenario, index) => (
                  <Button
                    key={index}
                    variant={activeChat === index ? "contained" : "outlined"}
                    onClick={() => setActiveChat(index)}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      ...(activeChat === index ? {
                        background: `linear-gradient(135deg, ${scenario.color} 0%, #004C97 100%)`,
                        color: '#fff',
                        boxShadow: `0 4px 15px ${scenario.color}40`,
                      } : {
                        borderColor: scenario.color,
                        color: scenario.color,
                        '&:hover': {
                          backgroundColor: `${scenario.color}10`,
                        }
                      })
                    }}
                  >
                    {scenario.category}
                  </Button>
                ))}
              </Stack>
            </Box>
          </motion.div>

          {/* Chat Interface */}
          <motion.div variants={fadeInUp}>
            <Fade in={true} key={activeChat}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: `2px solid ${chatScenarios[activeChat].color}20`,
                }}
              >
                {/* Chat Header */}
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${chatScenarios[activeChat].color} 0%, #004C97 100%)`,
                    color: '#fff',
                    p: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar
                      sx={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        mr: 2,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <BotIcon />
                    </Avatar>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Ally IA - {chatScenarios[activeChat].category}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Consulta sobre tu negocio en tiempo real
                      </Typography>
                    </Box>
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

                {/* Chat Messages */}
                <Box sx={{ p: 4, maxHeight: 600, overflowY: 'auto' }}>
                  {chatScenarios[activeChat].conversations.map((conversation, index) => (
                    <Box key={index} sx={{ mb: 6 }}>
                      {/* User Question */}
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                        <Paper
                          elevation={2}
                          sx={{
                            background: `linear-gradient(135deg, ${chatScenarios[activeChat].color} 0%, #004C97 100%)`,
                            color: '#fff',
                            px: 3,
                            py: 2,
                            borderRadius: '20px 20px 5px 20px',
                            maxWidth: '70%',
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              right: -8,
                              bottom: 0,
                              width: 0,
                              height: 0,
                              borderLeft: '8px solid transparent',
                              borderTop: `8px solid ${chatScenarios[activeChat].color}`,
                            }
                          }}
                        >
                          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
                            {conversation.question}
                          </Typography>
                        </Paper>
                      </Box>

                      {/* AI Answer */}
                      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '85%' }}>
                          <Avatar
                            sx={{
                              background: `linear-gradient(135deg, ${chatScenarios[activeChat].color} 0%, #004C97 100%)`,
                              width: 40,
                              height: 40,
                              mr: 2,
                              mt: 0.5,
                              flexShrink: 0,
                            }}
                          >
                            <BotIcon />
                          </Avatar>
                          <Paper
                            elevation={1}
                            sx={{
                              background: '#fff',
                              px: 3,
                              py: 2,
                              borderRadius: '20px 20px 20px 5px',
                              border: '1px solid #e0e0e0',
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: -8,
                                bottom: 0,
                                width: 0,
                                height: 0,
                                borderRight: '8px solid #fff',
                                borderTop: '8px solid #fff',
                                borderLeft: '8px solid transparent',
                                borderBottom: '8px solid transparent',
                              }
                            }}
                          >
                            <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333', mb: 2 }}>
                              {conversation.answer}
                            </Typography>
                            
                            {/* Insight Card */}
                            <Card
                              sx={{
                                background: `linear-gradient(135deg, ${chatScenarios[activeChat].color}10 0%, ${chatScenarios[activeChat].color}05 100%)`,
                                border: `1px solid ${chatScenarios[activeChat].color}30`,
                                borderRadius: 2,
                                p: 2,
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <InsightIcon sx={{ color: chatScenarios[activeChat].color, mr: 1, fontSize: '1.2rem' }} />
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: chatScenarios[activeChat].color }}>
                                  Recomendación inteligente
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: '#555', fontSize: '0.95rem' }}>
                                {conversation.insights}
                              </Typography>
                            </Card>
                          </Paper>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Chat Input (Demo) */}
                <Box
                  sx={{
                    p: 3,
                    borderTop: '1px solid #e0e0e0',
                    background: '#fff',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#f8f9fa',
                      borderRadius: 3,
                      px: 3,
                      py: 2,
                      border: '2px solid #e9ecef',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        flex: 1,
                        color: '#aaa',
                        fontSize: '1rem',
                      }}
                    >
                      Escribe tu pregunta sobre el negocio...
                    </Typography>
                    <IconButton sx={{ color: '#666', mr: 1 }}>
                      <MicIcon />
                    </IconButton>
                    <IconButton 
                      sx={{ 
                        color: '#fff',
                        background: `linear-gradient(135deg, ${chatScenarios[activeChat].color} 0%, #004C97 100%)`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${chatScenarios[activeChat].color} 0%, #003d7a 100%)`,
                        }
                      }}
                    >
                      <SendIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Fade>
          </motion.div>
        </motion.div>
      </Container>

      {/* AI Capabilities Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                ¿Qué hace especial a{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Ally IA
                </Box>
                ?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  color: '#666',
                  textAlign: 'center',
                  mb: 6,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Una inteligencia artificial construida específicamente para empresarios como tú
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {aiCapabilities.map((capability, index) => (
                <Box key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        height: '100%',
                        p: 4,
                        borderRadius: 3,
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          boxShadow: '0 12px 40px rgba(0, 176, 240, 0.15)',
                          transform: 'translateY(-8px)',
                          borderColor: '#00B0F0',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Avatar
                          sx={{
                            background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                            width: 60,
                            height: 60,
                            mr: 3,
                            flexShrink: 0,
                          }}
                        >
                          {capability.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: '#333',
                            }}
                          >
                            {capability.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#666',
                              lineHeight: 1.7,
                              mb: 3,
                            }}
                          >
                            {capability.description}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ ml: 9 }}>
                        {capability.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: '#00B0F0',
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            <Typography variant="body2" sx={{ color: '#555' }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Use Cases by Role */}
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
              radial-gradient(circle at 15% 15%, rgba(0, 176, 240, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 85% 85%, rgba(0, 76, 151, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)
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
              linear-gradient(45deg, transparent 49%, rgba(0, 176, 240, 0.03) 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, rgba(0, 76, 151, 0.03) 50%, transparent 51%)
            `,
            backgroundSize: '80px 80px',
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
            <motion.div variants={fadeInUp}>
              <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                  Diseñado para cada{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      background: 'linear-gradient(135deg, #00B0F0 0%, #00E0FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    rol
                  </Box>
                  {' '}en tu empresa
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.3rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: 700,
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Cada miembro de tu equipo puede usar Ally IA según sus necesidades específicas
                </Typography>
              </Box>
            </motion.div>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: { xs: 3, md: 4 },
              }}
            >
              {useCases.map((useCase, index) => (
                <Box key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-12px)',
                          boxShadow: `0 20px 60px ${useCase.color}20`,
                          borderColor: useCase.color,
                          '& .role-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                            background: useCase.bgGradient,
                          },
                          '& .role-title': {
                            color: useCase.color,
                          },
                          '& .need-card': {
                            borderColor: `${useCase.color}30`,
                            backgroundColor: `${useCase.color}08`,
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: useCase.bgGradient,
                          opacity: 0.7,
                        }
                      }}
                    >
                      <Box sx={{ p: 4, textAlign: 'center' }}>
                        {/* Icon with futuristic design */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                          <Avatar
                            className="role-icon"
                            sx={{
                              width: 80,
                              height: 80,
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: `2px solid ${useCase.color}40`,
                              fontSize: '2.5rem',
                              transition: 'all 0.3s ease-in-out',
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -2,
                                left: -2,
                                right: -2,
                                bottom: -2,
                                borderRadius: '50%',
                                background: `conic-gradient(from 0deg, ${useCase.color}40, transparent, ${useCase.color}40)`,
                                animation: 'rotate 4s linear infinite',
                                '@keyframes rotate': {
                                  '0%': { transform: 'rotate(0deg)' },
                                  '100%': { transform: 'rotate(360deg)' },
                                },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                color: "#fff",
                                position: 'relative',
                                zIndex: 1,
                                filter: 'drop-shadow(0 0 8px currentColor)',
                              }}
                            >
                              {useCase.icon}
                            </Box>
                          </Avatar>
                        </Box>
                        
                        {/* Role Title */}
                        <Typography
                          className="role-title"
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 4,
                            color: '#fff',
                            transition: 'color 0.3s ease-in-out',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          {useCase.role}
                        </Typography>
                        
                        {/* Needs Cards */}
                        <Stack spacing={2}>
                          {useCase.needs.map((need, needIndex) => (
                            <Paper
                              key={needIndex}
                              className="need-card"
                              sx={{
                                p: 2.5,
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 2,
                                transition: 'all 0.3s ease-in-out',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  background: `linear-gradient(45deg, transparent 48%, ${useCase.color}10 50%, transparent 52%)`,
                                  opacity: 0,
                                  transition: 'opacity 0.3s ease',
                                },
                                '&:hover::before': {
                                  opacity: 1,
                                },
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#fff',
                                  fontWeight: 500,
                                  fontSize: '0.95rem',
                                  fontStyle: 'italic',
                                  lineHeight: 1.4,
                                  position: 'relative',
                                  zIndex: 1,
                                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '1.2rem',
                                    mr: 0.5,
                                  }}
                                >
                                  &ldquo;
                                </Box>
                                {need}
                                <Box
                                  component="span"
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '1.2rem',
                                    ml: 0.5,
                                  }}
                                >
                                  &rdquo;
                                </Box>
                              </Typography>
                            </Paper>
                          ))}
                        </Stack>
                        
                        {/* Decorative elements */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            right: -20,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${useCase.color}20 0%, transparent 70%)`,
                            opacity: 0.3,
                            animation: 'pulse 3s ease-in-out infinite',
                            '@keyframes pulse': {
                              '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
                              '50%': { transform: 'scale(1.2)', opacity: 0.6 },
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: -15,
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${useCase.color}15 0%, transparent 70%)`,
                            opacity: 0.4,
                            animation: 'pulse 4s ease-in-out infinite',
                            animationDelay: '1s',
                          }}
                        />
                      </Box>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>

            {/* Bottom CTA for this section */}
            <motion.div variants={fadeInUp}>
              <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 4,
                  }}
                >
                  Sin importar tu rol, Ally IA tiene las respuestas que necesitas
                </Typography>
                
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SparkleIcon />}
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
                  Descubre tu experiencia personalizada
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="md">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 6,
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                Preguntas frecuentes
              </Typography>
            </motion.div>

            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Accordion
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    '&:before': {
                      display: 'none',
                    },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      px: 3,
                      py: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 176, 240, 0.05)',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, py: 2, pt: 0 }}>
                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box
        sx={{
          py: 8,
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
              radial-gradient(circle at 20% 20%, rgba(0, 176, 240, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 76, 151, 0.15) 0%, transparent 50%)
            `,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <motion.div variants={fadeInUp}>
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
                  Revoluciona tu negocio con{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      background: 'linear-gradient(135deg, #00B0F0 0%, #00E0FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Ally IA
                  </Box>
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.3rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 6,
                    lineHeight: 1.6,
                  }}
                >
                  Únete a las empresas que ya están tomando decisiones más inteligentes con IA
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  sx={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
                      color: '#fff',
                      px: 8,
                      py: 2.5,
                      fontWeight: 600,
                      borderRadius: 3,
                      fontSize: '1.2rem',
                      minWidth: 220,
                      boxShadow: '0 8px 25px rgba(0, 176, 240, 0.4)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 35px rgba(0, 176, 240, 0.5)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Comenzar prueba gratuita
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#00B0F0',
                      color: '#00B0F0',
                      px: 8,
                      py: 2.5,
                      fontWeight: 600,
                      borderWidth: 2,
                      minWidth: 220,
                      '&:hover': {
                        borderColor: '#00E0FF',
                        color: '#00E0FF',
                        backgroundColor: 'rgba(0, 176, 240, 0.1)',
                        borderWidth: 2,
                      },
                    }}
                  >
                    Agendar demostración
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

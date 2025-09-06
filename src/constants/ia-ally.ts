// Constantes para la página IA Ally
// Los iconos se manejan por string keys y se mapean en los componentes
export const CHAT_SCENARIOS = [
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

export const AI_CAPABILITIES = [
  {
    iconKey: "chat",
    title: "Lenguaje Natural",
    description: "Habla con Ally como si fuera tu asesor de confianza. Entiende tu jerga empresarial y responde de manera conversacional.",
    features: ["Preguntas en español coloquial", "Comprende contexto empresarial", "Respuestas personalizadas"]
  },
  {
    iconKey: "data",
    title: "Acceso Total a Datos",
    description: "Conectado a todos los módulos de Ally360. Analiza ventas, inventario, finanzas, clientes y proveedores simultáneamente.",
    features: ["Datos en tiempo real", "Análisis multidimensional", "Historial completo"]
  },
  {
    iconKey: "analytics",
    title: "Análisis Predictivo",
    description: "No solo muestra lo que pasó, sino que predice tendencias, demanda futura y riesgos potenciales.",
    features: ["Proyecciones de ventas", "Alertas preventivas", "Tendencias de mercado"]
  },
  {
    iconKey: "insights",
    title: "Recomendaciones Inteligentes",
    description: "Genera sugerencias específicas basadas en mejores prácticas del sector y el comportamiento único de tu negocio.",
    features: ["Optimización de precios", "Estrategias de inventario", "Oportunidades de crecimiento"]
  },
  {
    iconKey: "security",
    title: "Seguridad Empresarial",
    description: "Cumple con todas las normativas de protección de datos. Solo accedes a información de tu empresa según tus permisos.",
    features: ["Habeas Data compatible", "Roles y permisos", "Encriptación avanzada"]
  },
  {
    iconKey: "speed",
    title: "Respuestas Instantáneas",
    description: "Procesa miles de registros en segundos. Lo que tomaría horas de análisis manual, lo tienes al instante.",
    features: ["Consultas complejas < 3seg", "Cálculos automáticos", "Reportes on-demand"]
  }
];

export const USE_CASES = [
  {
    role: "CEO / Gerente",
    iconKey: "ceo",
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
    iconKey: "sales",
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
    iconKey: "warehouse",
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
    iconKey: "accountant",
    color: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #FF6B35 0%, #D84315 100%)",
    needs: [
      "¿Cuántas facturas están pendientes por cobrar?",
      "¿Cuál es mi flujo de caja real vs proyectado?",
      "¿Qué gastos han aumentado más este mes?"
    ]
  }
];

export const FAQS = [
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

export const HERO_CONTENT = {
  title: "Ally",
  titleHighlight: "IA",
  subtitle: "El primer asistente de inteligencia artificial diseñado exclusivamente para empresarios",
  primaryButtonText: "Probar gratis ahora",
  secondaryButtonText: "Ver demo en vivo",
  badges: [
    {
      iconKey: "sparkle",
      label: "Respuestas instantáneas"
    },
    {
      iconKey: "security",
      label: "100% seguro"
    },
    {
      iconKey: "trend",
      label: "Análisis predictivo"
    }
  ]
};

export const CHAT_DEMO_CONTENT = {
  title: "Experimenta el poder de",
  titleHighlight: "Ally IA",
  subtitle: "Selecciona un escenario y descubre cómo Ally IA puede transformar la gestión de tu empresa",
  chatHeader: {
    title: "Ally IA",
    subtitle: "Consulta sobre tu negocio en tiempo real"
  },
  inputPlaceholder: "Escribe tu pregunta sobre el negocio..."
};

export const CAPABILITIES_CONTENT = {
  title: "¿Qué hace especial a",
  titleHighlight: "Ally IA",
  subtitle: "Una inteligencia artificial construida específicamente para empresarios como tú"
};

export const USE_CASES_CONTENT = {
  title: "Diseñado para cada",
  titleHighlight: "rol",
  subtitle: "Cada miembro de tu equipo puede usar Ally IA según sus necesidades específicas",
  ctaTitle: "Sin importar tu rol, Ally IA tiene las respuestas que necesitas",
  ctaButtonText: "Descubre tu experiencia personalizada"
};

export const FAQ_CONTENT = {
  title: "Preguntas frecuentes"
};

export const FINAL_CTA_CONTENT = {
  title: "Revoluciona tu negocio con",
  titleHighlight: "Ally IA",
  subtitle: "Únete a las empresas que ya están tomando decisiones más inteligentes con IA",
  primaryButtonText: "Comenzar prueba gratuita",
  secondaryButtonText: "Agendar demostración"
};

// Animaciones reutilizables
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Estilos de gradientes reutilizables
export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #000511 0%, #001122 25%, #002244 50%, #003366 75%, #004477 100%)',
  button: 'linear-gradient(135deg, #00B0F0 0%, #004C97 100%)',
  text: 'linear-gradient(135deg, #00B0F0 0%, #00E0FF 100%)'
};

// Export default para hacer este archivo un módulo válido
const constants = {};
export default constants;
# Ally360 - Sitio Web Promocional

Un sitio web promocional moderno y optimizado para Ally360, un sistema ERP diseñado específicamente para pequeñas y medianas empresas (PYMEs) colombianas.

## 🚀 Stack Tecnológico

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Material UI (MUI)** para componentes de interfaz
- **Tailwind CSS** para estilos personalizados
- **Framer Motion** para animaciones suaves
- **next-seo** para optimización SEO
- **React Hook Form** con validaciones Yup

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadata
│   ├── page.tsx           # Página de inicio
│   ├── planes/            # Página de planes y precios
│   ├── blog/              # Blog empresarial
│   ├── servicios/         # Servicios ofrecidos
│   └── contacto/          # Página de contacto
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   ├── Footer.tsx         # Footer con enlaces
│   └── sections/          # Secciones de la página
│       ├── HeroSection.tsx
│       ├── WhatIsAlly360Section.tsx
│       ├── BenefitsSection.tsx
│       ├── TargetSegmentSection.tsx
│       ├── ComparisonSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── PricingSection.tsx
│       └── CTASection.tsx
├── theme/                 # Configuración del tema MUI
└── lib/                   # Utilidades y helpers
```

## 🎨 Diseño y UX

- **Diseño responsive** mobile-first
- **Animaciones fluidas** con Framer Motion
- **Tema coherente** alineado con la identidad de Ally360
- **Accesibilidad** con aria-labels y navegación por teclado
- **Optimización de rendimiento** con lazy loading e imágenes optimizadas

## 📄 Secciones de la Página Principal

1. **Hero** - Presentación principal con CTAs
2. **¿Qué es Ally360?** - Introducción al producto con características clave
3. **Beneficios** - Ventajas principales del sistema
4. **Segmento Objetivo** - Sectores empresariales que atiende
5. **Comparativo** - Tabla comparativa con competidores
6. **Testimonios** - Casos de éxito reales
7. **Planes** - Precios y características de cada plan
8. **CTA Final** - Llamada a la acción para conversión

## 🚀 Desarrollo

### Requisitos Previos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 🌟 Características Destacadas

- ✅ **Responsive Design** para todos los dispositivos
- ✅ **SEO optimizado** para mejor posicionamiento
- ✅ **Animaciones suaves** que mejoran la experiencia
- ✅ **Tema coherente** con la identidad de marca
- ✅ **Componentes reutilizables** para fácil mantenimiento
- ✅ **TypeScript** para mayor robustez del código
- ✅ **Accesibilidad** conforme a estándares web

## 📱 Rutas Disponibles

- `/` - Página principal completa
- `/planes` - Planes y precios detallados
- `/blog` - Artículos y recursos empresariales
- `/servicios` - Servicios ofrecidos por Ally360
- `/contacto` - Formulario de contacto y demo

---

**Desarrollado con ❤️ para Ally360**

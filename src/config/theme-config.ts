/**
 * Theme Configuration - Ally360 Brand System
 * Centralizes all colors, gradients, and theme-related constants
 */

// Brand Colors
export const brandColors = {
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#1976d2', // Main primary
    600: '#1565c0',
    700: '#0d47a1',
    800: '#004c97',
    900: '#002171',
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    50: '#e8f5e8',
    100: '#c8e6c8',
    200: '#a5d6a5',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32', // Main secondary
    900: '#1b5e20',
    main: '#2e7d32',
    light: '#66bb6a',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  // Additional brand colors
  accent: {
    blue: '#0066CC',
    lightBlue: '#E3F2FD',
    green: '#00C851',
    orange: '#FF6900',
    red: '#FF1744',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#bdbdbd',
    hint: '#9e9e9e',
    white: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: '#ffffff',
    grey: '#f8f9fa',
    lightBlue: '#f0f8ff',
    dark: '#1a1a1a',
  },
};

// Brand Gradients
export const brandGradients = {
  primary: 'linear-gradient(135deg, #004C97 0%, #1976d2 50%, #42a5f5 100%)',
  primaryLight: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
  primaryDark: 'linear-gradient(135deg, #004C97 0%, #1565c0 100%)',
  secondary: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #4caf50 100%)',
  accent: 'linear-gradient(135deg, #0066CC 0%, #42a5f5 100%)',
  success: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)',
  hero: 'linear-gradient(135deg, #004C97 0%, #1976d2 70%, #42a5f5 100%)',
  cta: 'linear-gradient(135deg, #004C97 0%, #0066CC 100%)',
  card: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(66, 165, 245, 0.1) 100%)',
  overlay: 'linear-gradient(135deg, rgba(0, 76, 151, 0.8) 0%, rgba(25, 118, 210, 0.6) 100%)',
  // Subtle gradients for backgrounds
  subtle: {
    blue: 'linear-gradient(135deg, rgba(227, 242, 253, 0.4) 0%, rgba(240, 248, 255, 0.6) 100%)',
    grey: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
    white: 'linear-gradient(135deg, #ffffff 0%, rgba(248, 249, 250, 0.8) 100%)',
  },
};

// Animation configurations
export const animations = {
  duration: {
    short: 0.2,
    normal: 0.3,
    long: 0.6,
    extended: 1.2,
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    decelerated: 'cubic-bezier(0, 0, 0.2, 1)',
    accelerated: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// Shadow system
export const shadows = {
  card: '0 4px 12px rgba(0, 0, 0, 0.05)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.1)',
  button: '0 4px 18px rgba(0, 0, 0, 0.12)',
  buttonHover: '0 6px 16px rgba(0, 0, 0, 0.15)',
  hero: '0 20px 40px rgba(0, 76, 151, 0.15)',
  pricing: '0 8px 32px rgba(25, 118, 210, 0.15)',
};

// Border radius system
export const borderRadius = {
  small: '4px',
  medium: '8px',
  large: '12px',
  xl: '16px',
  xxl: '24px',
  round: '50%',
};

// Spacing system (complementing MUI's spacing)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  section: {
    xs: 48,
    sm: 64,
    md: 80,
    lg: 96,
  },
};

// Z-index system
export const zIndex = {
  background: -1,
  content: 1,
  overlay: 10,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  snackbar: 600,
  tooltip: 700,
};

const themeConfig = {
  brandColors,
  brandGradients,
  animations,
  shadows,
  borderRadius,
  spacing,
  zIndex,
};

export default themeConfig;

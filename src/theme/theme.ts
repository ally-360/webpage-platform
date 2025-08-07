'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import { brandColors, shadows, borderRadius } from '../config/theme-config';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Ally360 brand colors - now using centralized config
const ally360Colors = brandColors;

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontSize: '0.9rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  palette: {
    mode: 'light',
    ...ally360Colors,
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  shape: {
    borderRadius: parseInt(borderRadius.medium),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.medium,
          padding: '10px 24px',
          fontSize: '0.9rem',
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '0.02em',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: shadows.button,
          },
        },
        contained: {
          '&:hover': {
            boxShadow: shadows.buttonHover,
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.xl,
          boxShadow: shadows.card,
          '&:hover': {
            boxShadow: shadows.cardHover,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;

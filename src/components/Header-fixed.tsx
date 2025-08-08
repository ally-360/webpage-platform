'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Stack,
  useTheme,
  IconButton,
} from '@mui/material';
import { Settings } from '@mui/icons-material';
// hooks
import { useResponsive } from '@/hooks/use-responsive';
// components
import Logo from '@/components/logo';
import NavDesktop from '@/components/nav/NavDesktop';
import NavMobile from '@/components/nav/NavMobile';
// config
import { HEADER } from '@/config/layout';
import { navConfig } from '@/config/navigation';

export default function Header() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const [offsetTop, setOffsetTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffsetTop(scrollY > 20);
    };

    // Add throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Check initial scroll state after mount
    handleScroll();

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Use default styles during SSR to prevent hydration mismatch
  const isScrolled = mounted && offsetTop;
  
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
        boxShadow: isScrolled 
          ? '0px 2px 8px -2px rgba(0, 0, 0, 0.12)' 
          : 'none',
        color: 'text.primary',
        transition: mounted ? theme.transitions.create([
          'background-color', 
          'backdrop-filter', 
          'border-bottom', 
          'box-shadow'
        ], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        }) : undefined,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: isScrolled ? HEADER.H_DESKTOP_OFFSET : HEADER.H_DESKTOP,
          },
          transition: mounted ? theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }) : undefined,
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button
              component={Link}
              href="/contacto"
              variant="contained"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: 600,
                boxShadow: theme.shadows[4],
                transition: theme.transitions.create([
                  'transform', 
                  'box-shadow'
                ], {
                  duration: theme.transitions.duration.short,
                }),
                '&:hover': {
                  boxShadow: theme.shadows[8],
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Solicitar Demo
            </Button>

            {mdUp && (
              <Button
                component={Link}
                href="https://app.ally360.co"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mr: 2,
                  color: 'text.primary',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                Iniciar Sesión
              </Button>
            )}

            <IconButton
              size="small"
              sx={{
                width: 40,
                height: 40,
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <Settings fontSize="small" />
            </IconButton>

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

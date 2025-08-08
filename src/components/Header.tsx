'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
// hooks
import { useOffSetTop } from '@/hooks/use-off-set-top';
import { useResponsive } from '@/hooks/use-responsive';
import { useExternalRedirect } from '@/hooks/use-external-redirect';
// components
import Logo from '@/components/logo';
import NavDesktop from '@/components/nav/NavDesktop';
import NavMobile from '@/components/nav/NavMobile';
import { LoginButton } from '@/components/common';
// config
import { HEADER } from '@/config/layout';
import { navConfig } from '@/config/navigation';

export default function Header() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const offsetTop = useOffSetTop();
  const { requestDemo } = useExternalRedirect();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: offsetTop 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: offsetTop ? 'blur(20px)' : 'blur(10px)',
        borderBottom: offsetTop ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
        boxShadow: offsetTop 
          ? '0px 2px 8px -2px rgba(0, 0, 0, 0.12)' 
          : 'none',
        color: 'text.primary',
        transition: theme.transitions.create([
          'background-color', 
          'backdrop-filter', 
          'border-bottom', 
          'box-shadow'
        ], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        }),
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: offsetTop ? HEADER.H_DESKTOP_OFFSET : HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button
              onClick={() => requestDemo()}
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

            {mdUp && <LoginButton />}

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

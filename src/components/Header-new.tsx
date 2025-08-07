'use client';

import React from 'react';
import Link from 'next/link';
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
// components
import Logo from '@/components/logo';
import NavDesktop from '@/components/nav/NavDesktop';
import NavMobile from '@/components/nav/NavMobile';
import { HeaderShadow, LoginButton, SettingsButton } from '@/components/common';
// config
import { HEADER } from '@/config/layout';
import { navConfig } from '@/config/navigation';

export default function Header() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const offsetTop = useOffSetTop();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: offsetTop ? 'rgba(255, 255, 255, 0.9)' : 'background.paper',
        backdropFilter: offsetTop ? 'blur(20px)' : 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        boxShadow: offsetTop ? theme.shadows[8] : 'none',
        color: 'text.primary',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
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
                '&:hover': {
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              Solicitar Demo
            </Button>

            {mdUp && <LoginButton />}

            <SettingsButton />

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}

'use client';

import React from 'react';
import { Box } from '@mui/material';

interface HeaderShadowProps {
  sx?: object;
}

export function HeaderShadow({ sx }: HeaderShadowProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        opacity: 0.48,
        borderRadius: '0 0 24px 24px',
        position: 'absolute',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100%)',
        ...sx,
      }}
    />
  );
}

export function LoginButton() {
  return null; // Por ahora no necesitamos login en el sitio promocional
}

export function SettingsButton() {
  return null; // Por ahora no necesitamos settings en el sitio promocional
}

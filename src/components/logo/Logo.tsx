'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Link as MuiLink } from '@mui/material';

interface LogoProps {
  disabledLink?: boolean;
  sx?: object;
}

const Logo = ({ disabledLink = false, sx }: LogoProps) => {
  const logo = (
    <Box
      component="img"
      src="/logo/logoFondoTransparentesvg.svg"
      alt="Ally360 Logo"
      sx={{ width: 190, height: 52, cursor: 'pointer', ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <MuiLink component={Link} href="/" sx={{ display: 'contents' }}>
      {logo}
    </MuiLink>
  );
};

export default Logo;

'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Link as MuiLink } from '@mui/material';

interface LogoProps {
  disabledLink?: boolean;
  sx?: object;
}

const Logo = memo(({ disabledLink = false, sx }: LogoProps) => {
  const logo = (
    <Box
      sx={{ 
        width: { xs: 140, sm: 170, md: 190 },
        height: { xs: 38, sm: 46, md: 52 },
        cursor: 'pointer',
        position: 'relative',
        flexShrink: 0,
        ...sx 
      }}
    >
      <Image
        src="/logo/logo-ally360-transparente.png"
        alt="Ally360 Logo"
        fill
        unoptimized
        sizes="(max-width: 600px) 140px, (max-width: 900px) 170px, 190px"
        priority={true}
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <MuiLink 
      component={Link} 
      href="/" 
      sx={{ 
        display: 'contents',
        '&:hover': {
          opacity: 0.8,
          transition: 'opacity 0.2s ease'
        }
      }}
      prefetch={false}
    >
      {logo}
    </MuiLink>
  );
});

Logo.displayName = 'Logo';

export default Logo;

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
        width: 190, 
        height: 52, 
        cursor: 'pointer',
        position: 'relative',
        ...sx 
      }}
    >
      <Image
        src="/logo/logoFondoTransparentesvg.svg"
        alt="Ally360 Logo"
        fill
        sizes="190px"
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

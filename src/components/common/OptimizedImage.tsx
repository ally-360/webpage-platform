'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sx?: object;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '100vw',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sx,
  loading = 'lazy',
  objectFit = 'cover',
  ...props
}: OptimizedImageProps) => {
  const imageProps = {
    src,
    alt,
    quality,
    priority,
    placeholder,
    ...(blurDataURL && { blurDataURL }),
    loading: priority ? 'eager' as const : loading,
    style: {
      objectFit,
    },
    ...props,
  };

  if (fill) {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <Image
        {...imageProps}
        fill
        sizes={sizes}
        alt={alt}
      />
    </Box>
  );
  }

  return (
    <Box sx={sx}>
      <Image
        {...imageProps}
        width={width}
        height={height}
        sizes={sizes}
        alt={alt}
      />
    </Box>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

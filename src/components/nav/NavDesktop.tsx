'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Stack, Button } from '@mui/material';

interface NavDesktopProps {
  offsetTop: boolean;
  data: Array<{
    title: string;
    path: string;
  }>;
}

export default function NavDesktop({ data }: NavDesktopProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <Stack
      component="nav"
      direction="row"
      spacing={3}
      sx={{
        mr: 3,
        height: 1,
      }}
    >
      {data.map((link) => (
        <Button
          key={link.title}
          component={Link}
          href={link.path}
          variant="text"
          sx={{
            color: isActive(link.path) ? 'primary.main' : 'text.primary',
            fontWeight: isActive(link.path) ? 600 : 500,
            boxShadow: 'none',
            fontSize: '0.95rem',
            position: 'relative',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
            ...(isActive(link.path) && {
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 15,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: 2,
                backgroundColor: 'primary.main',
                borderRadius: 1,
                transition: 'all 0.3s ease-in-out',
              },
            }),
          }}
        >
          {link.title}
        </Button>
      ))}
    </Stack>
  );
}

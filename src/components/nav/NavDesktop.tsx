'use client';

import React from 'react';
import Link from 'next/link';
import { Stack, Button } from '@mui/material';

interface NavDesktopProps {
  offsetTop: boolean;
  data: Array<{
    title: string;
    path: string;
  }>;
}

export default function NavDesktop({ data }: NavDesktopProps) {
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
            color: 'text.primary',
            fontWeight: 500,
            fontSize: '0.95rem',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'transparent',
            },
          }}
        >
          {link.title}
        </Button>
      ))}
    </Stack>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface NavMobileProps {
  offsetTop: boolean;
  data: Array<{
    title: string;
    path: string;
  }>;
}

export default function NavMobile({ data }: NavMobileProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ color: 'text.primary' }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        anchor="right"
        PaperProps={{
          sx: {
            width: 280,
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {data.map((link) => (
            <ListItem key={link.title} disablePadding>
              <Button
                component={Link}
                href={link.path}
                onClick={handleClose}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.5,
                  px: 2,
                }}
              >
                <ListItemText primary={link.title} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

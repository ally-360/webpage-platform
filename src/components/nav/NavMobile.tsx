'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  onRequestDemo?: () => void; // Nueva prop para manejar el botón demo
}

export default function NavMobile({ data, onRequestDemo }: NavMobileProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <IconButton 
        onClick={handleOpen} 
        sx={{ 
          color: 'text.primary',
          p: 1.5, // Más padding para mejor área de toque
          ml: 1, // Margin left para separar del contenido
        }}
      >
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
                  color: isActive(link.path) ? 'primary.main' : 'text.primary',
                  fontWeight: isActive(link.path) ? 600 : 500,
                  backgroundColor: isActive(link.path) ? 'primary.lighter' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'primary.lighter',
                    color: 'primary.main',
                  },
                }}
              >
                <ListItemText primary={link.title} />
              </Button>
            </ListItem>
          ))}
          
          <Box sx={{ my: 2, borderTop: '1px solid', borderColor: 'divider' }} />
          
          <ListItem disablePadding>
            <Button
              onClick={() => {
                onRequestDemo?.();
                handleClose();
              }}
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                px: 2,
                borderRadius: 2,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Solicitar Demo
            </Button>
          </ListItem>
          
          {/* Botón Iniciar Sesión en móvil */}
          <ListItem disablePadding>
            <Button
              href="#" // TODO: Agregar URL de login
              fullWidth
              variant="outlined"
              sx={{
                py: 1.5,
                px: 2,
                borderRadius: 2,
                fontWeight: 500,
              }}
            >
              Iniciar Sesión
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

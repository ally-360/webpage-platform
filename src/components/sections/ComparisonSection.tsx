'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Check as CheckIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const comparisonData = [
  {
    feature: 'Facturación Electrónica',
    ally360: true,
    traditional: false,
    excel: false,
  },
  {
    feature: 'Gestión de Inventario en Tiempo Real',
    ally360: true,
    traditional: true,
    excel: false,
  },
  {
    feature: 'Reportes Automáticos',
    ally360: true,
    traditional: false,
    excel: false,
  },
  {
    feature: 'Acceso desde Cualquier Dispositivo',
    ally360: true,
    traditional: false,
    excel: false,
  },
  {
    feature: 'Respaldo Automático en la Nube',
    ally360: true,
    traditional: false,
    excel: false,
  },
  {
    feature: 'Soporte Técnico Especializado',
    ally360: true,
    traditional: true,
    excel: false,
  },
  {
    feature: 'Integración con Bancos',
    ally360: true,
    traditional: false,
    excel: false,
  },
  {
    feature: 'Gestión de Múltiples Usuarios',
    ally360: true,
    traditional: true,
    excel: false,
  },
  {
    feature: 'Actualizaciones Automáticas',
    ally360: true,
    traditional: false,
    excel: false,
  },
  {
    feature: 'Costo Mensual Bajo',
    ally360: true,
    traditional: false,
    excel: true,
  },
];

export default function ComparisonSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const renderIcon = (hasFeature: boolean) => {
    return hasFeature ? (
      <CheckIcon sx={{ color: 'success.main', fontSize: '1.5rem' }} />
    ) : (
      <CloseIcon sx={{ color: 'error.main', fontSize: '1.5rem' }} />
    );
  };

  return (
    <Box
      component="section"
      id="comparativo"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              ¿Por qué elegir Ally360?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Compara las ventajas de Ally360 frente a sistemas tradicionales y hojas de cálculo.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Table sx={{ minWidth: isMobile ? 300 : 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell
                    sx={{
                      color: 'primary.contrastText',
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      py: 3,
                    }}
                  >
                    Funcionalidad
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'primary.contrastText',
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      py: 3,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      Ally360
                      <Chip
                        label="Recomendado"
                        size="small"
                        sx={{
                          bgcolor: 'success.main',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'primary.contrastText',
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      py: 3,
                    }}
                  >
                    ERP Tradicional
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'primary.contrastText',
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      py: 3,
                    }}
                  >
                    Hojas de Cálculo
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:nth-of-type(odd)': {
                        bgcolor: 'background.default',
                      },
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        py: 2,
                      }}
                    >
                      {row.feature}
                    </TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>
                      {renderIcon(row.ally360)}
                    </TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>
                      {renderIcon(row.traditional)}
                    </TableCell>
                    <TableCell align="center" sx={{ py: 2 }}>
                      {renderIcon(row.excel)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box textAlign="center" mt={8}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '0.875rem', md: '1rem' },
                lineHeight: 1.6,
              }}
            >
              Con Ally360, no solo obtienes un software, sino un <strong>aliado estratégico</strong> 
              que crece junto con tu negocio y te ayuda a tomar mejores decisiones.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Servicios - Ally360',
  description: 'Descubre todos los servicios que ofrecemos: implementación, capacitación, soporte técnico y más.',
};

export default function ServiciosPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          Servicios
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Página en construcción - Próximamente información detallada de servicios
        </Typography>
      </Box>
    </Container>
  );
}

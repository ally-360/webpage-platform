import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Planes y Precios - Ally360',
  description: 'Conoce todos nuestros planes y elige el que mejor se adapte a tu negocio. Prueba gratuita incluida.',
};

export default function PlanesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          Planes y Precios
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Página en construcción - Próximamente contenido detallado de planes
        </Typography>
      </Box>
    </Container>
  );
}

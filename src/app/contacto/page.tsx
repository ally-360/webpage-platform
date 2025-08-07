import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Contacto - Ally360',
  description: 'Ponte en contacto con nosotros. Solicita una demo, cotización o resuelve tus dudas.',
};

export default function ContactoPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Página en construcción - Próximamente formulario de contacto y información
        </Typography>
      </Box>
    </Container>
  );
}

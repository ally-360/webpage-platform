import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Blog - Ally360',
  description: 'Consejos, guías y noticias sobre gestión empresarial para PYMEs colombianas.',
};

export default function BlogPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Página en construcción - Próximamente artículos sobre gestión empresarial
        </Typography>
      </Box>
    </Container>
  );
}

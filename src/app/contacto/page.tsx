import { Metadata } from 'next';
import ContactoPage from './ContactoPage';

export const metadata: Metadata = {
  title: 'Contáctanos - Ally360 ERP en la nube para PYMEs',
  description: '¿Tienes preguntas o quieres una demo? Estamos para ti 24/7. Nuestro equipo está listo para ponerse la 10 por tu negocio. Contáctanos por WhatsApp, teléfono o formulario.',
  keywords: 'contacto Ally360, soporte ERP, demo Ally360, WhatsApp empresarial, soporte 24/7',
  openGraph: {
    title: 'Contáctanos - Ally360 ERP',
    description: 'Soporte 24/7 personalizado para tu PYME. ¡Estamos para ponerte la 10!',
    type: 'website',
  },
};

export default function Page() {
  return <ContactoPage />;
}

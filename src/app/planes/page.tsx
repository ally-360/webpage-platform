import { Metadata } from 'next';
import PlanesPage from './PlanesPage';

export const metadata: Metadata = {
  title: 'Planes y Precios | Ally360 - ERP en la Nube para PYMEs',
  description: 'Descubre los planes de Ally360 diseñados para cada etapa de tu negocio. Desde emprendedores hasta empresas medianas. Facturación electrónica DIAN incluida.',
  keywords: 'planes ally360, precios erp colombia, software pymes, facturación electrónica, planes empresariales',
  openGraph: {
    title: 'Planes y Precios | Ally360',
    description: 'Planes diseñados para cada etapa de tu negocio. Facturación electrónica DIAN y soporte incluido.',
    type: 'website',
  },
};

export default function Page() {
  return <PlanesPage />;
}

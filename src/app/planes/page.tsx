import { Metadata } from 'next';
import PlanesPage from './PlanesPage';

export const metadata: Metadata = {
  title: 'Planes de Ally360 | ERP para PYMEs',
  description: 'Compara planes y precios de Ally360: ideal para PYMEs colombianas con facturación, inventario y finanzas.',
  keywords: 'planes ally360, precios erp colombia, software pymes, facturación electrónica, planes empresariales',
  openGraph: {
    title: 'Planes de Ally360 | ERP para PYMEs',
    description: 'Compara planes y precios de Ally360: ideal para PYMEs colombianas con facturación, inventario y finanzas.',
    type: 'website',
  },
};

export default function Page() {
  return <PlanesPage />;
}

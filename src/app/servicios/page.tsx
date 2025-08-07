import { Metadata } from 'next';
import ServiciosPage from './ServiciosPage';

export const metadata: Metadata = {
  title: 'Servicios Ally360 - ERP Colombia | Gestión Empresarial Completa',
  description: 'Descubre todos los servicios de Ally360: facturación electrónica DIAN, inventario, ventas, compras, reportes y más. ERP completo para PYMEs colombianas.',
  keywords: 'servicios ally360, erp colombia, facturación electrónica dian, inventario, ventas, pos, reportes empresariales',
  openGraph: {
    title: 'Servicios Ally360 - ERP Colombia',
    description: 'Todos los servicios que tu empresa necesita en una sola plataforma. Facturación DIAN, inventario, ventas y más.',
    type: 'website',
  },
};

export default function Page() {
  return <ServiciosPage />;
}

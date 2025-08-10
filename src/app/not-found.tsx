import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Página no encontrada</h1>
      <p style={{ marginBottom: 24 }}>
        La página que intentas visitar no existe o fue movida.
      </p>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}

import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import Head from "next/head";
const kalam = Kalam({  weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aires de Pausa",
  description: "Es un espacio de bienestar donde inspiro a las personas a que tomen conciencia para que descubran su poder interior y conecten con su escencia",
  icons: {
    icon: '/hfondovioleta.png',
    shortcut: '/hfondovioleta.png',
    apple: '/hfondovioleta.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" href="/hfondovioleta.png" /> {/* Ruta a tu imagen favicon */}
          <title>Aires de Pausa</title> {/* Título de la pestaña del navegador */}
          <meta name="description" content="Es un espacio de bienestar donde inspiro a las personas a que tomen conciencia para que descubran su poder interior y conecten con su esencia" /> {/* Descripción para SEO */}
        </head>
      <body className={kalam.className}>{children}</body>
    </html>
  );
}

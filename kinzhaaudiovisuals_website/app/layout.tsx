import type { Metadata } from "next";
import { inter, barlow, space } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinzha Audiovisuals",
  description: "Estudio audiovisual y de videojuegos latinoamericano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { inter, barlow, space } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinzha Audiovisuals",
  description: "Estudio audiovisual y de videojuegos latinoamericano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable} ${space.variable}`}>
      <body>
        <div className="site-gradient flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
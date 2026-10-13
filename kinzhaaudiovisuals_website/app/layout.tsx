import type { Metadata } from "next";
import { Space_Grotesk, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinzha Audiovisuals",
  description: "Estudio audiovisual y de desarrollo de videojuegos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${barlowCondensed.variable}`}>
      <body className="bg-kinzha-dark text-kinzha-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import type { ReactNode } from "react";
import PasarelaHeader from "@/components/checkout/PasarelaHeader";

export const metadata: Metadata = {
  title: "Pasarela de pagos | Kinzha Audiovisuals",
  robots: { index: false },
};

export default function PasarelaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-black">
      <p role="note" className="bg-black px-4 py-2 text-center text-xs text-paper">
        Entorno de demostración: no se realiza ningún cobro. No ingreses datos reales.
      </p>
      <PasarelaHeader />
      <main className="mx-auto max-w-[1280px] px-6 py-10 md:px-10">{children}</main>
    </div>
  );
}
import type { Metadata } from "next";
import { cadenceTypewriter } from "@/lib/fonts-cadence";
import { BackStamp } from "@/components/projects/cadence/BackStamp";
import { CadenceExperience } from "@/components/projects/cadence/CadenceExperience";

export const metadata: Metadata = {
  title: "Cadence of Shadows — Kinzha Audiovisuals",
  description:
    "Animación 3D de cine negro ambientada en la Colombia de los años 70. Expediente del proyecto: guion, personajes y escenarios.",
};

export default function CadenceOfShadowsPage() {
  return (
    <main
      className={`${cadenceTypewriter.variable} relative min-h-svh bg-black font-typewriter text-white`}
    >
      <BackStamp />
      <CadenceExperience />
    </main>
  );
}
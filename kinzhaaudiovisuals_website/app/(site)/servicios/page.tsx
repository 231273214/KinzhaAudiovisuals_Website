import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageTitle from "@/components/ui/PageTitle";
import SectionIntro from "@/components/ui/SectionIntro";
import ServicesIntro from "@/components/sections/servicios/ServicesIntro";
import ServicesShowcase from "@/components/sections/servicios/ServicesShowcase";
import TeamShowcase from "@/components/sections/equipo/TeamShowcase";

export const metadata: Metadata = {
  title: "Servicios | Kinzha Audiovisuals",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-20">
        <Container>
          <PageTitle />
        </Container>
      </section>
      <ServicesIntro />
      <ServicesShowcase />

      <div id="equipo" className="scroll-mt-24">
        <SectionIntro title="TU EQUIPO DE CONFIANZA">
          Desde la ilustración y el arte conceptual hasta el desarrollo en motores de tiempo real y
          programación full-stack, reunimos las áreas clave para ejecutar tu proyecto de inicio a
          fin.
        </SectionIntro>

        <TeamShowcase />
      </div>
    </>
  );
}
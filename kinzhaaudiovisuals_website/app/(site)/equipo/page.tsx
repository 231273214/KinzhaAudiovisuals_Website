import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageTitle from "@/components/ui/PageTitle";
import SectionIntro from "@/components/ui/SectionIntro";
import TeamShowcase from "@/components/sections/equipo/TeamShowcase";

export const metadata: Metadata = {
  title: "Equipo | Kinzha Audiovisuals",
};

export default function EquipoPage() {
  return (
    <>
      <section className="pt-12">
        <Container>
          <PageTitle />
        </Container>
      </section>

      <SectionIntro title="TU EQUIPO DE CONFIANZA">
        Desde la ilustración y el arte conceptual hasta el desarrollo en motores de tiempo real y
        programación full-stack, reunimos las áreas clave para ejecutar tu proyecto de inicio a
        fin.
      </SectionIntro>

      <TeamShowcase />
    </>
  );
}
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageTitle from "@/components/ui/PageTitle";
import ServicesIntro from "@/components/sections/servicios/ServicesIntro";
import ServicesShowcase from "@/components/sections/servicios/ServicesShowcase";

export const metadata: Metadata = {
  title: "Servicios | Kinzha Audiovisuals",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-12">
        <Container>
          <PageTitle />
        </Container>
      </section>
      <ServicesIntro />
      <ServicesShowcase />
    </>
  );
}
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageTitle from "@/components/ui/PageTitle";
import ProjectsSection from "@/components/sections/productos/ProjectsSection";
import MerchSection from "@/components/sections/productos/MerchSection";

export const metadata: Metadata = {
  title: "Productos | Kinzha Audiovisuals",
};

export default function ProductosPage() {
  return (
    <>
      <section className="pt-12">
        <Container>
          <PageTitle />
        </Container>
      </section>
      <ProjectsSection />
      <MerchSection />
    </>
  );
}
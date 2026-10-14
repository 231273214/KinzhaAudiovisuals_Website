import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Vision() {
  return (
    <section>
      <Container className="pb-32 pt-24">
        <SectionHeading>NUESTRA VISIÓN</SectionHeading>
        <p className="max-w-[560px] text-sm leading-relaxed">
          Ser una empresa líder en el desarrollo audiovisual, reconocida por su excelencia creativa
          y técnica, que impulse y proyecte el talento latinoamericano hacia escenarios globales
        </p>
      </Container>
    </section>
  );
}
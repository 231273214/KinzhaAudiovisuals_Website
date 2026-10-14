import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section>
      <Container className="flex flex-col items-end py-16 text-right">
        <SectionHeading>¿QUE ES KINZHA AUDIOVISUALS?</SectionHeading>
        <p className="max-w-[540px] text-sm leading-relaxed">
          Kinzha Audiovisuals es un estudio de 4 personas los cuales se enfocan en el desarrollo
          audiovisual. Nacemos de la necesidad de romper con la narrativa convencional y proponer
          un lenguaje visual que trascienda fronteras. Desde la concepción de la idea hasta el
          corte final, combinamos técnica, estética y narrativa para dar vida a proyectos que
          impacten la industria global.
        </p>
      </Container>
    </section>
  );
}
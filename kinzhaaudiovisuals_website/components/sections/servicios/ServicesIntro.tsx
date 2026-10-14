import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesIntro() {
  return (
    <section>
      <Container className="flex flex-col items-center py-24 text-center">
        <SectionHeading>HACEMOS REALIDAD TU IDEA, DISEÑO O PRODUCTO</SectionHeading>
        <p className="mt-5 max-w-[760px] text-sm leading-relaxed">
          En Kinzha transformamos conceptos abstractos en piezas audiovisuales, entornos
          interactivos y experiencias digitales de alto impacto. Combinamos el arte 2D y 3D, el
          desarrollo en motores en tiempo real como Unreal y Unity, y la programación full-stack
          para llevar tu visión desde el primer boceto hasta una producción memorable y lista para
          el mercado.
        </p>
      </Container>
    </section>
  );
}
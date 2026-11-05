import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesIntro() {
  return (
    <section>
      <Container className="flex flex-col items-center pb-24 pt-16 text-center lg:pt-24">
        <SectionHeading className="mb-6">HACEMOS REALIDAD TU IDEA, DISEÑO O PRODUCTO</SectionHeading>
        <p className="max-w-[760px] text-sm leading-relaxed lg:text-base">
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
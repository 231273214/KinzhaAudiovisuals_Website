import Image from "next/image";
import Container from "@/components/ui/Container";
import PageTitle from "@/components/ui/PageTitle";

export default function Hero() {
  return (
    <section className="pb-24 pt-12">
      <Container>
        <PageTitle />

        <div className="relative mt-16 flex flex-col items-center">
          <div className="relative aspect-square w-[clamp(260px,52vw,520px)] overflow-hidden rounded-full bg-brand-red-dark bg-[url('/images/fondo-rojo.png')] bg-cover bg-center shadow-[0_6px_0_rgba(255,255,255,0.15)]">
            <Image
              src="/images/logo_kinsha.png"
              alt="Lagarto de Kinzha Audiovisuals"
              fill
              priority
              sizes="(min-width: 1000px) 520px, 52vw"
              className="object-cover"
            />
          </div>

          <p className="mt-6 max-w-[190px] text-center text-xs leading-snug md:absolute md:bottom-[18%] md:left-0 md:mt-0 md:text-left">
            Enfocados en crear experiencias audio visuales para la vida, no para el momento.
          </p>
        </div>
      </Container>
    </section>
  );
}
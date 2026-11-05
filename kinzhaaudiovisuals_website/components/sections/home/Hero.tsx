import Image from "next/image";
import Container from "@/components/ui/Container";

const LOGO_SRC = "/images/logo_kinzha.png";

export default function Hero() {
  return (
    <section className="pb-20 pt-10 lg:pb-28 lg:pt-16">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center lg:grid lg:grid-cols-2 lg:gap-8 lg:text-left">
          <h1 className="font-brand text-[clamp(3rem,12vw,10rem)] leading-[0.95]">
            Kinzha
            <br />
            audiovisuals
          </h1>

          <div className="relative aspect-square w-[min(78vw,380px)] max-lg:order-first lg:ml-auto lg:w-[clamp(340px,40vw,600px)]">
            <Image
              src={LOGO_SRC}
              alt="Logo de Kinzha Audiovisuals: una K roja con un lagarto"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 78vw"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
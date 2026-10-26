import NewsPhoto from "@/components/projects/wiretap/NewsPhoto";
import { WIRETAP } from "@/lib/data/wiretap";

export default function LeadStory() {
  return (
    <article className="mt-6">
      <h2 className="text-[clamp(1.1rem,3.2vw,1.45rem)] font-bold uppercase leading-tight">
        ¡Magnicidio en la capital! Asesinan al candidato Rafael Urrutia en su apartamento
      </h2>

      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_40.5%] md:gap-x-[9.5%] md:pr-[7%]">
        <div>
          <h3 className="text-center text-[15px] font-bold italic">
            Expediente abierto: el caso del saxofonista
          </h3>
          <p className="mt-2 text-[15px] leading-snug">
            Un disparo preciso y un silencio cómplice sacuden la campaña presidencial de 1974.
          </p>
          <p className="news-text mt-3">
            <strong>BOGOTÁ —</strong> En una fría noche de octubre, el líder político Rafael
            Urrutia fue hallado sin vida en su residencia del centro histórico. Las autoridades
            confirman que la causa fue un impacto de bala de extrema precisión. Lo más inquietante
            para la opinión pública es que ningún vecino escuchó absolutamente nada. No hubo
            gritos, no hubo forcejeos, las cerraduras están intactas.
          </p>
        </div>

        <NewsPhoto
          src={WIRETAP.images.building}
          alt="Edificio de apartamentos de Rafael Urrutia en el centro de Bogotá"
          caption="El edificio de apartamentos de Rafael Urrutia en el centro de Bogotá."
          aspect="aspect-[327/182]"
          sizes="(min-width: 768px) 330px, 100vw"
          priority
        />
      </div>
    </article>
  );
}
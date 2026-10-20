import Image from "next/image";
import NewsPhoto from "@/components/projects/wiretap/NewsPhoto";
import { WIRETAP } from "@/lib/data/wiretap";

export default function WritersRow() {
  return (
    <section className="mt-4 grid gap-6 md:grid-cols-[1.14fr_1fr] md:gap-3">
      <div className="relative border-t-2 border-black pt-2.5">
        <Image
          src={WIRETAP.images.bulb}
          alt=""
          width={40}
          height={60}
          aria-hidden="true"
          className="absolute left-1 top-2.5 hidden h-auto w-9 mix-blend-multiply md:block"
        />

        <NewsPhoto
          src={WIRETAP.images.chroniclers}
          alt="Los cronistas Axel Camilo Prieto y Sergio Rangel"
          caption="Cronistas Axel Camilo Prieto y Sergio Rangel."
          aspect="aspect-square"
          sizes="150px"
          circle
          className="mx-auto w-[210px] md:ml-auto md:mr-0 md:w-[45%]"
          mediaClassName="mx-auto w-[74%]"
        />

        <Image
          src={WIRETAP.images.compass}
          alt=""
          width={60}
          height={60}
          aria-hidden="true"
          className="absolute bottom-2 left-[35%] hidden h-auto w-11 mix-blend-multiply md:block"
        />
      </div>

      <aside className="border-[1.5px] border-black p-4">
        <h2 className="text-[15px] font-bold uppercase italic leading-snug">
          Plumas en la sombra: detrás de los micrófonos de Wiretap
        </h2>
        <div className="news-text mt-3 space-y-2">
          {WIRETAP.writers.map((w) => (
            <p key={w.name}>
              <strong>
                {w.name} ({w.role}):
              </strong>{" "}
              {w.bio}
            </p>
          ))}
        </div>
      </aside>
    </section>
  );
}
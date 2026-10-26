import Compass from "@/components/projects/wiretap/Compass";
import LightBulb from "@/components/projects/wiretap/LightBulb";
import PodcastDisc from "@/components/projects/wiretap/PodcastDisc";
import { WIRETAP } from "@/lib/data/wiretap";

export default function WritersRow() {
  return (
    <section className="mt-4 grid gap-6 md:grid-cols-[1.14fr_1fr] md:gap-3">
      <div className="relative border-t-2 border-black pt-2.5">
        <LightBulb
          src={WIRETAP.images.bulb}
          className="absolute left-1 top-2.5 hidden w-9 md:block"
        />

        <PodcastDisc
          photo={WIRETAP.images.chroniclers}
          alt="Los cronistas Axel Camilo Prieto y Sergio Rangel"
          caption="Cronistas Axel Camilo Prieto y Sergio Rangel."
          audio={WIRETAP.podcast.audio}
          audioTitle={WIRETAP.podcast.title}
          className="mx-auto w-[210px] md:ml-auto md:mr-0 md:w-[45%]"
          mediaClassName="mx-auto w-[74%]"
        />

        <Compass
          src={WIRETAP.images.compass}
          className="absolute bottom-2 left-[35%] hidden w-11 md:block"
        />
      </div>

      <aside className="border-[1.5px] border-black p-4">
        <h2 className="text-[15px] font-bold uppercase italic leading-snug">
          <span className="marker-underline">
            Plumas en la sombra: detrás de los micrófonos de Wiretap
          </span>
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
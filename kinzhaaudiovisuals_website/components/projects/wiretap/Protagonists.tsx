import NewsPhoto from "@/components/projects/wiretap/NewsPhoto";
import { WIRETAP } from "@/lib/data/wiretap";

export default function Protagonists() {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-[170px_1fr] md:gap-8">
      <NewsPhoto
        src={WIRETAP.images.saxophonist}
        alt="Esteban Salcedo tocando el saxofón"
        caption="Esteban Salcedo tocando su melancólico solo."
        aspect="aspect-[147/155]"
        sizes="170px"
        className="md:pt-3"
        tilt
      />

      <div className="border-t-2 border-black pt-3">
        <h2 className="text-center text-[15px] font-bold uppercase italic">
          <span className="marker-underline">
            Los protagonistas de una tragedia en clave de sol
          </span>
        </h2>
        <div className="news-text mt-3 space-y-4">
          {WIRETAP.characters.map((c) => (
            <p key={c.name}>
              <strong>
                {c.title} ({c.name}):
              </strong>{" "}
              {c.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
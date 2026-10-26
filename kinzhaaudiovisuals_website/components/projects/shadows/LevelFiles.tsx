import { levels } from "@/lib/data/shadows";
import LevelFolder from "./LevelFolder";

export default function LevelFiles() {
  return (
    <section
      aria-labelledby="levels-title"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#d69e2e]">
        Archivo clasificado
      </p>
      <h2
        id="levels-title"
        className="mt-3 text-4xl font-bold uppercase text-[#e2e8f0]"
      >
        Expedientes de niveles
      </h2>

      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {levels.map((level) => (
          <LevelFolder key={level.id} level={level} />
        ))}
      </ul>
    </section>
  );
}
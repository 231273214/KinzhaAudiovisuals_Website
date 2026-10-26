"use client";

import dynamic from "next/dynamic";
import { useState, useSyncExternalStore } from "react";
import Container from "@/components/ui/Container";
import { useInView } from "@/hooks/useInView";
import { clues3d } from "@/lib/data/shadows";
import ClueFallback from "./ClueFallback";

// three.js solo se descarga en el cliente
const ClueScene = dynamic(() => import("./ClueScene"), { ssr: false });

let cached: boolean | undefined;
function detectWebGL() {
  if (cached !== undefined) return cached;
  try {
    const canvas = document.createElement("canvas");
    cached = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    cached = false;
  }
  return cached;
}
const noSubscribe = () => () => {};

export default function ClueAnalyzer() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);
  const [selectedId, setSelectedId] = useState(clues3d[0]?.id ?? "");
  // null en servidor / hidratación, boolean ya en el cliente
  const webgl = useSyncExternalStore<boolean | null>(noSubscribe, detectWebGL, () => null);

  const clue = clues3d.find((c) => c.id === selectedId) ?? clues3d[0];
  if (!clue) return null;

  return (
    <section aria-labelledby="clue-title" className="py-24">
      <Container>
        <h2 className="font-typewriter text-xs uppercase tracking-[0.4em] text-amber-glow">
          Laboratorio
        </h2>
        <p
          id="clue-title"
          className="mt-3 font-display text-4xl font-bold uppercase text-noir-paper"
        >
          Analizador de pistas
        </p>

        {clues3d.length > 1 && (
          <ul aria-label="Pistas disponibles" className="mt-6 flex flex-wrap gap-2">
            {clues3d.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  aria-pressed={c.id === clue.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`border px-3 py-2 font-typewriter text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    c.id === clue.id
                      ? "border-brand-red bg-brand-red text-white"
                      : "border-white/15 bg-black/40 text-noir-muted hover:border-brand-red hover:text-noir-paper"
                  }`}
                >
                  {c.code} · {c.title}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div
            ref={ref}
            role="img"
            aria-label={`Modelo 3D de la pista: ${clue.title}. Arrastra para girarlo.`}
            className="relative h-[320px] cursor-grab overflow-hidden border border-white/10 bg-noir-card active:cursor-grabbing lg:h-[420px]"
          >
            {webgl === true && <ClueScene clue={clue} active={inView} />}
            {webgl === false && <ClueFallback clue={clue} />}
            <div
              aria-hidden="true"
              className="noir-vignette pointer-events-none absolute inset-0"
            />
          </div>

          <div className="self-center" aria-live="polite">
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-brand-red">
              {clue.code} · {clue.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase text-noir-paper">
              {clue.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-noir-muted">
              {clue.description}
            </p>
            <p className="mt-6 font-typewriter text-xs uppercase tracking-widest text-amber-glow">
              Arrastra para inspeccionar
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
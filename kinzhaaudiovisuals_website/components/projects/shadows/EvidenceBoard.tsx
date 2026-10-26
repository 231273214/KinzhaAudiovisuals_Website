"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import {
  evidence,
  type EvidenceItem,
  type EvidenceType,
} from "@/lib/data/shadows";
import DarkroomLightbox from "./DarkroomLightbox";
import EvidenceCard from "./EvidenceCard";
import RedThreads from "./RedThreads";

const noStep = () => {};

const TYPE_LABEL: Record<EvidenceType, string> = {
  physical: "Prueba física",
  testimonial: "Testimonio",
  documentary: "Documental",
};

export default function EvidenceBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewing, setViewing] = useState<EvidenceItem | null>(null);

  const closeViewer = useCallback(() => setViewing(null), []);

  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const active = evidence.find((e) => e.id === activeId);

  return (
    <section aria-labelledby="board-title" className="py-24">
      <Container>
        <h2
          id="board-title"
          className="font-typewriter text-xs uppercase tracking-[0.4em] text-amber-glow"
        >
          Caso abierto
        </h2>
        <p className="mt-3 font-display text-4xl font-bold uppercase text-noir-paper">
          El tablero del detective
        </p>
        <p className="mt-3 max-w-2xl text-sm text-noir-muted">
          Cuatro pistas, un mismo hilo. Pasa el cursor sobre una evidencia (o
          enfócala con el teclado) para seguir sus conexiones.
        </p>

        <div
          ref={boardRef}
          className="relative mt-12 h-[660px] overflow-hidden rounded-sm border-[10px] border-[#2b1d12] bg-[#1c1611] shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]"
        >
          <div
            aria-hidden="true"
            className="noir-grain pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
          />
          <div
            aria-hidden="true"
            className="noir-vignette pointer-events-none absolute inset-0"
          />

          <RedThreads
            items={evidence}
            width={size.width}
            height={size.height}
            activeId={activeId}
          />

          <ul className="absolute inset-0 z-20">
            {evidence.map((item, i) => (
              <EvidenceCard
                key={item.id}
                item={item}
                index={i}
                active={activeId === item.id}
                onActivate={setActiveId}
                onOpen={setViewing}
              />
            ))}
          </ul>
        </div>

        <p
          aria-live="polite"
          className="mt-4 min-h-12 font-typewriter text-sm text-noir-muted"
        >
          {active ? (
            <>
              <span className="text-amber-glow">
                {active.id} · {TYPE_LABEL[active.type]}
              </span>{" "}
              — {active.description}
            </>
          ) : (
            "Selecciona una evidencia para ver su ficha."
          )}
        </p>
      </Container>

      <AnimatePresence>
        {viewing && (
          <DarkroomLightbox
            items={[
              {
                id: viewing.id,
                src: viewing.image,
                alt: viewing.title,
                caption: `${viewing.id} · ${viewing.location}`,
              },
            ]}
            index={0}
            onClose={closeViewer}
            onStep={noStep}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
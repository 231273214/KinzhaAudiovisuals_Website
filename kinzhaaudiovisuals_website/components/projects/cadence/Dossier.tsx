"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Book } from "./Book";
import { SPREADS, TABS } from "./spreads";

const N = SPREADS.length;

export function Dossier() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [current, setCurrent] = useState(0);

  const go = useCallback((i: number) => setCurrent(Math.min(Math.max(i, 0), N - 1)), []);

  useEffect(() => {
    if (!isDesktop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setCurrent((c) => Math.min(c + 1, N - 1));
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(c - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <section className="flex flex-col items-center gap-6 px-3 pb-16 pt-20">
        {SPREADS.flatMap((s) => [
          <div key={`${s.id}-l`} className="aspect-[550/700] w-[min(94vw,520px)] shadow-2xl">{s.left(true)}</div>,
          <div key={`${s.id}-r`} className="aspect-[550/700] w-[min(94vw,520px)] shadow-2xl">{s.right(true)}</div>,
        ])}
      </section>
    );
  }

  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-5 px-4 py-16">
      <nav aria-label="Secciones del expediente" className="flex flex-wrap justify-center gap-1">
        {TABS.map((t) => {
          const active = current >= t.from && current <= t.to;
          return (
            <button
              key={t.label}
              type="button"
              onClick={() => go(t.from)}
              aria-current={active ? "page" : undefined}
              className={`px-6 pb-2 pt-2.5 text-xs uppercase tracking-widest transition duration-200 [clip-path:polygon(7%_0,93%_0,100%_100%,0_100%)] ${
                active
                  ? "bg-dossier text-black"
                  : "bg-neutral-700 text-neutral-300 hover:-translate-y-1 hover:bg-neutral-500 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </nav>

      <div className="relative">
        <div aria-hidden className="absolute -inset-[2%] -rotate-[0.8deg] bg-neutral-600/70 shadow-2xl" />
        <div aria-hidden className="absolute -inset-[1.2%] rotate-[0.6deg] bg-neutral-500/50" />
        <Book spreads={SPREADS} current={current} onChange={go} />
      </div>

      <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-neutral-400">
        <button
          type="button"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="flex items-center gap-1 transition hover:text-white disabled:opacity-30"
        >
          <ChevronLeft className="size-4" /> Anterior
        </button>
        <span>Folio {String(current + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}</span>
        <button
          type="button"
          onClick={() => go(current + 1)}
          disabled={current === N - 1}
          className="flex items-center gap-1 transition hover:text-white disabled:opacity-30"
        >
          Siguiente <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
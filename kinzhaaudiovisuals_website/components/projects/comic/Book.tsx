"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FLIP_MS = 900;
const PEEK_MS = 350;
const EASE = "cubic-bezier(0.645, 0.045, 0.355, 1)";

type Section = { label: string; target: number };
type Props = { pages: React.ReactNode[]; sections?: Section[] };

export default function Book({ pages, sections = [] }: Props) {
  const sheets = pages.length / 2;
  const [{ turned, from }, setNav] = useState({ turned: 0, from: 0 });
  const [peek, setPeek] = useState<"next" | "prev" | null>(null);
  const startX = useRef<number | null>(null);

  const goTo = useCallback(
    (target: number) =>
      setNav((n) => {
        const t = Math.max(0, Math.min(sheets, target));
        return t === n.turned ? n : { turned: t, from: n.turned };
      }),
    [sheets],
  );

  const step = useCallback(
    (delta: number) =>
      setNav((n) => {
        const t = Math.max(0, Math.min(sheets, n.turned + delta));
        return t === n.turned ? n : { turned: t, from: n.turned };
      }),
    [sheets],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const direction = turned > from ? "next" : turned < from ? "prev" : null;
  const stagger = Math.abs(turned - from) > 3 ? 45 : 90;
  const sheetDelay = (i: number) => {
    if (direction === "next" && i >= from && i < turned) return (i - from) * stagger;
    if (direction === "prev" && i >= turned && i < from) return (from - 1 - i) * stagger;
    return 0;
  };

  const isPeeking = (i: number) =>
    (peek === "next" && i === turned && turned < sheets) ||
    (peek === "prev" && i === turned - 1 && turned > 0);

  const angle = (i: number) => {
    if (isPeeking(i)) return i < turned ? -166 : -14;
    return i < turned ? -180 : 0;
  };

  const closedAtStart = turned === 0;
  const closedAtEnd = turned === sheets;
  const shift = closedAtStart ? -25 : closedAtEnd ? 25 : 0;

  const label = closedAtStart
    ? "Portada"
    : closedAtEnd
      ? "Contraportada"
      : `Espacio ${turned} de ${sheets - 1}`;
  const activeSection = sections.filter((s) => s.target <= turned).pop()?.label;

  return (
    <section aria-label="Artbook" className="select-none">
      <div
        className="mx-auto"
        style={{ width: "min(100%, 1500px, calc((100svh - 11rem) * 16 / 9))" }}
      >
        <div
          className="relative aspect-[16/9] touch-pan-y"
          style={{
            perspective: "2600px",
            transform: `translateX(${shift}%)`,
            transition: `transform ${FLIP_MS}ms ${EASE}`,
          }}
          onPointerDown={(e) => {
            if (e.pointerType !== "mouse") startX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (startX.current === null) return;
            const dx = e.clientX - startX.current;
            startX.current = null;
            if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[3%] h-[4%] rounded-[50%] bg-black/60 blur-xl transition-all"
            style={{
              left: closedAtStart ? "52%" : closedAtEnd ? "4%" : "8%",
              width: closedAtStart || closedAtEnd ? "44%" : "84%",
              transitionDuration: `${FLIP_MS}ms`,
            }}
          />

          {Array.from({ length: sheets }, (_, i) => {
            const flipped = i < turned;
            const peeking = isPeeking(i);
            const duration = peeking ? PEEK_MS : FLIP_MS;
            const delay = peeking ? 0 : sheetDelay(i);

            return (
              <div
                key={i}
                className="absolute left-1/2 top-0 h-full w-1/2 [transform-style:preserve-3d] motion-reduce:transition-none!"
                style={{
                  transformOrigin: "left center",
                  transform: `rotateY(${angle(i)}deg)`,
                  zIndex: flipped ? i + 1 : sheets - i,
                  transition: `transform ${duration}ms ${EASE} ${delay}ms, z-index 0s linear ${
                    delay + duration / 2
                  }ms`,
                }}
              >
                <Face
                  side="front"
                  active={turned === i}
                  shade={flipped ? 0.35 : 0}
                  delay={delay}
                >
                  {pages[2 * i]}
                </Face>
                <Face
                  side="back"
                  active={turned === i + 1}
                  shade={flipped ? 0 : 0.35}
                  delay={delay}
                >
                  {pages[2 * i + 1]}
                </Face>
              </div>
            );
          })}

          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            disabled={turned === 0}
            onClick={() => step(-1)}
            onPointerEnter={(e) => e.pointerType === "mouse" && setPeek("prev")}
            onPointerLeave={() => setPeek(null)}
            className="absolute left-0 top-0 z-[999] h-full w-[3%] cursor-pointer disabled:pointer-events-none"
          />
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            disabled={turned === sheets}
            onClick={() => step(1)}
            onPointerEnter={(e) => e.pointerType === "mouse" && setPeek("next")}
            onPointerLeave={() => setPeek(null)}
            className="absolute right-0 top-0 z-[999] h-full w-[3%] cursor-pointer disabled:pointer-events-none"
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 text-white">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={turned === 0}
          className="rounded-full border border-white/30 px-5 py-1 font-comic text-xl tracking-widest transition-colors hover:border-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30"
        >
          Anterior
        </button>
        <p className="min-w-40 text-center font-comic text-xl tracking-widest">{label}</p>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={turned === sheets}
          className="rounded-full border border-white/30 px-5 py-1 font-comic text-xl tracking-widest transition-colors hover:border-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30"
        >
          Siguiente
        </button>
      </div>

      <nav aria-label="Secciones del artbook" className="mt-5 flex flex-wrap justify-center gap-2">
        {sections.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => goTo(s.target)}
            aria-current={s.label === activeSection ? "true" : undefined}
            className={`rounded-full border px-3 py-0.5 font-comic text-lg tracking-widest transition-colors ${
              s.label === activeSection
                ? "border-white bg-white text-black"
                : "border-white/25 text-white/70 hover:border-white hover:text-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </section>
  );
}

type FaceProps = {
  side: "front" | "back";
  active: boolean;
  shade: number;
  delay: number;
  children: React.ReactNode;
};

function Face({ side, active, shade, delay, children }: FaceProps) {
  return (
    <div
      data-active={active}
      inert={!active}
      className={`group/page @container absolute inset-0 overflow-hidden bg-[#fbfbf9] text-black [backface-visibility:hidden] ${
        side === "back" ? "[transform:rotateY(180deg)]" : ""
      }`}
    >
      {children}

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 w-[7%] from-black/25 to-transparent ${
          side === "front" ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l"
        }`}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black transition-opacity"
        style={{ opacity: shade, transitionDuration: `${FLIP_MS}ms`, transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}
"use client";

import HTMLFlipBook from "react-pageflip";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Page from "@/components/projects/comic/Page";

type FlipApi = {
  flipNext: () => void;
  flipPrev: () => void;
  flip: (page: number) => void;
};
type FlipHandle = { pageFlip: () => FlipApi | undefined };
type Section = { label: string; target: number };
type Props = { pages: React.ReactNode[]; sections?: Section[] };

const CENTER_CLOSED_BOOK = false;

const FLIP_PROPS = {
  width: 400, 
  height: 450,
  size: "stretch" as const,
  minWidth: 200,
  maxWidth: 1000,
  minHeight: 225,
  maxHeight: 1125,
  drawShadow: true,
  maxShadowOpacity: 0.5,
  flippingTime: 900,
  showCover: true,
  usePortrait: false,
  startPage: 0,
  startZIndex: 0,
  autoSize: true,
  mobileScrollSupport: true,
  clickEventForward: true, 
  useMouseEvents: true,
  swipeDistance: 30,
  showPageCorners: true,
  disableFlipByClick: false,
  className: "h-full w-full",
  style: {},
};

export default function Book({ pages, sections = [] }: Props) {
  const bookRef = useRef<FlipHandle | null>(null);
  const [current, setCurrent] = useState(0);
  const last = pages.length - 1;

  const sheets = useMemo(
    () =>
      pages.map((view, i) => (
        <Page
          key={i}
          hard={i === 0 || i === last}
          side={i === 0 || i === last ? "cover" : i % 2 === 0 ? "right" : "left"}
        >
          {view}
        </Page>
      )),
    [pages, last],
  );

  const onFlip = useCallback((e: { data: number }) => setCurrent(e.data), []);

  const flipNext = useCallback(() => bookRef.current?.pageFlip()?.flipNext(), []);
  const flipPrev = useCallback(() => bookRef.current?.pageFlip()?.flipPrev(), []);
  const goTo = useCallback((page: number) => bookRef.current?.pageFlip()?.flip(page), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") flipNext();
      if (e.key === "ArrowLeft") flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipNext, flipPrev]);

  const spreads = (last - 1) / 2;
  const label =
    current === 0
      ? "Portada"
      : current >= last
        ? "Contraportada"
        : `Espacio ${Math.ceil(current / 2)} de ${spreads}`;
  const activeSection = sections.filter((s) => s.target <= current).pop()?.label;
  const shift = CENTER_CLOSED_BOOK ? (current === 0 ? -25 : current >= last ? 25 : 0) : 0;

  return (
    <section aria-label="Artbook" className="select-none">
      <div
        className="mx-auto"
        style={{ width: "min(100%, 1500px, calc((100svh - 11rem) * 16 / 9))" }}
      >
        <div
          className="aspect-[16/9]"
          style={{ transform: `translateX(${shift}%)`, transition: "transform 600ms ease" }}
        >
          <HTMLFlipBook {...FLIP_PROPS} ref={bookRef} onFlip={onFlip}>
            {sheets}
          </HTMLFlipBook>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 text-white">
        <button
          type="button"
          onClick={flipPrev}
          disabled={current === 0}
          className="rounded-full border border-white/30 px-5 py-1 font-comic text-xl tracking-widest transition-colors hover:border-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30"
        >
          Anterior
        </button>
        <p className="min-w-40 text-center font-comic text-xl tracking-widest">{label}</p>
        <button
          type="button"
          onClick={flipNext}
          disabled={current >= last}
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
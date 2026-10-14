"use client";

import Image from "next/image";
import { useRef } from "react";

export type CoverflowItem = { id: string; image: string; alt: string };

type Props = {
  items: CoverflowItem[];
  active: number;
  onChange: (index: number) => void;
};

export default function Coverflow({ items, active, onChange }: Props) {
  const total = items.length;
  const half = Math.floor(total / 2);
  const startX = useRef<number | null>(null);

  const go = (dir: 1 | -1) => onChange((active + dir + total) % total);

  const getOffset = (i: number) => ((i - active + total + half) % total) - half;

  return (
    <div
      className="w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Servicios"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div
        className="relative mx-auto aspect-[4/3] w-full max-w-[560px] touch-pan-y select-none"
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
        onPointerLeave={() => {
          startX.current = null;
        }}
      >
        {items.map((item, i) => {
          const offset = getOffset(i);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          const state = isActive
            ? "z-30 border-2 border-white opacity-100"
            : isVisible
              ? "z-20 border border-white/40 opacity-60 hover:opacity-80"
              : "pointer-events-none z-10 opacity-0";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(i)}
              aria-label={item.alt}
              aria-current={isActive}
              aria-hidden={!isVisible}
              tabIndex={isVisible && !isActive ? 0 : -1}
              className={`absolute left-1/2 top-1/2 aspect-[3/5] w-[44%] overflow-hidden rounded-2xl bg-black transition-[transform,opacity] duration-500 ease-out ${state}`}
              style={{
                transform: `translate(calc(-50% + ${offset * 66}%), -50%) scale(${
                  isActive ? 1 : 0.85
                })`,
              }}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 768px) 250px, 44vw"
                className="object-cover"
                draggable={false}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`Ir a ${item.alt}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
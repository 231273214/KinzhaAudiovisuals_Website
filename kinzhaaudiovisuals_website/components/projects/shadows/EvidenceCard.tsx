"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import type { KeyboardEvent, PointerEvent } from "react";
import type { EvidenceItem } from "@/lib/data/shadows";
import Metronome from "./Metronome";

const SPRING = { stiffness: 300, damping: 22 };
const MAX_TILT = 10;

type Props = {
  item: EvidenceItem;
  index: number;
  active: boolean;
  onActivate: (id: string | null) => void;
  onOpen: (item: EvidenceItem) => void;
};

export default function EvidenceCard({ item, index, active, onActivate, onOpen }: Props) {
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), SPRING);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), SPRING);

  const baseTilt = (index % 2 === 0 ? -1 : 1) * (2 + index * 0.5);

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    px.set(0);
    py.set(0);
  }

  function handleKey(e: KeyboardEvent<HTMLElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(item);
    }
  }

  return (
    <li
      className="absolute w-[140px] -translate-x-1/2 sm:w-[190px]"
      style={{
        left: `${item.coordinates.x}%`,
        top: `${item.coordinates.y}%`,
        perspective: 800,
      }}
    >
      <motion.article
        tabIndex={0}
        aria-label={`${item.id}: ${item.title}, ${item.location}`}
        role={item.viewable ? "button" : undefined}
        aria-haspopup={item.viewable ? "dialog" : undefined}
        onClick={item.viewable ? () => onOpen(item) : undefined}
        onKeyDown={item.viewable ? handleKey : undefined}
        onPointerEnter={() => onActivate(item.id)}
        onPointerMove={handleMove}
        onPointerLeave={() => {
          reset();
          onActivate(null);
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={() => onActivate(null)}
        style={{
          rotateX,
          rotateY,
          rotateZ: baseTilt,
          transformStyle: "preserve-3d",
        }}
        animate={{ scale: active ? 1.05 : 1 }}
        transition={{ type: "spring", ...SPRING }}
        className={`relative ${
          item.viewable ? "cursor-zoom-in" : "cursor-default"
        } bg-noir-paper p-2 pb-3 text-noir-deep outline-none transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-brand-red ${
          active
            ? "shadow-[6px_10px_24px_rgba(0,0,0,0.75),0_0_22px_rgba(176,0,0,0.45)]"
            : "shadow-[6px_8px_18px_rgba(0,0,0,0.65)]"
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-red shadow-[0_2px_4px_rgba(0,0,0,0.6),inset_-2px_-2px_3px_rgba(0,0,0,0.35)]"
        />

        <div className="relative aspect-square overflow-hidden bg-noir-deep">
          {item.image ? (
            <Image
              src={item.image}
              alt=""
              fill
              sizes="190px"
              className="object-cover grayscale sepia-[.35]"
            />
          ) : item.animation === "metronome" ? (
            <Metronome />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-typewriter text-[10px] uppercase tracking-[0.3em] text-noir-muted">
              {item.id}
            </span>
          )}
        </div>

        <p className="mt-2 font-typewriter text-[10px] uppercase tracking-widest text-brand-red">
          {item.id}
        </p>
        <p className="font-typewriter text-xs leading-tight">{item.title}</p>
        <p className="font-typewriter text-[10px] uppercase tracking-wider text-noir-deep/60">
          {item.location}
        </p>
      </motion.article>
    </li>
  );
}
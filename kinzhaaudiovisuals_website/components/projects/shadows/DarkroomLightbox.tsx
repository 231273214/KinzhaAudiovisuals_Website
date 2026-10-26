"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/lib/data/shadows";
import ZoomableImage from "./ZoomableImage";

type Props = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
};

const navButton =
  "absolute top-1/2 z-10 -translate-y-1/2 border border-brand-red/70 bg-black/60 px-3 py-2 font-typewriter text-sm text-noir-paper transition-colors hover:bg-brand-red focus-visible:bg-brand-red";

export default function DarkroomLightbox({ items, index, onClose, onStep }: Props) {
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const multi = items.length > 1;

  // Foco inicial, bloqueo de scroll y devolución del foco al cerrar
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  // Teclado: Escape, flechas y foco atrapado con Tab
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (multi && e.key === "ArrowRight") return onStep(1);
      if (multi && e.key === "ArrowLeft") return onStep(-1);
      if (e.key !== "Tab" || !dialogRef.current) return;

      const els = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])"),
      );
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onStep, multi]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Visor de imagen: ${item.alt}`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.25 }}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Cerrar visor"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 border border-brand-red/70 bg-black/60 px-4 py-2 font-typewriter text-[11px] uppercase tracking-[0.3em] text-noir-paper transition-colors hover:bg-brand-red focus-visible:bg-brand-red"
      >
        Cerrar
      </button>

      {multi && (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={(e) => {
              e.stopPropagation();
              onStep(-1);
            }}
            className={`${navButton} left-3`}
          >
            ◄
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={(e) => {
              e.stopPropagation();
              onStep(1);
            }}
            className={`${navButton} right-3`}
          >
            ►
          </button>
        </>
      )}

      <figure className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[16/10] max-h-[75vh] w-full overflow-hidden border border-brand-red/40 bg-noir-card">
          {/* key por rol: stage-* para la imagen, flash-* para el overlay */}
          <ZoomableImage key={`stage-${item.id}`} item={item} index={index} />

          <motion.div
            key={`flash-${item.id}`}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-brand-red mix-blend-multiply"
            initial={{ opacity: reduce ? 0 : 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
          />
        </div>

        <figcaption className="mt-3 flex justify-between gap-4 font-typewriter text-xs uppercase tracking-widest text-noir-muted">
          <span>{item.caption}</span>
          <span>
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
    </motion.div>
  );
}
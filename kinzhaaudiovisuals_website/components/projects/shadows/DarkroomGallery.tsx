"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import Container from "@/components/ui/Container";
import { gallery } from "@/lib/data/shadows";
import DarkroomLightbox from "./DarkroomLightbox";
import GalleryImage from "./GalleryImage";

export default function DarkroomGallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  return (
    <section aria-labelledby="gallery-title" className="py-24">
      <Container>
        <h2
          id="gallery-title"
          className="font-typewriter text-xs uppercase tracking-[0.4em] text-amber-glow"
        >
          Cuarto oscuro
        </h2>
        <p className="mt-3 font-display text-4xl font-bold uppercase text-noir-paper">
          Galería de revelado
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Ampliar imagen: ${item.alt}`}
                className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border border-white/10 bg-noir-card transition duration-300 hover:scale-[1.03] hover:border-brand-red hover:shadow-[0_0_18px_rgba(176,0,0,0.6)] focus-visible:scale-[1.03] focus-visible:border-brand-red focus-visible:outline-none"
              >
                <GalleryImage
                  item={item}
                  index={i}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </button>
            </li>
          ))}
        </ul>
      </Container>

      <AnimatePresence>
        {open !== null && (
          <DarkroomLightbox items={gallery} index={open} onClose={close} onStep={step} />
        )}
      </AnimatePresence>
    </section>
  );
}
"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { useInView } from "@/hooks/useInView";
import { GAME } from "@/lib/data/shadows";

const MS_PER_CHAR = 50;

export default function Synopsis() {
  const [ref, inView] = useInView<HTMLElement>(0.4);
  const reduce = useReducedMotion();
  const text = GAME.synopsis;
  const [typed, setTyped] = useState(0);
  const count = reduce ? text.length : typed;

  useEffect(() => {
    if (!inView || reduce || typed >= text.length) return;
    const id = setTimeout(() => setTyped((n) => n + 1), MS_PER_CHAR);
    return () => clearTimeout(id);
  }, [inView, reduce, typed, text.length]);

  return (
    <section ref={ref} className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-typewriter text-xs uppercase tracking-[0.4em] text-amber-glow">
            Sinopsis
          </h2>

          <p className="sr-only">{text}</p>
          <p
            aria-hidden="true"
            className="mt-6 font-typewriter text-lg leading-relaxed text-noir-paper md:text-2xl"
          >
            {text.slice(0, count)}
            <span className="inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] bg-amber-glow motion-safe:animate-caret" />
            <span className="opacity-0">{text.slice(count)}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
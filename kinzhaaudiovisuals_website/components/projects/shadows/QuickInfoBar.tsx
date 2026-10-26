"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { GAME } from "@/lib/data/shadows";

export default function QuickInfoBar() {
  return (
    <section aria-label="Especificaciones del juego" className="border-y border-white/10 bg-black/30">
      <Container>
        <dl className="grid gap-3 py-8 sm:grid-cols-3">
          {GAME.facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-brand-red bg-noir-card px-5 py-4 transition-colors hover:border-amber-glow"
            >
              <dt className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-noir-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold uppercase tracking-wide text-noir-paper">
                {fact.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
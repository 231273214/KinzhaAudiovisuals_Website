"use client";

import { useCallback, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Coverflow from "@/components/ui/Coverflow";
import { useAutoplay } from "@/hooks/useAutoplay";
import { DEFAULT_SERVICE_INDEX, SERVICES } from "@/lib/data/services";
import { readingTimeMs } from "@/lib/readingTime";

const ITEMS = SERVICES.map(({ id, image, title }) => ({ id, image, alt: title }));

export default function ServicesShowcase() {
  const [active, setActive] = useState(DEFAULT_SERVICE_INDEX);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const service = SERVICES[active];

  const next = useCallback(() => setActive((i) => (i + 1) % SERVICES.length), []);

  useAutoplay({
    ref: sectionRef,
    delay: readingTimeMs(service.title, service.whatIs, service.whatWeCreate),
    paused: hovered || focused,
    resetKey: active,
    onTick: next,
  });

  return (
    <section
      ref={sectionRef}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <Container className="grid items-center gap-12 pb-32 pt-8 md:grid-cols-2">
        <Coverflow items={ITEMS} active={active} onChange={setActive} />

        <article
          key={service.id}
          aria-live="polite"
          className="animate-fade-in motion-reduce:animate-none md:px-6"
        >
          <h3 className="text-center font-display text-2xl font-bold">{service.title}</h3>
          <p className="mt-6 text-sm leading-relaxed">Qué es: {service.whatIs}</p>
          <p className="mt-4 text-sm leading-relaxed">Qué creamos: {service.whatWeCreate}</p>
        </article>
      </Container>
    </section>
  );
}
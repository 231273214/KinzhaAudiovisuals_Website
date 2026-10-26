"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { EvidenceItem } from "@/lib/data/shadows";

type Props = {
  items: EvidenceItem[];
  width: number;
  height: number;
  activeId: string | null;
};

function buildPairs(items: EvidenceItem[]) {
  const seen = new Set<string>();
  const pairs: [EvidenceItem, EvidenceItem][] = [];

  for (const a of items) {
    for (const id of a.connectedTo) {
      const b = items.find((i) => i.id === id);
      if (!b) continue;
      const key = [a.id, b.id].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push([a, b]);
    }
  }
  return pairs;
}

export default function RedThreads({ items, width, height, activeId }: Props) {
  const reduce = useReducedMotion();
  if (!width || !height) return null;

  const pairs = buildPairs(items);
  const point = (i: EvidenceItem) => ({
    x: (i.coordinates.x / 100) * width,
    y: (i.coordinates.y / 100) * height,
  });

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {pairs.map(([a, b]) => {
        const p1 = point(a);
        const p2 = point(b);
        return (
          <line
            key={`base-${a.id}-${b.id}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            strokeWidth={2}
            className="stroke-brand-red/35"
          />
        );
      })}

      {pairs
        .filter(([a, b]) => activeId === a.id || activeId === b.id)
        .map(([a, b]) => {
          const [from, to] = a.id === activeId ? [a, b] : [b, a];
          const p1 = point(from);
          const p2 = point(to);
          return (
            <motion.line
              key={`active-${a.id}-${b.id}-${activeId}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              strokeWidth={2}
              className="stroke-brand-red drop-shadow-[0_0_4px_rgba(176,0,0,0.8)]"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: reduce ? 0 : 0.8, ease: "easeOut" }}
            />
          );
        })}
    </svg>
  );
}
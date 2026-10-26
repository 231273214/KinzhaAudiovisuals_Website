"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

const SPRING = { stiffness: 300, damping: 24 };
const MAX_TILT = 16; 

const edge = (v: number) => Math.sign(v) * Math.abs(v) ** 2.5;

export default function TiltFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const rotateY = useTransform(useSpring(tx, SPRING), [-1, 1], [-MAX_TILT, MAX_TILT]);
  const rotateX = useTransform(useSpring(ty, SPRING), [-1, 1], [MAX_TILT, -MAX_TILT]);

  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const hover = useMotionValue(0);
  const glareOpacity = useSpring(hover, { stiffness: 200, damping: 30 });
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.45), transparent 55%)`;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    const y = ((e.clientY - r.top) / r.height) * 2 - 1;
    tx.set(edge(x));
    ty.set(edge(y));
    gx.set((x + 1) * 50);
    gy.set((y + 1) * 50);
  }

  function onLeave() {
    tx.set(0);
    ty.set(0);
    hover.set(0);
  }

  return (
    <div
      style={{ perspective: 900 }}
      onPointerEnter={() => !reduce && hover.set(1)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative transition-shadow duration-300 hover:shadow-[0_18px_30px_rgba(0,0,0,0.45)] ${className}`}
      >
        {children}
        {!reduce && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{ backgroundImage: glare, opacity: glareOpacity }}
          />
        )}
      </motion.div>
    </div>
  );
}
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { COVER_IMAGE } from "@/lib/data/cadence";
import Image from "next/image";

export function Cover({ onOpen }: { onOpen: () => void }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const x = useTransform(sx, (v) => v * -14);
  const y = useTransform(sy, (v) => v * -10);

  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-black"
      onMouseMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      <motion.div className="absolute -inset-4" style={{ x, y }}>
        <Image
          src={COVER_IMAGE}
          alt="Detective Fonseca frente al tablero de investigación de Cadence of Shadows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-[8svh] flex justify-center">
        <motion.button
          type="button"
          onClick={onOpen}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: -1.5 }}
          whileTap={{ scale: 0.97 }}
          className="border-2 border-white bg-black/70 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
        >
          Abrir expediente
        </motion.button>
      </div>
    </section>
  );
}
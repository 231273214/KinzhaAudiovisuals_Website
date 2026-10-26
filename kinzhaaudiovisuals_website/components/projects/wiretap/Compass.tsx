"use client";

import { useAnimate, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = { src: string; className?: string };

export default function Compass({ src, className = "" }: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const busy = useRef(false);
  const reduce = useReducedMotion();

  async function swing() {
    if (reduce || busy.current || !scope.current) return;
    busy.current = true;
    await animate(
      scope.current,
      { rotate: [0, 220, -120, 70, -35, 15, -6, 0] },
      { duration: 3, ease: "easeInOut" },
    );
    busy.current = false;
  }

  return (
    <div className={className} onPointerEnter={swing}>
      <span aria-hidden="true" className="absolute -inset-3" />
      <div ref={scope} className="mix-blend-multiply">
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
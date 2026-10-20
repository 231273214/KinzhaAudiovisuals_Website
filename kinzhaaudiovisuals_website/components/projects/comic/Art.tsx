"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fit?: "contain" | "cover";
};

export default function Art({ src, alt, className = "", fit = "contain" }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {failed ? (
        <div className="absolute inset-0 grid place-items-center border border-dashed border-current/30 p-2 text-center text-[1.6cqw] text-current/50">
          {alt}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={fit === "cover" ? "object-cover" : "object-contain"}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
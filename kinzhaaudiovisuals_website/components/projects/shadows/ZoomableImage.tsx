"use client";

import { useState, type PointerEvent } from "react";
import type { GalleryItem } from "@/lib/data/shadows";
import GalleryImage from "./GalleryImage";

export default function ZoomableImage({
  item,
  index,
}: {
  item: GalleryItem;
  index: number;
}) {
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  function move(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    setOrigin({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  return (
    <div
      onPointerMove={move}
      onClick={() => setZoom((z) => !z)}
      className={`absolute inset-0 ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 motion-reduce:transition-none"
        style={{
          transform: zoom ? "scale(2.2)" : "scale(1)",
          transformOrigin: `${origin.x}% ${origin.y}%`,
        }}
      >
        <GalleryImage
          item={item}
          index={index}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
import Image from "next/image";
import type { Clue3D } from "@/lib/data/shadows";

export default function ClueFallback({ clue }: { clue: Clue3D }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {clue.poster ? (
        <Image
          src={clue.poster}
          alt={clue.title}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain p-6"
        />
      ) : (
        <p className="font-typewriter text-xs uppercase tracking-[0.3em] text-noir-muted">
          Vista 3D no disponible
        </p>
      )}
    </div>
  );
}
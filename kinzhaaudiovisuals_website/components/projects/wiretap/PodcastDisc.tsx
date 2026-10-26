"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  photo: string;
  alt: string;
  caption: string;
  audio: string | null;
  audioTitle: string;
  className?: string;
  mediaClassName?: string;
};

export default function PodcastDisc({
  photo,
  alt,
  caption,
  audio,
  audioTitle,
  className = "",
  mediaClassName = "",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  async function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (!el.paused) {
      el.pause();
      return;
    }
    try {
      await el.play();
    } catch {
      setFailed(true);
    }
  }

  return (
    <figure className={className}>
      <div className={`group relative aspect-square ${mediaClassName}`}>
        <div
          style={{ animationPlayState: playing ? "running" : "paused" }}
          className="absolute inset-0 overflow-hidden rounded-full border-2 border-black bg-black/10 motion-safe:animate-spin-33"
        >
          <Image src={photo} alt={alt} fill sizes="150px" className="object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full [background-image:repeating-radial-gradient(circle,transparent_0_3px,rgba(0,0,0,0.14)_3px_4px)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full [background-image:conic-gradient(from_0deg,transparent,rgba(255,255,255,0.28),transparent_22%,transparent_50%,rgba(255,255,255,0.28)_72%,transparent_90%)]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black bg-paper"
          />
        </div>

        {audio && (
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? `Pausar: ${audioTitle}` : `Reproducir: ${audioTitle}`}
            className="absolute left-1/2 top-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-paper/90 text-black opacity-0 shadow-lg transition duration-200 hover:scale-105 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black group-hover:opacity-100 [@media(hover:none)]:opacity-100"
          >
            {playing ? (
              <Pause aria-hidden="true" className="size-1/2" />
            ) : (
              <Play aria-hidden="true" className="size-1/2 translate-x-0.5" />
            )}
          </button>
        )}
      </div>

      <figcaption className="mt-3 text-xs italic leading-snug">
        <span className="font-bold">Leyenda:</span> {caption}
      </figcaption>
      <p role="status" className="mt-1 min-h-4 text-xs">
        {failed ? "No se pudo cargar el audio." : playing ? `▶ ${audioTitle}` : ""}
      </p>

      {audio && (
        <audio
          ref={audioRef}
          src={audio}
          preload="none"
          onPlay={() => {
            setFailed(false);
            setPlaying(true);
          }}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => {
            setPlaying(false);
            setFailed(true);
          }}
        />
      )}
    </figure>
  );
}
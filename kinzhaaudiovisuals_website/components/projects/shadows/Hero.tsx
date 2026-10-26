import Image from "next/image";
import Fog from "@/components/projects/shadows/Fog";
import NeonButton from "@/components/projects/shadows/NeonButton";
import RainCanvas from "@/components/projects/shadows/RainCanvas";
import { GAME } from "@/lib/data/shadows";

// Callejón procedural: fachadas en silueta y una farola ámbar al fondo
function Alley() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d0f16_0%,#090a0f_65%,#050608_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(214,158,46,0.16),transparent_55%)]" />
      <div className="absolute inset-y-0 left-0 w-[30%] bg-[#05060a] [clip-path:polygon(0_0,100%_10%,70%_100%,0_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[30%] bg-[#05060a] [clip-path:polygon(0_10%,100%_0,100%_100%,30%_100%)]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden px-4 py-28 text-center">
      <Alley />
      {GAME.heroImage && (
        <Image
          src={GAME.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover opacity-45"
        />
      )}
      <Fog />

      {/* z-10: título con papel rasgado y sombra dura */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="font-typewriter text-xs uppercase tracking-[0.4em] text-amber-glow">
          Kinzha Audiovisuals presenta
        </p>
        <h1 className="-rotate-1 [filter:drop-shadow(6px_6px_0_rgba(0,0,0,0.8))]">
          <span className="torn-paper block max-w-[92vw] bg-noir-paper px-[5vw] py-[2.4vw] font-display text-[clamp(2.25rem,9vw,7.5rem)] font-bold uppercase leading-none tracking-tight text-balance text-noir-deep">
            {GAME.title}
          </span>
        </h1>
        <p className="max-w-xl font-typewriter text-sm leading-relaxed text-noir-paper/80 md:text-base">
          {GAME.blurb}
        </p>
      </div>

      {/* z-20: lluvia */}
      <RainCanvas />

      {/* z-30: botones */}
      <div className="relative z-30 flex flex-wrap items-center justify-center gap-4">
        <NeonButton label="Reproducir trailer" primary href={GAME.trailerUrl || undefined} />
        <NeonButton label="Añadir a wishlist" href={GAME.wishlistUrl || undefined} />
      </div>
    </section>
  );
}
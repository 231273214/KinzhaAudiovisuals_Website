import type { Metadata } from "next";
import Link from "next/link";
import FilmOverlay from "@/components/projects/shadows/FilmOverlay";
import Hero from "@/components/projects/shadows/Hero";
import MotionRoot from "@/components/projects/shadows/MotionRoot";
import QuickInfoBar from "@/components/projects/shadows/QuickInfoBar";
import Synopsis from "@/components/projects/shadows/Synopsis";
import { specialElite } from "@/lib/fonts-shadows";
import LevelFiles from "@/components/projects/shadows/LevelFiles";
import DarkroomGallery from "@/components/projects/shadows/DarkroomGallery";
import EvidenceBoard from "@/components/projects/shadows/EvidenceBoard";
import ClueAnalyzer from "@/components/projects/shadows/ClueAnalyzer";

export const metadata: Metadata = {
  title: "Cadence of Shadows | Kinzha Audiovisuals",
};

export default function CadenceOfShadowsPage() {
  return (
    <div className={`${specialElite.variable} min-h-screen bg-noir-deep text-noir-paper`}>
      <MotionRoot>
        <FilmOverlay />

        <Link
          href="/productos"
          aria-label="Volver a Productos"
          className="fixed left-4 top-4 z-[60] border border-brand-red/70 bg-black/60 px-4 py-2 font-typewriter text-[11px] uppercase tracking-[0.3em] text-noir-paper backdrop-blur-sm transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white"
        >
          Apagar la luz
        </Link>

        <main>
          <Hero />
          <QuickInfoBar />
          <Synopsis />
          <EvidenceBoard />
          <LevelFiles />
          <ClueAnalyzer />
          <DarkroomGallery />
        </main>
      </MotionRoot>
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import ComicBook from "@/components/projects/comic/ComicBook";
import { bebasNeue } from "@/lib/fonts-comic";

export const metadata: Metadata = {
  title: "Wire Tap: Ecos de la memoria | Kinzha Audiovisuals",
};

export default function ComicPage() {
  return (
    <div
      className={`${bebasNeue.variable} min-h-screen bg-[radial-gradient(ellipse_at_top,#3a3636_0%,#1a1818_70%)] text-white`}
    >
      <header className="flex items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/productos"
          className="rounded-full border border-white/30 px-4 py-1 font-comic text-lg tracking-widest transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          Cerrar libro
        </Link>
        <p className="font-comic text-lg tracking-widest text-white/60">Kinzha Audiovisuals</p>
      </header>

      <main className="px-4 pb-10 md:px-8">
        <ComicBook />
      </main>
    </div>
  );
}
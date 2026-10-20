import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackStamp() {
  return (
    <Link
      href="/productos"
      className="group fixed left-4 top-4 z-50 flex -rotate-2 items-center gap-2 border-2 border-white bg-black/70 px-3 py-1.5 text-xs uppercase tracking-widest text-white backdrop-blur transition duration-300 hover:rotate-0 hover:bg-white hover:text-black"
    >
      <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
      Volver al archivo
    </Link>
  );
}
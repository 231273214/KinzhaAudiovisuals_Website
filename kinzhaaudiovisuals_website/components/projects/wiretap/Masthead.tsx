import Link from "next/link";
import { WIRETAP } from "@/lib/data/wiretap";

export default function Masthead() {
  return (
    <header>
      <Link
        href="/productos"
        aria-label="Cerrar expediente y volver a Productos"
        className="inline-block -rotate-3 border-[3px] border-double border-black px-3 py-1 font-typewriter text-xs uppercase tracking-[0.2em] transition-transform duration-200 hover:rotate-0 hover:scale-95 active:scale-90"
      >
        Cerrar expediente
      </Link>

      <h1 className="mt-4 font-typewriter text-[clamp(1.75rem,6.5vw,4.25rem)] leading-none">
        El kinzha nocturno
      </h1>

      <dl className="mt-4 flex flex-col gap-1 border-b-2 border-t-[3px] border-black py-2 font-tai text-[13px] md:flex-row md:items-center md:divide-x-[1.5px] md:divide-black">
        {WIRETAP.strip.map(({ label, value }) => (
          <div key={label} className="md:flex-auto md:px-5 md:first:pl-0 md:last:pr-0">
            <dt className="inline font-bold">{label}: </dt>
            <dd className="inline">{value}</dd>
          </div>
        ))}
    </dl>
    </header>
  );
}
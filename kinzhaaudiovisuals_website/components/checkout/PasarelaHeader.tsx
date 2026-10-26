import { ArrowLeftToLine, ChevronDown } from "lucide-react";
import Link from "next/link";
import { GATEWAY_NAME, languages } from "@/lib/data/checkout";

export default function PasarelaHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-black/15 px-6 py-5">
      <div className="flex items-center gap-4">
        <Link
          href="/pago"
          aria-label="Volver al método de pago"
          className="rounded-md p-1 transition-colors hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <ArrowLeftToLine aria-hidden="true" className="size-7" />
        </Link>
        <span aria-hidden="true" className="size-11 rounded-full bg-[#7a7273]" />
        <span className="text-3xl font-medium">{GATEWAY_NAME}</span>
      </div>

      <label className="relative block w-[200px] rounded-lg border border-black px-3 py-2 text-xs">
        Language
        <select
          defaultValue="en"
          className="mt-0.5 block w-full appearance-none bg-transparent pr-6 outline-none"
        >
          {languages.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2"
        />
      </label>
    </header>
  );
}
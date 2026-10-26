import Image from "next/image";
import { acceptedLogos } from "@/lib/data/checkout";

export default function AcceptedMethods() {
  return (
    <section aria-labelledby="accepted-title" className="min-h-[280px] bg-[#534f4f] p-5">
      <h2 id="accepted-title" className="text-3xl font-light uppercase">
        Métodos de pago
      </h2>
      <p className="mt-1 text-sm">Aceptamos los siguientes métodos de pago</p>

      <ul className="mt-4 flex flex-wrap items-center gap-6">
        {acceptedLogos.map((logo) => (
          <li key={logo.name}>
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-6 w-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
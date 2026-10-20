import Container from "@/components/ui/Container";
import { SOCIAL_LINKS } from "@/lib/navigation";

export default function ContactSection() {
  return (
    <section>
      <Container className="pb-24 pt-16 md:pb-32 md:pt-36">
        <h1 className="text-center font-display text-[clamp(2.25rem,10.3vw,11rem)] font-bold uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(110,110,110,1)]">
          Ponte en contacto
        </h1>

        <div className="mt-20 grid items-center gap-14 md:mt-32 md:grid-cols-2">
          <p className="font-brand text-[clamp(2.75rem,6.9vw,7rem)] leading-[1.2]">
            Kinzha
            <br />
            audiovisuals
          </p>

          <div className="w-fit md:justify-self-center">
            <p className="font-display text-[clamp(2.75rem,6.9vw,7rem)] font-bold leading-none">
              Kinzha
            </p>
            <ul className="mx-[9%] mt-4 flex items-center justify-between gap-6 border-t border-white/40 pt-2 text-xs uppercase tracking-wide">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
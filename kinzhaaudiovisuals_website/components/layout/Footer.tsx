import Container from "@/components/ui/Container";
import ScrollTopLink from "@/components/ui/ScrollTopLink";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="w-full">
      <Container className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row md:items-start md:gap-6">
        
        <div className="flex w-full justify-center md:w-auto md:justify-start">
          <p className="font-brand text-[clamp(1.4rem,3vw,2rem)] text-white text-center md:text-left md:border-r md:border-white/25 md:pr-6">
            KINZHA<br className="md:hidden" /> AUDIOVISUALS
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-1 md:items-start">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-display text-sm font-semibold md:justify-start md:gap-3.5">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <ScrollTopLink href={href} className="text-white hover:text-brand-soft transition-colors">
                  {label}
                </ScrollTopLink>
              </li>
            ))}
          </ul>
          <p className="text-center text-xs text-zinc-400 md:text-left">
            ©2026 Kinzha Audiovisuals. All rights reserved.
          </p>
        </div>

        <ul className="flex w-full flex-row flex-wrap justify-center gap-6 font-display text-sm font-semibold text-white md:w-auto md:flex-col md:items-end md:gap-2">
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

      </Container>
    </footer>
  );
}
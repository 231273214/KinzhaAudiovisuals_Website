import Container from "@/components/ui/Container";
import ScrollTopLink from "@/components/ui/ScrollTopLink";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="w-full">
      <Container className="flex flex-wrap items-center justify-between gap-6 py-8">
        <p className="border-white/25 font-brand text-[clamp(1.4rem,3vw,2rem)] text-white md:border-r md:pr-6">
          KINZHA AUDIOVISUALS
        </p>

        <div className="min-w-[220px] flex-1">
          <ul className="flex flex-wrap gap-3.5 font-display text-sm font-semibold">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <ScrollTopLink href={href}>{label}</ScrollTopLink>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-zinc-400">
            ©2026 Kinzha Audiovisuals. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-col gap-2 font-display font-semibold md:items-end">
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
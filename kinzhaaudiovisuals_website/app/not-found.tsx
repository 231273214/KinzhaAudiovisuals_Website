import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <SiteShell>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <h1 className="font-title text-[clamp(4rem,15vw,10rem)] font-light leading-none">404</h1>
        <p>Esta página aún no existe.</p>
        <Link href="/" className="border-b border-current font-display font-semibold">
          VOLVER AL INICIO
        </Link>
      </Container>
    </SiteShell>
  );
}
"use client";

import Image from "next/image";
import CartIconLink from "@/components/cart/CartIconLink";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import ScrollTopLink from "@/components/ui/ScrollTopLink";
import { NAV_LINKS } from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 py-4">
      <Container>
        <nav className="flex items-center justify-between rounded-xl border border-brand-red-dark bg-brand-red/90 px-5 py-2 backdrop-blur-md">
          <ul className="flex flex-wrap gap-3 md:gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <ScrollTopLink
                  href={href}
                  className={`text-sm transition-opacity hover:opacity-70 ${
                    pathname === href ? "text-brand-soft" : ""
                  }`}
                >
                  {label}
                </ScrollTopLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <CartIconLink>
              <Image src="/Icons/carrito-de-compras.png" alt="" width={22} height={22} />
            </CartIconLink>
            <ScrollTopLink href="/" className="block" aria-label="Kinzha">
              <Image src="/images/logo_kinsha.png" alt="" width={22} height={22} />
            </ScrollTopLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
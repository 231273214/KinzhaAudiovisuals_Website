"use client";

import Image from "next/image";
import CartIconLink from "@/components/cart/CartIconLink";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import ScrollTopLink from "@/components/ui/ScrollTopLink";
import { NAV_LINKS } from "@/lib/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 py-4">
      <Container>
        <nav className="relative flex items-center justify-between rounded-xl border border-brand-red-dark bg-brand-red/90 px-5 py-2 backdrop-blur-md">
          
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-1 text-white hover:text-brand-soft transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Enlaces Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <ScrollTopLink
                  href={href}
                  className={`text-sm transition-opacity hover:opacity-70 ${
                    pathname === href ? "text-brand-soft font-semibold" : "text-white"
                  }`}
                >
                  {label}
                </ScrollTopLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <CartIconLink />
            <ScrollTopLink href="/" className="block" aria-label="Kinzha Inicio">
              <Image src="/images/logo_kinsha.png" alt="Kinzha" width={22} height={22} />
            </ScrollTopLink>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-brand-red-dark bg-brand-red/95 shadow-xl backdrop-blur-md md:hidden"
              >
                <ul className="flex flex-col px-2 py-2">
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <ScrollTopLink
                        href={href}
                        className={`block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-brand-red-dark ${
                          pathname === href ? "text-brand-soft font-semibold" : "text-white"
                        }`}
                      >
                        {label}
                      </ScrollTopLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          
        </nav>
      </Container>
    </header>
  );
}
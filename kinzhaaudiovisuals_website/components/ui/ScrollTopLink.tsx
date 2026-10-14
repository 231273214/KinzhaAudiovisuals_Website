"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToTop } from "@/lib/scroll";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  duration?: number;
};

export default function ScrollTopLink({ href, children, className, duration }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (pathname === href) {
          e.preventDefault();
          scrollToTop(duration);
        }
      }}
    >
      {children}
    </Link>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";

export default function CartIconLink() {
  const { ready, count } = useCart();
  const showBadge = ready && count > 0;

  return (
    <Link
      href="/carrito"
      aria-label={showBadge ? `Carrito, ${count} productos` : "Carrito"}
      className="relative block"
    >
      <Image src="/Icons/carrito-de-compras.png" alt="" width={22} height={22} />
      {showBadge && (
        <span className="absolute -right-2 -top-2 grid min-w-4 place-items-center rounded-full bg-white px-1 text-[10px] font-bold leading-4 text-brand-red">
          {count}
        </span>
      )}
    </Link>
  );
}
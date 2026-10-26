"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { lineKey } from "@/lib/cart/store";
import { formatCOP } from "@/lib/format";

const box = "bg-[#ddd9d8] p-6 text-sm shadow-[0_8px_16px_rgba(0,0,0,0.35)]";

export default function OrderSummary({ methodLabel }: { methodLabel: string }) {
  const { ready, lines, total } = useCart();

  if (!ready) {
    return <section aria-label="Order summary" className={`${box} min-h-48`} />;
  }

  if (lines.length === 0) {
    return (
      <section aria-label="Order summary" className={box}>
        <h2 className="font-medium">Order summary</h2>
        <hr className="my-5 border-black/25" />
        <p>Tu carrito está vacío.</p>
        <Link
          href="/productos"
          className="mt-3 inline-block underline underline-offset-2"
        >
          Ver productos
        </Link>
      </section>
    );
  }

  return (
    <section aria-label="Order summary" className={box}>
      <h2 className="font-medium">Order summary</h2>
      <hr className="my-5 border-black/25" />

      <ul className="space-y-1">
        {lines.map((line) => (
          <li
            key={lineKey(line.productId, line.size)}
            className="flex justify-between gap-4"
          >
            <span>
              {line.quantity} {line.product.name}
              {line.size ? ` (Talla ${line.size})` : ""}
            </span>
            <span className="shrink-0">{formatCOP(line.subtotal)}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-1 flex justify-between font-medium">
        <dt>Payment method</dt>
        <dd>{methodLabel}</dd>
      </dl>

      <hr className="my-5 border-black/25" />

      <p className="flex justify-between font-medium">
        <span>Total</span>
        <span>{formatCOP(total)}</span>
      </p>
    </section>
  );
}
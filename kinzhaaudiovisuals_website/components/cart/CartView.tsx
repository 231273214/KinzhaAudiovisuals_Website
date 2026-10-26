"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useCart } from "@/hooks/useCart";
import { lineKey, MAX_QTY } from "@/lib/cart/store";
import { formatCOP } from "@/lib/format";

export default function CartView() {
  const { ready, lines, count, total, setQuantity, remove, clear } = useCart();

  if (!ready) return <Container className="min-h-[40vh] py-16" />;

  if (lines.length === 0) {
    return (
      <Container className="flex min-h-[40vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <p>Tu carrito está vacío.</p>
        <Link href="/productos" className="border-b border-current font-display font-semibold">
          VER PRODUCTOS
        </Link>
      </Container>
    );
  }

  return (
    <Container className="grid gap-8 pb-32 pt-8 lg:grid-cols-[1fr_320px]">
      <ul className="flex flex-col gap-4">
        {lines.map((line) => (
          <li
            key={lineKey(line.productId, line.size)}
            className="flex gap-4 rounded-lg bg-card p-3 text-black"
          >
            <div className="relative size-24 shrink-0">
              <Image
                src={line.product.image}
                alt={line.product.name}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <h3 className="font-display font-bold">{line.product.name}</h3>
              {line.size && <p className="text-xs">Talla: {line.size}</p>}
              <p className="text-sm">{formatCOP(line.product.price)}</p>

              <div className="mt-auto flex items-center gap-3 pt-2">
                <div className="flex items-center rounded-full border border-black/30">
                  <button
                    type="button"
                    aria-label="Quitar uno"
                    onClick={() => setQuantity(line.productId, line.size, line.quantity - 1)}
                    className="size-7"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{line.quantity}</span>
                  <button
                    type="button"
                    aria-label="Agregar uno"
                    disabled={line.quantity >= MAX_QTY}
                    onClick={() => setQuantity(line.productId, line.size, line.quantity + 1)}
                    className="size-7 disabled:opacity-40"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => remove(line.productId, line.size)}
                  className="text-xs underline"
                >
                  Eliminar
                </button>
              </div>
            </div>

            <p className="font-display font-bold">{formatCOP(line.subtotal)}</p>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-lg bg-card p-5 text-black">
        <h2 className="font-display text-xl font-bold">RESUMEN</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Productos</dt>
            <dd>{count}</dd>
          </div>
          <div className="flex justify-between font-bold">
            <dt>Total</dt>
            <dd>{formatCOP(total)}</dd>
          </div>
        </dl>

        {/* Sin backend todavía no se puede cobrar */}
        <Link
          href="/pago"
          className="mt-5 block w-full rounded-full bg-action py-2 text-center text-sm text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Ir a pagar
        </Link>
        <button type="button" onClick={clear} className="mt-3 text-xs underline">
          Vaciar carrito
        </button>
      </aside>
    </Container>
  );
}
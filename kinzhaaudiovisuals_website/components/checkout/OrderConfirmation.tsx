"use client";

import Link from "next/link";
import { useEffect } from "react";
import Container from "@/components/ui/Container";
import { useCart } from "@/hooks/useCart";
import { useLastOrder } from "@/hooks/useShipping";
import { markLastOrderCleared } from "@/lib/checkout/store";
import { formatCOP } from "@/lib/format";

export default function OrderConfirmation() {
  const { ready, order } = useLastOrder();
  const { clear } = useCart();

  useEffect(() => {
    if (order && !order.cleared) {
      clear();
      markLastOrderCleared();
    }
  }, [order, clear]);

  if (!ready) return <Container className="min-h-[40vh] py-16" />;

  if (!order) {
    return (
      <Container className="flex min-h-[40vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <p>No encontramos un pedido reciente.</p>
        <Link href="/productos" className="border-b border-current font-display font-semibold">
          VER PRODUCTOS
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <div className="mx-auto max-w-lg rounded-lg bg-card p-6 text-center text-black">
        <h1 className="font-display text-2xl font-bold">¡PEDIDO RECIBIDO!</h1>
        <p className="mt-3 text-sm">Tu número de pedido es</p>
        <p className="mt-1 font-display text-3xl font-bold tracking-wide">{order.orderNumber}</p>

        <dl className="mt-5 space-y-1 text-sm">
          <div className="flex justify-between">
            <dt>Total</dt>
            <dd className="font-bold">{formatCOP(order.total)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Correo</dt>
            <dd className="break-all">{order.email}</dd>
          </div>
        </dl>

        <p className="mt-5 text-xs">
          Te enviaremos el resumen a tu correo. Si no lo ves en unos minutos, revisa la
          carpeta de spam. Entorno de demostración: no se realizó ningún cobro.
        </p>

        <Link
          href="/productos"
          className="mt-6 inline-block rounded-full bg-action px-6 py-2 text-sm text-white transition hover:brightness-110"
        >
          Seguir comprando
        </Link>
      </div>
    </Container>
  );
}
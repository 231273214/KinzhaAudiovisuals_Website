"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent, InputHTMLAttributes } from "react";
import Container from "@/components/ui/Container";
import { useCart } from "@/hooks/useCart";
import { useShipping } from "@/hooks/useShipping";
import { formatCOP } from "@/lib/format";

function Field({
  label,
  className = "",
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block text-sm ${className}`}>
      {label}
      <input
        required
        className="mt-1 w-full rounded-md border border-black/40 bg-white/80 px-3 py-2 text-sm text-black outline-none focus-visible:ring-2 focus-visible:ring-action"
        {...rest}
      />
    </label>
  );
}

export default function ShippingForm() {
  const router = useRouter();
  const cart = useCart();
  const shipping = useShipping();

  if (!cart.ready || !shipping.ready) return <Container className="min-h-[40vh] py-16" />;

  if (cart.lines.length === 0) {
    return (
      <Container className="flex min-h-[40vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <p>Tu carrito está vacío.</p>
        <Link href="/productos" className="border-b border-current font-display font-semibold">
          VER PRODUCTOS
        </Link>
      </Container>
    );
  }

  const saved = shipping.data;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const text = (key: string) => String(form.get(key) ?? "").trim();

    shipping.save({
      name: text("name"),
      email: text("email").toLowerCase(),
      phone: text("phone"),
      address: text("address"),
      city: text("city"),
    });
    router.push("/pago");
  }

  return (
    <Container className="grid gap-8 pb-32 pt-8 lg:grid-cols-[1fr_320px]">
      <form onSubmit={handleSubmit} className="rounded-lg bg-card p-5 text-black">
        <h1 className="font-display text-xl font-bold">DATOS DE ENVÍO</h1>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field
            label="Nombre completo"
            name="name"
            autoComplete="name"
            minLength={2}
            defaultValue={saved?.name}
            className="sm:col-span-2"
          />
          <Field
            label="Correo electrónico"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={saved?.email}
          />
          <Field
            label="Teléfono"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            minLength={7}
            defaultValue={saved?.phone}
          />
          <Field
            label="Dirección"
            name="address"
            autoComplete="street-address"
            minLength={5}
            defaultValue={saved?.address}
            className="sm:col-span-2"
          />
          <Field
            label="Ciudad"
            name="city"
            autoComplete="address-level2"
            minLength={2}
            defaultValue={saved?.city}
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-full bg-action px-6 py-2 text-sm text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Continuar al pago
        </button>
      </form>

      <aside className="h-fit rounded-lg bg-card p-5 text-black">
        <h2 className="font-display text-xl font-bold">RESUMEN</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Productos</dt>
            <dd>{cart.count}</dd>
          </div>
          <div className="flex justify-between font-bold">
            <dt>Total</dt>
            <dd>{formatCOP(cart.total)}</dd>
          </div>
        </dl>
        <Link href="/carrito" className="mt-4 inline-block text-xs underline">
          Volver al carrito
        </Link>
        <p className="mt-4 border-t border-black/20 pt-3 text-xs">
          Entorno de demostración: no se realiza ningún cobro.
        </p>
      </aside>
    </Container>
  );
}
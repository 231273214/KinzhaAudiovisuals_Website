"use client";

import type { FormEvent } from "react";
import { useCart } from "@/hooks/useCart";
import OrderSummary from "./OrderSummary";
import PayButton from "./PayButton";

export default function PseForm() {
  const { ready, count } = useCart();
  const empty = !ready || count === 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (empty) return;
    // TODO backend: crear la transacción PSE y redirigir al banco
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl leading-snug">
        PSE
        <br />
        Payer details
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_430px]">
        <label className="block">
          <span className="sr-only">E-mail</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="E-mail"
            className="w-full bg-[#e2dfdf] px-4 py-4 text-2xl outline-none placeholder:text-black/55 focus-visible:ring-2 focus-visible:ring-black"
          />
        </label>

        <div className="space-y-8">
          <OrderSummary methodLabel="PSE" />
          <PayButton disabled={empty} />
        </div>
      </div>
    </form>
  );
}
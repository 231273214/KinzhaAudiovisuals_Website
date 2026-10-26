"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { usePlaceOrder } from "@/hooks/usePlaceOrder";
import OrderSummary from "./OrderSummary";
import PayButton from "./PayButton";

export default function PseForm() {
  const { ready, shipping, canPay, loading, error, placeOrder } = usePlaceOrder();

  if (!ready) return <div className="min-h-[300px]" />;

  if (!shipping) {
    return (
      <p className="text-lg">
        Primero completa tus datos de envío.{" "}
        <Link href="/envio" className="underline underline-offset-2">
          Ir a datos de envío
        </Link>
      </p>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void placeOrder("PSE");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl leading-snug">
        PSE
        <br />
        Payer details
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_430px]">
        <div>
          <label className="block">
            <span className="sr-only">E-mail</span>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={shipping.email}
              autoComplete="email"
              className="w-full bg-[#e2dfdf] px-4 py-4 text-2xl outline-none read-only:opacity-80"
            />
          </label>
          <Link href="/envio" className="mt-3 inline-block text-sm underline underline-offset-2">
            Change shipping details
          </Link>
        </div>

        <div className="space-y-8">
          <OrderSummary methodLabel="PSE" />
          {error && (
            <p role="alert" className="text-sm font-medium text-[#7a0a0a]">
              {error}
            </p>
          )}
          <PayButton disabled={!canPay || loading}>
            {loading ? "Processing…" : "Pay Now"}
          </PayButton>
        </div>
      </div>
    </form>
  );
}
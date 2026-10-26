"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { paymentMethods, type PaymentMethodId } from "@/lib/data/checkout";

export default function PaymentMethodPicker() {
  const router = useRouter();
  const selectId = useId();
  const [selected, setSelected] = useState<PaymentMethodId>("pse");

  const method = paymentMethods.find((m) => m.id === selected) ?? paymentMethods[0];
  const available = Boolean(method.href);

  return (
    <div className="flex min-h-[320px] flex-col justify-between bg-[#534f4f] p-4 sm:p-5">
      <div>
        <label htmlFor={selectId} className="block text-base">
          Selecciona un método de pago
        </label>
        <select
          id={selectId}
          value={selected}
          onChange={(e) => setSelected(e.target.value as PaymentMethodId)}
          className="mt-2 w-full max-w-64 bg-card px-2 py-1 text-black"
        >
          {paymentMethods.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
              {m.href ? "" : " (próximamente)"}
            </option>
          ))}
        </select>

        {!available && (
          <p role="status" className="mt-3 text-sm">
            Este método aún no está disponible.
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={!available}
        onClick={() => router.push(method.href)}
        className="self-end rounded-xl bg-action px-4 py-1.5 text-2xl text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continuar
      </button>
    </div>
  );
}
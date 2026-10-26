"use client";

import { House, Mail, Smartphone } from "lucide-react";
import type { FormEvent } from "react";
import { useCart } from "@/hooks/useCart";
import { banks, clientTypes, documentTypes } from "@/lib/data/checkout";
import OrderSummary from "./OrderSummary";
import PayButton from "./PayButton";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function BankTransferForm() {
  const { ready, count } = useCart();
  const empty = !ready || count === 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (empty) return;
    // TODO backend: validar los datos y crear la transferencia
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-10 lg:grid-cols-[minmax(0,520px)_1fr]"
    >
      <div className="bg-[#ddd9d8] px-5 py-5 shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
        <h1 className="text-2xl font-semibold">Transferencias Bancarias</h1>

        <div className="mt-3 space-y-5 px-4 pb-4 sm:px-6">
          <TextField label="Nombres" name="nombres" autoComplete="given-name" required />
          <TextField label="Apellidos" name="apellidos" autoComplete="family-name" required />
          <SelectField
            label="Tipo de cliente"
            placeholder="Tipo de cliente"
            name="tipoCliente"
            options={clientTypes}
            required
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <SelectField
              label="Tipo de documento"
              placeholder="Tipo de Doc..."
              name="tipoDocumento"
              options={documentTypes}
              required
            />
            <TextField
              label="Número de documento"
              name="numeroDocumento"
              inputMode="numeric"
              required
            />
          </div>

          <TextField
            label="Móvil"
            name="movil"
            type="tel"
            autoComplete="tel"
            icon={Smartphone}
            required
          />
          <TextField
            label="Correo electrónico"
            name="correo"
            type="email"
            autoComplete="email"
            icon={Mail}
            required
          />
          <TextField
            label="Dirección"
            name="direccion"
            autoComplete="street-address"
            icon={House}
            required
          />
          <SelectField
            label="Lista de bancos"
            placeholder="Lista de Bancos"
            name="banco"
            options={banks}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:w-[430px] lg:self-end lg:justify-self-end">
        <OrderSummary methodLabel="Transferencia bancaria" />
        <PayButton disabled={empty} />
      </div>
    </form>
  );
}
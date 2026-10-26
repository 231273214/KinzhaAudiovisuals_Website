"use client";

import { House, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import type { FormEvent } from "react";
import { usePlaceOrder } from "@/hooks/usePlaceOrder";
import { banks, clientTypes, documentTypes } from "@/lib/data/checkout";
import OrderSummary from "./OrderSummary";
import PayButton from "./PayButton";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function BankTransferForm() {
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

  const [firstName, ...rest] = shipping.name.split(" ");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void placeOrder("TRANSFERENCIA");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-10 lg:grid-cols-[minmax(0,520px)_1fr]"
    >
      <div className="bg-[#ddd9d8] px-5 py-5 shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
        <h1 className="text-2xl font-semibold">Transferencias Bancarias</h1>

        <div className="mt-3 space-y-5 px-4 pb-4 sm:px-6">
          <TextField label="Nombres" name="nombres" readOnly defaultValue={firstName} />
          <TextField label="Apellidos" name="apellidos" readOnly defaultValue={rest.join(" ")} />
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
            icon={Smartphone}
            readOnly
            defaultValue={shipping.phone}
          />
          <TextField
            label="Correo electrónico"
            name="correo"
            type="email"
            icon={Mail}
            readOnly
            defaultValue={shipping.email}
          />
          <TextField
            label="Dirección"
            name="direccion"
            icon={House}
            readOnly
            defaultValue={`${shipping.address}, ${shipping.city}`}
          />
          <SelectField
            label="Lista de bancos"
            placeholder="Lista de Bancos"
            name="banco"
            options={banks}
            required
          />

          <Link href="/envio" className="inline-block text-sm underline underline-offset-2">
            Cambiar datos de envío
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:w-[430px] lg:self-end lg:justify-self-end">
        <OrderSummary methodLabel="Transferencia bancaria" />
        {error && (
          <p role="alert" className="text-sm font-medium text-[#7a0a0a]">
            {error}
          </p>
        )}
        <PayButton disabled={!canPay || loading}>
          {loading ? "Processing…" : "Pay Now"}
        </PayButton>
      </div>
    </form>
  );
}
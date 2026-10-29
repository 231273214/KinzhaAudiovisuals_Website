"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useShipping } from "@/hooks/useShipping";
import { saveLastOrder } from "@/lib/checkout/store";

export type PaymentMethodCode = "PSE" | "TRANSFERENCIA";

export function usePlaceOrder() {
  const router = useRouter();
  const cart = useCart();
  const { ready: shippingReady, data: shipping } = useShipping();

  const submitting = useRef(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      submitting.current = false;
      setLoading(false);
      setError(null);
    };
  }, []);

  const ready = cart.ready && shippingReady;
  const canPay = ready && Boolean(shipping) && cart.lines.length > 0;

  async function placeOrder(paymentMethod: PaymentMethodCode) {
    if (!canPay || !shipping || submitting.current) return;
    submitting.current = true;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout/simulated", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          paymentMethod,
          customer: shipping,
          items: cart.lines.map((l) => ({
            productId: l.productId,
            size: l.size ?? "",
            quantity: l.quantity,
          })),
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.orderNumber) {
        setError(json?.error ?? "No pudimos procesar tu pedido. Inténtalo de nuevo.");
        submitting.current = false;
        setLoading(false);
        return;
      }

      saveLastOrder({
        orderNumber: json.orderNumber,
        total: json.total,
        email: shipping.email,
      });
      router.push("/confirmacion");
    } catch {
      setError("No pudimos conectar con el servidor. Inténtalo de nuevo.");
      submitting.current = false;
      setLoading(false);
    }
  }

  return { ready, shipping, canPay, loading, error, placeOrder };
}
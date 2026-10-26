import type { Metadata } from "next";
import OrderConfirmation from "@/components/checkout/OrderConfirmation";

export const metadata: Metadata = {
  title: "Pedido recibido | Kinzha Audiovisuals",
  robots: { index: false },
};

export default function ConfirmacionPage() {
  return <OrderConfirmation />;
}
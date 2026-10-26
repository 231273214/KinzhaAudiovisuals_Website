import type { Metadata } from "next";
import ShippingForm from "@/components/checkout/ShippingForm";

export const metadata: Metadata = {
  title: "Datos de envío | Kinzha Audiovisuals",
  robots: { index: false },
};

export default function EnvioPage() {
  return <ShippingForm />;
}
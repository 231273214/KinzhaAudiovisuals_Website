import type { Metadata } from "next";
import AcceptedMethods from "@/components/checkout/AcceptedMethods";
import PaymentMethodPicker from "@/components/checkout/PaymentMethodPicker";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Método de pago | Kinzha Audiovisuals",
};

export default function PagoPage() {
  return (
    <div className="pb-24 pt-10 font-title">
      <Container>
        <h1 className="text-center text-5xl font-light md:text-8xl">
          Kinzha audiovisuals
        </h1>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <section aria-labelledby="pago-title">
            <h2 id="pago-title" className="mb-4 text-3xl font-light uppercase">
              Método de pago
            </h2>
            <PaymentMethodPicker />
          </section>

          <AcceptedMethods />
        </div>
      </Container>
    </div>
  );
}
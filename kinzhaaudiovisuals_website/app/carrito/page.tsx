import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageTitle from "@/components/ui/PageTitle";
import CartView from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Carrito | Kinzha Audiovisuals",
};

export default function CarritoPage() {
  return (
    <>
      <section className="pt-12">
        <Container>
          <PageTitle>Carrito</PageTitle>
        </Container>
      </section>
      <CartView />
    </>
  );
}
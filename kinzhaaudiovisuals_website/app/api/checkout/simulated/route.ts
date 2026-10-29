import { after, NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email/send-order-email";
import { createOrder } from "@/lib/orders/create-order";
import { OrderError } from "@/lib/orders/errors";
import { checkoutSchema } from "@/lib/orders/schema";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Datos no válidos." },
      { status: 400 },
    );
  }

  try {
    const order = await createOrder(parsed.data);
    after(() => sendOrderEmail(order));

    return NextResponse.json(
      { orderNumber: order.orderNumber, total: order.total },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof OrderError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("[CHECKOUT_ERROR]", error);
    return NextResponse.json(
      { error: "No pudimos procesar tu pedido. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
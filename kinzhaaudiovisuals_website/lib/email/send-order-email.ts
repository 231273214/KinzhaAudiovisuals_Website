import "server-only";
import { Resend } from "resend";
import { formatCOP } from "@/lib/format";

export type OrderEmailData = {
  orderNumber: string;
  total: number;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  city: string;
  items: { name: string; size: string; quantity: number; unitPrice: number }[];
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const itemLabel = (item: OrderEmailData["items"][number]) =>
  `${item.name}${item.size ? ` (Talla ${item.size})` : ""} × ${item.quantity}`;

export async function sendOrderEmail(order: OrderEmailData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[EMAIL] Falta RESEND_API_KEY: no se envió el correo.");
    return;
  }

  const rows = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #333;">${escapeHtml(itemLabel(item))}</td>
          <td style="padding:8px;border-bottom:1px solid #333;text-align:right;">${escapeHtml(
            formatCOP(item.unitPrice * item.quantity),
          )}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="background:#121212;color:#ffffff;font-family:Arial,sans-serif;padding:24px;">
      <h1 style="color:#B00000;margin:0 0 12px;">¡Gracias por tu pedido, ${escapeHtml(order.customerName)}!</h1>
      <p>Recibimos tu pedido. Este es el resumen:</p>
      <h3>Número de pedido: <strong>${escapeHtml(order.orderNumber)}</strong></h3>
      <table style="width:100%;color:#ffffff;border-collapse:collapse;">
        <thead>
          <tr style="background:#292525;">
            <th style="padding:8px;text-align:left;">Producto</th>
            <th style="padding:8px;text-align:right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <h2 style="text-align:right;margin-top:16px;">Total: ${escapeHtml(formatCOP(order.total))}</h2>
      <hr style="border:none;border-top:1px solid #333;margin:24px 0;" />
      <p style="font-size:12px;color:#aaaaaa;">
        Dirección de entrega: ${escapeHtml(order.shippingAddress)}, ${escapeHtml(order.city)}
      </p>
      <p style="font-size:12px;color:#aaaaaa;">
        Pedido de demostración: no se realizó ningún cobro.
      </p>
    </div>`;

  const text = [
    `¡Gracias por tu pedido, ${order.customerName}!`,
    `Número de pedido: ${order.orderNumber}`,
    "",
    ...order.items.map((i) => `- ${itemLabel(i)}: ${formatCOP(i.unitPrice * i.quantity)}`),
    "",
    `Total: ${formatCOP(order.total)}`,
    `Entrega: ${order.shippingAddress}, ${order.city}`,
    "Pedido de demostración: no se realizó ningún cobro.",
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "Kinzha Audiovisuals <onboarding@resend.dev>",
      to: order.customerEmail,
      subject: `Pedido ${order.orderNumber} recibido - Kinzha Audiovisuals`,
      html,
      text,
    });
    if (error) console.error("[EMAIL_ERROR]", error);
  } catch (error) {
    console.error("[EMAIL_ERROR]", error);
  }
}
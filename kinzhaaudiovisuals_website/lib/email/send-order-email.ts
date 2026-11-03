import "server-only";
import nodemailer from "nodemailer";
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
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.warn("[EMAIL] Faltan EMAIL_USER o EMAIL_PASS: no se envió el correo.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

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
    const info = await transporter.sendMail({
      from: `"kinzhaaudiovisuals@gmail.com" <${user}>`, 
      to: order.customerEmail,
      subject: `Pedido ${order.orderNumber} recibido - Kinzha Audiovisuals`,
      html,
      text,
    });
    console.log("[EMAIL] Correo enviado con éxito:", info.messageId);
  } catch (error) {
    console.error("[EMAIL_ERROR] Error al enviar:", error);
  }
}
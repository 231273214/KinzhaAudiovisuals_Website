import { z } from "zod";
import { MAX_QTY } from "@/lib/cart/store";

const itemSchema = z.object({
  productId: z.string().min(1, "Producto no válido.").max(100),
  size: z.string().max(10).default(""),
  quantity: z
    .number("Cantidad no válida.")
    .int("Cantidad no válida.")
    .min(1, "Cantidad no válida.")
    .max(MAX_QTY, `Máximo ${MAX_QTY} unidades por producto.`),
});

export const checkoutSchema = z.object({
  paymentMethod: z.enum(["PSE", "TRANSFERENCIA"], "Elige un método de pago."),
  customer: z.object({
    name: z.string().trim().min(2, "Escribe tu nombre.").max(100),
    email: z.string().trim().toLowerCase().email("Escribe un correo válido.").max(254),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9+()\-\s]{7,20}$/, "Escribe un teléfono válido."),
    address: z.string().trim().min(5, "Escribe tu dirección.").max(200),
    city: z.string().trim().min(2, "Escribe tu ciudad.").max(80),
  }),
  items: z.array(itemSchema).min(1, "Tu carrito está vacío.").max(30),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
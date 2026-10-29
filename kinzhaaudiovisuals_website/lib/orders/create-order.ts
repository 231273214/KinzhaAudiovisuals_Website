import "server-only";
import { MAX_QTY } from "@/lib/cart/store";
import { getProductById, getProductSizes } from "@/lib/data/products";
import { db } from "@/lib/db";
import { OrderError } from "./errors";
import { generateOrderNumber } from "./number";
import type { CheckoutInput } from "./schema";

type Line = {
  productId: string;
  name: string;
  size: string;
  quantity: number;
  unitPrice: number;
};

function buildLines(items: CheckoutInput["items"]): Line[] {
  const merged = new Map<string, { productId: string; size: string; quantity: number }>();
  for (const item of items) {
    const key = `${item.productId}::${item.size}`;
    const current = merged.get(key);
    merged.set(key, { ...item, quantity: (current?.quantity ?? 0) + item.quantity });
  }

  const lines = [...merged.values()].map((item) => {
    const product = getProductById(item.productId);
    if (!product) {
      throw new OrderError("Uno de los productos de tu carrito ya no está disponible.");
    }
    if (item.quantity > MAX_QTY) {
      throw new OrderError(`Máximo ${MAX_QTY} unidades por producto: ${product.name}.`);
    }

    const sizes = getProductSizes(product);
    if (sizes.length > 0 && !sizes.includes(item.size)) {
      throw new OrderError(`Elige una talla válida para ${product.name}.`);
    }
    if (sizes.length === 0 && item.size !== "") {
      throw new OrderError(`${product.name} no lleva talla.`);
    }

    return {
      productId: product.id,
      name: product.name,
      size: item.size,
      quantity: item.quantity,
      unitPrice: product.price,
    };
  });

  return lines.sort((a, b) =>
    `${a.productId}::${a.size}`.localeCompare(`${b.productId}::${b.size}`),
  );
}

function isUniqueViolation(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2002"
  );
}

export async function createOrder(input: CheckoutInput) {
  const lines = buildLines(input.items);
  const total = lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);

  for (let attempt = 1; ; attempt++) {
    try {
      return await db.$transaction(
        async (tx) => {
          for (const line of lines) {
            const { count } = await tx.stockItem.updateMany({
              where: {
                productId: line.productId,
                size: line.size,
                quantity: { gte: line.quantity },
              },
              data: { quantity: { decrement: line.quantity } },
            });

            if (count === 0) {
              throw new OrderError(
                `No hay stock suficiente de "${line.name}"${line.size ? ` (talla ${line.size})` : ""}.`,
                409,
              );
            }
          }

          return tx.order.create({
            data: {
              orderNumber: generateOrderNumber(),
              paymentMethod: input.paymentMethod,
              customerName: input.customer.name,
              customerEmail: input.customer.email,
              customerPhone: input.customer.phone,
              shippingAddress: input.customer.address,
              city: input.customer.city,
              total,
              items: {
                create: lines.map(({ productId, name, size, quantity, unitPrice }) => ({
                  productId,
                  name,
                  size,
                  quantity,
                  unitPrice,
                })),
              },
            },
            select: {
              orderNumber: true,
              total: true,
              customerName: true,
              customerEmail: true,
              shippingAddress: true,
              city: true,
              items: {
                select: { name: true, size: true, quantity: true, unitPrice: true },
              },
            },
          }); 
        },
        {
          maxWait: 10000,
          timeout: 20000,
        },
      );
    } catch (error) {
      if (isUniqueViolation(error) && attempt < 3) continue;
      throw error;
    }
  }
}
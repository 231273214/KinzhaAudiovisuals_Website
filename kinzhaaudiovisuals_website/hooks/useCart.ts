"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  addItem,
  clearCart,
  getServerSnapshot,
  getSnapshot,
  removeItem,
  setQuantity,
  subscribe,
  type CartItem,
} from "@/lib/cart/store";
import { getProductById, type Product } from "@/lib/data/products";

export type CartLine = CartItem & { product: Product; subtotal: number };

const subscribeNoop = () => () => {};

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // false en el servidor y en la hidratación; true ya en el navegador
  const ready = useSyncExternalStore(subscribeNoop, () => true, () => false);

  const lines = useMemo<CartLine[]>(
    () =>
      items.flatMap((item) => {
        const product = getProductById(item.productId);
        return product ? [{ ...item, product, subtotal: product.price * item.quantity }] : [];
      }),
    [items],
  );

  const count = lines.reduce((sum, l) => sum + l.quantity, 0);
  const total = lines.reduce((sum, l) => sum + l.subtotal, 0);

  return { ready, lines, count, total, add: addItem, setQuantity, remove: removeItem, clear: clearCart };
}
import { getProductById } from "@/lib/data/products";

export type CartItem = { productId: string; size?: string; quantity: number };

const KEY = "kinzha-cart-v1";
export const MAX_QTY = 10;

const EMPTY: CartItem[] = [];
let items: CartItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

export const lineKey = (productId: string, size?: string) => `${productId}::${size ?? ""}`;

const same = (a: CartItem, productId: string, size?: string) =>
  a.productId === productId && a.size === size;

// Lee el carrito guardado y descarta lo que ya no exista en el catálogo
function read(): CartItem[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    if (!Array.isArray(raw)) return EMPTY;
    return raw
      .filter(
        (i) =>
          typeof i?.productId === "string" &&
          Number.isInteger(i?.quantity) &&
          i.quantity > 0 &&
          getProductById(i.productId),
      )
      .map((i) => ({
        productId: i.productId,
        size: typeof i.size === "string" ? i.size : undefined,
        quantity: Math.min(i.quantity, MAX_QTY),
      }));
  } catch {
    return EMPTY;
  }
}

function commit(next: CartItem[]) {
  items = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* almacenamiento lleno o bloqueado: el carrito sigue en memoria */
  }
  listeners.forEach((l) => l());
}

// Si cambia el carrito en otra pestaña, nos actualizamos
function onStorage(e: StorageEvent) {
  if (e.key !== KEY) return;
  items = read();
  listeners.forEach((l) => l());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}

export function getSnapshot() {
  if (!loaded && typeof window !== "undefined") {
    loaded = true;
    items = read();
  }
  return items;
}

export const getServerSnapshot = () => EMPTY;

export function addItem(productId: string, size?: string) {
  const current = getSnapshot();
  const exists = current.some((i) => same(i, productId, size));
  commit(
    exists
      ? current.map((i) =>
          same(i, productId, size) ? { ...i, quantity: Math.min(i.quantity + 1, MAX_QTY) } : i,
        )
      : [...current, { productId, size, quantity: 1 }],
  );
}

export function setQuantity(productId: string, size: string | undefined, quantity: number) {
  const current = getSnapshot();
  commit(
    quantity <= 0
      ? current.filter((i) => !same(i, productId, size))
      : current.map((i) =>
          same(i, productId, size) ? { ...i, quantity: Math.min(quantity, MAX_QTY) } : i,
        ),
  );
}

export function removeItem(productId: string, size?: string) {
  commit(getSnapshot().filter((i) => !same(i, productId, size)));
}

export function clearCart() {
  commit([]);
}
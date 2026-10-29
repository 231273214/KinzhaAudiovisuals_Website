export type ShippingData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
};

export type LastOrder = {
  orderNumber: string;
  total: number;
  email: string;
  cleared?: boolean;
};

const SHIPPING_KEY = "kinzha-shipping-v1";
const ORDER_KEY = "kinzha-last-order-v1";

let shipping: ShippingData | null = null;
let lastOrder: LastOrder | null = null;
let loaded = false;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

function readJson(key: string): Record<string, unknown> | null {
  try {
    const raw = JSON.parse(sessionStorage.getItem(key) ?? "null");
    return raw && typeof raw === "object" ? raw : null;
  } catch {
    return null;
  }
}

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  const s = readJson(SHIPPING_KEY);
  if (s && ["name", "email", "phone", "address", "city"].every((k) => typeof s[k] === "string")) {
    shipping = s as ShippingData;
  }

  const o = readJson(ORDER_KEY);
  if (
    o &&
    typeof o.orderNumber === "string" &&
    typeof o.total === "number" &&
    typeof o.email === "string"
  ) {
    lastOrder = o as LastOrder;
  }
}

function write(key: string, value: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
  }
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getShippingSnapshot() {
  load();
  return shipping;
}

export function getLastOrderSnapshot() {
  load();
  return lastOrder;
}

export function saveShipping(data: ShippingData) {
  shipping = data;
  write(SHIPPING_KEY, data);
  emit();
}

export function saveLastOrder(order: LastOrder) {
  lastOrder = order;
  write(ORDER_KEY, order);
  emit();
}

export function markLastOrderCleared() {
  if (!lastOrder || lastOrder.cleared) return;
  lastOrder = { ...lastOrder, cleared: true };
  write(ORDER_KEY, lastOrder);
  emit();
}
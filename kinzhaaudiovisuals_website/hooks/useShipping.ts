"use client";

import { useSyncExternalStore } from "react";
import {
  getLastOrderSnapshot,
  getShippingSnapshot,
  saveShipping,
  subscribe,
} from "@/lib/checkout/store";

const subscribeNoop = () => () => {};
const serverNull = () => null;

export function useShipping() {
  const data = useSyncExternalStore(subscribe, getShippingSnapshot, serverNull);
  const ready = useSyncExternalStore(subscribeNoop, () => true, () => false);
  return { ready, data, save: saveShipping };
}

export function useLastOrder() {
  const order = useSyncExternalStore(subscribe, getLastOrderSnapshot, serverNull);
  const ready = useSyncExternalStore(subscribeNoop, () => true, () => false);
  return { ready, order };
}
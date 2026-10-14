"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CartIcon from "@/components/ui/CartIcon";
import { addItem } from "@/lib/cart/store";
import type { Product } from "@/lib/data/products";
import { formatCOP } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState<string>();
  const [added, setAdded] = useState(false);
  const needsSize = (product.sizes?.length ?? 0) > 0;

  useEffect(() => {
    if (!added) return;
    const id = setTimeout(() => setAdded(false), 1500);
    return () => clearTimeout(id);
  }, [added]);

  return (
    <li className="flex flex-col rounded-lg bg-card p-3 text-black">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 20vw, 45vw"
          className="object-contain"
        />
      </div>

      <h3 className="mt-3 font-display text-base font-bold">{product.name}</h3>
      <p className="text-sm">{formatCOP(product.price)}</p>

      {needsSize && (
        <div className="mt-2 flex flex-wrap gap-1" role="group" aria-label="Talla">
          {product.sizes!.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              className={`rounded border border-black/40 px-2 py-0.5 text-xs ${
                size === s ? "bg-black text-white" : ""
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        disabled={needsSize && !size}
        title={needsSize && !size ? "Elige una talla" : undefined}
        onClick={() => {
          addItem(product.id, size);
          setAdded(true);
        }}
        className="mt-3 flex items-center gap-2 self-start rounded-full bg-action px-5 py-1.5 text-xs text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CartIcon />
        {added ? "¡Agregado!" : "Comprar"}
      </button>
    </li>
  );
}
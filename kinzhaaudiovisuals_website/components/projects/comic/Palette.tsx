"use client";

import { useEffect, useState } from "react";

export default function Palette({ colors }: { colors: string[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(null), 1400);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      setCopied(hex);
    } catch {
    }
  };

  return (
    <ul className="flex flex-col gap-[1.6cqw]">
      {colors.map((hex) => {
        const n = parseInt(hex, 16);
        const luminance = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);

        return (
          <li key={hex}>
            <button
              type="button"
              onClick={() => copy(hex)}
              className="group flex w-full items-center justify-between rounded-[1cqw] border border-black/30 px-[2.5cqw] py-[1.4cqw] text-left transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: `#${hex}`, color: luminance > 140 ? "#000" : "#fff" }}
            >
              <span className="bk-small font-comic tracking-wider">#{hex}</span>
              <span
                className={`bk-cap transition-opacity ${
                  copied === hex ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                }`}
              >
                {copied === hex ? "¡Copiado!" : "Copiar"}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
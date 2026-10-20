import type { ReactNode } from "react";

const GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .16 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const GUTTER = {
  left: "linear-gradient(to left, rgb(0 0 0 / .28), transparent 9%)",
  right: "linear-gradient(to right, rgb(0 0 0 / .28), transparent 9%)",
  none: "linear-gradient(transparent, transparent)",
};

type Props = { side?: keyof typeof GUTTER; className?: string; children?: ReactNode };

export function Paper({ side = "none", className = "", children }: Props) {
  return (
    <div
      className={`@container relative size-full overflow-hidden bg-dossier text-black ${className}`}
      style={{ backgroundImage: `${GUTTER[side]}, ${GRAIN}` }}
    >
      {children}
    </div>
  );
}
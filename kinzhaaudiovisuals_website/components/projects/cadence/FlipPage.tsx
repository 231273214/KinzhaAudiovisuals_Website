"use client";

import { createContext, forwardRef, useContext, type ReactNode } from "react";

export const ActiveSpreadContext = createContext(0);

type Props = { spread: number; render: (active: boolean) => ReactNode };

export const FlipPage = forwardRef<HTMLDivElement, Props>(function FlipPage(
  { spread, render },
  ref,
) {
  const active = useContext(ActiveSpreadContext) === spread;
  return (
    <div ref={ref} className="size-full overflow-hidden bg-dossier">
      {render(active)}
    </div>
  );
});
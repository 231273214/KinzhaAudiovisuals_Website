"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";
import HTMLFlipBook from "react-pageflip";
import { ActiveSpreadContext, FlipPage } from "./FlipPage";

export type BookSpread = {
  id: string;
  left: (active: boolean) => ReactNode;
  right: (active: boolean) => ReactNode;
};

type FlipApi = {
  pageFlip: () =>
    | {
        getCurrentPageIndex: () => number;
        flipNext: () => void;
        flipPrev: () => void;
        turnToPage: (page: number) => void;
      }
    | undefined;
};

type Props = { spreads: BookSpread[]; current: number; onChange: (i: number) => void };

export function Book({ spreads, current, onChange }: Props) {
  const flipRef = useRef<FlipApi>(null);
  const busyRef = useRef(false); 
  const targetRef = useRef(current);

  const pages = useMemo(
    () =>
      spreads.flatMap((s, i) => [
        <FlipPage key={`${s.id}-l`} spread={i} render={s.left} />,
        <FlipPage key={`${s.id}-r`} spread={i} render={s.right} />,
      ]),
    [spreads],
  );

  useEffect(() => {
    const pf = flipRef.current?.pageFlip();
    if (!pf) return;

    if (busyRef.current) {
      if (current !== targetRef.current) onChange(targetRef.current);
      return;
    }

    const from = Math.floor(pf.getCurrentPageIndex() / 2);
    targetRef.current = current;
    if (from === current) return;

    if (current === from + 1) {
      busyRef.current = true;
      pf.flipNext();
    } else if (current === from - 1) {
      busyRef.current = true;
      pf.flipPrev();
    } else {
      pf.turnToPage(current * 2); 
    }
  }, [current, onChange]);

  return (
    <div className="relative aspect-[1100/700] w-[min(92vw,calc(86svh*1.5714),1100px)]">
      <ActiveSpreadContext.Provider value={current}>
        <HTMLFlipBook
          ref={flipRef}
          width={550}
          height={700}
          size="stretch"
          minWidth={200}
          maxWidth={1000}
          minHeight={300}
          maxHeight={1500}
          startPage={0}
          showCover={false}
          usePortrait={false}
          drawShadow
          maxShadowOpacity={0.45}
          flippingTime={900}
          showPageCorners
          useMouseEvents
          clickEventForward
          mobileScrollSupport
          swipeDistance={30}
          startZIndex={0}
          autoSize
          disableFlipByClick={false}
          renderOnlyPageLengthChange
          className=""
          style={{}}
          onChangeState={(e: { data: string }) => {
            if (e.data === "flipping") busyRef.current = true;
            else if (e.data === "read") busyRef.current = false;
          }}
          onFlip={(e: { data: number }) => {
            const spread = Math.floor(e.data / 2);
            targetRef.current = spread;
            onChange(spread);
          }}
        >
          {pages}
        </HTMLFlipBook>
      </ActiveSpreadContext.Provider>
    </div>
  );
}
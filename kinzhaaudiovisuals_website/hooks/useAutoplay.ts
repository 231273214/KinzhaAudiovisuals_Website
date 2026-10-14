import { useEffect, useState, type RefObject } from "react";

type Options = {
  ref: RefObject<HTMLElement | null>; 
  delay: number;                     
  paused?: boolean;
  resetKey?: unknown;                
  onTick: () => void;
};

export function useAutoplay({ ref, delay, paused = false, resetKey, onTick }: Options) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (paused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setTimeout(onTick, delay);
    return () => clearTimeout(id);
  }, [paused, inView, delay, resetKey, onTick]);
}
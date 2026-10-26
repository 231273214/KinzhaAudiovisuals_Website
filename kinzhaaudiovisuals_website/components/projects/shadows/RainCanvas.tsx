"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

type Drop = { x: number; y: number; len: number; speed: number };

const BASE_WIND = Math.tan((15 * Math.PI) / 180); 

export default function RainCanvas() {
  const [wrapRef, inView] = useInView<HTMLDivElement>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || reduce || !inView) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let drops: Drop[] = [];
    let wind = BASE_WIND;
    let targetWind = BASE_WIND;
    let minFrame = 0;
    let last = performance.now();
    let raf = 0;

    const spawn = (anywhere: boolean): Drop => ({
      x: Math.random() * (w + h * 0.6) - h * 0.3,
      y: anywhere ? Math.random() * h : -30 - Math.random() * 80,
      len: 10 + Math.random() * 16,
      speed: 650 + Math.random() * 450,
    });

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.strokeStyle = "rgba(170, 185, 210, 0.3)";
      ctx.lineWidth = 1;
      const count = Math.round(Math.min(150, Math.max(35, (w * h) / 10000)));
      drops = Array.from({ length: count }, () => spawn(true));
      minFrame = w < 768 ? 1000 / 30 : 0;
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const elapsed = now - last;
      if (elapsed < minFrame) return;
      last = now;
      const dt = Math.min(elapsed, 50) / 1000;

      wind += (targetWind - wind) * Math.min(1, dt * 3);
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      for (const d of drops) {
        d.x += wind * d.speed * dt;
        d.y += d.speed * dt;
        if (d.y - d.len > h || d.x < -h * 0.4 || d.x > w + h * 0.4) {
          Object.assign(d, spawn(false));
          continue;
        }
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - wind * d.len, d.y - d.len);
      }
      ctx.stroke();
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      targetWind = BASE_WIND + (e.clientX / window.innerWidth - 0.5) * 0.3;
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce, inView, wrapRef]);

  return (
    <div ref={wrapRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
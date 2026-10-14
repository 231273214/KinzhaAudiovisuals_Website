export function scrollToTop(duration = 1000) {
  const start = window.scrollY;
  if (start === 0) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, 0);
    return;
  }

  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  let frame = 0;
  const cleanup = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
  };
  const cancel = () => {
    cancelAnimationFrame(frame);
    cleanup();
  };
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });

  const startTime = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start * (1 - ease(progress)));
    if (progress < 1) frame = requestAnimationFrame(step);
    else cleanup();
  };
  frame = requestAnimationFrame(step);
}
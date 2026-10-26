export default function FilmOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="noir-grain absolute -inset-1/2 opacity-[0.08] motion-safe:md:animate-grain" />
      <div className="noir-scanlines absolute inset-0 opacity-70" />
      <div className="noir-vignette absolute inset-0" />
    </div>
  );
}
export default function Fog() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -inset-x-1/2 bottom-0 h-3/5 bg-[radial-gradient(ellipse_at_30%_80%,rgba(160,174,192,0.16),transparent_60%)] will-change-transform motion-safe:animate-drift-slow" />
      <div className="absolute -inset-x-1/2 bottom-[10%] h-1/2 bg-[radial-gradient(ellipse_at_70%_70%,rgba(160,174,192,0.12),transparent_55%)] will-change-transform motion-safe:animate-drift-fast" />
    </div>
  );
}
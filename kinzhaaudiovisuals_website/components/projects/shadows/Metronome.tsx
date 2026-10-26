export default function Metronome() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-end justify-center pb-3"
    >
      <div className="relative h-[85%] w-[46%]">
        <div className="absolute inset-0 bg-[#2a2118] [clip-path:polygon(30%_0,70%_0,100%_100%,0_100%)]" />
        <div className="absolute bottom-[10%] left-1/2 -ml-px h-[78%] w-0.5 origin-bottom bg-amber-glow motion-safe:animate-sway">
          <span className="absolute left-1/2 top-[22%] h-3 w-4 -translate-x-1/2 bg-amber-glow" />
        </div>
      </div>
    </div>
  );
}
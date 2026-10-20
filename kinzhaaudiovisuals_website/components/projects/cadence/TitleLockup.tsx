type Props = { invert?: boolean; className?: string };

export function TitleLockup({ invert = false, className = "" }: Props) {
  return (
    <div className={`font-typewriter uppercase leading-none ${className}`}>
      <div
        className={`inline-block border-[0.07em] px-[0.25em] py-[0.12em] ${
          invert ? "border-white text-white" : "border-black text-black"
        }`}
      >
        Cadence of
      </div>
      <div
        className={`ml-[1.1em] mt-[0.12em] w-fit px-[0.35em] py-[0.12em] ${
          invert ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        Shadows
      </div>
    </div>
  );
}
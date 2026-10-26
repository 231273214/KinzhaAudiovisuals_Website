import Image from "next/image";

type Props = { src: string; className?: string };

export default function LightBulb({ src, className = "" }: Props) {
  return (
    <div className={`group ${className}`}>
      <span aria-hidden="true" className="absolute -inset-3" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] size-44 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-500 [background-image:radial-gradient(circle,rgba(250,204,21,0.6)_0%,rgba(250,204,21,0.2)_40%,transparent_70%)] group-hover:opacity-100 motion-safe:group-hover:animate-flicker-once"
      />

      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={40}
        height={60}
        className="relative h-auto w-full mix-blend-multiply transition-[filter] duration-300 group-hover:brightness-110"
      />
    </div>
  );
}
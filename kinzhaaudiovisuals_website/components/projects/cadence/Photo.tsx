import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
};

export function Photo({ src, alt, className = "", fit = "cover", sizes = "(min-width: 768px) 40vw, 90vw", priority }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "cover" ? "object-cover" : "object-contain"}
      />
    </div>
  );
}
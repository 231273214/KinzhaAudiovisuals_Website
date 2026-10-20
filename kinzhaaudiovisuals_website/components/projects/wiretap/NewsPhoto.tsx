import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption: string;
  aspect: string;          
  sizes: string;
  circle?: boolean;
  className?: string;      
  mediaClassName?: string; 
};

export default function NewsPhoto({
  src,
  alt,
  caption,
  aspect,
  sizes,
  circle = false,
  className = "",
  mediaClassName = "",
}: Props) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden bg-black/10 ${aspect} ${
          circle ? "rounded-full border-2 border-black" : "border border-black"
        } ${mediaClassName}`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className={`${circle ? "mt-3" : "mt-1"} text-xs italic leading-snug`}>
        <span className="font-bold">Leyenda:</span> {caption}
      </figcaption>
    </figure>
  );
}
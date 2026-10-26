import Image from "next/image";
import TiltFrame from "./TiltFrame";

type Props = {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  sizes: string;
  circle?: boolean;
  tilt?: boolean;
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
  tilt = false,
  className = "",
  mediaClassName = "",
}: Props) {
  const frame = `relative overflow-hidden bg-black/10 ${aspect} ${
    circle ? "rounded-full border-2 border-black" : "border border-black"
  } ${mediaClassName}`;

  const image = <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />;

  return (
    <figure className={className}>
      {tilt ? (
        <TiltFrame className={frame}>{image}</TiltFrame>
      ) : (
        <TiltFrame className={frame}>{image}</TiltFrame>
      )}
      <figcaption className={`${circle ? "mt-3" : "mt-1"} text-xs italic leading-snug`}>
        <span className="font-bold">Leyenda:</span> {caption}
      </figcaption>
    </figure>
  );
}
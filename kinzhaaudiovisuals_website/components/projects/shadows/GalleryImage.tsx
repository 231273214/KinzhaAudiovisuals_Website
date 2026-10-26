import Image from "next/image";
import type { GalleryItem } from "@/lib/data/shadows";

type Props = {
  item: GalleryItem;
  index: number;
  sizes: string;
  className?: string;
};

export default function GalleryImage({ item, index, sizes, className = "" }: Props) {
  if (!item.src) {
    return (
      <span className="absolute inset-0 flex items-center justify-center font-typewriter text-xs uppercase tracking-[0.3em] text-noir-muted">
        Captura {String(index + 1).padStart(2, "0")}
      </span>
    );
  }

  return <Image src={item.src} alt={item.alt} fill sizes={sizes} className={className} />;
}
import { Paper } from "./Paper";
import { Photo } from "./Photo";

type Props = { title: string; images: string[]; side: "left" | "right" };

export function MoodboardPage({ title, images, side }: Props) {
  return (
    <Paper side={side}>
      <div className="relative flex size-full flex-col px-[6cqw] pb-[5cqw] pt-[9cqw]">
        <div className="absolute left-1/2 top-[3.5cqw] h-[6cqw] w-[26cqw] -translate-x-1/2 -rotate-1 bg-neutral-500/70" aria-hidden />
        <div className="flex flex-1 flex-col rounded-[2.5cqw] border-[0.5cqw] border-neutral-500 bg-neutral-300 p-[3cqw] shadow-inner">
          <div className="grid flex-1 auto-rows-fr grid-cols-3 gap-[1.2cqw] bg-black p-[2cqw]">
            {images.map((src, i) => (
              <Photo
                key={src}
                src={src}
                alt={`${title} referencia ${i + 1}`}
                className={`bg-neutral-800 transition duration-300 hover:z-10 hover:scale-[1.06] hover:shadow-lg ${
                  images.length === 7 && i === 6 ? "col-span-2" : ""
                }`}
                sizes="200px"
              />
            ))}
          </div>
          <p className="mt-[2.5cqw] text-center text-[3cqw] uppercase tracking-widest">{title}</p>
        </div>
      </div>
    </Paper>
  );
}
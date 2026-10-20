import { Paper } from "./Paper";
import { Photo } from "./Photo";
import type { TextBlock, TextPage } from "@/lib/data/cadence";

function Block({ b }: { b: TextBlock }) {
  switch (b.kind) {
    case "title":
      return <h2 className="text-center text-[4.4cqw] uppercase">{b.text}</h2>;
    case "heading":
      return <h3 className="mt-[1.6cqw] text-[4cqw] uppercase leading-none">{b.text}</h3>;
    case "label":
      return <p className="text-[2.4cqw]">{b.text}</p>;
    case "field":
      return (
        <p className="text-justify">
          <span className="font-bold">{b.label}: </span>
          {b.text}
        </p>
      );
    case "slug":
      return <p className="mt-[0.8cqw] uppercase">{b.text}</p>;
    case "center":
      return <p className="text-center uppercase">{b.text}</p>;
    default:
      return <p className="text-justify">{b.text}</p>;
  }
}

type Props = { page: TextPage; side: "left" | "right" };

export function TextPageView({ page, side }: Props) {
  return (
    <Paper side={side}>
      <div className="flex size-full flex-col gap-[1.5cqw] overflow-hidden px-[8cqw] py-[7cqw] text-[2.15cqw] leading-[1.45]">
        {page.blocks.map((b, i) => (
          <Block key={i} b={b} />
        ))}
        {page.figures && (
          <div className="mt-auto flex items-end justify-around">
            {page.figures.map((src) => (
              <Photo key={src} src={src} alt="" fit="contain" className="h-[17cqw] w-[22cqw]" sizes="120px" />
            ))}
          </div>
        )}
      </div>
    </Paper>
  );
}
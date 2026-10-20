import { Paper } from "./Paper";
import { Photo } from "./Photo";

type Props = {
  title: string;
  label: string;
  step: string;
  src: string;
  side: "left" | "right";
};

export function ScenarioPage({ title, label, step, src, side }: Props) {
  return (
    <Paper side={side}>
      <div className="group flex size-full flex-col justify-center px-[6cqw] py-[6cqw]">
        <p className="text-[2.2cqw] uppercase tracking-[0.2em] text-black/60">Escenarios — {title}</p>
        <p className="mb-[2cqw] mt-[0.5cqw] text-[4.2cqw] uppercase leading-none">
          {step} · {label}
        </p>
        <div className="relative">
          <Photo
            src={src}
            alt={`${title}: ${label}`}
            className="aspect-video bg-neutral-800 shadow-[0_0.6cqw_1.4cqw_rgb(0_0_0/.35)]"
            sizes="(min-width: 768px) 40vw, 90vw"
          />
          <span className="absolute -right-[2.5cqw] -top-[2cqw] h-[4.5cqw] w-[11cqw] rotate-[35deg] bg-neutral-500/70" aria-hidden />
          <span className="absolute -bottom-[2cqw] -left-[2.5cqw] h-[4.5cqw] w-[11cqw] rotate-[35deg] bg-neutral-500/70" aria-hidden />
        </div>
      </div>
    </Paper>
  );
}
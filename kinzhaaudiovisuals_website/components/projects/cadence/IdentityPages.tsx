import { IDENTITY } from "@/lib/data/cadence";
import { Paper } from "./Paper";
import { Photo } from "./Photo";
import { TitleLockup } from "./TitleLockup";

export function IdentityLeft() {
  return (
    <Paper side="left">
      <div className="flex size-full flex-col px-[6cqw] py-[6cqw]">
        <div className="relative flex-1 bg-black">
          <Photo src={IDENTITY.silhouette} alt="Silueta del detective Fonseca" className="absolute inset-0" sizes="45vw" />
          <TitleLockup className="absolute bottom-[3cqw] left-[8cqw] text-[5.5cqw]" invert />
        </div>
        <div className="mt-[3cqw] grid grid-cols-2 gap-[3cqw] text-[2.2cqw] uppercase">
          <div>
            <p>Paleta de colores:</p>
            <ul className="mt-[1cqw] space-y-[0.8cqw]">
              {IDENTITY.palette.map((hex) => (
                <li key={hex} className="flex items-center justify-between gap-[2cqw]">
                  <span>{hex}</span>
                  <span className="h-[2.2cqw] w-[11cqw] rounded-full border border-black/30" style={{ backgroundColor: hex }} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Tipografías:</p>
            <ul className="mt-[1cqw]">
              {IDENTITY.fonts.map((f) => (
                <li key={f} className="normal-case">{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export function IdentityRight() {
  return (
    <Paper side="right">
      <div className="flex size-full flex-col items-center justify-center gap-[5cqw] px-[6cqw] py-[6cqw]">
        <div className="relative aspect-[4/5] w-[88%] overflow-hidden rounded-[12cqw] bg-black transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
          <Photo src={IDENTITY.silhouette} alt="Ícono de la app" className="absolute inset-0" sizes="45vw" />
        </div>
        <TitleLockup className="text-[5cqw]" />
      </div>
    </Paper>
  );
}
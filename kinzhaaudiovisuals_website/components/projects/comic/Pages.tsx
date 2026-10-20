import Link from "next/link";
import Art from "@/components/projects/comic/Art";
import Palette from "@/components/projects/comic/Palette";
import type { ComicPage } from "@/lib/data/comic";

type Of<T extends ComicPage["type"]> = Extract<ComicPage, { type: T }>;

const PAGE = "flex h-full flex-col gap-[3cqw] p-[6cqw]";
const TITLE = "bk-h2 origin-left -skew-x-6 font-comic font-bold";

export function CoverPage({ page }: { page: Of<"cover"> }) {
  return (
    <div className="flex h-full flex-col gap-[3cqw] bg-[#0b0b0b] p-[6cqw] text-white">
      <header>
        <p className="bk-small uppercase tracking-[0.35em] text-white/60">{page.kicker}</p>
        <h1 className="bk-h1 mt-[2cqw] origin-left -skew-x-6 font-comic font-bold">{page.title}</h1>
        <p className="bk-h2 origin-left -skew-x-6 font-comic text-white/80">{page.subtitle}</p>
      </header>
      <Art src={page.image} alt="Eduardo Sarmiento, el detective" className="min-h-[34cqw] flex-1" />
      <p className="bk-small animate-pulse text-center uppercase tracking-[0.3em] text-white/60">
        Pasa la página
      </p>
    </div>
  );
}

export function IntroPage({ page }: { page: Of<"intro"> }) {
  return (
    <div className={PAGE}>
      <header>
        <h2 className="bk-h1 origin-left -skew-x-6 font-comic font-bold">{page.title}</h2>
        <p className={TITLE}>{page.subtitle}</p>
      </header>
      <p className="bk-small">{page.text}</p>
      <div className="relative flex min-h-[22cqw] flex-1">
        <Art src={page.image} alt="Eduardo Sarmiento" className="flex-1" />
        <span className="bk-cap absolute bottom-0 right-0 rounded-full bg-[#a9b0ac] px-[2.5cqw] py-[1cqw] font-comic tracking-wider">
          {page.chip}
        </span>
      </div>
    </div>
  );
}

const SHAPES = [
  "polygon(0 5%, 100% 0, 97% 100%, 0 95%)",
  "polygon(0 0, 100% 4%, 100% 96%, 3% 100%)",
  "polygon(3% 0, 100% 5%, 98% 100%, 0 95%)",
  "polygon(0 4%, 97% 0, 100% 100%, 2% 96%)",
];

export function FactsPage({ page }: { page: Of<"facts"> }) {
  return (
    <div className="flex h-full flex-col justify-center gap-[2cqw] p-[6cqw]">
      {page.items.map((item, i) => (
        <section
          key={item.title}
          className="bg-[#a9b0ac] px-[4.5cqw] py-[2.2cqw] transition-[transform,background-color] duration-300 hover:-translate-y-[0.4cqw] hover:bg-[#b6bdb9]"
          style={{ clipPath: SHAPES[i % SHAPES.length] }}
        >
          <h3 className="bk-h3 font-comic">{item.title}</h3>
          <p className="bk-small mt-[0.8cqw]">{item.text}</p>
        </section>
      ))}
    </div>
  );
}

export function TextPage({ page }: { page: Of<"text"> }) {
  const body = page.dense ? "bk-small" : "bk-body";

  return (
    <div className={PAGE}>
      {(page.title || page.label) && (
        <header>
          {page.title && <h2 className={TITLE}>{page.title}</h2>}
          {page.label && (
            <p className="bk-h3 font-comic tracking-wide text-black/60">{page.label}</p>
          )}
        </header>
      )}
      {page.paragraphs.map((text, i) => (
        <p key={i} className={body}>
          {text}
        </p>
      ))}
      {page.palette && <Palette colors={page.palette} />}
      {page.image && (
        <Art src={page.image.src} alt={page.image.alt} className="min-h-[28cqw] flex-1" />
      )}
    </div>
  );
}

export function GalleryPage({ page }: { page: Of<"gallery"> }) {
  const grid =
    page.columns === 3 ? "grid-cols-3" : page.columns === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className={PAGE}>
      {page.title && <h2 className={TITLE}>{page.title}</h2>}
      {page.banner && (
        <p className="bk-h3 rounded-[1.2cqw] bg-[#c3c8c7] py-[1.6cqw] text-center font-comic tracking-wide">
          {page.banner}
        </p>
      )}

      <div className={`grid min-h-0 flex-1 auto-rows-fr gap-[3cqw] ${grid}`}>
        {page.items.map((item) => (
          <figure key={item.src} className="group flex min-h-[26cqw] flex-col gap-[1cqw]">
            {item.label && <p className="bk-h3 text-center font-comic">{item.label}</p>}
            <Art
              src={item.src}
              alt={item.alt}
              className="min-h-0 flex-1 transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {item.caption && (
              <figcaption className="bk-cap text-center text-black/60">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {page.palette && (
        <section className="flex flex-col gap-[1.5cqw]">
          {page.paletteLabel && (
            <h3 className="bk-h3 text-center font-comic">{page.paletteLabel}</h3>
          )}
          <Palette colors={page.palette} />
        </section>
      )}
    </div>
  );
}

export function OutlinePage({ page }: { page: Of<"outline"> }) {
  const nodes = page.chapters.map((title, i) => ({
    title,
    x: i % 2 === 0 ? 70 : 150,
    y: 40 + i * 50,
  }));

  const d = nodes
    .map((n, i) => {
      if (i === 0) return `M${n.x} ${n.y}`;
      const p = nodes[i - 1];
      const mid = (p.y + n.y) / 2;
      return `C${p.x} ${mid} ${n.x} ${mid} ${n.x} ${n.y}`;
    })
    .join(" ");

  return (
    <div className={PAGE}>
      <svg
        viewBox="0 0 400 420"
        role="img"
        aria-label="Recorrido de los 8 capítulos"
        className="w-full"
      >
        <path
          d={d}
          pathLength={1}
          fill="none"
          stroke="#c8323a"
          strokeWidth={1.6}
          strokeLinecap="round"
          className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] delay-500 duration-[2600ms] ease-in-out group-data-[active=true]/page:[stroke-dashoffset:0]"
        />

        {nodes.map((n, i) => (
          <g
            key={n.title}
            className="group/node cursor-default opacity-0 transition-opacity duration-500 group-data-[active=true]/page:opacity-100"
            style={{ transitionDelay: `${700 + i * 280}ms` }}
          >
            <title>{`Entrega ${i + 1}`}</title>
            <circle
              cx={n.x}
              cy={n.y}
              r={11}
              strokeWidth={2}
              className="origin-center fill-black stroke-white transition-transform duration-300 [transform-box:fill-box] group-hover/node:scale-125 group-hover/node:fill-[#c8323a]"
            />
            <text x={n.x} y={n.y + 4} textAnchor="middle" className="fill-white font-comic text-[11px]">
              {i + 1}
            </text>
            <text
              x={n.x + 22}
              y={n.y + 7}
              className="fill-black font-comic text-[19px] tracking-wide transition-colors group-hover/node:fill-[#c8323a]"
            >
              {n.title}
            </text>
          </g>
        ))}
      </svg>
      <p className="bk-cap text-black/60">{page.note}</p>
    </div>
  );
}

export function ArcPage({ page }: { page: Of<"arc"> }) {
  return (
    <div className="flex h-full flex-col justify-center gap-[1.8cqw] p-[6cqw]">
      {page.cards.map((card, i) => (
        <article
          key={card.title}
          className={`rounded-[2cqw] bg-linear-to-r from-[#c5cac9] to-white px-[4cqw] py-[2cqw] transition-[transform,box-shadow] duration-300 hover:-translate-y-[0.5cqw] hover:shadow-md ${
            i === 1 || i === 2 ? "ml-[3cqw]" : ""
          }`}
        >
          <h3 className="bk-h3 font-comic">
            <span className="mr-[1.5cqw] text-black/35">{String(i + 1).padStart(2, "0")}</span>
            {card.title}
          </h3>
          <p className="bk-small mt-[1cqw]">{card.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ClosingPage({ page }: { page: Of<"closing"> }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[3cqw] bg-[#0b0b0b] p-[6cqw] text-center text-white">
      <h2 className="bk-h1 -skew-x-6 font-comic font-bold">{page.title}</h2>
      <p className="bk-body max-w-[70cqw] text-white/70">{page.text}</p>
      <Link
        href="/productos"
        className="bk-small mt-[2cqw] rounded-full border border-white/40 px-[4cqw] py-[1.4cqw] font-comic tracking-widest transition-colors hover:bg-white hover:text-black"
      >
        Volver a Productos
      </Link>
    </div>
  );
}
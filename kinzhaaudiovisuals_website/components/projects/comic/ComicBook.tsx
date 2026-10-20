"use client";

import dynamic from "next/dynamic";
import PageView from "@/components/projects/comic/PageView";
import { COMIC_CLOSING, COMIC_COVER, COMIC_SPREADS } from "@/lib/data/comic";

const Book = dynamic(() => import("@/components/projects/comic/Book"), { ssr: false });

const PAGES = [
  <PageView key="cover" page={COMIC_COVER} />,
  ...COMIC_SPREADS.flatMap((spread, i) => [
    <PageView key={`l${i}`} page={spread.left} />,
    <PageView key={`r${i}`} page={spread.right} />,
  ]),
  <PageView key="closing" page={COMIC_CLOSING} />,
];

const SECTIONS = [
  { label: "Portada", target: 0 },
  ...COMIC_SPREADS.flatMap((spread, i) =>
    spread.section ? [{ label: spread.section, target: 2 * i + 1 }] : [],
  ),
];

export default function ComicBook() {
  return (
    <>
      <div className="hidden lg:block">
        <Book pages={PAGES} sections={SECTIONS} />
      </div>

      <ol className="mx-auto flex max-w-xl flex-col gap-6 pb-10 lg:hidden">
        {PAGES.map((page, i) => (
          <li
            key={i}
            className="@container overflow-hidden rounded-lg bg-[#fbfbf9] text-black shadow-xl [--ts:1.5]"
          >
            {page}
          </li>
        ))}
      </ol>
    </>
  );
}
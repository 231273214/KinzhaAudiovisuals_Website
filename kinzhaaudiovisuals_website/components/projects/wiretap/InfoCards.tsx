import { WIRETAP } from "@/lib/data/wiretap";

export default function InfoCards() {
  return (
    <section className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
      {WIRETAP.cards.map((card, i) => (
        <article key={card.title} className="border-[1.5px] border-black px-3 py-4">
          <h3 className="flex gap-1.5 text-[15px] font-bold uppercase leading-tight">
            <span>{i + 1}.</span>
            <span>{card.title}</span>
          </h3>
          <hr className="mx-auto my-3 w-4/5 border-black/60" />
          <p className="text-center text-[13px] leading-snug">{card.text}</p>
        </article>
      ))}
    </section>
  );
}
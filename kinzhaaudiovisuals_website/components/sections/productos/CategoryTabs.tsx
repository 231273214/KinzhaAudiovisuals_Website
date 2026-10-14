import Image from "next/image";
import type { Category, CategoryId } from "@/lib/data/products";

type Props = {
  categories: Category[];
  active: CategoryId;
  onChange: (id: CategoryId) => void;
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="mt-16 flex items-center justify-around rounded-2xl bg-card px-3 py-3 md:px-6">
      {categories.map(({ id, label, icon }) => {
        const selected = id === active;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={selected}
            aria-label={label}
            title={label}
            className={`relative size-11 shrink-0 rounded-full bg-neutral-500 transition-transform duration-300 ease-out md:size-16 ${
              selected ? "-translate-y-4 scale-125 ring-[6px] ring-card" : "hover:scale-110"
            }`}
          >
            <Image src={icon} alt="" fill sizes="64px" className="rounded-full object-cover" />
          </button>
        );
      })}
    </div>
  );
}
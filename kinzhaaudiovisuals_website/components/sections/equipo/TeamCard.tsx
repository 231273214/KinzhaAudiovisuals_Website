import Image from "next/image";
import type { TeamMember } from "@/lib/data/team";

type Props = {
  member: TeamMember;
  index: number;
  selected: boolean;
  onSelect: () => void;
};

export default function TeamCard({ member, index, selected, onSelect }: Props) {
  const isLower = index % 2 === 1;

  return (
    <li className={`@container relative min-w-0 ${selected ? "z-20" : "z-0"}`}>
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        style={{ marginTop: isLower ? "25cqw" : 0 }}
        className={`clip-slant relative block aspect-[4/7] w-full origin-top overflow-hidden bg-brand-red-dark transition-transform duration-500 ease-out focus-visible:brightness-125 ${
          selected ? "scale-125" : "hover:scale-[1.03]"
        }`}
      >
        <Image
          src={member.image}
          alt=""
          fill
          sizes="(min-width: 768px) 240px, 25vw"
          className="object-cover"
        />

        <span className="absolute inset-0 bg-linear-to-t from-brand-red-dark/80 to-transparent to-60%" />

        <span className="absolute bottom-[7%] left-[2%] w-[75%] text-center font-display text-[length:17cqw] font-bold uppercase leading-none">
          {member.name}
        </span>
      </button>
    </li>
  );
}
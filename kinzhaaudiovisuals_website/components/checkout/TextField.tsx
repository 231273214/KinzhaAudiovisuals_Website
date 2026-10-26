import type { LucideIcon } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { field } from "./fieldStyles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: LucideIcon;
};

export default function TextField({ label, icon: Icon, className = "", ...rest }: Props) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">{label}</span>
      <input className={`${field} ${Icon ? "pr-9" : ""}`} placeholder={label} {...rest} />
      {Icon && (
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2"
        />
      )}
    </label>
  );
}
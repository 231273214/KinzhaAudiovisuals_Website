import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";
import { field } from "./fieldStyles";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  placeholder: string;
  options: string[];
};

export default function SelectField({
  label,
  placeholder,
  options,
  className = "",
  ...rest
}: Props) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">{label}</span>
      <select defaultValue="" className={`${field} appearance-none pr-8`} {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 size-5 -translate-y-1/2"
      />
    </label>
  );
}
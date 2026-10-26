import type { ButtonHTMLAttributes } from "react";

export default function PayButton({
  className = "",
  children = "Pay Now",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={`w-full rounded-md bg-pay py-4 text-2xl font-medium text-black transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black enabled:hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
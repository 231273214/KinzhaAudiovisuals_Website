import { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  side: "left" | "right" | "cover";
  hard?: boolean;
};

const Page = forwardRef<HTMLDivElement, Props>(function Page(
  { children, side, hard = false },
  ref,
) {
  return (
    <div
      ref={ref}
      data-density={hard ? "hard" : "soft"}
      className="@container overflow-hidden bg-[#fbfbf9] text-black"
    >
      {children}

      {side !== "cover" && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 w-[7%] from-black/20 to-transparent ${
            side === "right" ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l"
          }`}
        />
      )}
    </div>
  );
});

export default Page;
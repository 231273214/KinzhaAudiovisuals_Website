type Props = { children: React.ReactNode; className?: string };

export default function SectionHeading({ children, className = "" }: Props) {
  return (
    <h2 className={`mb-3 font-display text-[clamp(1.25rem,2.2vw,1.6rem)] font-bold tracking-wide ${className}`}>
      {children}
    </h2>
  );
}
type Props = { children: React.ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-4 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
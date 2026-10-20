type Props = { children?: React.ReactNode };

export default function PageTitle({ children = "Kinzha audiovisuals" }: Props) {
  return (
    <h1 className="text-center font-brand text-[clamp(2.5rem,9.5vw,8rem)] leading-none md:whitespace-nowrap">
      {children}
    </h1>
  );
}
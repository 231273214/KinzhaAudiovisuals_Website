import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Props = { title: string; children: React.ReactNode };

export default function SectionIntro({ title, children }: Props) {
  return (
    <section>
      <Container className="flex flex-col items-center py-24 text-center">
        <SectionHeading>{title}</SectionHeading>
        <p className="mt-5 max-w-[760px] text-sm leading-relaxed">{children}</p>
      </Container>
    </section>
  );
}
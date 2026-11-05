import Container from "@/components/ui/Container";

type BlockProps = { number: string; title: string; children: React.ReactNode };

function Block({ number, title, children }: BlockProps) {
    return (
        <article className="relative border-t border-white/20 pt-8">
        <span aria-hidden="true" className="absolute -top-px left-0 h-0.5 w-12 bg-brand-red" />
        <p className="font-display text-sm tracking-[0.3em] text-brand-soft">{number}</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-wide lg:text-3xl">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/80 lg:text-base">{children}</p>
        </article>
    );
}

export default function Studio() {
    return (
        <section className="py-20 lg:py-28">
        <Container>
            <p className="mx-auto max-w-5xl text-balance text-center font-display text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.2] text-white">
            Enfocados en crear experiencias audiovisuales{" "}
            <span className="font-bold text-brand-red">para la vida</span>, no para el momento.
            </p>

            <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-20">
            <Block number="01" title="¿QUÉ ES KINZHA AUDIOVISUALS?">
                Kinzha Audiovisuals es un estudio de 4 personas los cuales se enfocan en el desarrollo
                audiovisual. Nacemos de la necesidad de romper con la narrativa convencional y proponer
                un lenguaje visual que trascienda fronteras. Desde la concepción de la idea hasta el
                corte final, combinamos técnica, estética y narrativa para dar vida a proyectos que
                impacten la industria global.
            </Block>

            <Block number="02" title="NUESTRA VISIÓN">
                Ser una empresa líder en el desarrollo audiovisual, reconocida por su excelencia
                creativa y técnica, que impulse y proyecte el talento latinoamericano hacia escenarios
                globales.
            </Block>
            </div>
        </Container>
        </section>
    );
}
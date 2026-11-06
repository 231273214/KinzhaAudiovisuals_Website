import Container from "@/components/ui/Container";
import { SOCIAL_LINKS } from "@/lib/navigation";
import ContactForm from "@/components/sections/contacto/ContactForm"; 
import { ArrowUpRight } from "lucide-react"; 

export default function ContactSection() {
  return (
    <section>
      <Container className="pb-24 pt-16 md:pb-32 md:pt-36">
        
        <h1 className="text-center font-display text-[clamp(2.25rem,10.3vw,11rem)] font-bold uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(110,110,110,1)]">
          Ponte en contacto
        </h1>

        <div className="mt-20 grid items-start gap-16 md:mt-32 md:grid-cols-2 lg:gap-24">
          
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">
                Cuéntanos tu idea
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                Estamos listos para escuchar tu proyecto. Escríbenos a través del formulario o contactanos por nuestras redes sociales.
              </p>
            </div>

            <ul className="flex flex-col border-t border-white/20">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={label} className="border-b border-white/20">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 text-xl font-display font-bold uppercase tracking-wide transition-colors hover:text-brand-red md:text-2xl"
                  >
                    {label}
                    <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full rounded-2xl bg-white/5 p-6 md:p-8 backdrop-blur-sm border border-white/10">
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  );
}
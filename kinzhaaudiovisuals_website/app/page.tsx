import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#292525] text-[#E6E6E6] flex flex-col justify-between font-body">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. SECCIÓN PRINCIPAL DE HERO Y MISION / VISION */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Marca, Eslogan y Círculo con Arte 3D / Sapo Kinzha */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div>
              <h1 className="font-title text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
                Kinzha <br />
                <span className="text-white">audiovisuals</span>
              </h1>
              <p className="font-body text-base md:text-lg text-zinc-300 mt-3 max-w-sm">
                Enfocados en crear experiencias audiovisuales para la vida, no para el momento.
              </p>
            </div>

            {/* CÍRCULO ROJO / ESPACIO PARA LOGO / SAPO ANCESTRAL */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#B00000] border-4 border-zinc-900 shadow-2xl flex items-center justify-center overflow-hidden my-4">
              {/* Descomenta la siguiente línea y pon tu imagen dentro de public/images/sapo-logo.png */}
              {/* <Image src="/images/sapo-logo.png" alt="Kinzha Logo" fill className="object-cover" /> */}
              
              <div className="text-center p-4">
                <span className="text-xs text-zinc-300 block font-mono">
                  [ Coloca aquí la imagen del Sapo / Isotipo 3D ]
                </span>
                <span className="text-[#000000] font-bold text-sm block mt-1">
                  public/sapo-logo.png
                </span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: ¿Qué es Kinzha? y Nuestra Visión */}
          <div className="lg:col-span-7 flex flex-col space-y-10 pl-0 lg:pl-8">
            {/* Bloque: ¿QUÉ ES KINZHA AUDIOVISUALS? */}
            <section className="space-y-3">
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-white tracking-wider uppercase border-b-2 border-[#B00000] pb-2 inline-block">
                ¿QUÉ ES KINZHA AUDIOVISUALS?
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                Kinzha Audiovisuals es un estudio de 4 personas los cuales se enfocan en el desarrollo audiovisual.
                Nacemos de la necesidad de romper con la narrativa convencional y proponer un lenguaje visual
                que trascienda fronteras. Desde la concepción de la idea hasta el corte final, combinamos técnica,
                estética y narrativa para dar vida a proyectos que impacten la industria global.
              </p>
            </section>

            {/* Bloque: NUESTRA VISIÓN */}
            <section className="space-y-3">
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-white tracking-wider uppercase border-b-2 border-[#B00000] pb-2 inline-block">
                NUESTRA VISIÓN
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                Ser una empresa líder en el desarrollo audiovisual, reconocida por su excelencia creativa y técnica,
                que impulse y proyecte el talento latinoamericano hacia escenarios globales.
              </p>
            </section>
          </div>

        </div>
      </main>

      {/* 3. FOOTER BASE DE FIGMA */}
      <footer className="w-full bg-[#292525] border-t border-zinc-800 py-6 px-8 md:px-16 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-nav text-xs md:text-sm text-zinc-400">
          {/* Links Redes / Contacto */}
          <div className="flex space-x-6 items-center">
            <Link href="https://instagram.com" target="_blank" className="hover:text-white transition-colors flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#B00000] inline-block"></span>
              <span>INSTAGRAM</span>
            </Link>
            <span className="font-title font-bold text-white tracking-widest">KINZHA AUDIOVISUALS</span>
            <Link href="mailto:contacto@kinzha.com" className="hover:text-white transition-colors flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#B00000] inline-block"></span>
              <span>GMAIL</span>
            </Link>
          </div>

          {/* Copyright */}
          <div>
            © 2026 Kinzha Audiovisuals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
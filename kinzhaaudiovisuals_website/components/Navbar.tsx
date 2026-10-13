import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "EQUIPO", href: "#equipo" },
    { name: "PRODUCTOS", href: "#productos" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  return (
    <header className="w-full bg-[#292525] border-b border-zinc-800 py-5 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Espacio para el isotipo / nombre pequeño de la Navbar */}
        <Link href="/" className="font-title text-xl font-bold tracking-widest text-white hover:text-[#B00000] transition-colors">
          KINZHA
        </Link>

        {/* Links de navegación */}
        <nav className="flex space-x-6 md:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-nav text-sm md:text-base font-medium tracking-widest text-white hover:text-[#B00000] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
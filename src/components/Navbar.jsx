import logo from "../assets/images/Logo.png";

const navItems = [
  { label: "НАЧАЛО", href: "#home" },
  { label: "УСЛУГИ", href: "#services" },
  { label: "ГАЛЕРИЯ", href: "#gallery" },
  { label: "КОНТАКТИ", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-16 flex items-center justify-between">
  
            <a href="#home" className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2">
                <img src={logo} alt="Kuzev Cuts" className="h-10 w-auto" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold tracking-wide">KUZEV CUTS</p>
                <p className="text-xs text-white/60 tracking-widest">BARBERSHOP</p>
              </div>
            </a>

            <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-widest">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#map"
              className="hidden sm:flex items-center justify-center
                         h-10 px-6 border border-white/30
                         text-xs font-semibold tracking-widest
                         hover:border-white hover:bg-white/5 transition"
            >
              ВИЖ КЪДЕ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

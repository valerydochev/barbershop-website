import { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";

const navItems = [
  { label: "НАЧАЛО", href: "#home" },
  { label: "УСЛУГИ", href: "#services" },
  { label: "ГАЛЕРИЯ", href: "#gallery" },
  { label: "КОНТАКТИ", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // затваря менюто при ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // спира скрол-а на body докато е отворено
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-16 flex items-center justify-between">
            {/* LEFT – LOGO */}
            <a href="#home" className="flex items-center gap-3" onClick={close}>
              <div className="bg-white rounded-xl p-2">
                <img src={logo} alt="Kuzev Cuts" className="h-10 w-auto" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold tracking-wide">KUZEV CUTS</p>
                <p className="text-xs text-white/60 tracking-widest">
                  BARBERSHOP
                </p>
              </div>
            </a>

            {/* CENTER – DESKTOP MENU */}
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

            {/* RIGHT – DESKTOP CTA */}
            <a
              href="#map"
              className="hidden md:flex items-center justify-center
                         h-10 px-6 border border-white/30
                         text-xs font-semibold tracking-widest
                         hover:border-white hover:bg-white/5 transition"
            >
              ВИЖ КЪДЕ
            </a>

            {/* MOBILE – BURGER */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-10 w-10
                         border border-white/20 hover:border-white/40 rounded-lg transition"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              {/* icon */}
              <span className="block w-5">
                <span className="block h-[2px] bg-white/90" />
                <span className="block h-[2px] bg-white/70 mt-1.5" />
                <span className="block h-[2px] bg-white/90 mt-1.5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm
                      bg-black/90 backdrop-blur-md border-l border-white/10
                      transition-transform duration-200
                      ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-16 px-6 flex items-center justify-between border-b border-white/10">
            <p className="text-white font-semibold tracking-widest text-sm">
              МЕНЮ
            </p>
            <button
              type="button"
              className="h-10 w-10 inline-flex items-center justify-center
                         border border-white/20 hover:border-white/40 rounded-lg transition"
              aria-label="Close menu"
              onClick={close}
            >
              <span className="text-white/90 text-xl leading-none">×</span>
            </button>
          </div>

          <nav className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="py-3 border-b border-white/10
                           text-white/90 font-semibold tracking-widest text-sm
                           hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#map"
              onClick={close}
              className="mt-4 h-11 px-6 inline-flex items-center justify-center
                         border border-white/30 text-white font-semibold tracking-widest text-xs
                         hover:border-white hover:bg-white/5 transition"
            >
              ВИЖ КЪДЕ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

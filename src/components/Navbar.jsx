import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Kuzev Cuts"
            className="w-10 h-10 rounded-xl"
          />

          <div className="leading-none">
            <p className="font-bold text-sm tracking-wide text-white">
              KUZEV CUTS
            </p>
            <p className="text-[10px] text-white/60 tracking-[0.3em] uppercase mt-1">
              BARBERSHOP
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <Link to="/" className="text-white/70 hover:text-white transition">
            НАЧАЛО
          </Link>

          <Link to="/services" className="text-white/70 hover:text-white transition">
            УСЛУГИ
          </Link>

          <a href="/#gallery" className="text-white/70 hover:text-white transition">
            ГАЛЕРИЯ
          </a>

          <a href="/#map" className="text-white/70 hover:text-white transition">
            КОНТАКТИ
          </a>
        </nav>

        <Link
          to="/location"
          className="hidden md:flex items-center border border-white/20 px-4 py-2 text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition"
        >
          ВИЖ КЪДЕ
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/20 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block w-5 h-5">
            <span
              className={`absolute left-0 top-1 block h-[2px] w-5 bg-white transition ${
                open ? "rotate-45 top-[9px]" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] block h-[2px] w-5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[17px] block h-[2px] w-5 bg-white transition ${
                open ? "-rotate-45 top-[9px]" : ""
              }`}
            />
          </span>
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur">
          <nav className="px-6 py-6 flex flex-col gap-5 text-white">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              НАЧАЛО
            </Link>

            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              УСЛУГИ
            </Link>

            <a
              href="/#gallery"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              ГАЛЕРИЯ
            </a>

            <a
              href="/#map"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              КОНТАКТИ
            </a>

            <Link
              to="/location"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center border border-white/20 px-4 py-3 text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition"
            >
              ВИЖ КЪДЕ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
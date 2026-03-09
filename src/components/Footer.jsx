import { Instagram } from "lucide-react";
import logo from "../assets/images/Logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3 items-start">
            
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={logo}
              alt="Kuzev Cuts"
              className="w-32 md:w-36 rounded-3xl mb-5"
            />

            <h3 className="text-2xl font-bold tracking-wide">
              KUZEV CUTS
            </h3>

            <p className="text-white/40 tracking-[0.35em] uppercase text-xs mt-2">
              BARBERSHOP
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="text-white/60 leading-8 max-w-md mx-auto md:mx-0">
              Модерен барбершоп в Пловдив, предлагащ класически и
              съвременни мъжки прически, бръснене и оформяне на брада.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <p className="text-white/70">📍 Пловдив, България, Данаил Николаев 94 MARASHA</p>

            <p className="text-white/70">📞 +359 888 123 456</p>

            <a
              href="https://www.instagram.com/kuzev_cutz8/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Kuzev Cuts. Всички права запазени.
        </div>
      </div>
    </footer>
  );
}
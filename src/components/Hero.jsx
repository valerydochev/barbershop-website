import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center border-b border-white/10 overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover scale-105"
        style={{ backgroundImage: `url(${logo})` }}
      />

      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/90" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-white/55 text-xs tracking-[0.4em] uppercase mb-5">
            Kuzev Cuts
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight text-white">
            KUZEV
            <span className="block text-white">CUTS</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white text-base md:text-lg leading-relaxed">
            Класически и модерни мъжки визии, изчистен стил и внимание към
            всеки детайл. Пространство, в което доброто подстригване среща
            характерно присъствие.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="rounded-full border border-white bg-white text-black px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]"
            >
              ВИЖ УСЛУГИТЕ
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
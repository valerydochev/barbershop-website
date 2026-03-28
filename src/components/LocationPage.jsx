import logo from "../assets/images/Logo.png";

export default function LocationPage() {
  return (
    <main className="bg-black text-white overflow-hidden pt-16">
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover scale-105"
          style={{ backgroundImage: `url(${logo})` }}
        />

        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/90" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-white/45 text-xs tracking-[0.4em] uppercase mb-5">
              Kuzev Cuts
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight">
              ВИЖ
              <span className="block text-white/80">КЪДЕ СМЕ</span>
            </h1>

            <p className="mt-6 max-w-2xl text-white/72 text-base md:text-lg leading-relaxed">
              Лесна и удобна локация в Пловдив, с бърз достъп и комфортна
              атмосфера за всяко посещение.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0" />
      </section>

      <section className="bg-black text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-3">
              Локация
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
              КЪДЕ СМЕ
            </h2>
          </div>

          <div className="grid lg:grid-cols-[420px_minmax(0,1fr)] gap-10 items-stretch">
            <div className="space-y-6">
              <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <p className="text-white/45 text-xs tracking-[0.25em] uppercase mb-3">
                  Адрес
                </p>
                <p className="text-2xl font-semibold leading-tight">
                  Пловдив, България
                </p>
                <p className="text-white/60 mt-3 leading-relaxed">
                  Удобна локация с лесен достъп и комфортна атмосфера за всяко
                  посещение.
                </p>
              </div>

              <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <p className="text-white/45 text-xs tracking-[0.25em] uppercase mb-3">
                  Телефон
                </p>
                <a
                  href="tel:+359890304641"
                  className="text-2xl font-semibold hover:text-white/80 transition"
                >
                  +359 89 030 4641
                </a>
              </div>

              <div className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <p className="text-white/45 text-xs tracking-[0.25em] uppercase mb-3">
                  Работно време
                </p>
                <div className="space-y-2 text-white/80">
                  <p>Понеделник - Събота: 10:00 - 19:00</p>
                  <p>Неделя: Почивен ден</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=ul.+General+Danail+Nikolaev+94,+Marasha,+Plovdiv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl 
                bg-zinc-900 text-white border border-white/20 
                text-sm font-semibold tracking-[0.18em] uppercase 
                transition duration-300 
                hover:bg-zinc-800 hover:border-white/40"
              >
                ОТВОРИ В GOOGLE MAPS
              </a>
            </div>

            <div className="relative min-h-[420px] rounded-2xl overflow-hidden bg-zinc-900/30 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none z-10" />

              <iframe
                title="Kuzev Cuts Location"
                src="https://www.google.com/maps?q=ul.+General+Danail+Nikolaev+94,+Marasha,+Plovdiv&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute left-4 bottom-4 z-20 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3">
                <p className="text-xs text-white/50 tracking-[0.22em] uppercase mb-1">
                  Kuzev Cuts
                </p>
                <p className="font-semibold">Пловдив, България</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

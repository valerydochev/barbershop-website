export default function MapSection() {
  return (
    <section id="map" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-3">
            Локация
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            КЪДЕ СМЕ
          </h2>
          <div className="mt-4 h-[1px] w-20 bg-white/20" />
        </div>

        <div className="grid lg:grid-cols-[420px_minmax(0,1fr)] gap-10 items-stretch">
          <div className="space-y-6">
            <div className="border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl">
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

            <div className="border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl">
              <p className="text-white/45 text-xs tracking-[0.25em] uppercase mb-3">
                Телефон
              </p>
              <a
                href="tel:+359888123456"
                className="text-2xl font-semibold hover:text-white/80 transition"
              >
                +359 89 030 4641
              </a>
            </div>

            <div className="border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl">
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
              className="inline-flex items-center justify-center h-12 px-6 border border-white/25 rounded-xl
                         text-sm font-semibold tracking-[0.18em] uppercase
                         hover:bg-white hover:text-black transition"
            >
              Отвори в Google Maps
            </a>
          </div>

          <div className="relative min-h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/30">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none z-10" />

            <iframe
              title="Kuzev Cuts Location"
              src="https://www.google.com/maps?q=ul.+General+Danail+Nikolaev+94,+Marasha,+Plovdiv&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute left-4 bottom-4 z-20 border border-white/10 bg-black/65 backdrop-blur-md rounded-xl px-4 py-3">
              <p className="text-xs text-white/50 tracking-[0.22em] uppercase mb-1">
                Kuzev Cuts
              </p>
              <p className="font-semibold">Пловдив, България</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

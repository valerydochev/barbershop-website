import logo from "../assets/images/Logo.png";

export default function ServicesPage() {
  const services = [
    {
      title: "ПОДСТРИГВАНЕ",
      text: "Класическо и модерно подстригване според стила, чертите и предпочитанията ти. Внимание към детайла и завършен резултат.",
    },
    {
      title: "БРЪСНЕНЕ",
      text: "Професионално бръснене с внимание към кожата и комфорта. Чист завършек и усещане за свежест.",
    },
    {
      title: "ОФОРМЯНЕ",
      text: "Оформяне на брада и контур с прецизност, баланс и стил, така че визията да бъде максимално чиста и поддържана.",
    },
    {
      title: "ОФОРМЯНЕ НА ВЕЖДИ",
      text: "Детайлно и внимателно оформяне на веждите за по-завършен, подреден и изчистен мъжки стил.",
    },
  ];

  const highlights = [
    {
      title: "ПРЕЦИЗНОСТ",
      text: "Всяка услуга се изпълнява с внимание към формата, детайла и цялостната визия.",
    },
    {
      title: "КОМФОРТ",
      text: "Спокойна атмосфера и професионално отношение, за да се чувстваш добре по време на всяко посещение.",
    },
    {
      title: "СТИЛ",
      text: "Класически и модерни визии, съобразени с твоя външен вид и предпочитания.",
    },
  ];

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
              НАШИТЕ
              <span className="block text-white/80">УСЛУГИ</span>
            </h1>

            <p className="mt-6 max-w-2xl text-white/72 text-base md:text-lg leading-relaxed">
              Класически и модерни мъжки услуги, изпълнени с внимание към
              детайла, изчистена визия и усещане за стил.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full border border-white bg-white text-black px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]"
              >
                ВИЖ УСЛУГИТЕ
              </a>

              <a
                href="#highlights"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-white/10"
              >
                ПОВЕЧЕ ЗА НАС
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0" />
      </section>

      <section
        id="services"
        className="py-20 md:py-24 bg-gradient-to-b from-black via-zinc-950 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-14">
            <p className="text-white/45 text-xs tracking-[0.35em] uppercase mb-3">
              Какво предлагаме
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              УСЛУГИ, КОИТО СЪЧЕТАВАТ
              <span className="block text-white/70">ВИЗИЯ, КОМФОРТ И СТИЛ</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 md:p-10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_35%)]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="h-[1px] w-14 bg-white/25 mt-4" />
                    <span className="text-white/20 text-4xl sm:text-5xl font-black leading-none">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-5">
                    {service.title}
                  </h2>

                  <p className="text-white/65 leading-8 text-base">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="py-20 md:py-24 border-t border-white/10 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-start">
            <div className="max-w-2xl">
              <p className="text-white/45 text-xs tracking-[0.35em] uppercase mb-3">
                Какво ни отличава
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-[1.02] max-w-xl">
                ПОДХОД С ВНИМАНИЕ
                <span className="block text-white/72">КЪМ ВСЕКИ ДЕТАЙЛ</span>
              </h2>

              <p className="mt-6 text-white/62 leading-8 text-sm sm:text-base max-w-xl">
                Не става дума само за подстригване. Става дума за излъчване,
                самочувствие и усещане, че всичко е направено както трябва.
              </p>

              <div className="mt-8 h-px w-24 bg-white/15" />

              <p className="mt-8 text-white/48 leading-7 text-sm max-w-lg">
                Вниманието към детайла, спокойната атмосфера и правилният усет
                към визията правят всяка услуга завършена и премерена.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <p className="text-xl font-bold text-white">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                    Внимание в детайла
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <p className="text-xl font-bold text-white">Classic</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                    Чист и стилен подход
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-7 transition duration-300 hover:border-white/20 hover:bg-zinc-900/60"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-sm font-bold text-white/80">
                      {i + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
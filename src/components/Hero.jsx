export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[52vh] md:min-h-[80vh] lg:min-h-[520px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      {/* Desktop Watermark */}
      <div className="pointer-events-none absolute hidden lg:block right-[-110px] xl:right-[-40px] 2xl:right-[-10px] top-1/2 -translate-y-1/2 select-none z-0">
        <p className="font-black tracking-widest text-white/[0.10] text-[140px] xl:text-[200px] 2xl:text-[240px] leading-none">
          KUZEV
        </p>
        <p className="font-black tracking-widest text-white/[0.10] text-[96px] xl:text-[145px] 2xl:text-[180px] leading-none -mt-2">
          CUTS
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full">
        <div
          className="min-h-[52vh] md:min-h-[80vh] lg:min-h-[520px]
                     flex flex-col items-start lg:flex-row lg:items-center
                     pt-10 sm:pt-12 lg:pt-0
                     lg:pr-[280px] xl:pr-[380px] 2xl:pr-[430px]"
        >
          <div className="w-full sm:max-w-xl">
            
            {/* Mobile Watermark */}
            <div className="pointer-events-none lg:hidden select-none mb-4 sm:mb-6">
              <p className="font-black tracking-widest text-white/[0.08] text-[46px] sm:text-[82px] md:text-[110px] leading-none">
                KUZEV
              </p>
              <p className="font-black tracking-widest text-white/[0.08] text-[30px] sm:text-[54px] md:text-[70px] leading-none -mt-1 sm:-mt-2">
                CUTS
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
              За най-добрите мъжки прически в града, довери се на Kuzev Cuts!
            </h1>

            {/* Mobile arrow */}
            <div className="flex justify-center w-full lg:hidden">
              <a
                href="#services"
                className="mt-10 flex flex-col items-center gap-2
                           text-white/60 hover:text-white transition"
                aria-label="Scroll to services"
              >
                <span className="text-xs tracking-[0.3em] uppercase">Скрол</span>

                <div className="relative h-10 w-[1px] bg-white/30 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-4 bg-white animate-scrollLine"></div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Desktop arrow*/}
      <a
        href="#services"
        className="hidden lg:flex absolute bottom-20 z-20
             left-6 lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]
             items-center gap-3
             text-white/60 hover:text-white transition"
        aria-label="Scroll to services"
      >
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20
                   hover:border-white/40 transition hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </a>

      {/* Fade към следващата секция */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
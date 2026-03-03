export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden
                 min-h-[calc(100svh-4rem)] lg:min-h-[70vh] lg:min-h-[520px]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      {/* Watermark RIGHT (само за DESKTOP lg+) */}
      <div className="pointer-events-none absolute hidden lg:block right-[-24px] top-1/2 -translate-y-1/2 select-none z-0">
        <p className="font-black tracking-widest text-white/[0.10] text-[180px] xl:text-[220px] 2xl:text-[260px] leading-none">
          KUZEV
        </p>
        <p className="font-black tracking-widest text-white/[0.10] text-[130px] xl:text-[170px] 2xl:text-[200px] leading-none -mt-2">
          CUTS
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full">
        {/* На мобилно: леко над центъра | На desktop: център */}
        <div
          className="min-h-[calc(100svh-4rem)] lg:min-h-[70vh] lg:min-h-[520px]
                     flex items-start lg:items-center
                     pt-14 sm:pt-16 lg:pt-0"
        >
          <div className="w-full sm:max-w-xl">
            {/* Watermark TOP (за MOBILE + TABLET + iPad: <lg) */}
            <div className="pointer-events-none lg:hidden select-none mb-4 sm:mb-6">
              <p className="font-black tracking-widest text-white/[0.08] text-[54px] sm:text-[82px] md:text-[110px] leading-none">
                KUZEV
              </p>
              <p className="font-black tracking-widest text-white/[0.08] text-[34px] sm:text-[54px] md:text-[70px] leading-none -mt-1 sm:-mt-2">
                CUTS
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-[44px] sm:text-5xl md:text-6xl font-extrabold leading-[1.03]">
              За най-добрите мъжки прически в града, довери се на Kuzev Cuts!
            </h1>
          </div>
        </div>
      </div>
    </section>
    
  );
}
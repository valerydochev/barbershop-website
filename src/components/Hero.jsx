export default function Hero() {
    return (
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

        <div className="pointer-events-none absolute hidden sm:block right-[-20px] top-1/2 -translate-y-1/2 select-none z-0">
          <p className="font-black tracking-widest text-white/[0.10] md:text-white/[0.12] text-[110px] md:text-[160px] lg:text-[220px] leading-none">
            KUZEV
          </p>
          <p className="font-black tracking-widest text-white/[0.10] md:text-white/[0.12] text-[90px] md:text-[120px] lg:text-[170px] leading-none">
            CUTS
          </p>
        </div>

        {/* Watermark - MOBILE (горе вдясно, да не пресича текста) */}
        <div className="pointer-events-none absolute sm:hidden right-[80px] top-20 select-none z-0">
          <p className="font-black tracking-widest text-white/[0.08] text-[80px] leading-none">
            KUZEV
          </p>
          <p className="font-black tracking-widest text-white/[0.08] text-[48px] leading-none">
            CUTS
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              За най-добрите мъжки прически в града, довери се на Kuzev Cuts!
            </h1>
          </div>
        </div>
      </section>
    )
}
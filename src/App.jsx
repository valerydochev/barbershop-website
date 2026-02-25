import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="h-16" />

      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

        <div className="relative mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-white/60 tracking-widest text-sm">
              KUZEV CUTS • BARBERSHOP
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              За най-добрите мъжки прически в града, довери се на Kuzev Cuts!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

function useInView(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, inView];
}

export default function Services() {
  const services = [
    {
      title: "ПОДСТРИГВАНЕ",
      text: "Класическо и модерно подстригване според стила и предпочитанията ти.",
    },
    {
      title: "БРЪСНЕНЕ",
      text: "Професионално бръснене с топла кърпа и специални продукти.",
    },
    {
      title: "ОФОРМЯНЕ",
      text: "Оформяне на брада и контур с прецизност и внимание към детайла.",
    },
    {
      title: "ОФОРМЯНЕ НА ВЕЖДИ",
      text: "Детайлно и внимателно оформяне на веждите за перфектен баланс и завършен мъжки стил.",
    },
  ];

  const [sectionRef, inView] = useInView();

  return (
    <section id="services" className="scroll-mt-16 bg-black py-24 md:py-28">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6">
        <div
          className={[
            "mb-16 md:mb-20 transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
            НАШИТЕ УСЛУГИ
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-white/20" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }} // stagger
              className={[
                "border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                "hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]",
              ].join(" ")}
            >
              <h3 className="text-lg font-semibold tracking-wide text-white mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
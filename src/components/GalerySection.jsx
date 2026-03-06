import { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

export default function GalerySection() {

  const images = [img1, img2, img3];

  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 tracking-wide">
          ГАЛЕРИЯ
        </h2>

        <div
          className="relative lg:hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20
            border border-white/30 w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="barbershop"
                  onClick={() => setLightbox(img)}
                  className="w-full h-[420px] object-cover flex-shrink-0 cursor-pointer"
                />
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20
            border border-white/30 w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>

        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt="barbershop"
                onClick={() => setLightbox(img)}
                className="w-full h-[420px] object-cover hover:scale-110 transition duration-700 cursor-pointer"
              />
            </div>
          ))}
        </div>

      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
          >
            ✕
          </button>

          <img
            src={lightbox}
            alt="preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

        </div>
      )}

    </section>
  );
}
import { useState } from "react";

interface GalleryProps {
  images?: string[];
}

export default function Gallery({
  images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
  ],
}: GalleryProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-6 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        </div>
        {/* Header */}
        <div className="text-center mb-10">
      <h2
  style={{ fontFamily: "'Great Vibes', cursive" }}
  className="
    text-gray-200 mb-8
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    leading-tight
  "
>
  Galería de Recuerdos
</h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Imagen */}
          <div className="w-full max-w-3xl aspect-square overflow-hidden rounded-2xl border border-sky-500/20 shadow-[0_0_40px_rgba(56,189,248,0.08)]">
            <img
              src={images[current]}
              alt={`Galería ${current + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Botón izquierda */}
          <button
            onClick={prev}
            className="
              absolute
              left-0 md:-left-16
              p-3
              rounded-full
              bg-sky-500/10
              text-sky-300
              border border-sky-400/30
              hover:bg-sky-500/20
              hover:text-sky-200
              transition
            "
          >
            ◀
          </button>

          {/* Botón derecha */}
          <button
            onClick={next}
            className="
              absolute
              right-0 md:-right-16
              p-3
              rounded-full
              bg-sky-500/10
              text-sky-300
              border border-sky-400/30
              hover:bg-sky-500/20
              hover:text-sky-200
              transition
            "
          >
            ▶
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === current
                  ? "bg-sky-400 scale-125 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

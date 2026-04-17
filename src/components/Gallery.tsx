import { useState } from "react";

interface GalleryProps {
  images?: string[];
}

export default function Gallery({
  images = [
    "/gallery/luana1.jpeg",
    "/gallery/luana2.jpeg",
    "/gallery/luana3.jpeg",
    "/gallery/luana4.jpeg",
    "/gallery/luana5.jpeg"
  ],
}: GalleryProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const objectPositions = images.map(() => "object-[top_right]");

  return (
    <section className="py-24 px-6 bg-[#eaf4fb]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="
              text-[#4c86b5]
              mb-10
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-tight
            "
          >
            Galería de Recuerdos
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">

          {/* Imagen */}
          <div
            className="
            w-full
            max-w-3xl
            aspect-square
            overflow-hidden
            rounded-2xl
            border
            border-[#cfe7f7]
            bg-white/70
            backdrop-blur-md
            shadow-md
            "
          >
            <img
              src={images[current]}
              alt={`Galería ${current + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${objectPositions[current]}`}
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
              bg-white/70
              text-[#4c86b5]
              border border-[#cfe7f7]
              hover:bg-[#cfe7f7]
              transition
              shadow-sm
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
              bg-white/70
              text-[#4c86b5]
              border border-[#cfe7f7]
              hover:bg-[#cfe7f7]
              transition
              shadow-sm
            "
          >
            ▶
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === current
                  ? "bg-[#d8b56a] scale-125 shadow-[0_0_10px_rgba(216,181,106,0.6)]"
                  : "bg-[#cfe7f7] hover:bg-[#4c86b5]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

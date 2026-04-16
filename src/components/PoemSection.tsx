interface PoemSectionProps {
  backgroundImage?: string;
}

export default function PoemSection({
  backgroundImage = "/imagen.png",
}: PoemSectionProps) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-xl md:text-2xl leading-relaxed font-light tracking-wide"
        >
          “La vida está hecha de momentos especiales, y este es uno de los más importantes para mí. Acompañame a celebrarlo.”
        </p>
      </div>
    </section>
  );
}

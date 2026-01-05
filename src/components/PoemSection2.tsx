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
        <p className="text-xl italic leading-relaxed">
  Cada año de vida es un capítulo más<br />
  en esta historia,<br /><br />
  y hoy comienza uno lleno de decisiones,<br />
  cambios y nuevos caminos.
</p>

      </div>
    </section>
  );
}

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
  <p className="text-xl md:text-2xl italic leading-relaxed font-light">
    Hoy no solo se celebran 18 años,<br />
    se celebra la vida,<br />
    las experiencias<br />
    y la presencia de quienes<br />
    hacen de este día<br />
    algo verdaderamente especial.
  </p>
</div>

    </section>
  );
}

interface HeroProps {
  name?: string;
  backgroundImage?: string;
}

export default function Hero({
  name = "Pablo",
  backgroundImage = "/fondohero.png",
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <div className="space-y-6 animate-fade-in">

          {/* Frase */}
          <p className="text-sm md:text-lg tracking-widest uppercase text-slate-200">
            ¡Te invito a celebrar conmigo!
          </p>

          {/* Nombre en cursiva */}
          <h1 className="text-6xl md:text-8xl italic font-bold text-sky-400">
            {name}
          </h1>

          {/* MIS 18 grande y cursiva */}
          <p className="text-sm md:text-lg tracking-widest uppercase text-slate-200">
            MIS 18 AÑOS
          </p>

          
        </div>
      </div>
    </section>
  );
}

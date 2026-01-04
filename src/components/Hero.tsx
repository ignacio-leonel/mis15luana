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
        <div className="space-y-4 animate-fade-in">
          {/* Mis 18 */}
          <p className="text-lg md:text-xl font-light tracking-widest uppercase text-slate-200">
            ¡TE INVITO A CELEBRAR CONMIGO! <span className="text-sky-400 font-bold">18</span>
          </p>

          {/* Nombre Pablo en cursiva grande */}
          <h1 className="text-6xl md:text-8xl italic font-extrabold text-sky-400 tracking-tight">
            {name}
          </h1>

          {/* Divider */}
          <div className="w-24 h-1 bg-sky-400 mx-auto"></div>

          {/* Invitación */}
         
         
        </div>
      </div>
    </section>
  );
}

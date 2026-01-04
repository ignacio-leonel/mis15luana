interface HeroProps {
  name?: string;
  backgroundImage?: string;
}

export default function Hero({ name = "Sofía", backgroundImage = "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=1920" }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">
        <div className="space-y-4 animate-fade-in">
          <p className="text-lg md:text-xl font-light tracking-widest uppercase">Mis 18</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{name}</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-xl md:text-2xl font-light mt-6">Te invito a celebrar conmigo</p>
        </div>
      </div>
    </section>
  );
}

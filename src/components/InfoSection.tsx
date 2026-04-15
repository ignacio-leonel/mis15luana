import { MapPin, Shirt } from 'lucide-react';

interface InfoSectionProps {
  location?: string;
  locationUrl?: string;
  dressCode?: string;
}

export default function InfoSection({
  location = "Salón de Eventos Golden, Av. Principal 123",
  locationUrl = "https://maps.google.com",
  dressCode = "Elegante Sport",
}: InfoSectionProps) {
  return (
    <section className="py-28 px-6 bg-[#dfeef8]">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <h2
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="
            text-[#4c86b5]
            mb-16
            text-center
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            leading-tight
            font-normal
          "
        >
          ¿Dónde?
        </h2>

        {/* Contenedor centrado */}
        <div className="flex justify-center">

          {/* Ubicación */}
          <div
            className="
              max-w-md
              w-full
              bg-white/70
              backdrop-blur-md
              rounded-2xl
              p-10
              text-center
              border border-[#cfe7f7]
              shadow-md
              transition
            "
          >

            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 border border-[#cfe7f7] bg-white">
              <MapPin className="w-8 h-8 text-[#4c86b5]" />
            </div>

            <h3 className="text-xl text-[#1f2a37] mb-3 font-normal">
              Ubicación
            </h3>

            <p className="text-[#4b5563] mb-6">
              {location}
            </p>

            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-6 py-2
                rounded-full
                text-[#4c86b5]
                border border-[#cfe7f7]
                bg-white
                hover:bg-[#cfe7f7]
                transition
              "
            >
              Ver en mapa
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

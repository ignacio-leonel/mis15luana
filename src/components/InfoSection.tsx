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
    <section className="py-28 px-6 bg-[#020617]">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <h2
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="
            text-gray-200
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

        <div className="grid md:grid-cols-2 gap-8">

          {/* Ubicación */}
          <div
            className="
              bg-[#020617]/80
              backdrop-blur
              rounded-2xl
              p-8
              text-center
              border border-gray-700
              shadow-[0_0_30px_rgba(0,0,0,0.4)]
              transition
            "
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
              <MapPin className="w-8 h-8 text-gray-300" />
            </div>

            <h3 className="text-xl text-gray-100 mb-3 font-normal">
              Ubicación
            </h3>

            <p className="text-gray-400 mb-5">
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
                text-gray-300
                border border-gray-600
                hover:bg-gray-800
                hover:text-gray-200
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

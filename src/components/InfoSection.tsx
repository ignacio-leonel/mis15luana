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
    <section className="py-20 px-6 bg-[#020617]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ubicación */}
          <div
            className="
              bg-[#020617]/80
              backdrop-blur
              rounded-2xl
              p-8
              text-center
              border border-sky-500/20
              shadow-[0_0_40px_rgba(56,189,248,0.05)]
              hover:border-sky-400/40
              transition
            "
          >
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-500/30">
              <MapPin className="w-8 h-8 text-sky-400" />
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-3">
              Ubicación
            </h3>

            <p className="text-slate-300 mb-5">
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
                font-medium
                text-sky-300
                border border-sky-400/30
                hover:bg-sky-500/10
                hover:text-sky-200
                transition
              "
            >
              Ver en mapa
            </a>
          </div>

          {/* Dress Code */}
          <div
            className="
              bg-[#020617]/80
              backdrop-blur
              rounded-2xl
              p-8
              text-center
              border border-sky-500/20
              shadow-[0_0_40px_rgba(56,189,248,0.05)]
              hover:border-sky-400/40
              transition
            "
          >
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-500/30">
              <Shirt className="w-8 h-8 text-sky-400" />
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-3">
              Dress Code
            </h3>

            <p className="text-slate-300 text-lg font-medium">
              {dressCode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

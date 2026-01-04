import { MapPin, Shirt } from 'lucide-react';

interface InfoSectionProps {
  location?: string;
  locationUrl?: string;
  dressCode?: string;
}

export default function InfoSection({
  location = "Salón de Eventos Golden, Av. Principal 123",
  locationUrl = "https://maps.google.com",
  dressCode = "Elegante Sport"
}: InfoSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <MapPin className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ubicación</h3>
            <p className="text-gray-700 mb-4">{location}</p>
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-500 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-600 transition-colors"
            >
              Ver en Mapa
            </a>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Shirt className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Dress Code</h3>
            <p className="text-gray-700 text-lg font-medium">{dressCode}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

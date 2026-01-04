import { MessageCircle } from 'lucide-react';

interface RSVPProps {
  phoneNumber?: string;
  message?: string;
}

export default function RSVP({
  phoneNumber = "5491112345678",
  message = "¡Hola! Confirmo mi asistencia a la fiesta de 18"
}: RSVPProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-rose-100 to-amber-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Confirmá tu Asistencia</h2>
        <p className="text-gray-700 text-lg mb-8">
          Por favor, confirmame si vas a poder venir para poder organizar todo mejor
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Confirmar por WhatsApp
        </a>

        <p className="text-gray-600 text-sm mt-6">
          Esperamos tu confirmación antes del 10 de Enero
        </p>
      </div>
    </section>
  );
}

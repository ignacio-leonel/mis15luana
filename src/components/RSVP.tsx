import { MessageCircle } from 'lucide-react';

interface RSVPProps {
  phoneNumber?: string;
  message?: string;
}

export default function RSVP({
  phoneNumber = "+54 9 2273 426386",
  message = "¡Hola! Confirmo mi asistencia a la fiesta de 15",
}: RSVPProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 px-6 bg-[#020617]">
      <div className="max-w-2xl mx-auto text-center">
   <h2
  style={{ fontFamily: "'Great Vibes', cursive" }}
  className="
    text-gray-200 mb-8
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    leading-tight
  "
>
  Confirmá tu asistencia
</h2>

        <p className="text-slate-300 text-lg mb-8">
          Por favor, confirmame si vas a poder venir para poder organizar todo mejor
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            px-8 py-4
            rounded-full
            text-lg
            font-semibold
            bg-sky-500/10
            text-sky-300
            border border-sky-400/30
            hover:bg-sky-500/20
            hover:text-sky-200
            transition
            shadow-[0_0_30px_rgba(56,189,248,0.15)]
          "
        >
          <MessageCircle className="w-6 h-6" />
          Confirmar por WhatsApp
        </a>

        <p className="text-slate-400 text-sm mt-6">
          Esperamos tu confirmación antes del 1 de junio
        </p>
      </div>
    </section>
  );
}

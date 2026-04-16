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
    <section className="py-24 px-6 bg-[#eaf4fb]">
      <div className="max-w-2xl mx-auto text-center">

        <h2
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="
            text-[#4c86b5]
            mb-8
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            leading-tight
          "
        >
          Confirmá tu asistencia
        </h2>

        <p className="text-[#4b5563] text-lg mb-10">
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
            px-10
            py-4
            rounded-full
            text-lg
            font-semibold
            bg-white
            text-[#4c86b5]
            border border-[#cfe7f7]
            hover:bg-[#cfe7f7]
            transition
            shadow-md
          "
        >
          <MessageCircle className="w-6 h-6 text-[#4c86b5]" />
          Confirmar por WhatsApp
        </a>

        <p className="text-[#6b7280] text-sm mt-6">
          Esperamos tu confirmación antes del 1 de junio
        </p>

      </div>
    </section>
  );
}


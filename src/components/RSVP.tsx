import { MessageCircle } from 'lucide-react';

interface RSVPProps {
  phoneNumber?: string;
  message?: string;
}

export default function RSVP({
  phoneNumber = "5491112345678",
  message = "¡Hola! Confirmo mi asistencia a la fiesta de 18",
}: RSVPProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 px-6 bg-[#020617]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font text-slate-100 mb-4">
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
          Esperamos tu confirmación antes del 10 de enero
        </p>
      </div>
    </section>
  );
}

import { Heart } from 'lucide-react';

interface FooterProps {
  name?: string;
}

export default function Footer({ name = "Sofía" }: FooterProps) {
  return (
    <footer
      className="
        relative
        py-12
        px-6
        text-white
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: "url('/footerbg.png')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#020617]/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-sky-400 fill-sky-400" />
          <p className="text-lg text-slate-100">
            Gracias por acompañarme en este día tan especial
          </p>
          <Heart className="w-5 h-5 text-sky-400 fill-sky-400" />
        </div>

        <p className="text-slate-400 text-sm">
          Te espero
        </p>
      </div>
    </footer>
  );
}

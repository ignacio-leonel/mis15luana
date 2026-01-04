import { Heart } from 'lucide-react';

interface FooterProps {
  name?: string;
}

export default function Footer({ name = "Sofía" }: FooterProps) {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <p className="text-lg">Gracias por acompañarme en este día tan especial</p>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
        </div>
        <p className="text-gray-400 text-sm">
          Mis 18 • {name} • 2026
        </p>
      </div>
    </footer>
  );
}

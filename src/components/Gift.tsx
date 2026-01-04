import { Gift as GiftIcon, Copy } from 'lucide-react';
import { useState } from 'react';

interface GiftProps {
  alias?: string;
}

export default function Gift({ alias = "SOFIA.FIESTA18" }: GiftProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <GiftIcon className="w-10 h-10 text-rose-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Regalo</h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Tu presencia es mi mejor regalo, pero si querés tener un detalle conmigo,
            podés hacerlo a través de este alias:
          </p>

          <div className="bg-white rounded-lg p-4 shadow-md inline-flex items-center gap-3 mb-4">
            <span className="text-xl md:text-2xl font-bold text-rose-500">{alias}</span>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Copiar alias"
            >
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {copied && (
            <p className="text-green-600 font-medium animate-fade-in">¡Alias copiado!</p>
          )}
        </div>
      </div>
    </section>
  );
}

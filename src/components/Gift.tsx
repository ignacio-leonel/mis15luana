import { Gift as GiftIcon, Copy } from 'lucide-react';
import { useState } from 'react';

interface GiftProps {
  alias?: string;
}

export default function Gift({ alias = "PABLORIOS08" }: GiftProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-[#020617]">
      <div className="max-w-2xl mx-auto">
        <div
          className="
            bg-[#020617]/80
            backdrop-blur
            rounded-2xl
            p-8 md:p-12
            text-center
            border border-sky-500/20
            shadow-[0_0_40px_rgba(56,189,248,0.05)]
          "
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-sky-500/30">
            <GiftIcon className="w-10 h-10 text-sky-400" />
          </div>

          <h3
  style={{
    fontFamily: "'Great Vibes', cursive",
    fontSize: "30vw", // ocupa 30% del ancho de la pantalla
  }}
  className="text-gray-200 mb-8"
>
  Regalo
</h3>

          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
            Tu presencia es mi mejor regalo, pero si querés tener un detalle conmigo,
            podés hacerlo a través de este alias:
          </p>

          {/* Alias */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5 py-3
              rounded-xl
              bg-sky-500/5
              border border-sky-400/30
              mb-4
            "
          >
            <span className="text-xl md:text-2xl font-bold text-sky-400">
              {alias}
            </span>

            <button
              onClick={handleCopy}
              className="
                p-2
                rounded-lg
                hover:bg-sky-500/10
                transition
              "
              title="Copiar alias"
            >
              <Copy className="w-5 h-5 text-slate-300" />
            </button>
          </div>

          {copied && (
            <p className="text-sky-400 font-medium animate-fade-in">
              ¡Alias copiado!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

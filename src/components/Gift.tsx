import { Gift as GiftIcon, Copy } from 'lucide-react';
import { useState } from 'react';

interface GiftProps {
  alias?: string;
}

export default function Gift({ alias = "Leila.537.ceibo.mp" }: GiftProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-[#dfeef8]">
      <div className="max-w-2xl mx-auto">

        <div
          className="
            bg-white/70
            backdrop-blur-md
            rounded-2xl
            p-8 md:p-12
            text-center
            border border-[#cfe7f7]
            shadow-md
          "
        >

          {/* Icon */}
          <div className="w-20 h-20 bg-[#cfe7f7] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#cfe7f7]">
            <GiftIcon className="w-10 h-10 text-[#4c86b5]" />
          </div>

          {/* Título */}
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
            Regalo
          </h2>

          <p className="text-[#4b5563] text-lg mb-8 leading-relaxed">
            Tu presencia es mi mejor regalo, pero si querés tener un detalle conmigo,
            podés hacerlo a través de este alias:
          </p>

          {/* Alias */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-white
              border border-[#cfe7f7]
              mb-4
              shadow-sm
              max-w-full
            "
          >
            <span className="text-lg md:text-xl font-semibold text-[#4c86b5] break-all">
              {alias}
            </span>

            <button
              onClick={handleCopy}
              className="
                p-2
                rounded-lg
                hover:bg-[#cfe7f7]
                transition
              "
              title="Copiar alias"
            >
              <Copy className="w-5 h-5 text-[#4c86b5]" />
            </button>
          </div>

          {copied && (
            <p className="text-[#d8b56a] font-medium">
              ¡Alias copiado!
            </p>
          )}

        </div>

      </div>
    </section>
  );
}

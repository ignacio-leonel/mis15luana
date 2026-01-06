import React, { useState } from "react";

export default function Sugerencia() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [name, setName] = useState(""); // opcional
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userName = name ? name : "Alguien";
    const message = `Hola, soy ${userName} y en la lista de canciones no puede faltar "${song}" de ${artist} 🎵`;
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp del cliente en formato internacional
    const phoneNumber = "5492325516800"; // reemplazar con el real

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    setSuccess(true);
    setSong("");
    setArtist("");
    setName("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] p-6">
      <div className="w-full max-w-md p-8 bg-gray-800 text-white rounded-xl shadow-lg">
        {/* Título en cursiva como tu Countdown */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl mb-6 text-center text-gray-200 font-normal"
          style={{ fontFamily: "'Great Vibes', cursive", fontStyle: "italic" }}
        >
          Sugiere una canción 🎵
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Canción */}
          <input
            type="text"
            placeholder="Nombre de la canción"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="bg-gray-800 border-b border-gray-500 focus:border-gray-300 outline-none py-2 px-2 placeholder-gray-400 text-white"
            required
          />

          {/* Artista */}
          <input
            type="text"
            placeholder="Artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="bg-gray-800 border-b border-gray-500 focus:border-gray-300 outline-none py-2 px-2 placeholder-gray-400 text-white"
            required
          />

          {/* Nombre opcional */}
          <input
            type="text"
            placeholder="Tu nombre (opcional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 border-b border-gray-500 focus:border-gray-300 outline-none py-2 px-2 placeholder-gray-400 text-white"
          />

          {/* Botón enviar */}
          <button
            type="submit"
            className="mt-4 bg-gray-700 hover:bg-gray-600 transition-colors py-3 rounded-lg text-white font-medium text-lg"
          >
            Enviar por WhatsApp
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-400 text-center text-lg">
            ¡Mensaje listo para WhatsApp! 🎵
          </p>
        )}
      </div>
    </section>
  );
}

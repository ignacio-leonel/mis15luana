interface MusicControlProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export function MusicControl({ isPlaying, toggleMusic }: MusicControlProps) {
  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 z-50 bg-black/70 text-white px-4 py-2 rounded-full"
    >
      {isPlaying ? '⏸ Pausar música' : '▶ Reproducir música'}
    </button>
  );
}

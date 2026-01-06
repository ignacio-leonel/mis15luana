import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date('2026-01-17T13:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
  style={{
    fontFamily: "'Great Vibes', cursive",
    fontSize: "30vw", // ocupa 30% del ancho de la pantalla
  }}
  className="text-gray-200 mb-8"
>
  ¿Cuándo?
</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sky-400" />
              <span className="text-lg font-medium">
                17 de Enero, 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-400" />
              <span className="text-lg font-medium">13:00 hs</span>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="
                bg-[#020617]/80
                backdrop-blur
                rounded-2xl
                border border-sky-500/20
                p-4 md:p-6
                text-center
                shadow-[0_0_40px_rgba(56,189,248,0.05)]
              "
            >
              <div className="text-3xl md:text-5xl font-bold text-sky-400 mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

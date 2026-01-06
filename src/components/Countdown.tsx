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
    <section className="py-40 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="
              text-gray-200 mb-8
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-tight
              font-normal
            "
          >
            ¿Cuándo?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-lg font-normal">
                17 de Enero, 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <span className="text-lg font-normal">
                13:00 hs
              </span>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center items-center text-gray-200">
          {[
            { label: 'días', value: timeLeft.days },
            { label: 'horas', value: timeLeft.hours },
            { label: 'minutos', value: timeLeft.minutes },
            { label: 'segundos', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={item.label} className="flex items-baseline">
              <span className="text-3xl md:text-5xl font-normal">
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="ml-1 text-sm md:text-base text-gray-400">
                {item.label}
              </span>

              {index < 3 && (
                <span className="mx-3 text-gray-500">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

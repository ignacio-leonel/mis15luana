import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date('2026-06-13T21:00:00').getTime();

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
            (difference % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          seconds: Math.floor(
            (difference % (1000 * 60)) / 1000
          ),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-40 px-6 bg-[#0f1e2e]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h2
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="
              text-[#a9cbe6]
              mb-10
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

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[#f5f8fb]">

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#d8b56a]" />
              <span className="text-lg font-light">
                13 de Junio, 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#d8b56a]" />
              <span className="text-lg font-light">
                21:00 hs
              </span>
            </div>

          </div>
        </div>

        {/* Countdown container */}
        <div className="flex justify-center">

          <div
            className="
            px-10
            py-8
            rounded-2xl
            border
            border-[#4c86b5]/30
            bg-[#0f1e2e]/60
            backdrop-blur-md
            shadow-lg
            "
          >

            <div
              className="
              flex
              flex-row
              items-center
              justify-center
              gap-4
              md:gap-8
              text-[#f5f8fb]
            "
            >

              {[
                { label: 'días', short: 'd', value: timeLeft.days },
                { label: 'horas', short: 'h', value: timeLeft.hours },
                { label: 'minutos', short: 'm', value: timeLeft.minutes },
                { label: 'segundos', short: 's', value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={item.label} className="flex items-baseline">

                  <span className="text-4xl md:text-6xl font-light text-[#a9cbe6]">
                    {item.value.toString().padStart(2, '0')}
                  </span>

                  {/* Mobile */}
                  <span className="ml-1 text-xs text-[#d8b56a] md:hidden">
                    {item.short}
                  </span>

                  {/* Desktop */}
                  <span className="ml-2 text-sm md:text-base text-[#d8b56a] hidden md:inline">
                    {item.label}
                  </span>

                  {index < 3 && (
                    <span className="mx-3 md:mx-6 text-[#4c86b5]">
                      ·
                    </span>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

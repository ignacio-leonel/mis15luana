import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date('2026-01-17T12:30:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Cuándo?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span className="text-lg font-medium">17 de Enero, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-500" />
              <span className="text-lg font-medium">12:30 hs</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center">
              <div className="text-3xl md:text-5xl font-bold text-rose-500 mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

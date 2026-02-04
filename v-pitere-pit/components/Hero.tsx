import React, { useRef, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

// В dev Vite отдаёт public с корня (/video/...), в prod — с base (см. vite.config base).
const videoSrc = import.meta.env.DEV
  ? '/video/hero.mp4'
  : `${import.meta.env.BASE_URL}video/hero.mp4`;

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  };

  useEffect(() => {
    playVideo();
  }, []);

  const handleCanPlay = () => {
    playVideo();
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-midnight">
      {/* Фон: MP4 без звука. Файл: public/video/hero.mp4 (H.264). Конвертация: ffmpeg -i 1.mov -an -c:v libx264 -movflags +faststart -y public/video/hero.mp4 */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={handleCanPlay}
          onEnded={handleEnded}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/30 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight">
            Гастробар <br className="md:hidden" /> «В Питере Пить»
          </h1>
          <h2 className="font-sans text-lg md:text-xl font-light text-alabaster/80 mb-8 max-w-2xl mx-auto tracking-wide">
            Место, где Петербург подают в бокале и на тарелке
          </h2>
          <p className="font-sans text-sm md:text-base text-alabaster/60 mb-12 max-w-lg mx-auto leading-relaxed">
            Гастробар с настроением города и честной кухней
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button onClick={scrollToReservation}>Забронировать стол</Button>
          <Button variant="outline" onClick={scrollToMenu}>Смотреть меню</Button>
        </motion.div>

        {/* Footer Info on Hero */}
        <motion.div
          className="absolute bottom-12 left-0 right-0 text-center md:flex md:justify-between md:px-12 text-xs md:text-sm text-alabaster/40 font-sans uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="hidden md:block">ул. Александра Невского, 12</span>
          <span>Ежедневно с 9:00 до 23:00</span>
          <span className="hidden md:block">Санкт-Петербург</span>
        </motion.div>
      </div>
    </div>
  );
};

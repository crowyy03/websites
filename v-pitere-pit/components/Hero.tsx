import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&fit=crop", // Bar dark
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1920&fit=crop", // Drinks
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1920&fit=crop", // Interior
  "https://images.unsplash.com/photo-1550966871-3ed3c47e7421?q=80&w=1920&fit=crop"  // Cocktail
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds rhythm
    return () => clearInterval(timer);
  }, []);

  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-midnight">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }} // Subtle zoom effect
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Gradient Overlay for Readability - Midnight to Transparent to Midnight */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/30 to-midnight"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80"></div>
        {/* Extra grain/noise overlay is handled in global CSS, but we ensure the image sits behind text */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight">
            Рестобар <br className="md:hidden" /> «В Питере Пить»
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
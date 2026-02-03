import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3c47e7421?q=80&w=1920&fit=crop",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1920&fit=crop",
  "https://images.unsplash.com/photo-1583547209700-1c5c6f0e34b9?q=80&w=1920&fit=crop"
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Faster auto-slide (e.g. 3s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div id="gallery" className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-midnight group">
      {/* Title Overlay */}
      <div className="absolute top-12 left-0 right-0 z-20 text-center pointer-events-none">
          <h2 className="font-display text-3xl md:text-5xl text-alabaster opacity-80 mix-blend-difference">Интерьер</h2>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={photos[currentIndex]}
          alt="Interior"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Amber Overlay for Vibe */}
      <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-midnight/80 z-10 pointer-events-none" />
      
      {/* Manual Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 text-alabaster/50 hover:text-alabaster transition-colors bg-midnight/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 text-alabaster/50 hover:text-alabaster transition-colors bg-midnight/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-4">
        {photos.map((_, idx) => (
            <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-amber-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            />
        ))}
      </div>
    </div>
  );
};
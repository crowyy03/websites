import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';

const aboutPhotos = [
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3c47e7421?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
];

const AutoCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    // Faster rotation: 3000ms
    useEffect(() => {
        if(isPaused) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % aboutPhotos.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev + 1) % aboutPhotos.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIndex((prev) => (prev - 1 + aboutPhotos.length) % aboutPhotos.length);
    };

    return (
        <div 
            className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-sm bg-raisin/20 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="popLayout">
                <motion.img 
                    key={index}
                    src={aboutPhotos[index]}
                    alt="Atmosphere"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent pointer-events-none"></div>

            {/* Manual Controls */}
            <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export const About: React.FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Side */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-8">О ресторане</h2>
          <div className="space-y-6 text-alabaster/80 font-sans leading-relaxed text-base md:text-lg">
            <p>
              «В Питере Пить» — гастробар с петербургским характером, где город подают в бокале
              и на тарелке. Здесь честная кухня без пафоса сочетается с продуманной барной
              картой: от классики до авторских настоек собственного производства.
            </p>
            <p>
              Днём — спокойная атмосфера для завтраков и бизнес-ланчей, вечером — русский рок
              и живое настроение города. Это место на каждый день: зайти после работы,
              встретиться с друзьями или просто почувствовать Петербург на вкус.
            </p>
          </div>
        </div>

        {/* Gallery Side - Auto Carousel */}
        <div>
           <AutoCarousel />
        </div>
      </div>
    </Section>
  );
};
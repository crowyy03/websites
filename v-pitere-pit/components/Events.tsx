import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { EventItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const eventsData: EventItem[] = [
  {
    id: 'e1',
    title: "Дегустация настоек",
    subtitle: "Вечер авторских вкусов",
    date: "24 Сентября, 19:00",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    type: 'actual'
  },
  {
    id: 'e2',
    title: "Живая музыка",
    subtitle: "Русский рок в акустике",
    date: "Каждую пятницу, 21:00",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    type: 'actual'
  },
   {
    id: 'e3',
    title: "Скидка 20% на всё меню",
    subtitle: "В день рождения",
    date: "Бессрочно",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=800&auto=format&fit=crop",
    type: 'actual'
  }
];

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<'actual' | 'past'>('actual');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredEvents = eventsData.filter(e => e.type === filter);

  // Auto-rotate logic (like photos)
  useEffect(() => {
    if (filteredEvents.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [filteredEvents.length, isPaused]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  return (
    <Section id="events">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl mb-8">События</h2>
        <div className="flex justify-center gap-8 border-b border-white/5 pb-4 inline-block w-full md:w-auto">
             <button 
                onClick={() => setFilter('actual')}
                className={`uppercase tracking-widest text-sm pb-2 transition-colors ${filter === 'actual' ? 'text-amber-100 border-b border-amber-500' : 'text-alabaster/50 hover:text-alabaster'}`}
             >
                 Актуальные
             </button>
             <button 
                onClick={() => setFilter('past')}
                className={`uppercase tracking-widest text-sm pb-2 transition-colors ${filter === 'past' ? 'text-amber-100 border-b border-amber-500' : 'text-alabaster/50 hover:text-alabaster'}`}
             >
                 Прошедшие
             </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] bg-raisin/10 border border-white/5 rounded-sm overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="popLayout">
          {filteredEvents.length > 0 ? (
            <motion.div
              key={filteredEvents[currentIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col h-full"
            >
              {/* Image Half */}
              <div className="h-2/3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-raisin/20 z-10" />
                 {/* Date badge */}
                 <div className="absolute top-6 left-6 z-20 bg-midnight/90 backdrop-blur-md px-4 py-2 text-sm font-display tracking-wider text-amber-500 border border-amber-500/20 shadow-lg">
                     {filteredEvents[currentIndex].date}
                 </div>
                 <img 
                   src={filteredEvents[currentIndex].image} 
                   alt={filteredEvents[currentIndex].title} 
                   className="w-full h-full object-cover"
                 />
              </div>
              
              {/* Content Half */}
              <div className="h-1/3 p-6 md:p-10 flex flex-col justify-center bg-midnight/40 backdrop-blur-sm">
                 <h3 className="font-display text-2xl md:text-3xl text-alabaster mb-3 leading-tight">
                    {filteredEvents[currentIndex].title}
                 </h3>
                 {filteredEvents[currentIndex].subtitle && (
                    <p className="text-base md:text-lg font-sans text-alabaster/70">
                        {filteredEvents[currentIndex].subtitle}
                    </p>
                 )}
              </div>
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-alabaster/30 font-display uppercase tracking-widest">
                Событий пока нет
            </div>
          )}
        </AnimatePresence>

        {/* Manual Controls (visible on hover) */}
        {filteredEvents.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 text-alabaster/50 hover:text-alabaster transition-colors bg-midnight/30 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 text-alabaster/50 hover:text-alabaster transition-colors bg-midnight/30 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-6 right-6 z-30 flex gap-2">
              {filteredEvents.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Section>
  );
};
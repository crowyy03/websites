import React from 'react';
import { Button } from './ui/Button';

export const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&fit=crop" 
          alt="Bar atmosphere" 
          className="w-full h-full object-cover grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-midnight/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl mb-6 text-alabaster drop-shadow-lg">Забронировать стол</h2>
        <p className="text-alabaster/80 font-sans text-lg mb-12 max-w-2xl mx-auto">
          Для бронирования стола, пожалуйста, свяжитесь с нами через Telegram или по телефону.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <a href="https://t.me/vpiterepit1703" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
             <Button className="w-full min-w-[240px] bg-sky-600/20 hover:bg-sky-600/40 border-sky-500/30">
               Написать в Telegram
             </Button>
          </a>
          
          <a href="tel:+79214343408" className="w-full md:w-auto">
             <Button variant="outline" className="w-full min-w-[240px]">
               Позвонить
             </Button>
          </a>
        </div>
        
        <div className="mt-8 text-sm text-alabaster/40 font-sans">
            +7 (921) 434-34-08
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Section } from './ui/Section';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight pt-12 pb-24 border-t border-white/5">
      <Section className="!py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl mb-6">Контакты</h3>
              <p className="font-sans text-alabaster/80 text-lg mb-2">Санкт-Петербург, ул. Александра Невского, 12</p>
              <p className="font-sans text-alabaster/50">Ежедневно с 9:00 до 23:00</p>
            </div>

            <div className="flex flex-col gap-4 font-display text-sm tracking-widest uppercase">
              <a href="#" className="hover:text-amber-100 transition-colors">Телефон</a>
              <a href="#" className="hover:text-amber-100 transition-colors">Telegram</a>
            </div>
            
            <div className="text-alabaster/20 text-xs font-sans mt-auto">
               © 2024 В Питере Пить
            </div>
          </div>

          <div className="w-full h-[400px] bg-raisin/20 rounded-sm overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             {/* Map Placeholder */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.5562723145892!2d30.38536831609618!3d59.92482398187123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631a0e7713d2f%3A0x6295550257321685!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0J3QtdCy0YHQutC-0LPQviwgMTIsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExNjc!5e0!3m2!1sen!2sru!4v1625660000000!5m2!1sen!2sru" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy"
               className="absolute inset-0"
             ></iframe>
             {/* Overlay to keep map dark until interaction */}
             <div className="absolute inset-0 bg-midnight/20 pointer-events-none"></div>
          </div>
        </div>
      </Section>
    </footer>
  );
};
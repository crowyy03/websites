import React from 'react';
import { Section } from './ui/Section';

const items = [
  {
    id: 1,
    title: "Завтраки",
    subtitle: "каждый день с 9:00 до 14:00"
  },
  {
    id: 2,
    title: "Бизнес-ланчи",
    subtitle: "650 ₽ (будни 12:30–14:30)"
  },
  {
    id: 3,
    title: "7 видов кухни",
    subtitle: "и 10 видов разливного пива"
  }
];

export const Advantages: React.FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center text-center p-8 border border-white/5 bg-raisin/20 backdrop-blur-sm rounded-sm hover:bg-raisin/40 transition-colors duration-500"
          >
            <h3 className="font-display text-xl mb-3 text-alabaster">{item.title}</h3>
            <p className="font-sans text-alabaster/60 font-light">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
import React from 'react';
import { Section } from './ui/Section';

export const Intro: React.FC = () => {
  return (
    <Section className="text-center">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-lg md:text-2xl leading-relaxed text-alabaster/90">
          «В Питере Пить» — гастробар с петербургским характером, где город подают в бокале и на тарелке.
          <br /><br />
          <span className="text-alabaster/60">
            Мы объединяем кухню, бар и атмосферу города, в который всегда хочется возвращаться.
          </span>
        </p>
      </div>
    </Section>
  );
};
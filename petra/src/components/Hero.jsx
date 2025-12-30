import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { INFO } from '../data';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={`${import.meta.env.BASE_URL}assets/hero_image.png`}
                    alt="Petra Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-plaster/40 via-transparent to-plaster/60" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center max-w-3xl mx-auto"
                >
                    <div className="inline-block px-6 py-3 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 text-base md:text-lg font-medium tracking-wide handwritten" style={{ color: '#FFF8E7' }}>
                        САНКТ-ПЕТЕРБУРГ • СЕВКАБЕЛЬ ПОРТ
                    </div>

                    <p className="px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 text-xl md:text-2xl max-w-md mx-auto leading-relaxed handwritten" style={{ color: '#FFF8E7' }}>
                        Простая еда, тёплый свет и воздушная атмосфера греческих островов.
                        Мезе, вино и неторопливое время.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                            Меню
                        </Button>
                        <Button variant="secondary" onClick={() => window.open(INFO.mapLink, '_blank')}>
                            Найти на карте
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-px h-12 bg-warm-black" />
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
};

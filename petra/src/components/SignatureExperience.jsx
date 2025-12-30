import React from 'react';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../data';

export const SignatureExperience = () => {
    const signatureDishes = MENU_ITEMS
        .flatMap(category => category.items)
        .filter(item => item.isSignature)
        .slice(0, 6);

    return (
        <section className="min-h-screen py-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-warm-black handwritten">
                    Фирменный опыт
                </h2>
                        <p className="text-lg md:text-xl text-warm-black/60 max-w-3xl mx-auto leading-relaxed break-words handwritten">
                    В Petra мы верим в средиземноморскую традицию совместного ужина. 
                    Наши мезе созданы, чтобы объединять людей — маленькие тарелки, 
                    большие вкусы и неторопливый ритм островного времени.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {signatureDishes.map((dish, index) => {
                    const ovalStyles = [
                        { borderRadius: '65% 35% 40% 60% / 40% 60% 35% 65%' },
                        { borderRadius: '35% 65% 60% 40% / 60% 40% 65% 35%' },
                        { borderRadius: '50% 50% 40% 60% / 60% 40% 50% 50%' },
                        { borderRadius: '60% 40% 40% 60% / 40% 60% 40% 60%' },
                        { borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
                        { borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%' },
                    ];
                    const style = ovalStyles[index % 6];
                    return (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={style}
                            className="bg-white p-8 border border-white/50 relative overflow-hidden flex flex-col h-full text-center"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-warm-black break-words leading-tight mb-3 handwritten">
                                {dish.name}
                            </h3>

                            <p className="text-warm-black/70 mb-4 leading-relaxed break-words overflow-wrap-anywhere flex-grow text-sm">
                                {dish.description}
                            </p>
                            <div className="mt-auto">
                                <div className="text-xl font-bold text-amber-dark">
                                    {dish.price}₽
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-6xl mx-auto bg-gradient-to-br from-amber-light/20 to-white rounded-3xl p-16 md:p-20 niche-container border border-amber-light/30"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-warm-black handwritten">
                            Мезе для совместного ужина
                        </h3>
                        <p className="text-lg md:text-xl text-warm-black/70 leading-relaxed mb-6 break-words">
                            В греческой культуре еда создана для того, чтобы её делили. Наша подборка мезе 
                            включает традиционные соусы, маленькие тарелки и блюда с гриля, идеальные 
                            для передачи вокруг стола. Закажите несколько блюд, поделитесь историями 
                            и насладитесь неторопливым ритмом средиземноморской трапезы.
                        </p>
                        <p className="text-lg md:text-xl text-warm-black/70 leading-relaxed break-words">
                            Каждое блюдо готовится с вниманием к аутентичным вкусам, используя 
                            качественные ингредиенты, которые отражают простоту и свежесть 
                            кухни греческих островов.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/mezze_image.png`}
                            alt="Мезе для совместного ужина"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};


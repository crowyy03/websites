import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data';

export const Reviews = () => {
    const stats = {
        vibe: REVIEWS.filter(r => r.text.toLowerCase().includes('atmosphere') || r.text.toLowerCase().includes('vibe') || r.text.toLowerCase().includes('интерьер') || r.text.toLowerCase().includes('атмосфера')).length,
        interior: REVIEWS.filter(r => r.text.toLowerCase().includes('interior') || r.text.toLowerCase().includes('интерьер') || r.text.toLowerCase().includes('уютн')).length,
        service: REVIEWS.filter(r => r.text.toLowerCase().includes('service') || r.text.toLowerCase().includes('обслуживание') || r.text.toLowerCase().includes('персонал')).length,
        food: REVIEWS.filter(r => r.text.toLowerCase().includes('food') || r.text.toLowerCase().includes('блюд') || r.text.toLowerCase().includes('еда') || r.text.toLowerCase().includes('вкусн')).length,
    };

    return (
        <section id="reviews" className="min-h-screen py-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-warm-black handwritten">
                    Отзывы
                </h2>
                <p className="text-lg text-warm-black/60 max-w-2xl mx-auto handwritten">
                    Что говорят наши гости о Petra
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
                {Object.entries(stats).map(([key, value]) => (
                    <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-2xl p-6 text-center niche-container border border-white/50"
                    >
                        <div className="text-4xl font-bold text-amber-dark mb-2">{value}</div>
                        <div className="text-sm text-warm-black/60 capitalize">{key}</div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {REVIEWS.map((review, index) => {
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
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={style}
                            className="bg-white p-6 shadow-sm border border-white/50 flex flex-col h-full overflow-hidden text-center"
                        >
                            <div className="flex items-center justify-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < review.rating ? 'fill-amber text-amber' : 'fill-gray-200 text-gray-200'}
                                    />
                                ))}
                            </div>
                            
                            <p className="text-warm-black/80 mb-4 leading-relaxed break-words overflow-wrap-anywhere flex-grow">
                                "{review.text}"
                            </p>
                            
                            <div className="flex flex-col items-center gap-1 text-sm mt-auto">
                                <span className="font-medium text-warm-black">{review.author}</span>
                                <span className="text-warm-black/40">{new Date(review.date).toLocaleDateString('ru-RU')}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};


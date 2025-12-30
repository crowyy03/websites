import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { INFO } from '../data';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 bg-amber-light/10 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-warm-black handwritten">
                    Контакты
                </h2>
                <p className="text-lg text-warm-black/60 max-w-2xl mx-auto handwritten">
                    Посетите нас или свяжитесь с нами
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-white p-8 border border-white/50 oval-card">
                        <div className="flex items-start gap-4 mb-6">
                            <MapPin className="text-amber-dark mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-warm-black handwritten">Адрес</h3>
                                <p className="text-warm-black/70 break-words">{INFO.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <Phone className="text-amber-dark mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-warm-black handwritten">Телефон</h3>
                                <a href={`tel:${INFO.phone}`} className="text-warm-black/70 hover:text-amber-dark transition-colors">
                                    {INFO.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-amber-dark mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-2 text-warm-black handwritten">Часы работы</h3>
                                <p className="text-warm-black/70">{INFO.hours}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button
                            onClick={() => window.open(INFO.mapLink, '_blank')}
                            className="w-full"
                        >
                            Открыть в Яндекс.Картах
                            <ExternalLink size={18} />
                        </Button>
                        {INFO.instagram && (
                            <Button
                                variant="secondary"
                                onClick={() => window.open(`https://instagram.com/${INFO.instagram.replace('@', '')}`, '_blank')}
                                className="w-full"
                            >
                                Подписаться в Instagram
                            </Button>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden niche-container border border-white/50 aspect-square"
                >
                    <iframe
                        src={`https://yandex.ru/map-widget/v1/?ll=30.242036%2C59.924402&z=16&pt=30.242036,59.924402&org=43830187542`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="Petra Location"
                        className="w-full h-full"
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ borderRadius: '60% 40% 45% 55% / 45% 55% 40% 60%' }}
                className="mt-16 max-w-4xl mx-auto bg-white p-12 border border-white/50 overflow-hidden"
            >
                <h3 className="text-3xl font-semibold mb-6 text-warm-black handwritten text-center">Как добраться</h3>
                <p className="text-warm-black/70 leading-relaxed break-words text-center text-lg">
                    Расположен на Кожевенной линии, в сердце Васильевского острова. 
                    Легко добраться на общественном транспорте. Ближайшие станции метро — 
                    Василеостровская и Приморская. Ищите светлые штукатурные стены и тёплый янтарный свет.
                </p>
            </motion.div>
        </section>
    );
};


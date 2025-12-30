import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(9);

    const uniqueImages = Array.from(new Set(GALLERY_IMAGES));
    const visibleImages = uniqueImages.slice(0, visibleCount);
    const hasMore = visibleCount < uniqueImages.length;

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 9, GALLERY_IMAGES.length));
    };

    return (
        <section id="gallery" className="min-h-screen py-20 bg-white container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-warm-black handwritten">
                    Gallery
                </h2>
                <p className="text-xl md:text-2xl text-warm-black/60 max-w-2xl mx-auto break-words handwritten">
                    Arched niches, warm light, lemons, and the airy Mediterranean atmosphere
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {visibleImages.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative overflow-hidden rounded-2xl cursor-pointer niche-container aspect-[4/3]"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>

            {hasMore && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={loadMore}
                        className="px-8 py-3 bg-amber text-warm-black rounded-full font-medium hover:bg-amber-light transition-colors shadow-niche"
                    >
                        Смотреть еще
                    </button>
                </motion.div>
            )}

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-6xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Gallery"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};


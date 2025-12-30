import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../data';

export const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = MENU_ITEMS.map(item => item.category);
    const defaultCategory = categories[0];

    const filteredMenu = useMemo(() => {
        return MENU_ITEMS.map(category => ({
            ...category,
            items: category.items.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(category => category.items.length > 0);
    }, [searchQuery]);

    const currentCategory = activeCategory || defaultCategory;
    const currentItems = filteredMenu.find(cat => cat.category === currentCategory)?.items || [];

    return (
        <section id="menu" className="min-h-screen py-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-warm-black handwritten">
                    Menu
                </h2>
                <p className="text-xl md:text-2xl text-warm-black/60 max-w-2xl mx-auto handwritten">
                    Mezze for sharing, traditional dishes, and Mediterranean flavors
                </p>
            </motion.div>

            {/* Search */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-md mx-auto mb-12"
            >
                <input
                    type="text"
                    placeholder="Search dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all"
                />
            </motion.div>

            {/* Category Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mb-16 sticky top-24 bg-plaster/80 backdrop-blur-sm py-4 z-40 rounded-full"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`
                            px-6 py-2 rounded-full font-medium transition-all duration-300
                            ${(activeCategory || defaultCategory) === category
                                ? 'bg-amber text-warm-black shadow-niche'
                                : 'bg-white text-warm-black/60 hover:text-warm-black hover:bg-white/80'
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            {/* Menu Items Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {currentItems.map((item, index) => {
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
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={style}
                                className="bg-white p-6 shadow-sm border border-white/50 flex flex-col h-full overflow-hidden text-center"
                            >
                                {/* Name at top - centered */}
                                <h3 className="text-xl md:text-2xl font-semibold text-warm-black break-words leading-tight mb-3 handwritten">
                                    {item.name}
                                    {item.isSignature && (
                                        <span className="ml-2 text-xs px-2 py-1 bg-lemon/20 text-lemon-dark rounded-full whitespace-nowrap">
                                            Signature
                                        </span>
                                    )}
                                    {item.isNew && (
                                        <span className="ml-2 text-xs px-2 py-1 bg-aegean/20 text-aegean-dark rounded-full whitespace-nowrap">
                                            New
                                        </span>
                                    )}
                                </h3>

                                {/* Description in middle - flexible */}
                                <p className="text-warm-black/60 text-sm leading-relaxed break-words overflow-wrap-anywhere flex-grow mb-3">
                                    {item.description}
                                </p>

                                {/* Price at bottom - centered */}
                                <div className="mt-auto">
                                    <span className="text-lg font-bold text-amber-dark">
                                        {item.price}₽
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>

            {currentItems.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-warm-black/40 text-lg">No dishes found</p>
                </motion.div>
            )}
        </section>
    );
};


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 20);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[100] bg-plaster flex items-center justify-center"
            >
                <div className="flex flex-col items-center gap-8">
                    <motion.div
                        className="text-2xl font-semibold text-amber-dark"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {percent}%
                    </motion.div>

                    <div className="flex flex-col items-center gap-2">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold text-warm-black tracking-tight handwritten"
                        >
                            PETRA
                        </motion.h1>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

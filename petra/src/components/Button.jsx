import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    ...props
}) => {
    const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-amber text-warm-black shadow-niche hover:shadow-lemon hover:bg-amber-light",
        secondary: "bg-white text-warm-black border border-gray-200 shadow-sm hover:border-amber hover:text-amber-dark",
        outline: "border-2 border-warm-black text-warm-black hover:bg-warm-black hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

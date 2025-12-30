import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoaded }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoaded, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 20);
        return () => clearInterval(timer);
    }, [onLoaded]);

    return (
        <div className="loader-container">
            <div className="loader-content">
                <motion.div
                    className="counter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {percent}%
                </motion.div>
                <div className="loader-text-wrapper">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        GREEN
                    </motion.h1>
                </div>
                <div className="loader-text-wrapper">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="accent-text"
                    >
                        28
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default Loader;

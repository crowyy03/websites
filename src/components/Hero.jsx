import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-subtitle"
                >
                    ГАСТРОБИСТРО & БАР
                </motion.p>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    В ПИТЕРЕ<br />
                    <span className="accent-text">ПИТЬ</span>
                </motion.h1>
                <motion.div
                    className="hero-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p>ОСНОВАН В 2024 / САНКТ-ПЕТЕРБУРГ</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

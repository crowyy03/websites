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
                    ИТАЛЬЯНСКИЙ РЕСТОРАН
                </motion.p>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    LA<br />
                    <span className="accent-text">PIADA</span>
                </motion.h1>
                <motion.div
                    className="hero-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p>САНКТ-ПЕТЕРБУРГ</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

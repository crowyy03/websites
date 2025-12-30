import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { INFO } from '../data';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Определяем активную секцию
            const sections = ['menu', 'gallery', 'reviews', 'contact'];
            const scrollPosition = window.scrollY + 200;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Вызываем сразу для начального состояния
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Меню', href: '#menu', id: 'menu' },
        { name: 'Галерея', href: '#gallery', id: 'gallery' },
        { name: 'Отзывы', href: '#reviews', id: 'reviews' },
        { name: 'Контакты', href: '#contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="font-bold text-2xl tracking-tighter mix-blend-difference z-50 handwritten">
                    PETRA
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-warm-black font-medium hover:text-amber-dark transition-colors relative group handwritten"
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-lemon rounded-full transition-opacity ${activeSection === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        </a>
                    ))}
                    <a
                        href={INFO.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-warm-black text-white rounded-full text-sm font-medium hover:bg-amber hover:text-warm-black transition-colors"
                    >
                        Забронировать
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-plaster flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl text-warm-black handwritten"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-warm-black text-plaster py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-3xl font-bold mb-6">PETRA</h3>
                    <p className="text-white/60 max-w-sm">
                        Частичка Киклад в сердце Санкт-Петербурга.
                        Простая еда, тёплый свет и хорошая компания.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-amber handwritten">Посетите нас</h4>
                    <div className="flex items-start gap-3 text-white/80">
                        <MapPin size={20} className="mt-1 text-lemon" />
                        <p>{INFO.address}</p>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                        <Clock size={20} className="text-lemon" />
                        <p>{INFO.hours}</p>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                        <Phone size={20} className="text-lemon" />
                        <p>{INFO.phone}</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-amber mb-4 handwritten">Подпишитесь</h4>
                    <a href="#" className="block text-white/80 hover:text-lemon transition-colors">Instagram</a>
                    <a href="#" className="block text-white/80 hover:text-lemon transition-colors mt-2">Telegram</a>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                © 2025 Petra Bistro. Все права защищены.
            </div>
        </footer>
    );
};

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-noise bg-fixed">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

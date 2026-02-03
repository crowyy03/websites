import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'О проекте', href: '#about' },
    { name: 'Меню', href: '#menu' },
    { name: 'Доставка', href: 'https://eda.yandex.ru/spb/r/v_pitere_pit', external: true },
    { name: 'Галерея', href: '#gallery' },
    { name: 'События', href: '#events' },
    { name: 'Забронировать', href: '#reservation' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string, external?: boolean) => {
    if (external) return;
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
          isScrolled 
            ? 'py-4 bg-midnight/80 backdrop-blur-md shadow-lg' 
            : 'py-6 bg-midnight/40 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Image Only */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <img 
                    src="/image/Logo.png" 
                    alt="В Питере Пить" 
                    className="w-full h-full object-contain"
                />
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                onClick={(e) => handleLinkClick(e, link.href, link.external)}
                className="text-[0.65rem] xl:text-xs uppercase tracking-[0.15em] text-alabaster/70 hover:text-amber-100 transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500/50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-alabaster p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-alabaster transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-alabaster transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-alabaster transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  onClick={(e) => handleLinkClick(e, link.href, link.external)}
                  className="font-display text-2xl uppercase text-alabaster hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button 
                className="absolute top-6 right-6 text-alabaster/50 hover:text-alabaster"
                onClick={() => setMobileMenuOpen(false)}
            >
                Закрыть
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    V PITER <span className="accent-text">PIT</span>
                </a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setIsOpen(false)}>Главная</a>
                    <a href="#menu" onClick={() => setIsOpen(false)}>Меню</a>
                    <a href="#vibe" onClick={() => setIsOpen(false)}>Атмосфера</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Контакты</a>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <MenuIcon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

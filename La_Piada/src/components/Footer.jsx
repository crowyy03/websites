import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} LA PIADA. САНКТ-ПЕТЕРБУРГ.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

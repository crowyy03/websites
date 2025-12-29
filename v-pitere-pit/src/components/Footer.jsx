import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} В ПИТЕРЕ ПИТ. САНКТ-ПЕТЕРБУРГ.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

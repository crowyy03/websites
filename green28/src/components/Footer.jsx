import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} GREEN 28. САНКТ-ПЕТЕРБУРГ.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

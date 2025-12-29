import { MapPin, Phone, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-info">
                        <h2 className="section-title">ПОСЕТИТЕ <span className="accent-text">НАС</span></h2>
                        <div className="info-block">
                            <h3>Адрес</h3>
                            <p>Санкт-Петербург, улица Александра Невского, 12</p>
                        </div>
                        <div className="info-block">
                            <h3>Контакты</h3>
                            <p>+7 (921) 434-34-08</p>
                            <p className="email">hello@vpiterepit.com</p>
                        </div>
                        <div className="info-block">
                            <h3>Часы работы</h3>
                            <div className="hours-grid">
                                <span>Пн-Чт</span><span>08:00 - 01:00</span>
                                <span>Пт</span><span>08:00 - 03:00</span>
                                <span>Сб</span><span>10:00 - 03:00</span>
                                <span>Вс</span><span>10:00 - 01:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=30.384931,59.926468&z=17&pt=30.384931,59.926468&org_id=113421347785&l=map"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Yandex Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

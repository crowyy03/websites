import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-info">
                        <h2 className="section-title">ПОСЕТИТЕ НАС</h2>
                        <div className="info-block">
                            <h3>Адрес</h3>
                            <p>Санкт-Петербург, Садовая ул., 53</p>
                        </div>
                        <div className="info-block">
                            <h3>Контакты</h3>
                            <p>+7 (921) 848-17-17</p>
                        </div>
                        <div className="info-block">
                            <h3>Время работы</h3>
                            <div className="hours-grid">
                                <span>Понедельник</span><span>08:00 - 00:00</span>
                                <span>Вторник</span><span>08:00 - 00:00</span>
                                <span>Среда</span><span>08:00 - 00:00</span>
                                <span>Четверг</span><span>08:00 - 00:00</span>
                                <span>Пятница</span><span>08:00 - 00:00</span>
                                <span>Суббота</span><span>08:00 - 00:00</span>
                                <span>Воскресенье</span><span>08:00 - 00:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=30.260882,59.945200&z=17&pt=30.260882,59.945200&org_id=161678460186&l=map"
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

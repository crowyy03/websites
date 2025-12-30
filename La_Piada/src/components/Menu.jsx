import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const menuData = {
    food: [
        {
            category: 'Пьядины',
            items: [
                { name: 'Adriatica', price: '1200', weight: '330 г' },
                { name: 'Al merluzzo', price: '1200', weight: '300 г' },
                { name: 'Biancaneve', price: '840', weight: '350 г' },
                { name: 'Carbonara', price: '900', weight: '330 г' },
                { name: 'Diavola', price: '840', weight: '310 г' },
                { name: 'Estiva', price: '840', weight: '300 г' },
                { name: 'Il Duomo', price: '960', weight: '350 г' },
                { name: 'Italiana', price: '900', weight: '335 г' },
                { name: 'La Classica', price: '960', weight: '350 г' },
                { name: 'Nutella', price: '660', weight: '250 г' },
                { name: 'Ortolana', price: '840', weight: '390 г' },
                { name: 'Parmigiana', price: '840', weight: '340 г' },
                { name: 'Rustica', price: '900', weight: '440 г' },
                { name: 'Speciale', price: '960', weight: '300 г' },
                { name: 'Zucca', price: '840', weight: '350 г' },
            ]
        },
        {
            category: 'Закуски',
            items: [
                { name: 'Coppa', price: '600', weight: '50 г', description: 'Коппа' },
                { name: 'Grana padano', price: '840', weight: '50 г' },
                { name: 'Olive verdi', price: '480', weight: '50 г' },
                { name: 'Parmigiano reggiano', price: '900', weight: '50 г' },
                { name: 'Pecorino Romano', price: '840', weight: '50 г' },
                { name: 'Pecorino tartufo', price: '840', weight: '50 г' },
                { name: 'Prosciutto di Parma', price: '720', weight: '50 г' },
                { name: 'Prosciutto di San Daniele', price: '840', weight: '50 г' },
                { name: 'Salame milano', price: '720', weight: '50 г' },
                { name: 'Salmone', price: '960', weight: '50 г' },
                { name: 'Stracciatella', price: '420', weight: '70 г' },
            ]
        },
        {
            category: 'Салаты',
            items: [
                { name: 'Caprese', price: '780', weight: '260 г' },
                { name: 'Caprese vs lecho', price: '780', weight: '237 г' },
                { name: 'Insalata roast beef', price: '960', weight: '290 г' },
                { name: 'Insalata verde', price: '840', weight: '280 г' },
                { name: 'Pinzimonio x 1', price: '1020', weight: '400 г' },
            ]
        },
        {
            category: 'Супы',
            items: [
                { name: 'Minestrone', price: '660', weight: '400 г' },
                { name: 'Zuppa Mare', price: '1080', weight: '400 г' },
                { name: 'Zuppa di stella', price: '780', weight: '400 г' },
            ]
        },
        {
            category: 'Паста',
            items: [
                { name: 'Passatelli Alle vongole', price: '1680', weight: '400 г' },
                { name: 'Passatelli ai frutti di mare', price: '1680', weight: '400 г' },
                { name: 'Pasta con Straccetti di Manzo', price: '1680', weight: '320 г' },
                { name: 'Spaghetti Alle vongole', price: '1440', weight: '400 г' },
                { name: 'Spaghetti aglio olio', price: '960', weight: '220 г' },
                { name: 'Spaghetti ai frutti di mare', price: '1440', weight: '400 г' },
                { name: 'Spaghetti ai gamberi', price: '1680', weight: '400 г' },
                { name: 'Spaghetti al pomodoro', price: '1160', weight: '400 г' },
                { name: 'Spaghetti cotto', price: '1320', weight: '450 г' },
                { name: 'Tagliatelle con polpette', price: '1620', weight: '370 г' },
            ]
        },
        {
            category: 'Горячие блюда',
            items: [
                { name: 'Baccalà in umido', price: '1900', weight: '220 г' },
                { name: 'Grigliata di pesce', price: '3000', weight: '400 г' },
                { name: 'Tagliata di manzo', price: '2100', weight: '290 г', description: 'Тонкий край, рукола, черри, грана. Уважаемый гость, имейте в виду, что мясо чуть дойдёт при транспортировке' },
            ]
        },
        {
            category: 'Десерты',
            items: [
                { name: 'Cheese cake', price: '660', weight: '220 г' },
                { name: 'Ciambella cioccolato', price: '660', weight: '100 г' },
                { name: 'Fragolosa', price: '1080', weight: '220 г' },
                { name: 'Giardino', price: '720', weight: '220 г' },
                { name: 'Mirtillo', price: '840', weight: '220 г' },
                { name: 'Mix Dolci', price: '1200', weight: '400 г', description: 'Чизкейк, яблочный пирог, сметанник с черникой, микс десертов, брауни' },
                { name: 'Pera al vino', price: '660', weight: '450 г' },
                { name: 'Tiramisu', price: '780', weight: '130 г' },
                { name: 'Torta alla frutta', price: '720', weight: '220 г' },
                { name: 'Torta di mele', price: '660', weight: '220 г' },
            ]
        },
        {
            category: 'Напитки',
            items: [
                { name: 'Limonata bianca', price: '720', weight: '750 мл' },
                { name: 'Limonata rossa', price: '720', weight: '750 мл' },
                { name: 'Limonata verde', price: '720', weight: '750 мл' },
                { name: 'Вода edis без газа', price: '540', weight: '500 мл' },
                { name: 'Вода edis с газом', price: '540', weight: '500 мл' },
                { name: 'Фреш апельсиновый', price: '700', weight: '300 мл' },
                { name: 'Фреш грейпфрутовый', price: '770', weight: '300 мл', description: 'Свежевыжатый грейпфрутовый сок' },
            ]
        },
        {
            category: 'Завтрак',
            items: [
                { name: 'Crepes al cioccolato', price: '900', weight: '230 г' },
                { name: 'Pancake', price: '780', weight: '270 г' },
                { name: 'Pancake mini', price: '780', weight: '220 г' },
                { name: 'Pancake nutella', price: '1020', weight: '280 г' },
            ]
        }
    ]
};

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <div className="menu-description">
                    <p>La Piada — итальянский ресторан напротив Юсуповского сада на Садовой.</p>
                    <p>В нашем интерьере мы использовали эффект состаренности и потертости — старая кирпичная кладка проглядывает сквозь бетонную штукатурку, а стены украшены яркими изображениями.</p>
                    <p>Мы делаем домашнюю пасту и печем фирменные лепешки с начинками — пьяды. В нашем меню более десяти вариантов пьяд: с цуккини и баклажанами, миксом сыров и острой колбасой или с моцарреллой и лососем. Пасту мы лепим двух видов: спагетти и лингвини. Разливаем вино по бокалам и наливаем домашние лимонады, например, с розмарином.</p>
                </div>

                <h2 className="section-title">НАШЕ <span className="accent-text">МЕНЮ</span></h2>

                <div className="menu-categories-scroll">
                    {menuData.food.map((category, index) => (
                        <button
                            key={index}
                            className={`category-tab ${selectedCategory === index ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(index)}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="menu-content menu-content-mobile"
                    >
                        <div className="menu-category">
                            <h3 className="category-title">{menuData.food[selectedCategory].category}</h3>
                            <div className="menu-items">
                                {menuData.food[selectedCategory].items.map((item, i) => (
                                    <div key={i} className="menu-item">
                                        <div className="menu-item-row">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-price">{item.price} ₽</span>
                                        </div>
                                        {item.weight && (
                                            <p className="item-weight">{item.weight}</p>
                                        )}
                                        {item.description && (
                                            <p className="item-description">{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="menu-content menu-content-desktop">
                    {menuData.food.map((category, index) => (
                        <div key={index} className="menu-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="menu-items">
                                {category.items.map((item, i) => (
                                    <div key={i} className="menu-item">
                                        <div className="menu-item-row">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-price">{item.price} ₽</span>
                                        </div>
                                        {item.weight && (
                                            <p className="item-weight">{item.weight}</p>
                                        )}
                                        {item.description && (
                                            <p className="item-description">{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="menu-content menu-content-desktop">
                    {menuData.food.map((category, index) => (
                        <div key={index} className="menu-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="menu-items">
                                {category.items.map((item, i) => (
                                    <div key={i} className="menu-item">
                                        <div className="menu-item-row">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-price">{item.price} ₽</span>
                                        </div>
                                        {item.weight && (
                                            <p className="item-weight">{item.weight}</p>
                                        )}
                                        {item.description && (
                                            <p className="item-description">{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="menu-download">
                    <p>Не нашли то, что искали?</p>
                    <a href="#" className="download-btn">СКАЧАТЬ ПОЛНОЕ МЕНЮ PDF</a>
                </div>
            </div>
        </section>
    );
};

export default Menu;

import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';


const menuData = {
    food: [
        {
            category: 'Закуски',
            items: [
                { name: 'Фреш-роллы с лососем и авокадо', price: '490', description: 'Тонкое рисовое тесто, начинка айсберг, лосось с/с, авокадо. В порции 4 штуки. Подается с соусом свит Чили. 140 г' },
                { name: 'Креветки в кокосовых хлопьях с кремом из манго с чили', price: '590' },
                { name: 'Спринг роллы', price: '450' },
                { name: 'Хумус из эдамаме с теплым хлебом', price: '450' },
                { name: 'Тако на рисовых чипсах с крабом', price: '690' },
                { name: 'Дим Самы с крабом', price: '790', description: '4 шт.' },
            ]
        },
        {
            category: 'Салаты',
            items: [
                { name: 'Тёплый салат с баклажаном и копченым угрем', price: '670' },
            ]
        },
        {
            category: 'Супы',
            items: [
                { name: 'Том кха с креветками', price: '650', description: 'Традиционный тайский суп, на основе кокосового молока, куриного бульона, рыбного бульона, пасты том кха, кукуруза мини, вешенки, лемонграсс, имбирь, черри, листья лайма, креветки. Подается с рисом на выбор. 500 мл' },
            ]
        },
        {
            category: 'Горячее',
            items: [
                { name: 'Курица в кисло-сладком соусе с овощами', price: '620', description: 'Куриное филе обжаривается в тоненьком, хрустящем кляре с добавлением овощей и орешков кешью. Подается с рисом на выбор. 350 г' },
                { name: 'Утка в Пекинском стиле', price: '890', description: 'Утиная грудка томится в сювид, с травами и специями, после запекается до золотистой корочки. Подается со свежим огурцом и зеленым луком, домашним соусом на основе из чернослива и паровыми лепешками момо. 230 г' },
                { name: 'Стейк из лосося терияки с киноа, брокколи и эдамаме', price: '1100' },
                { name: 'Котлеты из креветок с картофельным пюре', price: '620', description: 'Свежие креветки нарезаются, добавляем яйцо и свежую зелень. Формируем 2 котлеты. Подаем с картофельным пюре, свежим шпинатом и соусом на основе миндального. 235 г' },
            ]
        },
        {
            category: 'Завтрак',
            items: [
                { name: 'Тост с крабом', price: '750' },
            ]
        },
        {
            category: 'Десерты',
            items: [
                { name: 'Булочка Шу', price: '190' },
            ]
        }
    ]
};

const Menu = () => {

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <h2 className="section-title">НАШЕ <span className="accent-text">МЕНЮ</span></h2>


                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="menu-content"
                    >
                        {menuData.food.map((category, index) => (
                            <div key={index} className="menu-category">
                                <h3 className="category-title">{category.category} {category.price && <span className="set-price">{category.price}</span>}</h3>
                                <div className="menu-items">
                                    {category.items.map((item, i) => (
                                        <div key={i} className="menu-item">
                                            <div className="menu-item-row">
                                                <span className="item-name">{item.name}</span>
                                                <span className="item-dots"></span>
                                                <span className="item-price">{item.price} ₽</span>
                                            </div>
                                            {item.description && (
                                                <p className="item-description">{item.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className="menu-download">
                    <p>Не нашли то, что искали?</p>
                    <a href="#" className="download-btn">СКАЧАТЬ ПОЛНОЕ МЕНЮ PDF</a>
                </div>
            </div>
        </section>
    );
};

export default Menu;

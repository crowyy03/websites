import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

// Menu categories based on user's request for "Full Menu"
// Approximated translation from typical Gastrobistro items based on the "Gastrobistro" vibe and standard menu structures.
// Categories: Breakfast, Soups, Hot, Salads, Desserts, Bar.

const menuData = {
    food: [
        {
            category: 'Завтраки',
            items: [
                { name: 'Омлет с лососем и грибным муссом', price: '690 ₽' },
                { name: 'Шакшука с кинзой', price: '650 ₽' },
                { name: 'Тост с лососем и яйцом пашот', price: '650 ₽' },
                { name: 'Тост с беконом и яйцом пашот', price: '450 ₽' },
                { name: 'Овсянка с манго и ягодами', price: '590 ₽' },
                { name: 'Сырники со сметаной', price: '590 ₽' },
            ]
        },
        {
            category: 'Закуски',
            items: [
                { name: 'Бандитские питерские креветки', price: '820 ₽' },
                { name: 'Креветки темпура с манго-чили', price: '690 ₽' },
                { name: 'Тартар из тунца с апельсином', price: '670 ₽' },
                { name: 'Куриные крылышки в сладком чили', price: '720 ₽' },
                { name: 'Сельдь с луком и бородинским хлебом', price: '460 ₽' },
                { name: 'Жареный камамбер', price: '980 ₽' },
                { name: 'Картофель фри с луком и трюфельным соусом', price: '300 ₽' },
                { name: 'Большой сет колбасок (3-4 персоны)', price: '2,200 ₽' },
                { name: 'Гренки с чесночным соусом', price: '400 ₽' },
                { name: 'Сыр с мёдом и орехами', price: '1,250 ₽' },
                { name: 'Фисташки / Арахис', price: '550 ₽ / 390 ₽' },
            ]
        },
        {
            category: 'Салаты',
            items: [
                { name: 'Острый салат с креветками', price: '650 ₽' },
                { name: 'Тёплый салат с баклажаном и фетой', price: '650 ₽' },
                { name: 'Панцанелла с сыром фета', price: '650 ₽' },
                { name: 'Цезарь с курицей', price: '690 ₽' },
                { name: 'Оливье', price: '600 ₽' },
            ]
        },
        {
            category: 'Супы',
            items: [
                { name: 'Борщ с салом и сметаной', price: '730 ₽' },
                { name: 'Финский сливочный суп с лососем', price: '650 ₽' },
                { name: 'Куриный суп с домашней лапшой', price: '550 ₽' },
                { name: 'Окрошка на кефире', price: '590 ₽' },
                { name: 'Окрошка на квасе', price: '590 ₽' },
            ]
        },
        {
            category: 'Горячее',
            items: [
                { name: 'Пельмени с мраморной говядиной', price: '750 ₽' },
                { name: 'Немецкая колбаска с муссом и капустой', price: '790 ₽' },
                { name: 'Бургер "В ПИТЕРЕ ПИТ"', price: '990 ₽' },
                { name: 'Ребрышки BBQ с картофелем', price: '1,050 ₽' },
                { name: 'Филе миньон с трюфельным кремом', price: '1,550 ₽' },
                { name: 'Паста Карбонара', price: '790 ₽' },
                { name: 'Сливочная паста с лососем и креветками', price: '1,100 ₽' },
                { name: 'Окунь с кабачком и лаймовым соусом', price: '850 ₽' },
                { name: 'Стейк лосося с овощами гриль', price: '1,550 ₽' },
                { name: 'Ребрышки в глазури Jim Beam с яблоком', price: '650 ₽' },
            ]
        },
        {
            category: 'Десерты',
            items: [
                { name: 'Десерт "Питерский бордюр"', price: '520 ₽' },
                { name: 'Торт с рикоттой и грушей', price: '550 ₽' },
                { name: 'Медовик', price: '520 ₽' },
                { name: 'Чизкейк с солёной карамелью', price: '520 ₽' },
            ]
        }
    ],
    bar: [
        {
            category: 'Фирменные настойки (Сет из 5)',
            price: '950 ₽',
            items: [
                { name: 'Имбирь', price: '220 ₽' },
                { name: 'Красная смородина', price: '220 ₽' },
                { name: 'Чёрная смородина', price: '220 ₽' },
                { name: 'Брусника', price: '220 ₽' },
                { name: 'Облепиха', price: '220 ₽' },
                { name: 'Хрен', price: '220 ₽' },
                { name: 'Пьяная корова', price: '220 ₽' },
                { name: 'Свёкла-лайм-розмарин', price: '220 ₽' },
                { name: 'Солёный огурец', price: '220 ₽' },
                { name: 'Бородинский хлеб с чесноком', price: '220 ₽' },
                { name: 'Вишня', price: '220 ₽' },
                { name: 'Малина', price: '220 ₽' },
                { name: 'Морошка', price: '220 ₽' },
                { name: 'Клубника', price: '220 ₽' },
                { name: 'Крыжовник', price: '220 ₽' },
                { name: 'Базилик', price: '220 ₽' },
            ]
        },
        {
            category: 'Разливное пиво',
            items: [
                { name: 'St. Petersburg IPA', price: '430 ₽ / 620 ₽' },
                { name: 'Maisels Weisse Original', price: '610 ₽ / 880 ₽' },
                { name: 'Blanche Biere', price: '350 ₽ / 510 ₽' },
                { name: 'Hefeweizen', price: '380 ₽ / 650 ₽' },
                { name: 'Milk Stout', price: '440 ₽ / 630 ₽' },
                { name: 'Bourgogne des Flandres', price: '680 ₽ / 980 ₽' },
                { name: 'Rouge De Brabant', price: '570 ₽ / 980 ₽' },
                { name: 'St. Peters', price: '1,020 ₽' },
                { name: 'Rebel Nealko', price: '640 ₽' },
            ]
        },
        {
            category: 'Кофе',
            items: [
                { name: 'Эспрессо / Двойной / Американо', price: '170 / 220 / 250 ₽' },
                { name: 'Капучино / Латте / Раф', price: '310 / 330 / 550 ₽' },
                { name: 'Горячий шоколад', price: '550 ₽' },
                { name: 'Айс латте', price: '390 ₽' },
                { name: 'Флэт уайт', price: '350 ₽' }
            ]
        }
    ]
};

const Menu = () => {
    const [activeTab, setActiveTab] = useState('food');
    const [selectedCategory, setSelectedCategory] = useState(0);

    const currentCategories = menuData[activeTab];
    const currentCategoryData = currentCategories[selectedCategory];

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <div className="menu-description">
                    <p>В Питере Пить — гастробистро и бар в центре Санкт-Петербурга.</p>
                    <p>Мы создаем блюда с акцентом на качественные ингредиенты и современные техники приготовления. В нашем меню вы найдете как классические блюда с новым прочтением, так и авторские рецепты.</p>
                    <p>Мы готовим завтраки, горячие блюда, салаты и десерты. В баре представлен широкий выбор напитков и коктейлей. Мы работаем с раннего утра до поздней ночи, чтобы вы могли насладиться вкусной едой и атмосферой в любое время.</p>
                </div>

                <h2 className="section-title">НАШЕ <span className="accent-text">МЕНЮ</span></h2>

                <div className="menu-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'food' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('food');
                            setSelectedCategory(0);
                        }}
                    >
                        КУХНЯ
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'bar' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('bar');
                            setSelectedCategory(0);
                        }}
                    >
                        БАР
                    </button>
                </div>

                <div className="menu-categories-scroll">
                    {currentCategories.map((category, index) => (
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
                        key={`${activeTab}-${selectedCategory}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="menu-content menu-content-mobile"
                    >
                        <div className="menu-category">
                            <h3 className="category-title">{currentCategoryData.category} {currentCategoryData.price && <span className="set-price">{currentCategoryData.price}</span>}</h3>
                            <div className="menu-items">
                                {currentCategoryData.items.map((item, i) => (
                                    <div key={i} className="menu-item-row">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-dots"></span>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="menu-content menu-content-desktop">
                    {currentCategories.map((category, index) => (
                        <div key={index} className="menu-category">
                            <h3 className="category-title">{category.category} {category.price && <span className="set-price">{category.price}</span>}</h3>
                            <div className="menu-items">
                                {category.items.map((item, i) => (
                                    <div key={i} className="menu-item-row">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-dots"></span>
                                        <span className="item-price">{item.price}</span>
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

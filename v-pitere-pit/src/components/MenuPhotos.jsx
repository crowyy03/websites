import { motion } from 'framer-motion';
import './MenuPhotos.css';
// Используем реальные фотографии из папки photo
import dish1 from '../assets/images/restaurant/restaurant_0.jpg';
import dish2 from '../assets/images/restaurant/restaurant_1.jpg';
import dish3 from '../assets/images/restaurant/restaurant_2.jpg';
import cocktail1 from '../assets/images/restaurant/restaurant_3.jpg';
import cocktail2 from '../assets/images/restaurant/restaurant_4.jpg';
import cocktail3 from '../assets/images/restaurant/restaurant_5.jpg';

// 3 горячих блюда
const hotDishes = [
    { 
        src: dish1, 
        name: 'Бургер "В ПИТЕРЕ ПИТ"', 
        price: '990 ₽',
        category: 'Горячее'
    },
    { 
        src: dish2, 
        name: 'Филе миньон с трюфельным кремом', 
        price: '1,550 ₽',
        category: 'Горячее'
    },
    { 
        src: dish3, 
        name: 'Ребрышки BBQ с картофелем', 
        price: '1,050 ₽',
        category: 'Горячее'
    },
];

// 3 коктейля
const cocktails = [
    { 
        src: cocktail1, 
        name: 'Фирменный коктейль', 
        price: '450 ₽',
        category: 'Коктейли'
    },
    { 
        src: cocktail2, 
        name: 'Авторский коктейль', 
        price: '480 ₽',
        category: 'Коктейли'
    },
    { 
        src: cocktail3, 
        name: 'Специальный коктейль', 
        price: '520 ₽',
        category: 'Коктейли'
    },
];

const MenuPhotos = () => {
    return (
        <section id="menu-photos" className="menu-photos-section">
            <div className="container">
                <h2 className="section-title">ФОТО <span className="accent-text">БЛЮД</span></h2>
                
                <div className="dishes-group">
                    <h3 className="dishes-group-title">Горячие блюда</h3>
                    <div className="menu-photos-grid">
                        {hotDishes.map((dish, index) => (
                            <motion.div
                                key={index}
                                className="menu-photo-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="dish-image-wrapper">
                                    <img src={dish.src} alt={dish.name} />
                                </div>
                                <div className="dish-info">
                                    <span className="dish-category">{dish.category}</span>
                                    <h3 className="dish-name">{dish.name}</h3>
                                    <span className="dish-price">{dish.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="dishes-group">
                    <h3 className="dishes-group-title">Коктейли</h3>
                    <div className="menu-photos-grid">
                        {cocktails.map((cocktail, index) => (
                            <motion.div
                                key={index}
                                className="menu-photo-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="dish-image-wrapper">
                                    <img src={cocktail.src} alt={cocktail.name} />
                                </div>
                                <div className="dish-info">
                                    <span className="dish-category">{cocktail.category}</span>
                                    <h3 className="dish-name">{cocktail.name}</h3>
                                    <span className="dish-price">{cocktail.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuPhotos;


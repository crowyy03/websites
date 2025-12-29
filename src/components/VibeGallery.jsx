import { useState } from 'react';
import { motion } from 'framer-motion';
import './VibeGallery.css';

// Импортируем фотографии из папки restaurant
import img0 from '../assets/images/restaurant/restaurant_0.jpg';
import img1 from '../assets/images/restaurant/restaurant_1.jpg';
import img2 from '../assets/images/restaurant/restaurant_2.jpg';
import img3 from '../assets/images/restaurant/restaurant_3.jpg';
import img4 from '../assets/images/restaurant/restaurant_4.jpg';
import img5 from '../assets/images/restaurant/restaurant_5.jpg';
import img6 from '../assets/images/restaurant/restaurant_6.jpg';
import img7 from '../assets/images/restaurant/restaurant_7.jpg';
import img8 from '../assets/images/restaurant/restaurant_8.jpg';
import img9 from '../assets/images/restaurant/restaurant_9.jpg';
import img10 from '../assets/images/restaurant/restaurant_10.jpg';
import img11 from '../assets/images/restaurant/restaurant_11.jpg';
import img12 from '../assets/images/restaurant/restaurant_12.jpg';
import img13 from '../assets/images/restaurant/restaurant_13.jpg';
import img14 from '../assets/images/restaurant/restaurant_14.jpg';

const allImages = [
    { src: img0, alt: 'Интерьер ресторана' },
    { src: img1, alt: 'Атмосфера заведения' },
    { src: img2, alt: 'Интерьер ресторана' },
    { src: img3, alt: 'Атмосфера заведения' },
    { src: img4, alt: 'Интерьер ресторана' },
    { src: img5, alt: 'Атмосфера заведения' },
    { src: img6, alt: 'Интерьер ресторана' },
    { src: img7, alt: 'Атмосфера заведения' },
    { src: img8, alt: 'Интерьер ресторана' },
    { src: img9, alt: 'Атмосфера заведения' },
    { src: img10, alt: 'Интерьер ресторана' },
    { src: img11, alt: 'Атмосфера заведения' },
    { src: img12, alt: 'Интерьер ресторана' },
    { src: img13, alt: 'Атмосфера заведения' },
    { src: img14, alt: 'Интерьер ресторана' },
];

const VibeGallery = () => {
    const [visibleCount, setVisibleCount] = useState(5);

    const visibleImages = allImages.slice(0, visibleCount);
    const hasMore = visibleCount < allImages.length;

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 5, allImages.length));
    };

    return (
        <section id="vibe" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">НАШЕ <span className="accent-text">ПРОСТРАНСТВО</span></h2>
                    <p className="section-desc">Где Санкт-Петербург приходит выпить.</p>
                </div>

                <div className="gallery-grid-full">
                    {visibleImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={img.src} alt={img.alt} />
                        </motion.div>
                    ))}
                </div>

                {hasMore && (
                    <motion.div
                        className="gallery-load-more"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button onClick={loadMore} className="load-more-btn">
                            Смотреть еще
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default VibeGallery;

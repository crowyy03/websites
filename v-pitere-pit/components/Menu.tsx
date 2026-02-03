import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MenuItem, MenuCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA POPULATION (Same as before) ---
const fullMenu: MenuItem[] = [
  // --- BAR: BEER ---
  { id: 'b1', name: 'Hefeweizen', description: 'Светлое нефильтрованное', price: 550, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b2', name: 'В Питере пить Лагер', description: 'Светлое фильтрованное', price: 520, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b3', name: 'Karlovec Svetly Lezak', description: 'Светлое фильтрованное', price: 780, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b4', name: 'Blanche Biere', description: 'Светлое нефильтрованное', price: 510, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b5', name: 'Milk Stout', description: 'Темное', price: 630, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b6', name: 'Bourgogne des Flandres', description: 'Темное с нотками вишни', price: 980, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b7', name: 'Rouge de Brabant', description: 'Фруктовое (Вишня)', price: 980, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b8', name: 'В Питере пить IPA', description: 'Светлое нефильтрованное', price: 620, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b9', name: 'Starlingtons DAY IN PARADISE', description: 'Эль, Англия', price: 680, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b10', name: 'Karlovec Svetly Lezak', description: 'Лагер, Чехия', price: 440, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b11', name: 'В Питере пить ЛАГЕР', description: 'Лагер, СПб', price: 380, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b12', name: 'Maisel\'s Weisse Original', description: 'Пшен., Германия', price: 520, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b13', name: 'Blanche Bière', description: 'Пшен., Бельгия', price: 550, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b14', name: 'MILK STOUT', description: 'Стаут, СПб', price: 640, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b15', name: 'Bourgogne des Flandres', description: 'Коричневое, Бельгия', price: 600, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b16', name: 'Ламбруша', description: 'Пино колада с ламбиком, Красное', price: 640, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },
  { id: 'b17', name: 'Сидр Le Jardin des fruits Cidre Brut', description: '', price: 630, volume: '0,5 л', category: 'bar', subCategory: 'Пиво' },

  // --- BAR: TINCTURES ---
  { id: 't1', name: 'Имбирь', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't2', name: 'Антифриз', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't3', name: 'Лимончелло', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't4', name: 'Пьяная корова', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't5', name: 'Соленый огурец', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't6', name: 'Свекла + лайм + розмарин', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't7', name: 'Бородинский хлеб с чесноком', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't8', name: 'Красная смородина', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't9', name: 'Черная смородина', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't10', name: 'Брусника + корица', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't11', name: 'Облепиха', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't12', name: 'Базилик', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't13', name: 'Малина', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't14', name: 'Клюква', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't15', name: 'Вишня', price: 220, volume: '40 мл', category: 'bar', subCategory: 'Настойки' },
  { id: 't16', name: 'СЕТ из 5-и настоек', description: '5 штук', price: 950, volume: '', category: 'bar', subCategory: 'Настойки' },

  // --- BAR: WHISKEY ---
  { id: 'w1', name: 'Singleton 12', price: 920, category: 'bar', subCategory: 'Виски' },
  { id: 'w2', name: 'Bellevoye', price: 1220, category: 'bar', subCategory: 'Виски' },
  { id: 'w3', name: 'Writers\' Tears', price: 800, category: 'bar', subCategory: 'Виски' },
  { id: 'w4', name: 'Jack Daniel\'s', price: 720, category: 'bar', subCategory: 'Виски' },
  { id: 'w5', name: 'Hart Brothers', price: 910, category: 'bar', subCategory: 'Виски' },

  // --- BAR: WINE ---
  { id: 'wine1', name: 'Prosecco DOC Pitars', description: 'Игристое', price: 4600, category: 'bar', subCategory: 'Вино' },
  { id: 'wine2', name: 'Peluga Spumante bianco brut', description: 'Игристое', price: 3900, category: 'bar', subCategory: 'Вино' },
  { id: 'wine3', name: 'MVSA Brut Cava', description: 'Игристое', price: 4800, category: 'bar', subCategory: 'Вино' },
  { id: 'wine4', name: 'Schmitt 1919 Pinot Noir', description: 'Красное', price: 4400, category: 'bar', subCategory: 'Вино' },
  { id: 'wine5', name: 'Malbec Argenino', description: 'Красное', price: 4200, category: 'bar', subCategory: 'Вино' },
  { id: 'wine6', name: 'Navas Crianza DOC Rioja', description: 'Красное', price: 7300, category: 'bar', subCategory: 'Вино' },
  { id: 'wine7', name: 'Holly Blue Vinho Verde', description: 'Белое', price: 3900, category: 'bar', subCategory: 'Вино' },
  { id: 'wine8', name: 'Schmitt Landwein Riesling', description: 'Белое', price: 4150, category: 'bar', subCategory: 'Вино' },

  // --- BAR: SPIRITS ---
  { id: 'v1', name: 'Онегин', description: 'Водка', price: 370, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'v2', name: 'Мамонт', description: 'Водка', price: 420, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'g1', name: 'Drumshanbo Gunpowder', description: 'Джин', price: 750, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'g2', name: 'Puerto de Indias Strawberry', description: 'Джин', price: 650, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'c1', name: 'Hine Rare VSOP', description: 'Коньяк', price: 1980, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'c2', name: 'Maxime Trijol VSOP', description: 'Коньяк', price: 1750, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'c3', name: 'Frapin Chateau de Fontpinot XO', description: 'Коньяк', price: 2480, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'l1', name: 'Jägermeister', description: 'Ликер', price: 500, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'l2', name: 'Campari', description: 'Ликер', price: 500, category: 'bar', subCategory: 'Крепкий алкоголь' },
  { id: 'teq1', name: 'Ley 925 Blanco', description: 'Текила', price: 580, category: 'bar', subCategory: 'Крепкий алкоголь' },

  // --- BAR: SOFT ---
  { id: 'lim1', name: 'Мохито', price: 600, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'lim2', name: 'Клубника-Апельсин', price: 600, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'lim3', name: 'Манго-маракуйя', price: 600, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'lim4', name: 'Лимонад собственного приготовления', price: 270, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'nap1', name: 'Кока-Кола', price: 250, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'nap2', name: 'Сок', price: 250, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'nap3', name: 'Вода SanBenedetto', price: 250, category: 'bar', subCategory: 'Безалкогольные' },
  { id: 'milk1', name: 'Молочные Коктейли', description: 'Ваниль/Шоколад/Клубника', price: 550, category: 'bar', subCategory: 'Безалкогольные' },

  // --- BAR: COFFEE/TEA ---
  { id: 'cof1', name: 'Эспрессо', price: 170, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof2', name: 'Двойной эспрессо', price: 220, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof3', name: 'Американо', price: 250, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof4', name: 'Капучино', price: 310, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof5', name: 'Латте', price: 330, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof6', name: 'Раф', price: 350, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof7', name: 'Айс латте', price: 350, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof8', name: 'Флэт Уайт', price: 330, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'cof9', name: 'Горячий шоколад', price: 330, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'tea1', name: 'Чай Молочный улун', price: 300, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'tea2', name: 'Чай Авторский', description: 'Вечерний/Черный/Пуэр/Имбирный с медом', price: 350, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'hot1', name: 'Согревающие', description: 'Чебрец/Яблоко-мед', price: 350, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'fresh1', name: 'Фреш Апельсин', price: 400, category: 'bar', subCategory: 'Кофе/Чай' },
  { id: 'fresh2', name: 'Фреш Грейпфрут', price: 400, category: 'bar', subCategory: 'Кофе/Чай' },


  // --- MAIN: SNACKS ---
  { id: 's1', name: 'Креветки "Бандитский Петербург"', price: 820, category: 'main', subCategory: 'Закуски' },
  { id: 's2', name: 'Креветки темпура с манго', price: 690, category: 'main', subCategory: 'Закуски' },
  { id: 's3', name: 'Тартар из тунца с апельсином', price: 670, category: 'main', subCategory: 'Закуски' },
  { id: 's4', name: 'Куриные крылья в сладком чили', price: 720, category: 'main', subCategory: 'Закуски' },
  { id: 's5', name: 'Селедка с луком и бородинским хлебом', price: 460, category: 'main', subCategory: 'Закуски' },
  { id: 's6', name: 'Жареная моцарелла со смородиновым компотэ', price: 560, category: 'main', subCategory: 'Закуски' },
  { id: 's7', name: 'Запеченный камамбер', price: 980, category: 'main', subCategory: 'Закуски' },
  { id: 's8', name: 'Картофель фри с жареным луком и соусом', price: 400, category: 'main', subCategory: 'Закуски' },
  { id: 's9', name: 'Жареные охотничьи колбаски с крутонами', price: 800, category: 'main', subCategory: 'Закуски' },
  { id: 's10', name: 'Большой сет колбасок на 3-4 персоны', price: 2200, category: 'main', subCategory: 'Закуски' },
  { id: 's11', name: 'Крутоны с чесночным соусом и пармезаном', price: 400, category: 'main', subCategory: 'Закуски' },
  { id: 's12', name: 'Сыры с медом и орехами', price: 1250, category: 'main', subCategory: 'Закуски' },
  { id: 's13', name: 'Острые куриные крылья с соусом тартар', price: 730, category: 'main', subCategory: 'Закуски' },
  { id: 's14', name: 'Фисташки', price: 550, volume: '100 г', category: 'main', subCategory: 'Закуски' },
  { id: 's15', name: 'Арахис', price: 390, volume: '100 г', category: 'main', subCategory: 'Закуски' },

  // --- MAIN: SALADS ---
  { id: 'sal1', name: 'Оливье', price: 600, category: 'main', subCategory: 'Салаты' },
  { id: 'sal2', name: 'Острый салат с креветками и грушей', price: 650, category: 'main', subCategory: 'Салаты' },
  { id: 'sal3', name: 'Теплый салат с баклажаном и кинзой', price: 650, category: 'main', subCategory: 'Салаты' },
  { id: 'sal4', name: 'Цезарь с курицей в классическом соусе', price: 690, category: 'main', subCategory: 'Салаты' },
  { id: 'sal5', name: 'Панцанелла с сыром фета', price: 650, category: 'main', subCategory: 'Салаты' },

  // --- MAIN: SOUPS ---
  { id: 'soup1', name: 'Борщ с салом и сметаной', price: 730, category: 'main', subCategory: 'Супы' },
  { id: 'soup2', name: 'Финская сливочная уха', price: 650, category: 'main', subCategory: 'Супы' },
  { id: 'soup3', name: 'Куриный суп с домашней лапшой', price: 550, category: 'main', subCategory: 'Супы' },
  { id: 'soup4', name: 'Окрошка на кефире', price: 590, category: 'main', subCategory: 'Супы' },
  { id: 'soup5', name: 'Окрошка на пиве', price: 590, category: 'main', subCategory: 'Супы' },

  // --- MAIN: HOT ---
  { id: 'hotm1', name: 'Пельмени с мраморной говядиной', price: 750, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm2', name: 'Окунь с цукини и лаймовым соусом', price: 850, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm3', name: 'Филе миньон с картофельным муссом', price: 1550, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm4', name: 'Сливочная паста с лососем и креветками', price: 1100, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm5', name: 'Паста карбонара', price: 750, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm6', name: 'Стейк из лосося с овощами гриль', price: 1550, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm7', name: 'Ребра BBQ с картофелем фри', price: 1050, category: 'main', subCategory: 'Горячее' },
  { id: 'hotm8', name: 'Баварская колбаска с муссом и капустой', price: 790, category: 'main', subCategory: 'Горячее' },
  { id: 'burg1', name: 'Бургер "В ПИТЕРЕ ПИТЬ"', price: 990, category: 'main', subCategory: 'Горячее' },

  // --- MAIN: DESSERTS ---
  { id: 'des1', name: 'Питерский поребрик', price: 520, category: 'main', subCategory: 'Десерты' },
  { id: 'des2', name: 'Чизкейк Соленая карамель', price: 520, category: 'main', subCategory: 'Десерты' },
  { id: 'des3', name: 'Торт рикотта с грушей', price: 550, category: 'main', subCategory: 'Десерты' },
  { id: 'des4', name: 'Медовик', price: 520, category: 'main', subCategory: 'Десерты' },

  // --- BREAKFAST ---
  { id: 'br1', name: 'Омлет с лососем и грибным соусом', price: 690, category: 'breakfast' },
  { id: 'br2', name: 'Овсяная каша с манго и вишневым компотэ', price: 590, category: 'breakfast' },
  { id: 'br3', name: 'Шакшука с кинзой', price: 650, category: 'breakfast' },
  { id: 'br4', name: 'Тост с лососем и яйцом пашот', price: 550, category: 'breakfast' },
  { id: 'br5', name: 'Тост с беконом и яйцом пашот', price: 450, category: 'breakfast' },
  { id: 'br6', name: 'Сырники со сметаной и вишневым компотэ', price: 590, category: 'breakfast' },

  // --- LUNCH ---
  { id: 'ln1', name: 'Бизнес-ланч', description: '2 сета на выбор', price: 650, category: 'lunch' },
];

const categories: { id: MenuCategory; label: string }[] = [
  { id: 'breakfast', label: 'Завтраки' },
  { id: 'main', label: 'Основное меню' },
  { id: 'bar', label: 'Карта бара' },
  { id: 'lunch', label: 'Бизнес-ланчи' },
];

const barSubCategories = [
  'Пиво', 'Настойки', 'Виски', 'Вино', 'Крепкий алкоголь', 'Безалкогольные', 'Кофе/Чай'
];

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>('bar');
  const [activeBarSubTab, setActiveBarSubTab] = useState<string>('Пиво');

  // Filter main items
  const itemsInTab = fullMenu.filter(item => item.category === activeTab);

  // Grouping logic
  let displayItems: Record<string, MenuItem[]> = {};

  if (activeTab === 'bar') {
    // Only show the currently selected sub-category for Bar
    displayItems = {
      [activeBarSubTab]: itemsInTab.filter(item => item.subCategory === activeBarSubTab)
    };
  } else if (activeTab === 'main') {
    // Show all for main, grouped by subcategory
    // Define explicit order for Main menu
    const mainOrder = ['Закуски', 'Салаты', 'Супы', 'Горячее', 'Десерты'];
    itemsInTab.forEach(item => {
      const key = item.subCategory || 'Other';
      if (!displayItems[key]) displayItems[key] = [];
      displayItems[key].push(item);
    });
    // Reorder based on preferred order
    const orderedDisplayItems: Record<string, MenuItem[]> = {};
    mainOrder.forEach(key => {
        if(displayItems[key]) orderedDisplayItems[key] = displayItems[key];
    });
    displayItems = orderedDisplayItems;
  } else {
    // Default group for Breakfast/Lunch
    displayItems = { 'General': itemsInTab };
  }

  return (
    <Section id="menu" className="relative z-10">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-display text-4xl mb-12">Меню</h2>
        
        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 border-b border-white/5 pb-4 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                if (cat.id === 'bar') setActiveBarSubTab('Пиво');
              }}
              className={`
                text-sm md:text-base uppercase tracking-widest font-display pb-4 transition-all duration-300 relative
                ${activeTab === cat.id ? 'text-amber-100' : 'text-alabaster/40 hover:text-alabaster/70'}
              `}
            >
              {cat.label}
              {activeTab === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-[0_0_10px_rgba(255,191,0,0.5)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Sub Tabs for Bar */}
        {activeTab === 'bar' && (
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
             {barSubCategories.map((sub) => (
               <button
                 key={sub}
                 onClick={() => setActiveBarSubTab(sub)}
                 className={`
                   text-xs md:text-sm uppercase tracking-wider font-sans px-3 py-1 rounded-full border transition-all duration-300
                   ${activeBarSubTab === sub 
                      ? 'border-amber-500/30 text-amber-100 bg-amber-500/5' 
                      : 'border-transparent text-alabaster/40 hover:text-alabaster hover:border-white/10'}
                 `}
               >
                 {sub}
               </button>
             ))}
           </div>
        )}

        {/* PDF Button Placeholder */}
        <div className="mb-12">
            <Button variant="outline" className="text-xs py-3 px-6 opacity-60 hover:opacity-100">
                Скачать PDF меню ({activeTab === 'bar' ? 'Бар' : activeTab === 'main' ? 'Основное' : activeTab === 'breakfast' ? 'Завтраки' : 'Ланчи'})
            </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + activeBarSubTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="max-w-[1400px] mx-auto px-4"
        >
          {Object.entries(displayItems).map(([subCat, items]) => (
            <div key={subCat} className="mb-16 last:mb-0">
               {subCat !== 'General' && activeTab !== 'bar' && (
                 <h3 className="font-display text-xl text-amber-500/70 mb-8 text-left border-b border-white/5 pb-2 uppercase tracking-widest opacity-80">{subCat}</h3>
               )}
               {/* 
                 GRID LAYOUT UPDATE:
                 Mobile: grid-cols-3 (User requested 3 on phone)
                 Desktop: grid-cols-4 (User requested 4 on desktop)
               */}
               <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                 {items.map((item) => (
                   <div key={item.id} className="flex flex-col group relative p-3 md:p-4 rounded hover:bg-white/[0.02] transition-colors h-full border border-white/0 hover:border-white/5">
                      {/* Photo Placeholder */}
                      <div className="w-full aspect-[4/3] bg-raisin/30 rounded-sm mb-3 overflow-hidden relative">
                         {item.image ? (
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                         ) : (
                             <div className="absolute inset-0 flex items-center justify-center text-white/5 font-display text-lg md:text-2xl uppercase">В Питере Пить</div>
                         )}
                         <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent"></div>
                      </div>

                     <div className="mb-1">
                       <h4 className="font-display text-[0.65rem] md:text-lg text-alabaster group-hover:text-amber-100/90 transition-colors uppercase tracking-wide leading-tight">
                         {item.name}
                       </h4>
                     </div>
                     
                     <p className="text-[0.6rem] md:text-sm text-alabaster/60 font-light mb-2 line-clamp-2 md:line-clamp-none">
                        {item.description || item.subCategory}
                     </p>

                     <div className="flex flex-wrap justify-between items-center mt-auto pt-2 border-t border-white/5">
                        <span className="font-display text-xs md:text-lg tracking-wide text-amber-500/90">{item.price} ₽</span>
                        {item.volume && <span className="text-[0.6rem] md:text-xs text-alabaster/30 font-sans uppercase">{item.volume}</span>}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};
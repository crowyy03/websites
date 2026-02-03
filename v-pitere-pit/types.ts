export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  volume?: string; // e.g., "0.5 л" or "40 мл"
  category: 'breakfast' | 'main' | 'bar' | 'lunch';
  subCategory?: string; // e.g., "Beer", "Tinctures", "Hot", "Snacks"
  image?: string;
}

export type MenuCategory = 'breakfast' | 'main' | 'bar' | 'lunch';

export interface EventItem {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  image: string;
  type: 'actual' | 'past';
}

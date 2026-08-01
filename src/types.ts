export interface MenuItem {
  id: string;
  name: string;
  category: 'espresso' | 'cold-brew' | 'frappe' | 'manual-pour' | 'bakes' | 'savory';
  rating: number;
  reviewCount: number;
  volume: string;
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  temperature?: 'hot' | 'cold' | 'both';
  calories?: string;
}

export interface CustomizationOptions {
  size: '250 ml' | '350 ml' | '450 ml';
  milk: 'Whole Milk' | 'Oat Milk (+₹50)' | 'Almond Milk (+₹50)' | 'Soy Milk (+₹40)' | 'No Milk';
  sweetness: '0% (Unsweetened)' | '50% (Less Sweet)' | '100% (Standard Sweet)' | '150% (Extra Sweet)';
  temp: 'Hot' | 'Iced';
  addOns: string[];
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  customization: CustomizationOptions;
  totalPrice: number;
}

export interface RoastProfile {
  id: string;
  title: string;
  type: 'Light Roast' | 'Medium Roast' | 'Dark Roast' | 'Medium-Dark Roast';
  origin: string;
  flavorNotes: string[];
  description: string;
  acidity: number; // 1-5
  body: number; // 1-5
  roastLevel: number; // 1-5
  image: string;
  bestFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  favoriteDrink: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Indoor AC Lounge' | 'Alfresco Pali Hill Deck' | 'Barista Counter';
  specialNotes?: string;
}

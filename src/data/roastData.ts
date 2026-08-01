import { RoastProfile } from '../types';

export const ROAST_PROFILES: RoastProfile[] = [
  {
    id: 'light-roast',
    title: 'Light Roast',
    type: 'Light Roast',
    origin: 'Chikmagalur High-Altitude Estate (1,300m)',
    flavorNotes: ['Jasmine Blossom', 'Wild Strawberry', 'Citrus Zest'],
    description: 'Bright, floral notes with subtle fruit acidity. Roasted delicately to preserve the complex origin terroirs and natural sweetness of western ghats altitude berries.',
    acidity: 5,
    body: 2,
    roastLevel: 1,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    bestFor: 'V60 Pour Over & Aeropress'
  },
  {
    id: 'medium-roast',
    title: 'Medium Roast',
    type: 'Medium Roast',
    origin: 'Coorg Single Estate Arabica (1,100m)',
    flavorNotes: ['Salted Caramel', 'Roasted Hazelnut', 'Milk Chocolate'],
    description: 'Smooth, balanced body with caramel sweetness and gentle apple acidity. Our crowd-favorite house blend crafted specifically for balanced milky lattes & cappuccinos.',
    acidity: 3,
    body: 4,
    roastLevel: 3,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=600',
    bestFor: 'Velvet Latte & Classic Cappuccino'
  },
  {
    id: 'medium-dark-roast',
    title: 'Medium-Dark Roast',
    type: 'Medium-Dark Roast',
    origin: 'Wayanad Valley Micro-Lot & Arabica Blend',
    flavorNotes: ['Dark Cocoa 80%', 'Toasted Macadamia', 'Velvety Spice'],
    description: 'Deep chocolate undertones and velvety finish with low acidity. Roasted slightly longer for a rich, syrupy mouthfeel and comforting, lingering aftertaste.',
    acidity: 2,
    body: 5,
    roastLevel: 4,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600',
    bestFor: 'Cortado, Americano & Nitro Cold Brew'
  },
  {
    id: 'dark-roast',
    title: 'Dark Roast',
    type: 'Dark Roast',
    origin: 'Shevaroy Hills Organic Estate',
    flavorNotes: ['Smoky Cocoa Nibs', 'Molasses', 'Charred Oak'],
    description: 'Bold, smoky cocoa notes with rich golden crema. A classic, deep Italian style roast designed for lovers of intense, punchy ristrettos and bold iced frappes.',
    acidity: 1,
    body: 5,
    roastLevel: 5,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
    bestFor: 'Java Chip Frappe & Ristretto Shots'
  }
];

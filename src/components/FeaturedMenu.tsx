import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { ProductCard } from './ProductCard';
import { Coffee, Filter, Search, Sparkles } from 'lucide-react';

interface FeaturedMenuProps {
  onQuickAdd: (item: MenuItem) => void;
  onSelectCard: (item: MenuItem) => void;
  searchFilterTerm?: string;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  onQuickAdd,
  onSelectCard,
  searchFilterTerm = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Offerings' },
    { id: 'espresso', name: 'Espresso Classics' },
    { id: 'cold-brew', name: 'Cold Brews & Nitro' },
    { id: 'frappe', name: 'Ice Blended Frappes' },
    { id: 'manual-pour', name: 'Manual Pour Over' },
    { id: 'bakes', name: 'Fresh Isigny Bakes' },
    { id: 'savory', name: 'Bandra Artisanal Food' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const matchCat = activeCategory === 'all' || item.category === activeCategory;

    // Search term match
    const query = searchFilterTerm.toLowerCase().trim();
    const matchQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    // Tag filter
    let matchTag = true;
    if (selectedTag === 'popular') matchTag = !!item.isPopular;
    if (selectedTag === 'vegan') matchTag = !!item.isVegan;
    if (selectedTag === 'cold') matchTag = item.temperature === 'cold' || item.temperature === 'both';
    if (selectedTag === 'hot') matchTag = item.temperature === 'hot' || item.temperature === 'both';

    return matchCat && matchQuery && matchTag;
  });

  return (
    <section id="menu" className="py-20 bg-[#F4F1EA] text-[#181311] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5DFD3] text-[#241B18] text-xs font-bold uppercase tracking-wider border border-[#241B18]/10">
            <Coffee className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Handcrafted Daily in Bandra West</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#181311] uppercase tracking-tight">
            OUR FEATURED BREWS
          </h2>

          <p className="text-base text-[#181311]/80 font-normal max-w-xl mx-auto">
            From signature cold brews to rich espresso classics and flaky French Isigny bakes, priced thoughtfully in Indian Rupees (INR - ₹).
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#241B18] text-[#D4A373] shadow-md border border-[#241B18]'
                  : 'bg-[#E5DFD3] text-[#181311] hover:bg-[#241B18]/10 border border-transparent'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Quick Filter Tags */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold">
          <span className="text-[#181311]/60 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'popular', label: '★ Best Sellers' },
            { id: 'vegan', label: '🌱 Vegan Options' },
            { id: 'cold', label: '🧊 Chilled Drinks' },
            { id: 'hot', label: '☕ Hot Brews' },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3 py-1 rounded-md transition-colors ${
                selectedTag === tag.id
                  ? 'bg-[#D4A373] text-[#241B18] font-bold'
                  : 'bg-[#E5DFD3]/60 text-[#181311]/80 hover:bg-[#E5DFD3]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Search Query Feedback */}
        {searchFilterTerm && (
          <div className="mt-6 text-center text-sm font-medium text-[#241B18] bg-[#E5DFD3] py-2 px-4 rounded-xl max-w-md mx-auto">
            Showing results matching "{searchFilterTerm}" —{' '}
            <button
              onClick={() => window.location.reload()}
              className="underline font-bold text-[#8C6239]"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onQuickAdd={onQuickAdd}
                onSelectCard={onSelectCard}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-12 bg-[#E5DFD3]/40 rounded-3xl border border-[#241B18]/10 max-w-lg mx-auto">
            <Coffee className="w-12 h-12 text-[#241B18]/40 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold">No coffee or bakes found</h3>
            <p className="text-xs text-[#181311]/70 mt-1">
              Try adjusting your search query or filter category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedTag('all');
              }}
              className="mt-4 px-5 py-2 bg-[#241B18] text-[#FAFAFA] text-xs font-bold rounded-full uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

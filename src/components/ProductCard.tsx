import React from 'react';
import { Star, Plus, Flame, Heart, Info } from 'lucide-react';
import { MenuItem } from '../types';

interface ProductCardProps {
  item: MenuItem;
  onQuickAdd: (item: MenuItem) => void;
  onSelectCard: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
  onQuickAdd,
  onSelectCard,
}) => {
  return (
    <div className="relative pt-16 pb-6 px-5 bg-[#241B18] text-[#FAFAFA] rounded-3xl shadow-xl border border-[#D4A373]/20 hover:border-[#D4A373] transition-all duration-300 group flex flex-col justify-between mt-12 hover:-translate-y-1.5">
      
      {/* Circular Photo Cutout Breaking Upper Container Bounds */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#F4F1EA] shadow-2xl overflow-hidden bg-[#181311]">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Top Badges (Rating & Volume) */}
      <div className="flex items-center justify-between pt-2">
        {/* Rating Badge */}
        <div className="flex items-center gap-1 bg-[#181311] px-2.5 py-1 rounded-full text-xs font-bold text-[#D4A373] border border-[#D4A373]/30">
          <Star className="w-3.5 h-3.5 fill-[#D4A373]" />
          <span>{item.rating.toFixed(1)}</span>
          <span className="text-[10px] text-[#E5DFD3]/60">({item.reviewCount})</span>
        </div>

        {/* Volume / Size Indicator */}
        <div className="bg-[#332723] px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#E5DFD3] border border-[#E5DFD3]/10">
          {item.volume}
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-4 text-center space-y-2 flex-1">
        {/* Category & Tags */}
        <div className="flex items-center justify-center gap-2">
          {item.isPopular && (
            <span className="bg-[#D4A373] text-[#241B18] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md">
              Bandra Hot Seller
            </span>
          )}
          {item.isVegan && (
            <span className="bg-emerald-900/80 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-md">
              Vegan
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelectCard(item)}
          className="font-display text-lg font-bold text-[#FAFAFA] group-hover:text-[#D4A373] transition-colors cursor-pointer"
        >
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#E5DFD3]/80 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Footer (Price & Quick-Add + Action) */}
      <div className="mt-5 pt-4 border-t border-[#D4A373]/15 flex items-center justify-between">
        {/* Price in INR */}
        <div>
          <span className="text-xs text-[#D4A373] block uppercase tracking-wider font-semibold">Price</span>
          <span className="text-xl font-extrabold text-[#FAFAFA] font-display">₹{item.price}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectCard(item)}
            className="p-2.5 rounded-full bg-[#332723] text-[#E5DFD3] hover:text-[#FAFAFA] hover:bg-[#8C6239] transition-colors"
            title="Customise options"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={() => onQuickAdd(item)}
            className="flex items-center gap-1 px-3.5 py-2.5 bg-[#D4A373] text-[#241B18] rounded-full font-black text-xs uppercase tracking-wider hover:bg-[#FAFAFA] hover:scale-105 active:scale-95 transition-all shadow-lg"
            title="Add to order"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
};

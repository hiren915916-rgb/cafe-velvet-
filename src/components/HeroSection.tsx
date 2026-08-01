import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Star, Coffee, Award } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (term: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#241B18] text-[#FAFAFA]">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#241B18] via-[#181311] to-[#2E221E] opacity-95 pointer-events-none" />
      
      {/* Ambient Gold Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 text-[#D4A373] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Pali Hill, Bandra West • Mumbai</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-ping" />
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#FAFAFA] leading-[0.95] uppercase">
              EXPRESSO <br />
              <span className="text-[#D4A373] italic font-serif-accent lowercase font-normal">your</span>SELF
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#E5DFD3] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Pure coffee, local community, pure experience. Artisanal brews, nitro cold brews, and Isigny butter bakes crafted daily in the heart of Bandra West.
            </p>

            {/* Integrated Search Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="relative flex items-center bg-[#FAFAFA] rounded-full p-1.5 shadow-2xl border-2 border-[#D4A373]">
                <Search className="w-5 h-5 text-[#241B18] ml-3.5 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search coffee or bakes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-[#241B18] placeholder-[#181311]/60 text-sm font-medium focus:outline-none px-2"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#241B18] text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18] text-xs font-black uppercase tracking-wider rounded-full transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Quick Stats / Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#D4A373]/20 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#D4A373] font-bold text-lg">
                  <Star className="w-4 h-4 fill-[#D4A373]" />
                  <span>4.9 / 5</span>
                </div>
                <p className="text-[11px] text-[#E5DFD3]/80 uppercase tracking-wider">1,200+ Bandra Reviews</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#D4A373] font-bold text-lg">
                  <Coffee className="w-4 h-4" />
                  <span>100%</span>
                </div>
                <p className="text-[11px] text-[#E5DFD3]/80 uppercase tracking-wider">Single Origin Estate</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#D4A373] font-bold text-lg">
                  <Award className="w-4 h-4" />
                  <span>₹180+</span>
                </div>
                <p className="text-[11px] text-[#E5DFD3]/80 uppercase tracking-wider">Localized INR Pricing</p>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Craftsmanship Showcase) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Main Visual Circle Frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-[#D4A373]/40 p-3 bg-[#181311] shadow-2xl overflow-hidden group">
              <img
                src="/src/assets/images/hero_espresso_craft_1785579403468.jpg"
                alt="Barista pulling fresh espresso at Cafe Velvet Bean Bandra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#241B18]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge 1 - Velvet Latte Highlight */}
            <div className="absolute top-4 -left-4 sm:left-2 bg-[#F4F1EA] text-[#241B18] p-3 rounded-2xl shadow-2xl border border-[#D4A373] max-w-[180px] hidden sm:block animate-bounce duration-1000">
              <div className="flex items-center gap-2">
                <span className="text-xl">☕</span>
                <div>
                  <p className="text-xs font-black uppercase">Velvet Latte</p>
                  <p className="text-[10px] text-[#8C6239]">Bandra Favorite • ₹260</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 - Rating */}
            <div className="absolute -bottom-4 right-2 bg-[#241B18] border border-[#D4A373] text-[#FAFAFA] px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#D4A373] text-[#241B18] font-black text-xs flex items-center justify-center">
                ★ 4.9
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#FAFAFA]">Best Cold Brew</p>
                <p className="text-[10px] text-[#D4A373]">Pali Hill, Bandra West</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

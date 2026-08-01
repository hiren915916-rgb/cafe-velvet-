import React from 'react';
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181311] text-[#FAFAFA] border-t border-[#D4A373]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4A373]/15">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 font-display text-2xl font-extrabold text-[#FAFAFA] tracking-wider">
              <div className="w-8 h-8 rounded-full bg-[#D4A373] text-[#241B18] flex items-center justify-center">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span>CAFE VELVET BEAN</span>
            </div>

            <p className="text-xs text-[#E5DFD3]/80 leading-relaxed max-w-sm">
              Premium neighborhood artisanal coffee shop offering handcrafted espresso, nitrogen cold brews, and Isigny French bakes in Bandra West, Mumbai.
            </p>

            <div className="text-xs text-[#E5DFD3] space-y-1 pt-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Pali Hill, Bandra West, Mumbai, Maharashtra 400050</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>+91 98200 12345</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>hello@cafevelvetbean.in</span>
              </p>
            </div>
          </div>

          {/* Opening Hours Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-sm uppercase text-[#D4A373] tracking-widest">
              OPENING HOURS
            </h4>
            <div className="text-xs text-[#E5DFD3] space-y-2">
              <div className="p-3 bg-[#241B18] rounded-xl border border-[#D4A373]/10">
                <p className="font-bold text-[#FAFAFA]">Monday – Friday</p>
                <p className="text-[#D4A373]">08:00 AM – 11:00 PM</p>
              </div>
              <div className="p-3 bg-[#241B18] rounded-xl border border-[#D4A373]/10">
                <p className="font-bold text-[#FAFAFA]">Saturday – Sunday</p>
                <p className="text-[#D4A373]">08:00 AM – 12:00 Midnight</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-sm uppercase text-[#D4A373] tracking-widest">
              QUICK NAVIGATION
            </h4>
            <ul className="text-xs text-[#E5DFD3]/80 space-y-2 uppercase font-bold tracking-wider">
              <li>
                <a href="#" className="hover:text-[#D4A373] transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#D4A373] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A373] transition-colors">Featured Menu</a>
              </li>
              <li>
                <a href="#roasts" className="hover:text-[#D4A373] transition-colors">Roasts & Beans</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4A373] transition-colors">Bandra Location</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4A373] transition-colors">Bandra Reviews</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E5DFD3]/60 gap-4">
          <p>© 2026 Cafe Velvet Bean. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[#FAFAFA]">
            <a href="#" className="hover:text-[#D4A373] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#D4A373] transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#D4A373] transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

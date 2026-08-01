import React from 'react';
import { Coffee, MapPin, ExternalLink, PhoneCall, Sparkles } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenCart: () => void;
  onOpenWhatsApp: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  onOpenCart,
  onOpenWhatsApp,
}) => {
  return (
    <section className="py-20 bg-[#D4A373] text-[#241B18] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#241B18_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#241B18] text-[#D4A373] text-xs font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Freshly Extracted • Fast Delivery</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#241B18] leading-none">
          YOUR PERFECT CUP AWAITS
        </h2>

        {/* Sub-text */}
        <p className="text-base sm:text-lg font-medium text-[#241B18]/90 max-w-2xl mx-auto leading-relaxed">
          Drop by our Bandra outlet in Pali Hill or get your espresso & fresh Isigny bakes delivered hot & fresh to your doorstep.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          
          <a
            href="#location"
            className="px-8 py-4 bg-[#241B18] text-[#FAFAFA] font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#FAFAFA] hover:text-[#241B18] transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#D4A373]" />
            <span>Visit Outlet</span>
          </a>

          <button
            onClick={onOpenCart}
            className="px-8 py-4 bg-[#FAFAFA] text-[#241B18] font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#241B18] hover:text-[#FAFAFA] transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            <Coffee className="w-4 h-4 text-[#8C6239]" />
            <span>Order on Zomato / Swiggy</span>
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="px-8 py-4 bg-emerald-800 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-emerald-900 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>WhatsApp Quick Order</span>
          </button>

        </div>

      </div>
    </section>
  );
};

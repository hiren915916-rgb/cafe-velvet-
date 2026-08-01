import React from 'react';
import { Heart, MapPin, Wifi, Users, Sparkles, Coffee } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#E5DFD3] text-[#181311] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#241B18] h-[380px] sm:h-[460px]">
              <img
                src="/src/assets/images/cafe_ambience_bandra_1785579418596.jpg"
                alt="Cafe Velvet Bean Pali Hill Bandra Ambience"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241B18]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAFAFA]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4A373] text-[#241B18] text-[11px] font-extrabold uppercase rounded-full mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>Pali Hill, Bandra West</span>
                </div>
                <h3 className="font-display text-xl font-bold">The Neighborhood Sanctuary</h3>
                <p className="text-xs text-[#E5DFD3] mt-1">High-speed WiFi • Indoor AC Lounge • Alfresco Deck</p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#241B18] text-[#FAFAFA] p-5 rounded-2xl shadow-2xl border-2 border-[#D4A373] max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-2 text-[#D4A373] mb-1">
                <Coffee className="w-5 h-5" />
                <span className="font-display font-extrabold text-sm uppercase">100% Arabica</span>
              </div>
              <p className="text-xs text-[#E5DFD3]">Directly traded from shade-grown estates in Karnataka.</p>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241B18] text-[#D4A373] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-[#D4A373]" />
              <span>Rooted in Bandra West</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#181311] uppercase tracking-tight leading-[1.05]">
              CRAFTED FOR BANDRA'S COFFEE AFICIONADOS
            </h2>

            <p className="text-base text-[#181311]/90 leading-relaxed font-normal">
              Cafe Velvet Bean was born out of a passion for elevated coffee culture in Mumbai's most vibrant neighborhood. Tucked in the tree-lined avenues of Pali Hill, Bandra West, we combine world-class extraction technology with authentic Indian coffee heritage.
            </p>

            <p className="text-sm text-[#181311]/80 leading-relaxed">
              Whether you are looking for a morning Velvet Latte before work, an afternoon cold brew while co-working on our high-speed network, or freshIsigny butter croissants with friends, Cafe Velvet Bean is your second home.
            </p>

            {/* Feature Grid Icons */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#241B18]/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#241B18] text-[#D4A373] flex items-center justify-center shrink-0">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#181311]">Remote Work Ready</h4>
                  <p className="text-xs text-[#181311]/70">Ergonomic seating, power outlets & 300 Mbps fiber WiFi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#241B18] text-[#D4A373] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#181311]">Community Hub</h4>
                  <p className="text-xs text-[#181311]/70">Weekend coffee cupping sessions & local artist meetups.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

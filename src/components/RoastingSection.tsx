import React, { useState } from 'react';
import { ROAST_PROFILES } from '../data/roastData';
import { Flame, Compass, Award, CheckCircle2 } from 'lucide-react';

export const RoastingSection: React.FC = () => {
  const [selectedRoast, setSelectedRoast] = useState(ROAST_PROFILES[1]);

  return (
    <section id="roasts" className="py-20 bg-[#241B18] text-[#FAFAFA] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4A373]/20 text-[#D4A373] text-xs font-bold uppercase tracking-wider border border-[#D4A373]/30">
            <Flame className="w-3.5 h-3.5" />
            <span>Ethically Sourced Indian Arabica</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#FAFAFA] uppercase tracking-tight">
            OUR ROASTING & BEANS
          </h2>

          <p className="text-base text-[#E5DFD3]/90 font-normal max-w-2xl mx-auto">
            Every cup tells a story of ethically sourced beans from shade-grown Karnataka estates, precision micro-batch roasting, and handcrafted perfection.
          </p>
        </div>

        {/* Roast Profile Selector Tabs */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ROAST_PROFILES.map((roast) => {
            const isSelected = selectedRoast.id === roast.id;
            return (
              <button
                key={roast.id}
                onClick={() => setSelectedRoast(roast)}
                className={`p-5 rounded-2xl text-left border transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#181311] border-[#D4A373] shadow-2xl ring-2 ring-[#D4A373]/40'
                    : 'bg-[#181311]/60 border-[#D4A373]/20 hover:border-[#D4A373]/60'
                }`}
              >
                {/* Flame indicator meter */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-bold">
                    Level {roast.roastLevel}/5
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <span
                        key={lvl}
                        className={`w-2 h-2 rounded-full ${
                          lvl <= roast.roastLevel ? 'bg-[#D4A373]' : 'bg-[#E5DFD3]/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-lg text-[#FAFAFA] group-hover:text-[#D4A373] transition-colors">
                  {roast.type}
                </h3>

                <p className="text-xs text-[#E5DFD3]/70 mt-1 line-clamp-2">
                  {roast.description}
                </p>

                {isSelected && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#D4A373]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Selected Profile</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Roast Spotlight */}
        <div className="mt-10 p-8 rounded-3xl bg-[#181311] border border-[#D4A373]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 lg:h-80 border-2 border-[#D4A373]/30">
            <img
              src={selectedRoast.image}
              alt={selectedRoast.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181311] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#241B18]/90 backdrop-blur-md p-3 rounded-xl border border-[#D4A373]/30">
              <span className="text-[10px] text-[#D4A373] uppercase font-bold block">Estate Origin</span>
              <span className="text-xs font-bold text-[#FAFAFA]">{selectedRoast.origin}</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D4A373]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                  Roast Profile Analysis
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAFA] mt-1">
                {selectedRoast.title}
              </h3>
            </div>

            <p className="text-sm text-[#E5DFD3]/90 leading-relaxed">
              {selectedRoast.description}
            </p>

            {/* Flavor Notes Pills */}
            <div>
              <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-2">
                Key Tasting Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedRoast.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3.5 py-1.5 rounded-full bg-[#241B18] text-[#FAFAFA] border border-[#D4A373]/40 text-xs font-semibold"
                  >
                    ✨ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Acidity & Body Meters */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#E5DFD3]">
                  <span>Acidity Level</span>
                  <span className="text-[#D4A373] font-bold">{selectedRoast.acidity}/5</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#241B18] overflow-hidden border border-[#D4A373]/20">
                  <div
                    className="h-full bg-[#D4A373] rounded-full"
                    style={{ width: `${(selectedRoast.acidity / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#E5DFD3]">
                  <span>Body & Mouthfeel</span>
                  <span className="text-[#D4A373] font-bold">{selectedRoast.body}/5</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#241B18] overflow-hidden border border-[#D4A373]/20">
                  <div
                    className="h-full bg-[#D4A373] rounded-full"
                    style={{ width: `${(selectedRoast.body / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Best Recommended For */}
            <div className="p-3 bg-[#241B18] rounded-xl border border-[#D4A373]/20 flex items-center justify-between text-xs">
              <span className="text-[#E5DFD3]/80">Recommended Brewing Method:</span>
              <span className="font-extrabold text-[#D4A373] uppercase">{selectedRoast.bestFor}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

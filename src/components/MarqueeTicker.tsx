import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    'ESPRESSO ☕',
    'FRAPPUCCINO ☕',
    'COLD BREW ☕',
    'MATCHA ☕',
    'FRESH BAKES ☕',
    'BANDRA WEST ☕',
    'ARTISANAL ROASTS ☕',
    'PALI HILL MUMBAI ☕',
  ];

  // Repeat for smooth infinite scroll loop
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="bg-[#D4A373] text-[#241B18] py-3 overflow-hidden border-y border-[#241B18]/20 select-none shadow-md">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-4"
          >
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-[#241B18]/40" />
          </span>
        ))}
      </div>
    </div>
  );
};

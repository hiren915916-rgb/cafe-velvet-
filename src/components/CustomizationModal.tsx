import React, { useState } from 'react';
import { X, Check, Star, Plus, Minus, ShoppingBag } from 'lucide-react';
import { MenuItem, CustomizationOptions } from '../types';

interface CustomizationModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, customization: CustomizationOptions, quantity: number) => void;
}

export const CustomizationModal: React.FC<CustomizationModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<'250 ml' | '350 ml' | '450 ml'>('250 ml');
  const [milk, setMilk] = useState<CustomizationOptions['milk']>('Whole Milk');
  const [sweetness, setSweetness] = useState<CustomizationOptions['sweetness']>('100% (Standard Sweet)');
  const [temp, setTemp] = useState<'Hot' | 'Iced'>(item.temperature === 'cold' ? 'Iced' : 'Hot');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOnOptions = [
    { name: 'Extra Espresso Shot', price: 60 },
    { name: 'Madagascar Vanilla Syrup', price: 40 },
    { name: 'Hazelnut Drizzle', price: 40 },
    { name: 'Whipped Cream', price: 50 },
  ];

  const calculateTotalPrice = () => {
    let base = item.price;
    if (size === '350 ml') base += 40;
    if (size === '450 ml') base += 80;

    if (milk.includes('+₹50')) base += 50;
    if (milk.includes('+₹40')) base += 40;

    selectedAddOns.forEach((addon) => {
      const opt = addOnOptions.find((o) => o.name === addon);
      if (opt) base += opt.price;
    });

    return base * quantity;
  };

  const toggleAddOn = (name: string) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a !== name));
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  const handleConfirm = () => {
    onAddToCart(
      item,
      {
        size,
        milk,
        sweetness,
        temp,
        addOns: selectedAddOns,
      },
      quantity
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#241B18] text-[#FAFAFA] rounded-3xl w-full max-w-lg overflow-hidden border border-[#D4A373]/30 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="relative p-5 bg-[#181311] border-b border-[#D4A373]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#D4A373]"
            />
            <div>
              <h3 className="font-display font-bold text-lg text-[#FAFAFA]">{item.name}</h3>
              <p className="text-xs text-[#D4A373] font-semibold">₹{item.price} • {item.volume}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#332723] text-[#E5DFD3] hover:text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* Temperature Option if beverage */}
          {item.category !== 'bakes' && item.category !== 'savory' && (
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] block mb-2">
                Temperature
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Hot', 'Iced'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTemp(t as 'Hot' | 'Iced')}
                    className={`py-2 px-3 rounded-xl font-bold text-xs uppercase border transition-all ${
                      temp === t
                        ? 'bg-[#D4A373] text-[#241B18] border-[#D4A373]'
                        : 'bg-[#181311] text-[#E5DFD3] border-[#D4A373]/20 hover:border-[#D4A373]'
                    }`}
                  >
                    {t === 'Hot' ? '☕ Hot Brew' : '🧊 Iced / Chilled'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Choice */}
          {item.category !== 'bakes' && item.category !== 'savory' && (
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] block mb-2">
                Serving Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '250 ml', extra: 'Standard' },
                  { label: '350 ml', extra: '+₹40' },
                  { label: '450 ml', extra: '+₹80' },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setSize(s.label as any)}
                    className={`py-2 px-3 rounded-xl font-bold text-xs border transition-all text-center ${
                      size === s.label
                        ? 'bg-[#D4A373] text-[#241B18] border-[#D4A373]'
                        : 'bg-[#181311] text-[#E5DFD3] border-[#D4A373]/20'
                    }`}
                  >
                    <span className="block">{s.label}</span>
                    <span className="text-[10px] font-normal opacity-80">{s.extra}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Milk Preference */}
          {item.category !== 'bakes' && item.category !== 'savory' && (
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] block mb-2">
                Milk Choice
              </label>
              <div className="space-y-2">
                {[
                  'Whole Milk',
                  'Oat Milk (+₹50)',
                  'Almond Milk (+₹50)',
                  'Soy Milk (+₹40)',
                  'No Milk',
                ].map((m) => (
                  <label
                    key={m}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      milk === m
                        ? 'bg-[#D4A373]/20 border-[#D4A373] text-[#FAFAFA]'
                        : 'bg-[#181311] border-[#D4A373]/10 text-[#E5DFD3]/80'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="milk"
                        checked={milk === m}
                        onChange={() => setMilk(m as any)}
                        className="accent-[#D4A373]"
                      />
                      <span>{m}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Sweetness Level */}
          {item.category !== 'bakes' && item.category !== 'savory' && (
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] block mb-2">
                Sweetness Level
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '0% (Unsweetened)',
                  '50% (Less Sweet)',
                  '100% (Standard Sweet)',
                  '150% (Extra Sweet)',
                ].map((sw) => (
                  <button
                    key={sw}
                    type="button"
                    onClick={() => setSweetness(sw as any)}
                    className={`py-2 px-2.5 rounded-xl font-medium text-xs border text-left transition-all ${
                      sweetness === sw
                        ? 'bg-[#D4A373] text-[#241B18] font-bold border-[#D4A373]'
                        : 'bg-[#181311] text-[#E5DFD3] border-[#D4A373]/20'
                    }`}
                  >
                    {sw}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] block mb-2">
              Add-ons & Flavor Shots
            </label>
            <div className="space-y-2">
              {addOnOptions.map((opt) => {
                const checked = selectedAddOns.includes(opt.name);
                return (
                  <label
                    key={opt.name}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      checked
                        ? 'bg-[#D4A373]/20 border-[#D4A373] text-[#FAFAFA]'
                        : 'bg-[#181311] border-[#D4A373]/10 text-[#E5DFD3]/80'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddOn(opt.name)}
                        className="accent-[#D4A373] rounded"
                      />
                      <span>{opt.name}</span>
                    </div>
                    <span className="font-bold text-[#D4A373]">+₹{opt.price}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between pt-2 border-t border-[#D4A373]/20">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373]">
              Quantity
            </span>
            <div className="flex items-center gap-3 bg-[#181311] p-1.5 rounded-full border border-[#D4A373]/30">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full bg-[#332723] text-[#FAFAFA] flex items-center justify-center font-bold hover:bg-[#D4A373] hover:text-[#241B18]"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-bold text-sm text-[#FAFAFA] px-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full bg-[#332723] text-[#FAFAFA] flex items-center justify-center font-bold hover:bg-[#D4A373] hover:text-[#241B18]"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#181311] border-t border-[#D4A373]/20 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] text-[#E5DFD3]/70 block uppercase font-semibold">Total Price</span>
            <span className="text-2xl font-black text-[#D4A373] font-display">₹{calculateTotalPrice()}</span>
          </div>

          <button
            onClick={handleConfirm}
            className="flex items-center gap-2 px-6 py-3 bg-[#D4A373] text-[#241B18] rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#FAFAFA] transition-all shadow-xl"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add To Order</span>
          </button>
        </div>

      </div>
    </div>
  );
};

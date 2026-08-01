import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check, Sparkles, MapPin, PhoneCall } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, qty: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal > 500 ? 0 : 40) : 0;
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BANDRA10') {
      setAppliedDiscount(10);
      setPromoMessage('🎉 BANDRA10 applied! 10% discount subtracted.');
    } else if (promoCode.trim().toUpperCase() === 'VELVET20') {
      setAppliedDiscount(20);
      setPromoMessage('🎉 VELVET20 applied! 20% discount subtracted.');
    } else {
      setPromoMessage('Invalid promo code. Try "BANDRA10".');
    }
  };

  const generateWhatsAppOrderText = () => {
    let text = `*NEW ORDER - CAFE VELVET BEAN BANDRA*\n\n`;
    text += `*Order Mode:* ${orderType.toUpperCase()}\n`;
    text += `*Items:*\n`;
    cartItems.forEach((ci, idx) => {
      text += `${idx + 1}. ${ci.item.name} (x${ci.quantity}) - ₹${ci.totalPrice}\n`;
      text += `   • Size: ${ci.customization.size}\n`;
      if (ci.customization.milk) text += `   • Milk: ${ci.customization.milk}\n`;
      if (ci.customization.sweetness) text += `   • Sweetness: ${ci.customization.sweetness}\n`;
      if (ci.customization.addOns.length > 0) text += `   • Add-ons: ${ci.customization.addOns.join(', ')}\n`;
    });
    if (discountAmount > 0) text += `\n*Discount:* -₹${discountAmount.toFixed(0)}`;
    if (deliveryFee > 0) text += `\n*Delivery Fee:* ₹${deliveryFee}`;
    text += `\n\n*TOTAL AMOUNT:* ₹${finalTotal.toFixed(0)}\n\n`;
    text += `Please confirm my order & send payment UPI QR link.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#241B18] text-[#FAFAFA] border-l border-[#D4A373]/30 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 bg-[#181311] border-b border-[#D4A373]/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D4A373] text-[#241B18] flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg uppercase text-[#FAFAFA]">
                  Your Coffee Cart
                </h3>
                <p className="text-[11px] text-[#D4A373]">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#332723] text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="p-5 overflow-y-auto space-y-6 flex-1">
            
            {/* Delivery vs Pickup Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#181311] rounded-2xl border border-[#D4A373]/20 text-xs">
              <button
                onClick={() => setOrderType('delivery')}
                className={`py-2 px-3 rounded-xl font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                  orderType === 'delivery'
                    ? 'bg-[#D4A373] text-[#241B18]'
                    : 'text-[#E5DFD3]/70 hover:text-[#FAFAFA]'
                }`}
              >
                <span>🚀 Bandra Express Delivery</span>
              </button>

              <button
                onClick={() => setOrderType('pickup')}
                className={`py-2 px-3 rounded-xl font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                  orderType === 'pickup'
                    ? 'bg-[#D4A373] text-[#241B18]'
                    : 'text-[#E5DFD3]/70 hover:text-[#FAFAFA]'
                }`}
              >
                <span>☕ Pali Hill Takeaway</span>
              </button>
            </div>

            {/* Cart Items List */}
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((ci) => (
                  <div
                    key={ci.cartId}
                    className="p-4 bg-[#181311] rounded-2xl border border-[#D4A373]/20 flex items-start justify-between gap-3"
                  >
                    <img
                      src={ci.item.image}
                      alt={ci.item.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-[#D4A373]/30"
                    />

                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-xs text-[#FAFAFA]">{ci.item.name}</h4>
                        <span className="font-extrabold text-xs text-[#D4A373]">₹{ci.totalPrice}</span>
                      </div>

                      <p className="text-[10px] text-[#E5DFD3]/70">
                        Size: {ci.customization.size} • {ci.customization.temp}
                        {ci.customization.milk && ` • ${ci.customization.milk.split(' ')[0]}`}
                      </p>

                      {ci.customization.addOns.length > 0 && (
                        <p className="text-[9px] text-[#D4A373]">
                          + {ci.customization.addOns.join(', ')}
                        </p>
                      )}

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => onUpdateQuantity(ci.cartId, ci.quantity - 1)}
                          className="w-5 h-5 rounded-md bg-[#332723] text-[#FAFAFA] flex items-center justify-center text-xs font-bold hover:bg-[#D4A373] hover:text-[#241B18]"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">{ci.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(ci.cartId, ci.quantity + 1)}
                          className="w-5 h-5 rounded-md bg-[#332723] text-[#FAFAFA] flex items-center justify-center text-xs font-bold hover:bg-[#D4A373] hover:text-[#241B18]"
                        >
                          +
                        </button>

                        <button
                          onClick={() => onRemoveItem(ci.cartId)}
                          className="ml-auto text-[#E5DFD3]/40 hover:text-red-400 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code (e.g., BANDRA10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-[#181311] text-[#FAFAFA] px-3 py-2 rounded-xl border border-[#D4A373]/30 text-xs focus:outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#332723] text-[#D4A373] hover:bg-[#D4A373] hover:text-[#241B18] font-bold text-xs uppercase rounded-xl transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className="text-[10px] text-[#D4A373] mt-1 font-semibold">{promoMessage}</p>
                  )}
                </form>

              </div>
            ) : (
              <div className="text-center py-16 text-[#E5DFD3]/60 space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto text-[#D4A373]/40" />
                <p className="text-sm font-bold text-[#FAFAFA]">Your cart is currently empty</p>
                <p className="text-xs">Explore our featured brews and fresh bakes to add items.</p>
              </div>
            )}

          </div>

          {/* Drawer Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-[#181311] border-t border-[#D4A373]/20 space-y-3 shrink-0">
              
              <div className="space-y-1.5 text-xs text-[#E5DFD3]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#FAFAFA]">₹{subtotal}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount ({appliedDiscount}%)</span>
                    <span>-₹{discountAmount.toFixed(0)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Delivery Fee {subtotal > 500 && '(Free > ₹500)'}</span>
                  <span className="font-bold text-[#FAFAFA]">
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>

                <div className="flex justify-between text-base font-black text-[#D4A373] pt-2 border-t border-[#D4A373]/20">
                  <span>Total Amount</span>
                  <span className="font-display">₹{finalTotal.toFixed(0)}</span>
                </div>
              </div>

              {/* Checkout Triggers */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/919820012345?text=${generateWhatsAppOrderText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-800 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-xl"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Order Direct via WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-bold">
                  <a
                    href="https://www.swiggy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-[#FF5200] text-white rounded-xl uppercase tracking-wider hover:opacity-90"
                  >
                    Swiggy Order
                  </a>
                  <a
                    href="https://www.zomato.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-[#E23744] text-white rounded-xl uppercase tracking-wider hover:opacity-90"
                  >
                    Zomato Order
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { FeaturedMenu } from './components/FeaturedMenu';
import { CustomizationModal } from './components/CustomizationModal';
import { RoastingSection } from './components/RoastingSection';
import { StorySection } from './components/StorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { TableReservationModal } from './components/TableReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { MenuItem, CustomizationOptions, CartItem } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedCustomItem, setSelectedCustomItem] = useState<MenuItem | null>(null);
  const [searchFilterTerm, setSearchFilterTerm] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Quick add default configuration
  const handleQuickAdd = (item: MenuItem) => {
    const defaultCustomization: CustomizationOptions = {
      size: '250 ml',
      milk: 'Whole Milk',
      sweetness: '100% (Standard Sweet)',
      temp: item.temperature === 'cold' ? 'Iced' : 'Hot',
      addOns: [],
    };

    const cartId = `${item.id}-default-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      item,
      quantity: 1,
      customization: defaultCustomization,
      totalPrice: item.price,
    };

    setCartItems((prev) => [...prev, newItem]);
    showToast(`Added ${item.name} (₹${item.price}) to your order!`);
  };

  // Add customized item
  const handleAddCustomizedToCart = (
    item: MenuItem,
    customization: CustomizationOptions,
    quantity: number
  ) => {
    let unitPrice = item.price;
    if (customization.size === '350 ml') unitPrice += 40;
    if (customization.size === '450 ml') unitPrice += 80;
    if (customization.milk.includes('+₹50')) unitPrice += 50;
    if (customization.milk.includes('+₹40')) unitPrice += 40;
    
    // Add-on prices
    customization.addOns.forEach(() => {
      unitPrice += 45; // average add-on price
    });

    const totalPrice = unitPrice * quantity;
    const cartId = `${item.id}-custom-${Date.now()}`;

    const newItem: CartItem = {
      cartId,
      item,
      quantity,
      customization,
      totalPrice,
    };

    setCartItems((prev) => [...prev, newItem]);
    showToast(`Added ${quantity}x ${item.name} (₹${totalPrice}) to your order!`);
  };

  const handleUpdateQuantity = (cartId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveCartItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) => {
        if (ci.cartId === cartId) {
          const unitPrice = ci.totalPrice / ci.quantity;
          return {
            ...ci,
            quantity: qty,
            totalPrice: unitPrice * qty,
          };
        }
        return ci;
      })
    );
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  const handleOpenWhatsAppDirect = () => {
    window.open(
      'https://wa.me/919820012345?text=Hi%20Cafe%20Velvet%20Bean%20Bandra!%20I%20would%20like%20to%20place%20an%20order.',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#181311] font-sans relative selection:bg-[#D4A373] selection:text-[#241B18]">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#241B18] text-[#FAFAFA] border border-[#D4A373] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#D4A373]" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onSelectCategory={() => {}}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection onSearch={(term) => setSearchFilterTerm(term)} />
        <MarqueeTicker />
        <FeaturedMenu
          onQuickAdd={handleQuickAdd}
          onSelectCard={(item) => setSelectedCustomItem(item)}
          searchFilterTerm={searchFilterTerm}
        />
        <RoastingSection />
        <StorySection />
        <ReviewsSection />
        <LocationHoursSection onOpenReservation={() => setIsReservationOpen(true)} />
        <CallToActionBanner
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWhatsApp={handleOpenWhatsAppDirect}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      <CustomizationModal
        item={selectedCustomItem}
        onClose={() => setSelectedCustomItem(null)}
        onAddToCart={handleAddCustomizedToCart}
      />

      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}

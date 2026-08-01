import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Coffee, MapPin, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Roasts', href: '#roasts' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#241B18]/95 backdrop-blur-md text-[#FAFAFA] py-3.5 shadow-xl border-b border-[#D4A373]/20'
          : 'bg-[#241B18] text-[#FAFAFA] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-display text-xl sm:text-2xl font-extrabold tracking-wider text-[#FAFAFA] hover:text-[#D4A373] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-[#D4A373] flex items-center justify-center text-[#241B18] group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span>CAFE VELVET BEAN</span>
        </a>

        {/* Center Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-[#E5DFD3] hover:text-[#D4A373] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Cart Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#D4A373] border border-[#D4A373]/40 rounded-full hover:bg-[#D4A373]/10 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#332723] text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18] transition-colors"
            aria-label="View Order Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4A373] text-[#241B18] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#241B18]">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="#menu"
            className="px-5 py-2.5 bg-[#D4A373] text-[#241B18] text-xs font-black tracking-widest uppercase rounded-full hover:bg-[#FAFAFA] hover:text-[#241B18] transition-all transform hover:scale-105 shadow-md"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Toggle & Cart */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full bg-[#332723] text-[#FAFAFA]"
            aria-label="View Order Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4A373] text-[#241B18] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAFAFA] hover:text-[#D4A373]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#241B18] border-t border-[#D4A373]/20 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#FAFAFA] hover:text-[#D4A373] py-1 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#D4A373] border border-[#D4A373] rounded-full"
            >
              Book Table / Workshop
            </button>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center bg-[#D4A373] text-[#241B18] text-xs font-black tracking-widest uppercase rounded-full"
            >
              Order Online Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

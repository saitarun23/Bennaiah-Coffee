import React from 'react';
import { ShoppingBag, Search, Heart, PackageCheck, Grid } from 'lucide-react';
import logo from '../assets/logo.PNG'; // must match the exact filename

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  wishlist, 
  cartCount, 
  setCartOpen,
  activePage,
  onNavigate 
}) {
  return (
    <header className="bg-[#F7F5E9] border-b border-amber-200/70 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-[#f3ead7]">
            <img
              src={logo}
              alt="Bennaiah logo"
              className="w-full h-full object-cover scale-[1.3] group-hover:scale-[1.38] transition-transform duration-300"
            />
          </div>
          <div className="leading-tight">
            <span
              className="block text-4xl font-black tracking-wide text-[#8a5a12]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bennaiah
            </span>
            <span
              className="block text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Finest Processed Foods
            </span>
          </div>
        </div>

        {/* Search Bar (white) */}
        <div className="flex-1 max-w-sm relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a5a12]/60" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-white border border-amber-200 pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#8a5a12] focus:ring-2 focus:ring-[#8a5a12]/20 transition-all"
          />
        </div>

        {/* Navigation & Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => onNavigate('category')}
            className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center gap-1.5 ${
              activePage === 'category'
                ? 'bg-amber-100 text-[#8a5a12]'
                : 'text-slate-600 hover:bg-amber-100/60 hover:text-[#8a5a12]'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span className="hidden md:inline">Products</span>
          </button>

          <button 
            onClick={() => onNavigate('orders')}
            className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center gap-1.5 ${
              activePage === 'orders'
                ? 'bg-amber-100 text-[#8a5a12]'
                : 'text-slate-600 hover:bg-amber-100/60 hover:text-[#8a5a12]'
            }`}
          >
            <PackageCheck className="w-4 h-4" />
            <span className="hidden md:inline">Orders</span>
          </button>

          <button 
            onClick={() => onNavigate('wishlist')}
            className={`relative p-2.5 rounded-xl transition-colors ${
              activePage === 'wishlist'
                ? 'bg-amber-100 text-[#8a5a12]'
                : 'text-slate-600 hover:bg-amber-100/60 hover:text-[#8a5a12]'
            }`}
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#8a5a12] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Bag button: flat, no shadow */}
          <button 
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 bg-[#8a5a12] hover:bg-[#6f480e] text-white px-4 py-2.5 rounded-xl font-extrabold text-sm transition-colors active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            <span className="bg-white/20 text-white text-[11px] px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
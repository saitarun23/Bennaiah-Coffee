import React from 'react';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';

export default function WishlistPage({ 
  wishlist, 
  allProducts, 
  toggleWishlist, 
  cart, 
  addToCart, 
  updateQuantity, 
  setSelectedProduct,
  onNavigate 
}) {
  const savedProducts = allProducts.filter(p => wishlist.includes(p.id));

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-amber-200/70">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-rose-50 text-rose-500 rounded-2xl">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-black text-[#8a5a12]">Your Saved Wishlist</h2>
            <p className="text-xs text-slate-500">Keep track of your favorite daily essentials</p>
          </div>
        </div>
        <span className="text-xs font-bold bg-amber-100 text-[#8a5a12] border border-amber-200/70 px-3 py-1 rounded-full">
          {savedProducts.length} items
        </span>
      </div>

      {savedProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-amber-200/70 space-y-4">
          <Heart className="w-12 h-12 text-amber-200 mx-auto" />
          <h3 className="font-display text-xl font-bold text-[#3b2407]">Your wishlist is empty</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">Click the heart icon on any product to save items for your next quick-commerce order.</p>
          <button 
            onClick={() => onNavigate('home')}
            className="bg-[#8a5a12] hover:bg-[#6f480e] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-colors"
          >
            Explore Fresh Harvest
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {savedProducts.map(product => {
            const cartItem = cart.find(i => i.id === product.id);
            return (
              <ProductCard 
                key={product.id}
                product={product}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                cartItem={cartItem}
                addToCart={addToCart}
                updateQuantity={updateQuantity}
                setSelectedProduct={(prod) => {
                  setSelectedProduct(prod);
                  onNavigate('product-detail');
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
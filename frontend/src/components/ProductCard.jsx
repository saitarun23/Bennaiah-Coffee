import React from 'react';
import { Star, Heart, Clock, Plus, Minus } from 'lucide-react';

export default function ProductCard({ 
  product, 
  wishlist, 
  toggleWishlist, 
  cartItem, 
  addToCart, 
  updateQuantity, 
  setSelectedProduct 
}) {
  return (
    <div className="bg-white rounded-2xl border border-amber-200/70 overflow-hidden hover:border-[#8a5a12]/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
      
      {/* Product Image & Badges */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-[#f3ead7] cursor-pointer"
        onClick={() => setSelectedProduct(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute top-3 left-3 bg-[#8a5a12] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {product.badge}
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white text-slate-400 hover:text-rose-500 transition-colors"
        >
          <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        <div className="absolute bottom-3 left-3 bg-[#F7F5E9] text-[#8a5a12] text-[11px] font-bold px-2 py-0.5 rounded-lg border border-amber-200/70 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{product.eta}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-amber-500 mb-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold">{product.rating}</span>
            <span className="text-slate-500 text-xs">({product.reviews})</span>
          </div>

          <h3 
            onClick={() => setSelectedProduct(product)}
            className="font-display font-bold text-slate-900 text-base leading-snug hover:text-[#8a5a12] transition-colors cursor-pointer line-clamp-2 mb-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 mb-3">{product.unit}</p>
        </div>

        {/* Pricing & Add to Cart Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-amber-200/70">
          <div>
            <div className="text-xs text-slate-400 line-through">₹{product.originalPrice.toFixed(2)}</div>
            <div className="text-lg font-black text-[#8a5a12]">₹{product.price.toFixed(2)}</div>
          </div>

          {cartItem ? (
            <div className="flex items-center gap-2 bg-[#F7F5E9] border border-amber-200 rounded-xl p-1">
              <button 
                onClick={() => updateQuantity(product.id, -1)}
                className="w-7 h-7 rounded-lg bg-white text-[#8a5a12] flex items-center justify-center hover:bg-amber-100 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-extrabold text-sm text-[#8a5a12] px-1">{cartItem.quantity}</span>
              <button 
                onClick={() => updateQuantity(product.id, 1)}
                className="w-7 h-7 rounded-lg bg-[#8a5a12] text-white flex items-center justify-center hover:bg-[#6f480e] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => addToCart(product)}
              className="bg-[#F7F5E9] hover:bg-[#8a5a12] text-[#8a5a12] hover:text-white border border-amber-200 hover:border-[#8a5a12] px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
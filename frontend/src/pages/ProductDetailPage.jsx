import React from 'react';
import { Star, ShieldCheck, Truck, ArrowLeft, Plus, Minus, Heart, Share2 } from 'lucide-react';

export default function ProductDetailPage({ 
  product, 
  onBack, 
  cartItem, 
  addToCart, 
  updateQuantity, 
  wishlist, 
  toggleWishlist,
  allProducts,
  setSelectedProduct 
}) {
  if (!product) return null;

  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#8a5a12] bg-white border border-amber-200/70 hover:border-[#8a5a12]/50 px-4 py-2 rounded-xl transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Storefront</span>
      </button>

      {/* Primary Detail Container */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-amber-200/70 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column: Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#f3ead7] relative border border-amber-200/70">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-[#8a5a12] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.badge}
            </span>
            <button 
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white text-slate-400 hover:text-rose-500 transition-colors"
            >
              <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Right Column: Detailed Product Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#8a5a12] bg-amber-100 px-3 py-1 rounded-lg uppercase tracking-wider">
                {product.farm}
              </span>
              <button className="text-slate-400 hover:text-[#8a5a12] p-2 rounded-lg hover:bg-[#F7F5E9] transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-black text-[#3b2407] tracking-tight leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-extrabold ml-1">{product.rating}</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-bold text-slate-500">{product.reviews} verified buyer reviews</span>
            </div>

            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-display text-3xl font-black text-[#8a5a12]">₹{product.price.toFixed(2)}</span>
              <span className="text-sm font-bold text-slate-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
              <span className="text-xs font-bold text-[#2f5d3a] bg-[#2f5d3a]/10 px-2 py-0.5 rounded-md">
                Save ₹{(product.originalPrice - product.price).toFixed(2)}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              {product.description}
            </p>

            {/* Nutrition Facts Panel */}
            <div className="bg-[#F7F5E9] p-4 rounded-2xl border border-amber-200/70 space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8a5a12]">Nutritional Facts (Per Serving)</h4>
              <div className="grid grid-cols-3 gap-3 text-center pt-1">
                <div className="bg-white p-2.5 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-slate-500 font-bold block">CALORIES</span>
                  <span className="text-xs font-black text-slate-900">{product.calories}</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-slate-500 font-bold block">CARBOHYDRATES</span>
                  <span className="text-xs font-black text-slate-900">{product.carbs}</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] text-slate-500 font-bold block">PROTEIN</span>
                  <span className="text-xs font-black text-slate-900">{product.protein}</span>
                </div>
              </div>
            </div>

            {/* Quality Assurances */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-[#F7F5E9] p-3 rounded-xl border border-amber-200/70">
                <ShieldCheck className="w-4 h-4 text-[#8a5a12] shrink-0" />
                <span>100% Certified Eco-Harvest</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-[#F7F5E9] p-3 rounded-xl border border-amber-200/70">
                <Truck className="w-4 h-4 text-[#8a5a12] shrink-0" />
                <span>Guaranteed 12-Min Courier</span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-amber-200/70 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 block font-semibold">Unit Size</span>
              <span className="text-sm font-bold text-slate-800">{product.unit}</span>
            </div>

            {cartItem ? (
              <div className="flex items-center gap-3 bg-[#F7F5E9] border border-amber-200 rounded-2xl p-2">
                <button 
                  onClick={() => updateQuantity(product.id, -1)}
                  className="w-10 h-10 rounded-xl bg-white text-[#8a5a12] flex items-center justify-center font-bold hover:bg-amber-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-extrabold text-lg text-[#8a5a12] px-3">{cartItem.quantity}</span>
                <button 
                  onClick={() => updateQuantity(product.id, 1)}
                  className="w-10 h-10 rounded-xl bg-[#8a5a12] hover:bg-[#6f480e] text-white flex items-center justify-center font-bold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => addToCart(product)}
                className="bg-[#8a5a12] hover:bg-[#6f480e] text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2.5 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Add to Delivery Bag</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="font-display text-2xl font-black text-[#3b2407]">Frequently Bought Together</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map(rel => (
              <div 
                key={rel.id} 
                onClick={() => setSelectedProduct(rel)}
                className="bg-white rounded-2xl p-4 border border-amber-200/70 hover:border-[#8a5a12]/50 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-4 group"
              >
                <img src={rel.image} alt={rel.name} className="w-16 h-16 rounded-xl object-cover bg-[#f3ead7] group-hover:scale-105 transition-transform" />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-[#8a5a12] line-clamp-1 transition-colors">{rel.name}</h4>
                  <p className="text-xs text-slate-500 mb-1">{rel.unit}</p>
                  <div className="font-extrabold text-sm text-[#8a5a12]">₹{rel.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
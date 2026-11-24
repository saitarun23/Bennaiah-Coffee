import React from 'react';
import { X, Star, ShieldCheck, Truck, Plus, Minus } from 'lucide-react';

export default function ProductModal({ 
  product, 
  onClose, 
  cartItem, 
  addToCart, 
  updateQuantity 
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#3b2407]/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FBF9F1] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-200/70 relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#8a5a12] rounded-full hover:bg-amber-100 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#f3ead7] relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-[#8a5a12] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
              {product.badge}
            </span>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#8a5a12] uppercase tracking-wider">{product.farm}</span>
              <h2 className="font-display text-2xl font-black text-slate-900 mt-1 mb-2">{product.name}</h2>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold ml-1">{product.rating}</span>
                </div>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500">{product.reviews} reviews</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">{product.description}</p>

              <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-xl mb-4 border border-amber-200/70 text-center">
                <div>
                  <span className="text-[10px] text-[#8a5a12] font-bold block">CALORIES</span>
                  <span className="text-xs font-extrabold text-slate-800">{product.calories}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8a5a12] font-bold block">CARBS</span>
                  <span className="text-xs font-extrabold text-slate-800">{product.carbs}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8a5a12] font-bold block">PROTEIN</span>
                  <span className="text-xs font-extrabold text-slate-800">{product.protein}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#8a5a12]" />
                  <span>100% Organic & Quality Inspected</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Truck className="w-4 h-4 text-[#8a5a12]" />
                  <span>Dispatched in temperature-controlled bag</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-amber-200/70">
              <div>
                <span className="text-xs text-slate-500 block">Total Price</span>
                <span className="font-display text-2xl font-black text-[#8a5a12]">₹{product.price.toFixed(2)}</span>
              </div>

              {cartItem ? (
                <div className="flex items-center gap-3 bg-[#F7F5E9] border border-amber-200 rounded-xl p-1.5">
                  <button 
                    onClick={() => updateQuantity(product.id, -1)}
                    className="w-8 h-8 rounded-lg bg-white text-[#8a5a12] flex items-center justify-center hover:bg-amber-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-extrabold text-[#8a5a12] px-2">{cartItem.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(product.id, 1)}
                    className="w-8 h-8 rounded-lg bg-[#8a5a12] text-white flex items-center justify-center hover:bg-[#6f480e] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-[#8a5a12] hover:bg-[#6f480e] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
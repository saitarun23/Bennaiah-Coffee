import React from 'react';
import { X, Star, ShieldCheck, Truck, Plus, Minus } from 'lucide-react';
import '../styles/ProductModal.css';

export default function ProductModal({ product, onClose, cartItem, addToCart, updateQuantity }) {
  return (
    <div className="overlay overlay--center">
      <div className="pmodal">
        <button onClick={onClose} className="icon-close" aria-label="Close"><X /></button>

        <div className="pmodal__grid">
          <div className="pmodal__image">
            <img src={product.image} alt={product.name} />
            <span className="pmodal__badge">{product.badge}</span>
          </div>

          <div className="pmodal__info">
            <div>
              <span className="pmodal__farm">{product.farm}</span>
              <h2 className="pmodal__name">{product.name}</h2>

              <div className="pmodal__rating">
                <span className="pmodal__stars"><Star /> {product.rating}</span>
                <span className="dot" />
                <span className="pmodal__reviews">{product.reviews} reviews</span>
              </div>

              <p className="pmodal__desc">{product.description}</p>

              <div className="pmodal__nutrition">
                <div><span>CALORIES</span><strong>{product.calories}</strong></div>
                <div><span>CARBS</span><strong>{product.carbs}</strong></div>
                <div><span>PROTEIN</span><strong>{product.protein}</strong></div>
              </div>

              <div className="pmodal__perks">
                <div><ShieldCheck /><span>100% Organic &amp; Quality Inspected</span></div>
                <div><Truck /><span>Dispatched in temperature-controlled bag</span></div>
              </div>
            </div>

            <div className="pmodal__action">
              <div>
                <span className="pmodal__price-label">Total Price</span>
                <span className="pmodal__price">₹{product.price.toFixed(2)}</span>
              </div>

              {cartItem ? (
                <div className="qty">
                  <button onClick={() => updateQuantity(product.id, -1)} className="qty__btn"><Minus /></button>
                  <span className="qty__value">{cartItem.quantity}</span>
                  <button onClick={() => updateQuantity(product.id, 1)} className="qty__btn qty__btn--plus"><Plus /></button>
                </div>
              ) : (
                <button onClick={() => addToCart(product)} className="btn-gold">
                  <Plus size={16} />
                  <span>Add to Cart</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
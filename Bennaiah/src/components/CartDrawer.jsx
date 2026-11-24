import React from 'react';
import { X, ShoppingBag, Plus, Minus, ArrowRight, PartyPopper } from 'lucide-react';
import '../styles/CartDrawer.css';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  subtotal,
  freeShippingTarget,
  onCheckout,
}) {
  if (!isOpen) return null;

  const isFree = subtotal >= freeShippingTarget;
  const total = subtotal + (isFree ? 0 : 1.99);

  return (
    <div className="overlay overlay--right">
      <div className="cart">
        <div className="cart__header">
          <div className="cart__title">
            <ShoppingBag />
            <h3>Your Delivery Bag</h3>
          </div>
          <button onClick={onClose} className="cart__close" aria-label="Close bag">
            <X />
          </button>
        </div>

        <div className="cart__progress">
          <p>
            {isFree ? (
              <>
                <PartyPopper />
                <span>Free Delivery Unlocked!</span>
              </>
            ) : (
              `Add ₹${(freeShippingTarget - subtotal).toFixed(2)} more for Free Express Shipping`
            )}
          </p>
          <div className="cart__bar">
            <div className="cart__bar-fill" style={{ width: `${Math.min(100, (subtotal / freeShippingTarget) * 100)}%` }} />
          </div>
        </div>

        <div className="cart__items">
          {cart.length === 0 ? (
            <div className="cart__empty">
              <ShoppingBag />
              <p>Your bag is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart__item">
                <img src={item.image} alt={item.name} />
                <div className="cart__item-info">
                  <h4>{item.name}</h4>
                  <div className="cart__item-unit">{item.unit}</div>
                  <div className="cart__item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div className="qty">
                  <button onClick={() => updateQuantity(item.id, -1)} className="qty__btn"><Minus /></button>
                  <span className="qty__value">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="qty__btn qty__btn--plus"><Plus /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart__footer">
            <div className="cart__row">
              <span>Subtotal</span>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>
            <div className="cart__row">
              <span>Delivery Fee</span>
              <strong className="cart__free">{isFree ? 'FREE' : '₹1.99'}</strong>
            </div>
            <div className="cart__row cart__row--total">
              <span>Total Amount</span>
              <span className="cart__total">₹{total.toFixed(2)}</span>
            </div>
            <button onClick={onCheckout} className="btn-gold btn-block cart__checkout">
              <span>Proceed to Express Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
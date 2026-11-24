import React from 'react';
import { Star, Heart, Clock, Plus, Minus } from 'lucide-react';
import '../styles/ProductCard.css';

export default function ProductCard({
  product,
  wishlist,
  toggleWishlist,
  cartItem,
  addToCart,
  updateQuantity,
  setSelectedProduct,
}) {
  const liked = wishlist.includes(product.id);

  return (
    <div className="pcard">
      <div className="pcard__image" onClick={() => setSelectedProduct(product)}>
        <img src={product.image} alt={product.name} />
        <div className="pcard__badge">{product.badge}</div>

        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          className={`pcard__wish ${liked ? 'pcard__wish--on' : ''}`}
          aria-label="Toggle wishlist"
        >
          <Heart />
        </button>

        <div className="pcard__eta">
          <Clock />
          <span>{product.eta}</span>
        </div>
      </div>

      <div className="pcard__body">
        <div>
          <div className="pcard__rating">
            <Star />
            <b>{product.rating}</b>
            <span>({product.reviews})</span>
          </div>
          <h3 onClick={() => setSelectedProduct(product)} className="pcard__name">{product.name}</h3>
          <p className="pcard__unit">{product.unit}</p>
        </div>

        <div className="pcard__footer">
          <div>
            <div className="pcard__old">₹{product.originalPrice.toFixed(2)}</div>
            <div className="pcard__price">₹{product.price.toFixed(2)}</div>
          </div>

          {cartItem ? (
            <div className="qty pcard__qty">
              <button onClick={() => updateQuantity(product.id, -1)} className="qty__btn"><Minus /></button>
              <span className="qty__value">{cartItem.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)} className="qty__btn qty__btn--plus"><Plus /></button>
            </div>
          ) : (
            <button onClick={() => addToCart(product)} className="pcard__add">
              <Plus />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
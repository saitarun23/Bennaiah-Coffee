import React from 'react';
import { Star, ShieldCheck, Truck, ArrowLeft, Plus, Minus, Heart, Share2 } from 'lucide-react';
import '../styles/ProductDetailPage.css';

export default function ProductDetailPage({
  product,
  onBack,
  cartItem,
  addToCart,
  updateQuantity,
  wishlist,
  toggleWishlist,
  allProducts,
  setSelectedProduct,
}) {
  if (!product) return null;

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="detail fade-in">
      <button onClick={onBack} className="detail__back">
        <ArrowLeft />
        <span>Back to Storefront</span>
      </button>

      <div className="detail__main">
        <div className="detail__image">
          <img src={product.image} alt={product.name} />
          <span className="detail__badge">{product.badge}</span>
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`detail__wish ${wishlist.includes(product.id) ? 'detail__wish--on' : ''}`}
            aria-label="Toggle wishlist"
          >
            <Heart />
          </button>
        </div>

        <div className="detail__info">
          <div className="detail__top">
            <div className="detail__farm-row">
              <span className="detail__farm">{product.farm}</span>
              <button className="detail__share" aria-label="Share"><Share2 /></button>
            </div>

            <h1 className="detail__name">{product.name}</h1>

            <div className="detail__rating">
              <span className="detail__stars"><Star /> {product.rating}</span>
              <span className="dot" />
              <span className="detail__reviews">{product.reviews} verified buyer reviews</span>
            </div>

            <div className="detail__prices">
              <span className="detail__price">₹{product.price.toFixed(2)}</span>
              <span className="detail__old">₹{product.originalPrice.toFixed(2)}</span>
              <span className="detail__save">Save ₹{(product.originalPrice - product.price).toFixed(2)}</span>
            </div>

            <p className="detail__desc">{product.description}</p>

            <div className="detail__nutrition">
              <h4>Nutritional Facts (Per Serving)</h4>
              <div className="detail__nutrition-grid">
                <div><span>CALORIES</span><strong>{product.calories}</strong></div>
                <div><span>CARBS</span><strong>{product.carbs}</strong></div>
                <div><span>PROTEIN</span><strong>{product.protein}</strong></div>
              </div>
            </div>

            <div className="detail__assure">
              <div><ShieldCheck /><span>100% Certified Eco-Harvest</span></div>
              <div><Truck /><span>Guaranteed 12-Min Courier</span></div>
            </div>
          </div>

          <div className="detail__action">
            <div>
              <span className="detail__unit-label">Unit Size</span>
              <span className="detail__unit">{product.unit}</span>
            </div>

            {cartItem ? (
              <div className="qty detail__qty">
                <button onClick={() => updateQuantity(product.id, -1)} className="qty__btn"><Minus /></button>
                <span className="qty__value">{cartItem.quantity}</span>
                <button onClick={() => updateQuantity(product.id, 1)} className="qty__btn qty__btn--plus"><Plus /></button>
              </div>
            ) : (
              <button onClick={() => addToCart(product)} className="btn-gold detail__add">
                <Plus size={20} />
                <span>Add to Delivery Bag</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="detail__related">
          <h3>Frequently Bought Together</h3>
          <div className="detail__related-grid">
            {relatedProducts.map((rel) => (
              <div key={rel.id} onClick={() => setSelectedProduct(rel)} className="detail__rel">
                <img src={rel.image} alt={rel.name} />
                <div>
                  <h4>{rel.name}</h4>
                  <p>{rel.unit}</p>
                  <span className="detail__rel-price">₹{rel.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
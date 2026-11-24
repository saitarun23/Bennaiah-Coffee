import React from 'react';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';
import '../styles/WishlistPage.css';

export default function WishlistPage({
  wishlist,
  allProducts,
  toggleWishlist,
  cart,
  addToCart,
  updateQuantity,
  setSelectedProduct,
  onNavigate,
}) {
  const savedProducts = allProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className="wish fade-in">
      <div className="wish__head">
        <div className="wish__head-left">
          <div className="wish__icon"><Heart /></div>
          <div>
            <h2>Your Saved Wishlist</h2>
            <p>Keep track of your favorite daily essentials</p>
          </div>
        </div>
        <span className="pill">{savedProducts.length} items</span>
      </div>

      {savedProducts.length === 0 ? (
        <div className="wish__empty">
          <Heart />
          <h3>Your wishlist is empty</h3>
          <p>Click the heart icon on any product to save items for your next quick-commerce order.</p>
          <button onClick={() => onNavigate('home')} className="btn-gold">Explore Fresh Harvest</button>
        </div>
      ) : (
        <div className="product-grid product-grid--4">
          {savedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              cartItem={cart.find((i) => i.id === product.id)}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              setSelectedProduct={(prod) => {
                setSelectedProduct(prod);
                onNavigate('product-detail');
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
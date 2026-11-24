import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategoryRail from '../components/CategoryRail';
import FlashDeals from '../components/FlashDeals';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

export default function HomePage({
  heroSlide,
  setHeroSlide,
  activeCategory,
  setActiveCategory,
  filteredProducts,
  wishlist,
  toggleWishlist,
  cart,
  addToCart,
  updateQuantity,
  setSelectedProduct,
  onNavigate,
}) {
  return (
    <div className="home">
      <HeroCarousel heroSlide={heroSlide} setHeroSlide={setHeroSlide} />

      <div className="home__layout">
        <CategoryRail
          activeCategory={activeCategory}
          setActiveCategory={(catId) => {
            setActiveCategory(catId);
            if (catId !== 'all') onNavigate('category');
          }}
        />

        <div className="home__content">
          <FlashDeals />

          <div className="home__head">
            <div>
              <h3>{activeCategory === 'all' ? 'Fresh Harvest Picks' : 'Filtered Selection'}</h3>
              <p>Handpicked organic essentials ready for instant dispatch</p>
            </div>
            <span className="pill">{filteredProducts.length} items available</span>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
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
        </div>
      </div>
    </div>
  );
}
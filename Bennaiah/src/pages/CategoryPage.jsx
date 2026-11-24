import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../data/mockData';
import { ArrowUpDown } from 'lucide-react';
import '../styles/CategoryPage.css';

export default function CategoryPage({
  activeCategory,
  setActiveCategory,
  products,
  wishlist,
  toggleWishlist,
  cart,
  addToCart,
  updateQuantity,
  setSelectedProduct,
  onNavigate,
}) {
  const [sortBy, setSortBy] = useState('popular');

  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];
  let filtered = products.filter((p) => activeCategory === 'all' || p.category === activeCategory);

  if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="catpage">
      <div className="catpage__banner">
        <div className="catpage__banner-text">
          <span className="catpage__eyebrow">Category Catalog</span>
          <h2>{currentCategoryObj.name}</h2>
          <p>All items are inspected daily by our darkstore specialists before packing. Guaranteed fresh.</p>
        </div>
        <img src={currentCategoryObj.image} alt={currentCategoryObj.name} className="catpage__banner-img" />
      </div>

      <div className="catpage__bar">
        <div className="catpage__pills scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`catpage__pill ${activeCategory === cat.id ? 'catpage__pill--active' : ''}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <div className="catpage__sort">
          <ArrowUpDown />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="product-grid product-grid--4">
        {filtered.map((product) => (
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
  );
}
import React from 'react';
import { ShoppingBag, Search, Heart, PackageCheck, Grid } from 'lucide-react';
import logo from '../assets/logo.PNG'; // must match the exact filename
import '../styles/Header.css';

export default function Header({
  searchQuery,
  setSearchQuery,
  wishlist,
  cartCount,
  setCartOpen,
  activePage,
  onNavigate,
}) {
  const navClass = (page) => `header__nav-btn ${activePage === page ? 'header__nav-btn--active' : ''}`;

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand" onClick={() => onNavigate('home')}>
          <div className="header__logo">
            <img src={logo} alt="Bennaiah logo" />
          </div>
          <div className="header__text">
            <span className="header__name">Bennaiah</span>
            <span className="header__tagline">Finest Processed Foods</span>
          </div>
        </div>

        <div className="header__search">
          <Search className="header__search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
        </div>

        <div className="header__actions">
          <button onClick={() => onNavigate('category')} className={navClass('category')}>
            <Grid />
            <span className="header__nav-label">Products</span>
          </button>

          <button onClick={() => onNavigate('orders')} className={navClass('orders')}>
            <PackageCheck />
            <span className="header__nav-label">Orders</span>
          </button>

          <button onClick={() => onNavigate('wishlist')} className={`${navClass('wishlist')} header__wish`}>
            <Heart />
            {wishlist.length > 0 && <span className="header__wish-count">{wishlist.length}</span>}
          </button>

          <button onClick={() => setCartOpen(true)} className="header__bag">
            <ShoppingBag />
            <span className="header__bag-label">Bag</span>
            <span className="header__bag-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LocationModal from './components/LocationModal';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';

import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import OrdersTrackPage from './pages/OrdersTrackPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';

import { PRODUCTS, LOCATIONS } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // home, product-detail, category, orders, wishlist, profile
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [heroSlide, setHeroSlide] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(LOCATIONS[0]);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0);

  // Keeps the latest selected product available inside navigate()
  const selectedRef = useRef(null);
  const selectProduct = (product) => {
    selectedRef.current = product;
    setSelectedProduct(product);
  };

  // Scroll to top whenever the page or the opened product changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [activePage, selectedProduct?.id]);

  // Browser Back / Forward support
  useEffect(() => {
    window.history.replaceState({ page: 'home', productId: null }, '');

    const onPopState = (event) => {
      const state = event.state || { page: 'home', productId: null };
      setActivePage(state.page);
      setCartOpen(false);

      if (state.page === 'product-detail' && state.productId) {
        const product = PRODUCTS.find((p) => p.id === state.productId) || null;
        selectedRef.current = product;
        setSelectedProduct(product);
      } else {
        selectedRef.current = null;
        setSelectedProduct(null);
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Every page change adds a browser history entry
  const navigate = (page) => {
    if (page === activePage && page !== 'product-detail') return;

    if (page !== 'product-detail') {
      selectedRef.current = null;
      setSelectedProduct(null);
    }

    window.history.pushState(
      { page, productId: page === 'product-detail' ? selectedRef.current?.id ?? null : null },
      ''
    );
    setActivePage(page);
  };

  // Cart operations
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingTarget = 25;

  return (
    <div className="app">
      <div>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          wishlist={wishlist}
          cartCount={cartCount}
          setCartOpen={setCartOpen}
          activePage={activePage}
          onNavigate={navigate}
        />

        <main className="app__main">
          {activePage === 'home' && (
            <HomePage
              heroSlide={heroSlide}
              setHeroSlide={setHeroSlide}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              filteredProducts={filteredProducts}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              setSelectedProduct={selectProduct}
              onNavigate={navigate}
            />
          )}

          {activePage === 'product-detail' && (
            <ProductDetailPage
              product={selectedProduct}
              onBack={() => window.history.back()}
              cartItem={cart.find((i) => i.id === selectedProduct?.id)}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              allProducts={PRODUCTS}
              setSelectedProduct={selectProduct}
            />
          )}

          {activePage === 'category' && (
            <CategoryPage
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              products={PRODUCTS}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              setSelectedProduct={selectProduct}
              onNavigate={navigate}
            />
          )}

          {activePage === 'orders' && <OrdersTrackPage currentLocation={currentLocation} />}

          {activePage === 'profile' && (
            <ProfilePage currentLocation={currentLocation} onNavigate={navigate} />
          )}

          {activePage === 'wishlist' && (
            <WishlistPage
              wishlist={wishlist}
              allProducts={PRODUCTS}
              toggleWishlist={toggleWishlist}
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              setSelectedProduct={selectProduct}
              onNavigate={navigate}
            />
          )}
        </main>
      </div>

      <Footer />

      {showLocationModal && (
        <LocationModal
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          onClose={() => setShowLocationModal(false)}
        />
      )}

      {selectedProduct && activePage !== 'product-detail' && (
        <ProductModal
          product={selectedProduct}
          onClose={() => selectProduct(null)}
          cartItem={cart.find((i) => i.id === selectedProduct.id)}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      )}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        subtotal={subtotal}
        freeShippingTarget={freeShippingTarget}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutStep(1);
        }}
      />

      {checkoutStep > 0 && (
        <CheckoutModal
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
          onClose={() => setCheckoutStep(0)}
          subtotal={subtotal}
          freeShippingTarget={freeShippingTarget}
          onOrderSuccess={() => {
            setCart([]);
            setCheckoutStep(4);
            navigate('orders');
          }}
        />
      )}
    </div>
  );
}
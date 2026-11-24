import React from 'react';
import { MapPin, CreditCard, Clock, ShieldCheck, Heart, ChevronRight, Zap } from 'lucide-react';
import '../styles/ProfilePage.css';

export default function ProfilePage({ currentLocation, onNavigate }) {
  return (
    <div className="profile fade-in">
      <div className="profile__head">
        <div className="profile__avatar">ST</div>
        <div className="profile__head-text">
          <h2>Sai Tarun</h2>
          <p className="profile__contact">
            <span>tarun@bennaiah.com</span>
            <span className="dot" />
            <span>+91 98765 43210</span>
          </p>
          <div className="profile__tags">
            <span className="profile__tag profile__tag--gold">Bennaiah Member</span>
            <span className="profile__tag profile__tag--green">
              <Zap />
              Free Shipping Active
            </span>
          </div>
        </div>
      </div>

      <div className="profile__grid">
        <div className="profile__card">
          <h3><MapPin /> Delivery Addresses</h3>
          <div className="profile__row profile__row--active">
            <div>
              <div className="profile__row-title">Home (Default)</div>
              <div className="profile__row-sub">742 Evergreen Terrace, {currentLocation.city}</div>
            </div>
            <span className="profile__active">Active</span>
          </div>
        </div>

        <div className="profile__card">
          <h3><CreditCard /> Bennaiah Wallet</h3>
          <div className="profile__row">
            <div>
              <div className="profile__row-title">Wallet Balance</div>
              <div className="profile__balance">₹450.00</div>
            </div>
            <button className="btn-gold profile__cash">Add Cash</button>
          </div>
        </div>
      </div>

      <div className="profile__menu">
        <button onClick={() => onNavigate('orders')}>
          <div><Clock className="gold" /><span>Order History &amp; Receipts</span></div>
          <ChevronRight />
        </button>
        <button onClick={() => onNavigate('wishlist')}>
          <div><Heart className="rose" /><span>Saved Wishlist Items</span></div>
          <ChevronRight />
        </button>
        <button onClick={() => onNavigate('farms')}>
          <div><ShieldCheck className="gold" /><span>Local Eco-Farm Partners</span></div>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
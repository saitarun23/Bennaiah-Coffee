import React from 'react';
import { ShieldCheck, Truck, Clock, RefreshCw, Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.PNG'; // must match the exact filename
import '../styles/Footer.css';

const HIGHLIGHTS = [
  { icon: Clock, title: '10-15 Min Dispatch', text: 'Packed fresh from local darkstores' },
  { icon: ShieldCheck, title: '100% Eco-Certified', text: 'Directly from local family farms' },
  { icon: Truck, title: 'Cold-Chain Delivery', text: 'Insulated bags lock in freshness' },
  { icon: RefreshCw, title: 'Easy Refund Policy', text: 'Instant credit for any quality issue' },
];

const LINK_COLUMNS = [
  {
    heading: 'Categories',
    links: ['Organic Fruits', 'Farm Fresh Veggies', 'A2 Dairy & Pasture Eggs', 'Artisan Sourdough & Breads', 'Cold-Pressed Oils & Spices'],
  },
  {
    heading: 'Company',
    links: ['About Bennaiah', 'Our Partner Eco-Farms', 'Darkstore Hub Locations', 'Sustainability & Impact', 'Careers & Rider Network'],
  },
  {
    heading: 'Customer Support',
    links: ['Help Center & FAQ', 'Track Your Order', 'Refund & Return Policy', 'Terms of Service', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__highlights">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="footer__highlight">
              <div className="footer__highlight-icon"><Icon /></div>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <div className="footer__logo">
                <img src={logo} alt="Bennaiah logo" />
              </div>
              <div className="footer__brand-text">
                <span className="footer__name">Bennaiah</span>
                <span className="footer__tagline">Finest Processed Foods</span>
              </div>
            </div>
            <p className="footer__about">
              Farm-to-table produce, artisanal treats, and daily essentials delivered right to your kitchen in under 15 minutes.
            </p>

            <div className="footer__newsletter">
              <span>Subscribe for weekly farm updates &amp; promo codes</span>
              <div className="footer__newsletter-row">
                <div className="footer__newsletter-field">
                  <Mail />
                  <input type="email" placeholder="Enter your email address..." />
                </div>
                <button className="footer__join">
                  <span>Join</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.heading} className="footer__col">
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Urmistek. All rights reserved.</p>
          <div className="footer__legal">
            {['Privacy', 'Terms', 'Cookies', 'Security'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
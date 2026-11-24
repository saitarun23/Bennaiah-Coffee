import React from 'react';
import { ShieldCheck, Truck, Clock, RefreshCw, Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.PNG'; // must match the exact filename

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
    <footer className="bg-[#3b2407] text-amber-100/80 mt-16 pt-12 pb-8 border-t border-[#8a5a12]/40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Value Proposition Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-white/10">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3.5 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="p-2.5 rounded-xl bg-[#8a5a12]/30 text-amber-300">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-white">{title}</h4>
                <p className="text-xs text-amber-100/60">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12 border-b border-white/10">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#f3ead7]">
                <img src={logo} alt="Bennaiah logo" className="w-full h-full object-cover scale-[1.3]" />
              </div>
              <div className="leading-tight">
                <span className="font-display block text-2xl font-black tracking-wide text-amber-300">Bennaiah</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-100/70">
                  Finest Processed Foods
                </span>
              </div>
            </div>
            <p className="text-xs text-amber-100/60 max-w-sm leading-relaxed">
              Farm-to-table produce, artisanal treats, and daily essentials delivered right to your kitchen in under 15 minutes.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-bold text-white block mb-2">Subscribe for weekly farm updates & promo codes</span>
              <div className="flex max-w-sm">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8a5a12]" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address..."
                    className="w-full bg-white border border-amber-200 text-xs text-slate-800 pl-9 pr-3 py-2.5 rounded-l-xl focus:outline-none focus:border-[#8a5a12]"
                  />
                </div>
                <button className="bg-[#8a5a12] hover:bg-[#a56d18] text-white px-4 text-xs font-bold rounded-r-xl transition-colors flex items-center gap-1">
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {LINK_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h5 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300 mb-4">
                {col.heading}
              </h5>
              <ul className="space-y-2 text-xs font-medium text-amber-100/70">
                {col.links.map((link) => (
                  <li key={link} className="hover:text-amber-300 cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-100/50 gap-4">
          <p>© {new Date().getFullYear()} Bennaiah. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies', 'Security'].map((item) => (
              <span key={item} className="hover:text-amber-300 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
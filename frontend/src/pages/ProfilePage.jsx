import React from 'react';
import { MapPin, CreditCard, Clock, ShieldCheck, Heart, ChevronRight } from 'lucide-react';

export default function ProfilePage({ currentLocation, onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Profile Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/70 flex items-center gap-5">
        <div className="font-display w-16 h-16 rounded-2xl bg-[#8a5a12] text-white flex items-center justify-center font-black text-2xl">
          ST
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl font-black text-[#3b2407]">Sai Tarun</h2>
          <p className="text-xs text-slate-500">tarun@bennaiah.com • +91 98765 43210</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-[#8a5a12] px-2.5 py-0.5 rounded-full">
              Bennaiah Member
            </span>
            <span className="text-[10px] font-bold bg-[#2f5d3a]/10 text-[#2f5d3a] px-2.5 py-0.5 rounded-full">
              ⚡ Free Shipping Active
            </span>
          </div>
        </div>
      </div>

      {/* Account Control Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Saved Addresses */}
        <div className="bg-white p-6 rounded-3xl border border-amber-200/70 space-y-4">
          <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-[#8a5a12] flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Delivery Addresses
          </h3>
          <div className="p-3.5 rounded-xl border border-[#8a5a12] bg-[#F7F5E9] flex items-center justify-between">
            <div>
              <div className="font-bold text-xs text-slate-900">Home (Default)</div>
              <div className="text-[11px] text-slate-500">742 Evergreen Terrace, {currentLocation.city}</div>
            </div>
            <span className="text-[10px] font-bold text-[#8a5a12] bg-white px-2 py-0.5 rounded border border-amber-200">Active</span>
          </div>
        </div>

        {/* Wallet */}
        <div className="bg-white p-6 rounded-3xl border border-amber-200/70 space-y-4">
          <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-[#8a5a12] flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Bennaiah Wallet
          </h3>
          <div className="p-3.5 rounded-xl border border-amber-200/70 bg-[#F7F5E9] flex items-center justify-between">
            <div>
              <div className="font-bold text-xs text-slate-900">Wallet Balance</div>
              <div className="font-display text-xl font-black text-[#8a5a12]">₹450.00</div>
            </div>
            <button className="bg-[#8a5a12] hover:bg-[#6f480e] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
              Add Cash
            </button>
          </div>
        </div>

      </div>

      {/* Quick Navigation Menu */}
      <div className="bg-white rounded-3xl border border-amber-200/70 divide-y divide-amber-100 overflow-hidden">
        <button onClick={() => onNavigate('orders')} className="w-full p-4 flex items-center justify-between hover:bg-[#F7F5E9] text-left transition-colors">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#8a5a12]" />
            <span className="text-xs font-bold text-slate-800">Order History & Receipts</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        <button onClick={() => onNavigate('wishlist')} className="w-full p-4 flex items-center justify-between hover:bg-[#F7F5E9] text-left transition-colors">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-rose-500" />
            <span className="text-xs font-bold text-slate-800">Saved Wishlist Items</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        <button onClick={() => onNavigate('farms')} className="w-full p-4 flex items-center justify-between hover:bg-[#F7F5E9] text-left transition-colors">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#8a5a12]" />
            <span className="text-xs font-bold text-slate-800">Local Eco-Farm Partners</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
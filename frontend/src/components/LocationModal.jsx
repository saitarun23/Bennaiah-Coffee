import React from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';

export default function LocationModal({ currentLocation, setCurrentLocation, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#3b2407]/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FBF9F1] rounded-2xl max-w-md w-full p-6 border border-amber-200/70 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#8a5a12] rounded-full hover:bg-amber-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="font-display text-xl font-extrabold text-[#8a5a12] flex items-center gap-2 mb-1">
          <MapPin className="w-5 h-5" />
          Select Delivery Hub
        </h3>
        <p className="text-xs text-slate-500 mb-4">Choose your nearest darkstore location for instant 10-15 min delivery.</p>

        <div className="space-y-2.5">
          {LOCATIONS.map((loc) => {
            const isSelected = currentLocation.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => {
                  setCurrentLocation(loc);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-colors flex items-center justify-between ${
                  isSelected 
                    ? 'border-[#8a5a12] bg-white' 
                    : 'border-amber-200 bg-white hover:border-[#8a5a12]/50 hover:bg-[#F7F5E9]'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-slate-900">{loc.city}</div>
                  <div className="text-xs text-slate-500">{loc.hub}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-amber-100 text-[#8a5a12] px-2 py-0.5 rounded-md">
                    {loc.status}
                  </span>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-[#8a5a12]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
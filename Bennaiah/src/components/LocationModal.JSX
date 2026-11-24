import React from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';
import '../styles/LocationModal.css';

export default function LocationModal({ currentLocation, setCurrentLocation, onClose }) {
  return (
    <div className="overlay overlay--center">
      <div className="location">
        <button onClick={onClose} className="icon-close" aria-label="Close"><X /></button>

        <h3 className="location__title">
          <MapPin />
          Select Delivery Hub
        </h3>
        <p className="location__sub">Choose your nearest darkstore location for instant 10-15 min delivery.</p>

        <div className="location__list">
          {LOCATIONS.map((loc) => {
            const isSelected = currentLocation.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => { setCurrentLocation(loc); onClose(); }}
                className={`location__option ${isSelected ? 'location__option--selected' : ''}`}
              >
                <div>
                  <div className="location__city">{loc.city}</div>
                  <div className="location__hub">{loc.hub}</div>
                </div>
                <div className="location__right">
                  <span className="location__status">{loc.status}</span>
                  {isSelected && <CheckCircle2 />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
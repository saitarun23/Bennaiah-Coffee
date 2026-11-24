import React from 'react';
import { Zap, Clock, ShieldCheck, Flame } from 'lucide-react';
import '../styles/FlashDeals.css';

export default function FlashDeals() {
  return (
    <div className="deals">
      <div className="deal deal--gold">
        <div>
          <div className="deal__label deal__label--gold"><Zap className="deal__fill" /><span>Flash Deal</span></div>
          <h4>Bundle &amp; Save 25%</h4>
          <p className="deal__text--gold">Breakfast Kits starting at ₹9.99</p>
        </div>
        <Flame className="deal__bg-icon" />
      </div>

      <div className="deal deal--green">
        <div>
          <div className="deal__label deal__label--green"><Clock /><span>Guaranteed Speed</span></div>
          <h4>Artisan Dairy Duo</h4>
          <p className="deal__text--green">Fresh morning delivery under 10m</p>
        </div>
        <ShieldCheck className="deal__bg-icon" />
      </div>

      <div className="deal deal--red">
        <div>
          <div className="deal__label deal__label--red"><Flame /><span>Chef's Choice</span></div>
          <h4>Chef Pantry Pack</h4>
          <p className="deal__text--red">Cold-pressed oils &amp; fresh herbs</p>
        </div>
        <Zap className="deal__bg-icon" />
      </div>
    </div>
  );
}
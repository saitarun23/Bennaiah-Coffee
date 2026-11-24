import React from 'react';
import { Clock, MapPin, Phone, CheckCircle2, User, Star, Bike } from 'lucide-react';
import '../styles/OrdersTrackPage.css';

export default function OrdersTrackPage({ currentLocation }) {
  const orderSteps = [
    { title: 'Order Confirmed', time: '03:25 PM', status: 'completed' },
    { title: 'Packed at Darkstore #04', time: '03:27 PM', status: 'completed' },
    { title: 'Out for Courier Delivery', time: 'In Progress', status: 'current' },
    { title: 'Delivered to Doorstep', time: 'ETA 03:37 PM', status: 'pending' },
  ];

  return (
    <div className="track fade-in">
      <div className="track__card">
        <div className="track__head">
          <div>
            <span className="track__live">Live Dispatch Status</span>
            <h2>Order #FC-89410</h2>
          </div>
          <div className="track__eta">
            <span>Estimated Arrival</span>
            <b><Clock /> 12 Mins</b>
          </div>
        </div>

        <div className="track__rider">
          <div className="track__rider-left">
            <div className="track__avatar"><User /></div>
            <div>
              <div className="track__rider-name">Rider #28 (Tarun)</div>
              <div className="track__rider-sub">
                <Bike />
                <span>Electric Eco-Bike Courier</span>
                <span className="dot" />
                <Star className="track__star" />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
          <button className="btn-gold track__call">
            <Phone size={14} />
            <span>Call Rider</span>
          </button>
        </div>

        <div className="track__progress">
          <h4>Tracking Progress</h4>
          <div className="track__steps">
            {orderSteps.map((step, idx) => (
              <div key={idx} className="track__step">
                <div className={`track__dot track__dot--${step.status}`}><CheckCircle2 /></div>
                <div className="track__step-text">
                  <div className={`track__step-title ${step.status === 'pending' ? 'track__step-title--pending' : ''}`}>{step.title}</div>
                  <div className="track__step-time">{step.time}</div>
                </div>
                <span className={`track__tag track__tag--${step.status}`}>{step.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="track__dest">
          <MapPin />
          <div>
            <div className="track__dest-title">Delivering to: {currentLocation.city}</div>
            <div className="track__dest-sub">742 Evergreen Terrace, Financial District</div>
          </div>
        </div>
      </div>
    </div>
  );
}
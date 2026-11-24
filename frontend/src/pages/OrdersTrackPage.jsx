import React from 'react';
import { Clock, MapPin, Phone, CheckCircle2, User } from 'lucide-react';

export default function OrdersTrackPage({ currentLocation }) {
  const orderSteps = [
    { title: "Order Confirmed", time: "03:25 PM", status: "completed" },
    { title: "Packed at Darkstore #04", time: "03:27 PM", status: "completed" },
    { title: "Out for Courier Delivery", time: "In Progress", status: "current" },
    { title: "Delivered to Doorstep", time: "ETA 03:37 PM", status: "pending" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Active Order Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/70 space-y-6">
        <div className="flex items-center justify-between border-b border-amber-200/70 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8a5a12] bg-amber-100 px-2.5 py-1 rounded-md">
              Live Dispatch Status
            </span>
            <h2 className="font-display text-2xl font-black text-[#3b2407] mt-1">Order #FC-89410</h2>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500 block font-semibold">Estimated Arrival</span>
            <span className="font-display text-xl font-black text-[#8a5a12] flex items-center gap-1.5">
              <Clock className="w-5 h-5 animate-pulse" />
              12 Mins
            </span>
          </div>
        </div>

        {/* Courier Rider Card */}
        <div className="bg-[#F7F5E9] p-4 rounded-2xl border border-amber-200/70 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#8a5a12] text-white flex items-center justify-center font-bold text-lg">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-slate-900">Rider #28 (David Miller)</div>
              <div className="text-xs text-slate-500">Electric Eco-Bike Courier • 4.9 ★ Rating</div>
            </div>
          </div>
          <button className="bg-[#8a5a12] hover:bg-[#6f480e] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>Call Rider</span>
          </button>
        </div>

        {/* Stepper Timeline */}
        <div className="space-y-4 pt-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#8a5a12]">Tracking Progress</h4>
          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-200">
            {orderSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between">
                <div className={`absolute -left-6 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white ${
                  step.status === 'completed' 
                    ? 'border-[#8a5a12] text-[#8a5a12]' 
                    : step.status === 'current'
                    ? 'border-[#2f5d3a] text-[#2f5d3a] bg-[#2f5d3a]/10 animate-pulse'
                    : 'border-slate-300 text-slate-300'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${step.status === 'pending' ? 'text-slate-400' : 'text-slate-900'}`}>
                    {step.title}
                  </div>
                  <div className="text-[11px] text-slate-400">{step.time}</div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  step.status === 'completed'
                    ? 'bg-amber-100 text-[#8a5a12]'
                    : step.status === 'current'
                    ? 'bg-[#2f5d3a]/10 text-[#2f5d3a]'
                    : 'bg-[#F7F5E9] text-slate-400'
                }`}>
                  {step.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Destination */}
        <div className="bg-[#F7F5E9] p-4 rounded-2xl border border-amber-200/70 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#8a5a12] shrink-0" />
          <div className="text-xs">
            <div className="font-bold text-slate-900">Delivering to: {currentLocation.city}</div>
            <div className="text-slate-500">742 Evergreen Terrace, Financial District</div>
          </div>
        </div>
      </div>
    </div>
  );
}
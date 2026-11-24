import React from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';

export default function CheckoutModal({ 
  checkoutStep, 
  setCheckoutStep, 
  onClose, 
  subtotal, 
  freeShippingTarget, 
  onOrderSuccess 
}) {
  const finalTotal = subtotal + (subtotal >= freeShippingTarget ? 0 : 1.99);

  return (
    <div className="fixed inset-0 z-50 bg-[#3b2407]/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FBF9F1] rounded-3xl max-w-md w-full p-6 border border-amber-200/70 relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#8a5a12] rounded-full hover:bg-amber-100 transition-colors">
          <X className="w-5 h-5" />
        </button>

        {checkoutStep < 4 ? (
          <div>
            <h3 className="font-display text-2xl font-black text-[#8a5a12] mb-1">Express 3-Step Checkout</h3>
            <p className="text-xs text-slate-500 mb-6">Guaranteed darkstore dispatch within 12 minutes.</p>

            {/* Stepper Header */}
            <div className="flex items-center justify-between mb-6 border-b border-amber-200/70 pb-4">
              {['Address', 'Delivery Slot', 'Payment'].map((label, idx) => {
                const stepNum = idx + 1;
                const active = checkoutStep === stepNum;
                const completed = checkoutStep > stepNum;
                return (
                  <div key={label} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      active ? 'bg-[#8a5a12] text-white' : completed ? 'bg-amber-100 text-[#8a5a12]' : 'bg-[#F7F5E9] text-slate-400 border border-amber-200'
                    }`}>
                      {stepNum}
                    </div>
                    <span className={`text-xs font-bold ${active ? 'text-[#8a5a12]' : 'text-slate-400'}`}>{label}</span>
                  </div>
                );
              })}
            </div>

            {/* Step 1: Address */}
            {checkoutStep === 1 && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border-2 border-[#8a5a12] bg-white flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#8a5a12] shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-slate-900">Home - Primary Address</div>
                    <div className="text-[11px] text-slate-500">742 Evergreen Terrace, San Francisco, CA</div>
                  </div>
                </div>
                <button 
                  onClick={() => setCheckoutStep(2)}
                  className="w-full bg-[#8a5a12] hover:bg-[#6f480e] text-white py-3 rounded-xl font-bold text-sm transition-colors mt-4"
                >
                  Confirm Address & Continue
                </button>
              </div>
            )}

            {/* Step 2: Slot & Instructions */}
            {checkoutStep === 2 && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl border border-[#8a5a12] bg-[#F7F5E9] text-xs font-bold text-[#6f480e]">
                  ⚡ Instant Express Dispatch: Arrival in 10-12 Mins
                </div>
                <textarea 
                  placeholder="Drop-off instructions for courier (e.g., Leave at door, Ring bell)..."
                  className="w-full bg-white border border-amber-200 rounded-xl p-3 text-xs focus:outline-none focus:border-[#8a5a12] focus:ring-2 focus:ring-[#8a5a12]/20"
                  rows={3}
                />
                <button 
                  onClick={() => setCheckoutStep(3)}
                  className="w-full bg-[#8a5a12] hover:bg-[#6f480e] text-white py-3 rounded-xl font-bold text-sm transition-colors mt-4"
                >
                  Proceed to Payment
                </button>
              </div>
            )}

            {/* Step 3: Payment */}
            {checkoutStep === 3 && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-[#8a5a12] bg-white flex items-center justify-between font-bold text-xs text-slate-800">
                  <span>Apple Pay / Instant UPI</span>
                  <CheckCircle2 className="w-4 h-4 text-[#8a5a12]" />
                </div>
                <div className="p-3.5 rounded-xl border border-amber-200 bg-white flex items-center justify-between font-bold text-xs text-slate-800 opacity-60">
                  <span>Credit or Debit Card</span>
                </div>
                
                <div className="pt-3 border-t border-amber-200/70 flex justify-between font-extrabold text-sm text-slate-900">
                  <span>Payable Total</span>
                  <span className="font-display text-lg text-[#8a5a12]">₹{finalTotal.toFixed(2)}</span>
                </div>

                <button 
                  onClick={onOrderSuccess}
                  className="w-full bg-[#8a5a12] hover:bg-[#6f480e] text-white py-3.5 rounded-xl font-bold text-sm transition-colors mt-4"
                >
                  Pay ₹{finalTotal.toFixed(2)} & Place Order
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Step 4: Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-amber-100 text-[#8a5a12] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-3xl font-black text-[#8a5a12] mb-1">Order Placed!</h3>
            <p className="text-xs text-slate-500 mb-6">Darkstore Rider #28 is packing your fresh organic basket.</p>
            <div className="bg-white p-4 rounded-2xl border border-amber-200/70 text-left text-xs space-y-1.5 mb-6">
              <div className="flex justify-between text-slate-600"><span>Estimated Arrival:</span><span className="font-bold text-slate-900">12 Mins</span></div>
              <div className="flex justify-between text-slate-600"><span>Order ID:</span><span className="font-bold text-slate-900">#FC-89410</span></div>
            </div>
            <button 
              onClick={onClose}
              className="w-full bg-[#3b2407] hover:bg-[#2b1a05] text-white py-3 rounded-xl font-bold text-sm transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { X, MapPin, CheckCircle2, Zap } from 'lucide-react';
import '../styles/CheckoutModal.css';

export default function CheckoutModal({
  checkoutStep,
  setCheckoutStep,
  onClose,
  subtotal,
  freeShippingTarget,
  onOrderSuccess,
}) {
  const finalTotal = subtotal + (subtotal >= freeShippingTarget ? 0 : 1.99);

  return (
    <div className="overlay overlay--center">
      <div className="checkout">
        <button onClick={onClose} className="icon-close" aria-label="Close"><X /></button>

        {checkoutStep < 4 ? (
          <div>
            <h3 className="checkout__title">Express 3-Step Checkout</h3>
            <p className="checkout__sub">Guaranteed darkstore dispatch within 12 minutes.</p>

            <div className="checkout__stepper">
              {['Address', 'Delivery Slot', 'Payment'].map((label, idx) => {
                const stepNum = idx + 1;
                const state = checkoutStep === stepNum ? 'active' : checkoutStep > stepNum ? 'done' : 'todo';
                return (
                  <div key={label} className={`checkout__step checkout__step--${state}`}>
                    <div className="checkout__step-num">{stepNum}</div>
                    <span className="checkout__step-label">{label}</span>
                  </div>
                );
              })}
            </div>

            {checkoutStep === 1 && (
              <div className="checkout__body">
                <div className="checkout__address">
                  <MapPin />
                  <div>
                    <div className="checkout__address-name">Home - Primary Address</div>
                    <div className="checkout__address-text">742 Evergreen Terrace, Gachibowli, HYD</div>
                  </div>
                </div>
                <button onClick={() => setCheckoutStep(2)} className="btn-gold btn-block">
                  Confirm Address &amp; Continue
                </button>
              </div>
            )}

            {checkoutStep === 2 && (
              <div className="checkout__body">
                <div className="checkout__dispatch">
                  <Zap />
                  <span>Instant Express Dispatch: Arrival in 10-12 Mins</span>
                </div>
                <textarea
                  placeholder="Drop-off instructions for courier (e.g., Leave at door, Ring bell)..."
                  rows={3}
                />
                <button onClick={() => setCheckoutStep(3)} className="btn-gold btn-block">
                  Proceed to Payment
                </button>
              </div>
            )}

            {checkoutStep === 3 && (
              <div className="checkout__body">
                <div className="checkout__pay checkout__pay--selected">
                  <span>Apple Pay / Instant UPI</span>
                  <CheckCircle2 />
                </div>
                <div className="checkout__pay checkout__pay--muted">
                  <span>Credit or Debit Card</span>
                </div>
                <div className="checkout__total">
                  <span>Payable Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
                <button onClick={onOrderSuccess} className="btn-gold btn-block checkout__pay-btn">
                  Pay ₹{finalTotal.toFixed(2)} &amp; Place Order
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="checkout__success">
            <div className="checkout__success-icon"><CheckCircle2 /></div>
            <h3>Order Placed!</h3>
            <p>Darkstore Rider #28 is packing your fresh organic basket.</p>
            <div className="checkout__summary">
              <div><span>Estimated Arrival:</span><strong>12 Mins</strong></div>
              <div><span>Order ID:</span><strong>#FC-89410</strong></div>
            </div>
            <button onClick={onClose} className="checkout__home">Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
}
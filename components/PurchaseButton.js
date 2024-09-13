// components/PurchaseButton.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51O2yXlCmtksmkumLXwPITdqPiGJrGA8xiQ0CrVIRs4wv5EPC8VqLKg1BGIhYPt9162ddttg4WjrnaTUUwwlEuJI700m37vt8R8');

const PurchaseButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button onClick={handleClick}>
      Buy License
    </button>
  );
};

export default PurchaseButton;

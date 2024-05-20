// SecurePayment.js
import React, { useState } from 'react';

const SecurePayment = () => {
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);

  const handlePaymentToggle = () => {
    setIsPaymentEnabled(!isPaymentEnabled);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          data-testid="payment-checkbox"
          checked={isPaymentEnabled}
          onChange={handlePaymentToggle}
        />
        Enable Secure Payment
      </label>
      <button
        data-testid="payment-button"
        disabled={!isPaymentEnabled}
        onClick={() => {
          // Logic for processing payment
        }}
      >
        Process Payment
      </button>
    </div>
  );
};

export default SecurePayment;

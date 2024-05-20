// ReturnRefundProducts.js
import React, { useState } from 'react';

const ReturnRefundProducts = () => {
  const [refundStatus, setRefundStatus] = useState('');

  const handleReturn = () => {
    // Logic for returning the products and updating refund status
    setRefundStatus('Refunded');
  };

  return (
    <div>
      <h2>Return and Refund Products</h2>
      <button data-testid="return-button" onClick={handleReturn}>
        Return Products
      </button>
      <p data-testid="refund-status">{refundStatus}</p>
    </div>
  );
};

export default ReturnRefundProducts;

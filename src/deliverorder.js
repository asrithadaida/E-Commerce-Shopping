// DeliverOrder.js
import React, { useState } from 'react';

const DeliverOrder = () => {
  const [orderStatus, setOrderStatus] = useState('Pending');

  const handleDeliverOrder = () => {
    // Simulate delivering the order
    setOrderStatus('Delivered');
  };

  return (
    <div>
      <h2>Order Status: <span data-testid="order-status">{orderStatus}</span></h2>
      <button data-testid="deliver-button" onClick={handleDeliverOrder}>Deliver Order</button>
    </div>
  );
};

export default DeliverOrder;

// src/components/Order.js
import React, { useState } from 'react';

const Order = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = [
    'sneakers',
    'formal shoes',
    'sports shoes',
    'casual shoes',
    'loafers'
  ];

  const handleOrder = () => {
    if (selectedProduct) {
      setOrderPlaced(true);
    }
  };

  return (
    <div>
      <h3>Available Products</h3>
      <select
        data-testid="product-select"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">Select a product</option>
        {products.map((product, index) => (
          <option key={index} value={product}>
            {product}
          </option>
        ))}
      </select>
      <button data-testid="place-order-button" onClick={handleOrder}>
        Place Order
      </button>
      {orderPlaced && <p data-testid="order-message">Order placed for {selectedProduct}</p>}
    </div>
  );
};

export default Order;

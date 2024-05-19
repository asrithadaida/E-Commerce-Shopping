// Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState(0);

  const addItem = () => {
    setItems(items + 1);
  };

  return (
    <div>
      <p data-testid="items">{items}</p>
      <button onClick={addItem} data-testid="add-item-btn">
        Add Item
      </button>
    </div>
  );
};

export default Cart;

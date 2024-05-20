// src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState('');

  const handleAddProduct = () => {
    if (product.trim() === '') return;
    setCart([...cart, product]);
    setProduct('');
  };

  const handleRemoveProduct = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleModifyProduct = (index, newProduct) => {
    const newCart = cart.map((item, i) => (i === index ? newProduct : item));
    setCart(newCart);
  };

  return (
    <div>
      <input
        data-testid="cart-input"
        type="text"
        placeholder="Enter product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button data-testid="add-button" onClick={handleAddProduct}>
        Add to Cart
      </button>
      <ul data-testid="cart-list">
        {cart.map((item, index) => (
          <li key={index} data-testid="cart-item">
            <span>{item}</span>
            <button
              data-testid={`remove-button-${index}`}
              onClick={() => handleRemoveProduct(index)}
            >
              Remove
            </button>
            <button
              data-testid={`modify-button-${index}`}
              onClick={() => handleModifyProduct(index, prompt('Enter new product name', item))}
            >
              Modify
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

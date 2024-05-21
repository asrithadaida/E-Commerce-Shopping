// src/components/Wishlist.js
import React, { useState } from 'react';

const Wishlist = ({ products = [] }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems(prevItems => [...prevItems, product]);
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <ul>
          {wishlistItems.map(item => (
            <li key={item.id} data-testid={`wishlist-item-${item.id}`}>
              <span data-testid={`wishlist-item-name-${item.id}`}>{item.name}</span>
              <span data-testid={`wishlist-item-price-${item.id}`}>{item.price}</span>
            </li>
          ))}
        </ul>
      )}

      <h3>Available Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button
              onClick={() => addToWishlist(product)}
              data-testid={`add-to-wishlist-button-${product.id}`}
            >
              Add to Wishlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;

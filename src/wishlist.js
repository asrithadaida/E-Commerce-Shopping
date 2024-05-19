// src/components/Wishlist.js
import React from 'react';

const Wishlist = ({ wishlistItems, products }) => {
  const addToWishlist = (product) => {
    // Add product to the wishlistItems array
    // This implementation depends on your application's logic
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

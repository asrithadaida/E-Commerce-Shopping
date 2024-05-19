// src/components/Wishlist.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Wishlist from './Wishlist';

describe('Wishlist Component', () => {
  test('renders wishlist items', () => {
    const wishlistItems = [
      { id: 1, name: 'Product 1', price: 20 },
      { id: 2, name: 'Product 2', price: 30 },
    ];
    const { getByTestId } = render(<Wishlist wishlistItems={wishlistItems} />);

    wishlistItems.forEach(item => {
      expect(getByTestId(`wishlist-item-${item.id}`)).toBeInTheDocument();
      expect(getByTestId(`wishlist-item-name-${item.id}`)).toHaveTextContent(item.name);
      expect(getByTestId(`wishlist-item-price-${item.id}`)).toHaveTextContent(item.price.toString());
    });
  });

  test('adds product to wishlist on click', () => {
    const wishlistItems = [];
    const products = [
      { id: 1, name: 'Product 1', price: 20 },
      { id: 2, name: 'Product 2', price: 30 },
    ];
    const { getByTestId } = render(<Wishlist wishlistItems={wishlistItems} products={products} />);

    const addToWishlistButton = getByTestId('add-to-wishlist-button-1'); // Assuming button for product with id 1
    fireEvent.click(addToWishlistButton);

    expect(wishlistItems.length).toBe(1);
    expect(wishlistItems[0]).toEqual(products[0]);
  });
});

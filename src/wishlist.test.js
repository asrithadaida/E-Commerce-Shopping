// src/components/Wishlist.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import Wishlist from './Wishlist';

describe('Wishlist Component', () => {
  const products = [
    { id: 1, name: 'loafers', price: '$50' },
    { id: 2, name: 'sneakers', price: '$60' },
    { id: 3, name: 'formal shoes', price: '$70' },
    { id: 4, name: 'casual shoes', price: '$40' },
    { id: 5, name: 'sports shoes', price: '$80' },
  ];

  test('renders wishlist and available products', () => {
    const { getByText } = render(<Wishlist products={products} />);
    
    // Check that all products are rendered
    products.forEach(product => {
      expect(getByText(product.name)).toBeInTheDocument();
    });

    // Check that the wishlist is empty
    expect(getByText('No items in wishlist')).toBeInTheDocument();
  });

  test('adds product to wishlist on click', () => {
    const { getByTestId, getByText } = render(<Wishlist products={products} />);
    
    const addToWishlistButton = getByTestId('add-to-wishlist-button-1');
    fireEvent.click(addToWishlistButton);

    // Check that the product is added to the wishlist
    expect(getByTestId('wishlist-item-1')).toBeInTheDocument();
    expect(getByTestId('wishlist-item-name-1')).toHaveTextContent('loafers');
    expect(getByTestId('wishlist-item-price-1')).toHaveTextContent('$50');
  });
});

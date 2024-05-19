// Cart.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart';

test('adds item to cart when button is clicked', () => {
  const { getByTestId } = render(<Cart />);
  const itemsElement = getByTestId('items');
  const buttonElement = getByTestId('add-item-btn');

  // Initial number of items should be 0
  expect(itemsElement).toHaveTextContent('0');

  // Click the button
  fireEvent.click(buttonElement);

  // After clicking the button, number of items should be incremented
  expect(itemsElement).toHaveTextContent('1');
});

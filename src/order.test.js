    // src/components/Order.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import Order from './Order';

describe('Order Component', () => {
  test('renders product select and button', () => {
    const { getByTestId } = render(<Order />);
    
    expect(getByTestId('product-select')).toBeInTheDocument();
    expect(getByTestId('place-order-button')).toBeInTheDocument();
  });

  test('places order when a product is selected and button is clicked', () => {
    const { getByTestId, getByText } = render(<Order />);
    const productSelect = getByTestId('product-select');
    const placeOrderButton = getByTestId('place-order-button');

    // Simulate selecting 'sneakers' from the dropdown
    fireEvent.change(productSelect, { target: { value: 'sneakers' } });
    // Simulate clicking the place order button
    fireEvent.click(placeOrderButton);

    // Check if order placed message is displayed
    expect(getByTestId('order-message')).toHaveTextContent('Order placed for sneakers');
  });

  test('does not place order when no product is selected', () => {
    const { getByTestId, queryByTestId } = render(<Order />);
    const placeOrderButton = getByTestId('place-order-button');

    // Simulate clicking the place order button without selecting a product
    fireEvent.click(placeOrderButton);

    // Check that no order placed message is displayed
    expect(queryByTestId('order-message')).toBeNull();
  });
});

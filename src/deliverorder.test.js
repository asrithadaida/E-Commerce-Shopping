// deliverOrder.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DeliverOrder from './DeliverOrder';

describe('Deliver Order Component', () => {
  test('should deliver the order when the deliver button is clicked', () => {
    // Render the DeliverOrder component
    render(<DeliverOrder />);

    // Click the deliver button
    const deliverButton = screen.getByTestId('deliver-button');
    fireEvent.click(deliverButton);

    // Check if the order is delivered
    const deliveredStatus = screen.getByTestId('order-status');
    expect(deliveredStatus).toHaveTextContent('Delivered');
  });
});

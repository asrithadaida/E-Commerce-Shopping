// returnRefundProducts.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReturnRefundProducts from './ReturnRefundProducts';

describe('ReturnRefundProducts Component', () => {
  test('returns and refunds products', () => {
    render(<ReturnRefundProducts />);
    
    // Get the return button
    const returnButton = screen.getByTestId('return-button');
    
    // Click the return button
    fireEvent.click(returnButton);
    
    // Get the refund status
    const refundStatus = screen.getByTestId('refund-status');
    
    // Assert that the refund status is updated
    expect(refundStatus.textContent).toBe('Refunded');
  });
});

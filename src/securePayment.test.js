// securePayment.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SecurePayment from './SecurePayment';

describe('SecurePayment Component', () => {
  test('enables secure online payment when checkbox is checked', () => {
    render(<SecurePayment />);

    const paymentCheckbox = screen.getByTestId('payment-checkbox');
    const paymentButton = screen.getByTestId('payment-button');

    fireEvent.click(paymentCheckbox);

    expect(paymentButton).toBeEnabled();
  });

  test('disables secure online payment when checkbox is unchecked', () => {
    render(<SecurePayment />);

    const paymentCheckbox = screen.getByTestId('payment-checkbox');
    const paymentButton = screen.getByTestId('payment-button');

    fireEvent.click(paymentCheckbox); // Enable payment
    fireEvent.click(paymentCheckbox); // Disable payment

    expect(paymentButton).toBeDisabled();
  });
});

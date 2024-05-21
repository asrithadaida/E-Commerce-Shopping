// orderHistory.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import OrderHistory from '../OrderHistory';

jest.mock('axios');

describe('Order History Component', () => {
  test('displays order history for the user', async () => {
    // Mock axios get request to simulate fetching order history
    const orderHistoryData = [
      { id: 1, date: '2022-05-01', total: 50 },
      { id: 2, date: '2022-06-01', total: 75 },
    ];
    axios.get.mockResolvedValueOnce({ data: orderHistoryData });

    // Render the OrderHistory component
    const { getByTestId, getByText } = render(<OrderHistory />);

    // Wait for axios get request to be called
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Assert that order history is displayed
    expect(getByText('Order History')).toBeInTheDocument();
    expect(getByTestId('order-1')).toHaveTextContent('Order Date: 2022-05-01');
    expect(getByTestId('order-1')).toHaveTextContent('Total: $50');
    expect(getByTestId('order-2')).toHaveTextContent('Order Date: 2022-06-01');
    expect(getByTestId('order-2')).toHaveTextContent('Total: $75');
  });

  test('displays error message if fetching order history fails', async () => {
    // Mock axios get request to simulate fetching order history failure
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch order history'));

    // Render the OrderHistory component
    const { findByText } = render(<OrderHistory />);

    // Wait for error message to be displayed
    const errorMessage = await findByText('Failed to fetch order history');
    expect(errorMessage).toBeInTheDocument();
  });
});

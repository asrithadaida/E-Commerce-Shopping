// addStarRating.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddStarRating from '../AddStarRating'; // Import your AddStarRating component

describe('AddStarRating Component', () => {
  test('selects a star rating for the product', () => {
    // Mock function to handle star rating selection
    const handleStarRating = jest.fn();

    // Render the AddStarRating component
    const { getByTestId } = render(<AddStarRating onSelectRating={handleStarRating} />);

    // Simulate selecting a star rating
    const starRating = getByTestId('star-4');
    fireEvent.click(starRating);

    // Check if the handleStarRating function is called with the correct rating
    expect(handleStarRating).toHaveBeenCalledWith(4);
  });
});

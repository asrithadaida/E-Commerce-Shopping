import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterSortProducts from './FilterSortProducts'; // Update with the correct path to your component

describe('FilterSortProducts Component', () => {
  test('filters and sorts products based on user interaction', () => {
    const { getByText, getByLabelText, getByTestId } = render(<FilterSortProducts />);

    // Initially, all products should be visible
    expect(getByText(/Sneakers/i)).toBeInTheDocument(); // Using regex for flexible matching
    expect(getByText(/Formal Shoes/i)).toBeInTheDocument();
    expect(getByText(/Sports Shoes/i)).toBeInTheDocument();

    // Simulate selecting "Shoes" category
    fireEvent.change(getByLabelText(/Filter by category:/i), { target: { value: 'Shoes' } });

    // Check if the filtered products are displayed
    const productList = getByTestId('products-list');
    expect(productList).toHaveTextContent('Sneakers');
    expect(productList).toHaveTextContent('Formal Shoes');
    expect(productList).toHaveTextContent('Sports Shoes');

    // Simulate sorting by price low to high
    fireEvent.change(getByLabelText(/Sort by:/i), { target: { value: 'PriceLowToHigh' } });

    // Verify the order of products after sorting
    const sortedProducts = Array.from(productList.children).map(li => li.textContent.trim());
    expect(sortedProducts).toEqual(['Sneakers - $50', 'Sports Shoes - $60', 'Formal Shoes - $80']);
  });
});

// FilterSortProducts.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterSortProducts from './FilterSortProducts';

describe('FilterSortProducts Component', () => {
  test('filters and sorts products based on user interaction', () => {
    // Mock data for products
    const products = [
      { id: 1, name: 'Sneakers', price: 50, category: 'Shoes' },
      { id: 2, name: 'Formal Shoes', price: 80, category: 'Shoes' },
      { id: 3, name: 'Sports Shoes', price: 60, category: 'Shoes' },
    ];

    // Render the component
    const { getByTestId, getByText } = render(<FilterSortProducts products={products} />);

    // Initially, all products should be visible
    expect(getByText('Sneakers')).toBeInTheDocument();
    expect(getByText('Formal Shoes')).toBeInTheDocument();
    expect(getByText('Sports Shoes')).toBeInTheDocument();

    // Filter products by category
    fireEvent.change(getByTestId('category-select'), { target: { value: 'Shoes' } });

    // Only products in the 'Shoes' category should be visible
    expect(getByText('Sneakers')).toBeInTheDocument();
    expect(getByText('Formal Shoes')).toBeInTheDocument();
    expect(getByText('Sports Shoes')).toBeInTheDocument();

    // Sort products by price (low to high)
    fireEvent.change(getByTestId('sort-select'), { target: { value: 'price-low-to-high' } });

    // The order of products should change based on price
    const productsList = getByTestId('products-list');
    const productItems = productsList.children;

    // Check if the first product is 'Sneakers'
    expect(productItems[0]).toHaveTextContent('Sneakers');
    // Check if the last product is 'Formal Shoes'
    expect(productItems[productItems.length - 1]).toHaveTextContent('Formal Shoes');
  });
});

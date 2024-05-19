// src/components/search.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  test('renders search input and button', () => {
    const { getByPlaceholderText, getByTestId } = render(<Search />);
    
    expect(getByPlaceholderText('Search for products')).toBeInTheDocument();
    expect(getByTestId('search-button')).toBeInTheDocument();
  });

  test('displays search results based on query', () => {
    const { getByTestId, getAllByTestId } = render(<Search />);
    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    fireEvent.change(searchInput, { target: { value: 'shoes' } });
    fireEvent.click(searchButton);

    const results = getAllByTestId('search-result');
    expect(results.length).toBe(5); // Expecting 5 search results for 'shoes'
    expect(results[0]).toHaveTextContent('sneakers');
    expect(results[1]).toHaveTextContent('formal shoes');
    expect(results[2]).toHaveTextContent('sports shoes');
    expect(results[3]).toHaveTextContent('casual shoes');
    expect(results[4]).toHaveTextContent('loafers');
  });

  test('displays no results when query does not match any product', () => {
    const { getByTestId, queryAllByTestId } = render(<Search />);
    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    fireEvent.change(searchInput, { target: { value: 'boots' } });
    fireEvent.click(searchButton);

    const results = queryAllByTestId('search-result');
    expect(results.length).toBe(0); // No products match 'boots'
  });
});

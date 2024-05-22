// search.test.js

import React from 'react';
import { render } from '@testing-library/react';
import SearchComponent from './search'; // Import the SearchComponent from search.js

describe('Search Component', () => {
  test('displays search results based on query', () => {
    // Mock search results
    const mockResults = ['Sneakers', 'Formal Shoes', 'Sports Shoes', 'Loafers'];

    // Render the SearchComponent with mock data
    const { getByTestId, queryAllByTestId } = render(
      <SearchComponent results={mockResults} />
    );

    // Get the search result elements
    const results = queryAllByTestId('search-result');

    // Assert the number of search results
    expect(results.length).toBe(mockResults.length);

    // Assert the content of each search result
    mockResults.forEach((result, index) => {
      expect(results[index]).toHaveTextContent(result);
    });
  });
});

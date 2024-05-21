// src/components/Search.js
import React, { useState } from 'react';

const products = [
  'sneakers',
  'formal shoes',
  'sports shoes',
  'casual shoes',
  'loafers'
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = products.filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
          data-testid="search-input"
        />
        <button type="submit" data-testid="search-button">Search</button>
      </form>
      <ul>
        {results.map((result, index) => (
          <li key={index} data-testid="search-result">{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

// FilterSortProducts.js

import React, { useState } from 'react';

const FilterSortProducts = ({ products }) => {
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('None');

  const filteredProducts = products.filter(product => {
    if (category === 'All') {
      return true;
    }
    return product.category === category;
  });

  const sortedProducts = () => {
    if (sortBy === 'None') {
      return filteredProducts;
    } else if (sortBy === 'PriceLowToHigh') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'PriceHighToLow') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    }
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSortChange = event => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" value={category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Shoes">Shoes</option>
        <option value="Clothing">Clothing</option>
        {/* Add more categories as needed */}
      </select>

      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={sortBy} onChange={handleSortChange}>
        <option value="None">None</option>
        <option value="PriceLowToHigh">Price: Low to High</option>
        <option value="PriceHighToLow">Price: High to Low</option>
      </select>

      <ul data-testid="products-list">
        {sortedProducts().map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSortProducts;

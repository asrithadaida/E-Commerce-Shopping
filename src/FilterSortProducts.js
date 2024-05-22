// FilterSortProducts.js
import React, { useState } from 'react';

const products = [
  { name: 'Sneakers', category: 'Shoes', price: 50 },
  { name: 'Formal Shoes', category: 'Shoes', price: 80 },
  { name: 'Sports Shoes', category: 'Shoes', price: 60 },
];

const FilterSortProducts = () => {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('None');

  const filteredProducts = products.filter(product =>
    category === 'All' || product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'PriceLowToHigh') return a.price - b.price;
    if (sort === 'PriceHighToLow') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Shoes">Shoes</option>
        <option value="Clothing">Clothing</option>
      </select>
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="None">None</option>
        <option value="PriceLowToHigh">Price: Low to High</option>
        <option value="PriceHighToLow">Price: High to Low</option>
      </select>
      <ul data-testid="products-list">
        {sortedProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSortProducts;

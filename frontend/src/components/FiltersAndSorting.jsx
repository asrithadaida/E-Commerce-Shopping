// components/ProductList.js

import React, { useContext } from 'react';
import { ProductContext } from '../pages/FilterPage';

const FilterList = () => {
  const { state, dispatch } = useContext(ProductContext);

  // Handle filter change
  const handleFilterChange = (key, value) => {
    dispatch({ type: 'SET_FILTER', payload: { key, value } });
  };

  // Handle sorting change
  const handleSortByChange = (value) => {
    dispatch({ type: 'SET_SORT_BY', payload: value });
  };

  // Handle sort order change
  const handleSortOrderChange = (value) => {
    dispatch({ type: 'SET_SORT_ORDER', payload: value });
  };

  return (
    <div className="left-sidebar">
      {/* Filter controls */}
      <select value={state.filters.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
        {/* Options for categories */}
      </select>
      <input type="text" value={state.filters.minPrice} onChange={(e) => handleFilterChange('minPrice', e.target.value)} />
      {/* More filter controls as needed */}

      {/* Sorting controls */}
      <select value={state.sortBy} onChange={(e) => handleSortByChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
        {/* More sorting options */}
      </select>
      <select value={state.sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* Product list */}
      {/* Render products based on filters and sorting */}
    </div>
  );
};

export default FilterList;

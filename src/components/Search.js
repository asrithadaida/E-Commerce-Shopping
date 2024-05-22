// search.js

import React from 'react';

const SearchComponent = ({ results }) => {
  return (
    <div>
      {/* Render each search result */}
      {results.map((result, index) => (
        <div key={index} data-testid="search-result">
          {result}
        </div>
      ))}
    </div>
  );
};

export default SearchComponent;

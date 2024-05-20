// AddStarRating.js

import React, { useState } from 'react';

const AddStarRating = ({ onSelectRating }) => {
  const [rating, setRating] = useState(0);

  const handleSelectRating = (selectedRating) => {
    setRating(selectedRating);
    onSelectRating(selectedRating);
  };

  return (
    <div>
      <p>Select a star rating:</p>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          data-testid={`star-${index + 1}`}
          onClick={() => handleSelectRating(index + 1)}
          style={{ cursor: 'pointer', color: rating >= index + 1 ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default AddStarRating;

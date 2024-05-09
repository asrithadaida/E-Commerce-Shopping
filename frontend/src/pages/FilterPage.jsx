// context/ProductContext.js

import React, { createContext, useReducer } from 'react';
import { initialState, productReducer } from '../slices/filterSlice';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

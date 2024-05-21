// context/ProductContext.js
/*
import React, { createContext, useReducer } from 'react';
import { initialState, filterProductReducer } from '../slices/filterProductSlice';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
*/
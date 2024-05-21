import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 // search: '',
  filter: ''
};

export const searchProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      
      console.log("invoked slice filter");
      state.search = action.payload;
    },
    filterProduct: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: state => {
      state.search = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const { searchProduct, clearSearch, filterProduct } = searchProductSlice.actions;

export default searchProductSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { updateList }  from '../utils/cartUtils';

const initialState = localStorage.getItem('wishlist')
  ? JSON.parse(localStorage.getItem('wishlist'))
  : { wishlistItems: [], shippingAddress: {}, paymentMethod: 'Razorpay' };

const listSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToList: (state, action) => {
      const item = action.payload;
      const existItem = state.wishlistItems.find(x => x._id === item._id);

      if (existItem) {
        state.wishlistItems = state.wishlistItems.map(x =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.wishlistItems = [...state.wishlistItems, item];
      }

      return updateList(state);
    },
    removeFromList: (state, action) => {
      const id = action.payload;
      state.wishlistItems = state.wishlistItems.filter(x => x._id !== id);

      return updateList(state);
    },
    /*
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    */
    clearListItems: (state, action) => {
      state.wishlistItems = [];
      return updateList(state);
    }
  }
});

export const {
    addToList,
    removeFromList,
    clearListItems
} = listSlice.actions;

export default listSlice.reducer;

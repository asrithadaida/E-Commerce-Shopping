// reducers/productReducer.js

export const initialState = {
    filters: { category: '', minPrice: '', maxPrice: '' },
    sortBy: '',
    sortOrder: 'asc',
  };
  
  export const productReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          filters: { ...state.filters, [action.payload.key]: action.payload.value },
        };
      case 'SET_SORT_BY':
        return { ...state, sortBy: action.payload };
      case 'SET_SORT_ORDER':
        return { ...state, sortOrder: action.payload };
      default:
        return state;
    }
  };
  
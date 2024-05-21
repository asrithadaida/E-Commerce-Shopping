// // components/ProductList.js

// import React, { useContext } from 'react';
// import { ProductContext } from '../pages/FilterPage';

// const FilterList = () => {
//   const { state, dispatch } = useContext(ProductContext);

//   // Handle filter change
//   const handleFilterChange = (key, value) => {
//     dispatch({ type: 'SET_FILTER', payload: { key, value } });
//   };

//   // Handle sorting change
//   const handleSortByChange = (value) => {
//     dispatch({ type: 'SET_SORT_BY', payload: value });
//   };

//   // Handle sort order change
//   const handleSortOrderChange = (value) => {
//     dispatch({ type: 'SET_SORT_ORDER', payload: value });
//   };

//   return (
//     <div className="left-sidebar">
//       {/* Filter controls */}
//       <select value={state.filters.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
//         {/* Options for categories */}
//       </select>
//       <input type="text" value={state.filters.minPrice} onChange={(e) => handleFilterChange('minPrice', e.target.value)} />
//       {/* More filter controls as needed */}

//       {/* Sorting controls */}
//       <select value={state.sortBy} onChange={(e) => handleSortByChange(e.target.value)}>
//         <option value="">Sort By</option>
//         <option value="price">Price</option>
//         <option value="name">Name</option>
//         {/* More sorting options */}
//       </select>
//       <select value={state.sortOrder} onChange={(e) => handleSortOrderChange(e.target.value)}>
//         <option value="asc">Ascending</option>
//         <option value="desc">Descending</option>
//       </select>

//       {/* Product list */}
//       {/* Render products based on filters and sorting */}
//     </div>
//   );
// };

// export default FilterList;
// */



import React, { useState } from 'react';
// import {
//   Form,
//   Button,
//   InputGroup,
//   OverlayTrigger,
//   Tooltip
// } from 'react-bootstrap';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {  clearFilter } from '../slices/filterProductSlice';
import { searchProduct, clearSearch, filterProduct} from '../slices/searchProductSlice';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


function FilterList() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const searchProductHandler = e => {
    console.log("invoked filter"+input);
    e.preventDefault();
    dispatch(filterProduct(input));
  };

  const clearSearchHandler = () => {
    dispatch(clearSearch());
    setInput('');
  };

  
    const [options, setOptions] = useState([
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ]);

    const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleDeselect = (option) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    setSelectedValue(event.target.lvalue);
  };

  return (
    <div>
      <form onSubmit={searchProductHandler}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="select-filter-label">Filter</InputLabel>
          <Select
            labelId="select-filter-label"
            id="select"
            value={selectedValue}
            onChange={handleChange}
            label="Filter"
          >
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="formal">Formal</MenuItem>
            <MenuItem value="sneakers">Sneakers</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit' variant='contained' color='warning'>
          Apply Filter
        </Button>
      </form>
      <Button type='button' variant='contained' color='warning' onClick={clearSearchHandler}>
        Clear Filter
      </Button>
    </div>

    // <Form onSubmit={searchProductHandler} className='d-flex'>
    //   <InputGroup>
    //     <Form.Control
    //       size='sm'
    //       type='text'
    //       value={input}
    //       onChange={e => setInput(e.target.value)}
    //       placeholder='Search Products...'
    //     />
    //     {input === '' ? (
    //       ''
    //     ) : (
    //       <Button type='button' variant='light' onClick={clearSearchHandler}>
    //         <FaTimes />
    //       </Button>
    //     )}
    //     <Button type='submit' variant='warning'>
    //       <FaSearch />
    //     </Button>
    //   </InputGroup>
    // </Form>
  );
}

export default FilterList;

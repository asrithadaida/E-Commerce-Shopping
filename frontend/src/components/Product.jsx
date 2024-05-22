import React, { useState } from 'react';
import { Button, Card, ListGroupItem } from 'react-bootstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';
import { addToCart } from '../slices/cartSlice';
import { addToList } from '../slices/wishlistSlice';
import Rating from './Rating';

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };
  const addToListHandler = () => {
    dispatch(addToList({...product,qty}));
    navigate('/wishlist');
  }
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none' }}
        className='text-dark'
      >
        <Card.Img
          variant='top'
          src={product.image}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>

          <strong>Size: </strong>

  
    {/* Display all items separated by commas */}
    {product.size.map((item, index) => (
      // Add a comma after each item except the last one
      `${item[0]}${index !== product.size.length - 1 ? ', ' : ''}`
    ))}
  



          <Card.Text as='div' className='mb-3'>
            <Rating
              value={product.rating}
              text={`(${product.numReviews} reviews)`}
            /> 
          </Card.Text>
          <Card.Text as='h3'>{addCurrency(product.price)}</Card.Text>
        </Card.Body>
      </Link>
      <ListGroupItem>
      <Button
        id='addToCart-home'
        className='w-75'
        style={{float: 'left', marginRight: '20px'}}
        variant='warning'
        type='button'
        disabled={product.countInStock === 0}
        onClick={addToCartHandler}
      >
        Add To Cart
      </Button>
      <FavoriteIcon id='heart-home' aria-label="delete" disabled color="primary" onClick={addToListHandler}>
                      <i className="fas fa-heart" />
                    </FavoriteIcon>
                    </ListGroupItem>
    </Card>
  );
};

export default Product;

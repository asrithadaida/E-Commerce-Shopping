import React, { useState } from 'react';

import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
  Form,
  ListGroupItem
} from 'react-bootstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetProductDetailsQuery,
  useCreateProductReviewMutation
} from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addCurrency } from '../utils/addCurrency';
import Reviews from '../components/Reviews';
import { addToList } from '../slices/wishlistSlice';

const ProductPage = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  

  const { userInfo } = useSelector(state => state.auth);

  const {
    data: product,
    isLoading,
    error
  } = useGetProductDetailsQuery(productId);

  const [createProductReview, { isLoading: isCreateProductReviewLoading }] =
    useCreateProductReviewMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const sizeList = product.size.map((item) => (
  //   <li>
  //     {item}
  //   </li>
  //  ));

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };
  const addToListHandler = () => {
    dispatch(addToList({...product,qty}));
    navigate('/wishlist');
  }
  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await createProductReview({
        productId,
        rating,
        comment
      });
      if (res.error) {
        toast.error(res.error?.data?.message);
      }
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }

    setRating(0);
    setComment('');
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Link to='/' className='btn btn-light my-3'>
            Go Back
          </Link>
          <Meta title={product.name} description={product.description} />
          <Row>
            <Col md={5}>
              <Image src={product.image} alt={product.name} fluid />
              <Row className='review d-none d-md-block'>
                <Col>
                  <Reviews
                    product={product}
                    userInfo={userInfo}
                    rating={rating}
                    laoding={isCreateProductReviewLoading}
                    setRating={setRating}
                    comment={comment}
                    setComment={setComment}
                    submitHandler={submitHandler}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: {addCurrency(product.price)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong> About this item:</strong>
                  {product.description}
                </ListGroup.Item>
                { <ListGroup.Item>
                  <strong>Size</strong>
                  {product.size.map((item, index) => (
          <li key={index}>
            {/* Display item and its index */}
            {`${item[0]}`}
          </li>
        ))}

      </ListGroup.Item> }
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{addCurrency(product.price)}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={e => setQty(Number(e.target.value))}
                          >
                            {Array.from(
                              { length: product.countInStock },
                              (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroupItem>
                    <Button
                      className='w-75'
                      variant='warning'
                      type='button'
                      disabled={product.countInStock === 0}
                     // onClick={addToCartHandler}
                     onClick={addToList}
                      style={{float: 'left', marginRight: "20px"}}
                    >
                      Add To Cart
                    </Button>
                    { <FavoriteIcon aria-label="delete" disabled color="primary" onClick={addToListHandler}>
                      <i className="fas fa-heart" />
                    </FavoriteIcon> }
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className='review d-block d-md-none'>
            <Col md={6}>
              <Reviews
                product={product}
                userInfo={userInfo}
                rating={rating}
                laoding={isCreateProductReviewLoading}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                submitHandler={submitHandler}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;

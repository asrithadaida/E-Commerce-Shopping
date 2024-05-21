import React, { useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Button, Image, Card, Form } from 'react-bootstrap';
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useUpdateDeliverMutation,
  useGetRazorpayApiKeyQuery
} from '../slices/ordersApiSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ServerError from '../components/ServerError';
 

import axios from 'axios';
import Meta from '../components/Meta';
import { addCurrency } from '../utils/addCurrency';
 import { PAYMENT_URL } from '../constants';
const OrderDetailsPage = () => {
  const { id: orderId } = useParams();
  const navigate = useNavigate();
  // console.log(useGetOrderDetailsQuery());
  const { data: order, isLoading, error } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: isPayOrderLoading }] = usePayOrderMutation();
  const [updateDeliver, { isLoading: isUpdateDeliverLoading }] =
    useUpdateDeliverMutation();

  const { userInfo } = useSelector(state => state.auth);

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  const submitHandler = () =>{
    this.setState({
      isDelivered: true
    });
  }

 // const { data: razorpayApiKey } = useGetRazorpayApiKeyQuery();

const paymentHandler = async e => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/orders/${orderId}/pay
    `, {
      id: 'payment_id',
      status: 'paid',
      updateTime: new Date().toISOString(),
      email: 'customer@example.com'
      
    });
    toast.success("Payment Successful");
     navigate(`/order/${order._id}`);
  } catch (error) {
    toast.error(error?.data?.message || error.error);
  }
}


// const updateOrder = async () => {
//   setLoading(true);
//   try {
//     const response = await axios.post(`http://your-backend-url.com/orders/${id}/update`, {
//       id: 'payment_id',
//       status: 'paid',
//       updateTime: new Date().toISOString(),
//       email: 'customer@example.com'
//     });

//     console.log('Order updated:', response.data);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setLoading(false);
//   }
// };


 /* 
 const paymentHandler = async e => {
    try {
      // Make the API call to Razorpay

      const razorpayData = {
        amount: order.totalPrice * 100, // Razorpay expects the amount in paisa, so multiply by 100
        currency: 'INR',
        receipt: `receipt#${orderId}`
      };
      const { data } = await axios.post(
        '/api/v1/payment/razorpay/order',
        razorpayData
      );

      const { id: razorpayOrderId } = data;

      const options = {
        key: razorpayApiKey.razorpayKeyId, // Enter the Key ID generated from the Dashboard
        amount: razorpayData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: razorpayData.currency,
        name: 'MERN Shop', //your business name
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: razorpayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async response => {
          try {
            const { data } = await axios.post(
              `/api/v1/payment/razorpay/order/validate`,
              response
            );
            const details = { ...data, email: order?.user?.email };
            await payOrder({ orderId, details });
            toast.success(data.message);
          } catch (error) {
            toast.error(error?.data?.message || error.error);
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: order?.user?.name, //your customer's name
          email: order?.user?.email
          // contact: '9000090000' //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: 'MERN Shop Office'
        },
        theme: {
          color: '#FFC107'
        }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
      // e.preventDefault();

      // rzp1.on('payment.failed', response => {
      //   alert(response.error.code);
      //   alert(response.error.description);
      //   alert(response.error.source);
      //   alert(response.error.step);
      //   alert(response.error.reason);
      //   alert(response.error.metadata.order_id);
      //   alert(response.error.metadata.payment_id);
      // });
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  }; */

  const deliveredHandler = async () => {
    try {
      await updateDeliver(orderId);
      toast.success('Order Delivered');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
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
          <Meta title={'Order Details'} />
          <h1>Order ID: {orderId}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Shipping </h2>
                  <div className='mb-3'>
                    <strong>Name:</strong> {order?.user?.name}
                  </div>
                  <div className='mb-3'>
                    <strong>Email:</strong> {order?.user?.email}
                  </div>
                  <div className='mb-3'>
                    <strong>Address:</strong> {order?.shippingAddress?.address},
                    {order?.shippingAddress?.city},
                    {order?.shippingAddress?.postalCode},
                    {order?.shippingAddress?.country} <br />
                  </div>
                  {order?.isDelivered ? (
                    <Message variant='success'>
                      Delivered on{' '}
                      {new Date(order?.deliveredAt).toLocaleString()}
                    </Message>
                  ) : (
                    <Message variant={'danger'}>{'Not Delivered'}</Message>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>Payment Method </h2>
                  <div className='mb-3'>
                    <strong>Method:</strong> {order?.paymentMethod}
                  </div>
                   {order?.isPaid ? (
                    <Message variant={'success'}>
                      Paid on {new Date(order?.paidAt).toLocaleString()}
                    </Message>
                  ) : (
                    <Message variant={'danger'}>{'Not paid'}</Message>
                  )} 
                  {/* <Message variant={'success'}>
                      Paid with {order?.paymentMethod}
                    </Message> */}

                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>Order Items </h2>
                  <ListGroup variant='flush'>
                    {order?.orderItems?.map(item => (
                      <ListGroup.Item key={item._id}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={6}>
                            <Link
                              to={`/product/${item._id}`}
                              className='product-title text-dark'
                              style={{ textDecoration: 'none' }}
                            >
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x {addCurrency(item.price)} =
                            {addCurrency(item.qty * item.price)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </ListGroup.Item>
                
                <ListGroup>
                {order?.isDelivered===false ? (
                <ListGroup.Item>
           
            <h2>Return the Item</h2>

          
            <Form onSubmit={submitHandler}>
              
              <Form.Group className='my-2' controlId='comment'>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as='textarea'
                  row='3'
                  required
                //  value={comment}
                //  onChange={e => setComment(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button
                className='w-100'
              //  disabled={loading}
                type='submit'
                variant='warning'
              >
                Submit
              </Button>
            </Form>
          
                </ListGroup.Item>
                ):(
                  <Message ></Message>
                )}
                </ListGroup>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items:</Col>
                      <Col>{addCurrency(order?.itemsPrice)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping:</Col>
                      <Col>{addCurrency(order?.shippingPrice)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax:</Col>
                      <Col>{addCurrency(order?.taxPrice)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total:</Col>
                      <Col>{addCurrency(order?.totalPrice)}</Col>
                    </Row>
                  </ListGroup.Item>
                   {!order?.isPaid && !userInfo.isAdmin && (
                    <ListGroup.Item>
                      <Button
                        className='w-100'
                        variant='warning'
                        onClick={paymentHandler}
                        
                        style={{ marginBottom: '10px' }}
                      >
                        Pay Order
                      </Button>
                    </ListGroup.Item>
                  )} 
                  {userInfo &&
                    userInfo.isAdmin &&
                    order?.isPaid &&
                    !order?.isDelivered && (
                      <ListGroup.Item>
                        <Button
                          onClick={deliveredHandler}
                          variant='warning'
                          disabled={isUpdateDeliverLoading}
                          style={{ marginBottom: '10px' }}
                        >
                          Mark As Delivered
                        </Button>
                      </ListGroup.Item>
                    )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default OrderDetailsPage;

/*
import React, { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import Meta from '../components/Meta';
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('Razorpay');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useSelector(state => state.cart);

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/place-order');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Meta title={'Payment Method'} />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              className='my-2'
              type='radio'
              id='Razorpay'
              label='Credit Card'
              name='paymentMethod'
              value='Credit Card'
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button className='mb-3 w-100' variant='warning' type='submit'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/payment', {
        cardNumber,
        expiry,
        cvv,
      });
      console.log('Payment successful:', response.data);
      // Update UI to reflect successful payment
    } catch (error) {
      console.error('Error processing payment:', error);
      // Update UI to inform the user of the error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Card Number"
        required
      />
      <input
        type="text"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        placeholder="Expiration Date (MM/YY)"
        required
      />
      <input
        type="text"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="CVV"
        required
      />
      <button type="submit">Pay Now</button>
    </form>
  );
};

//export default PaymentForm;

export default Payment;
*/

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Send the paymentMethod.id to your server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;


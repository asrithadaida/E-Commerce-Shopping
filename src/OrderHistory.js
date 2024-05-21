// OrderHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('/api/order-history');
        setOrderHistory(response.data);
      } catch (error) {
        setError('Failed to fetch order history');
      }
    };
    
    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {error && <p>{error}</p>}
      <ul>
        {orderHistory.map(order => (
          <li key={order.id} data-testid={`order-${order.id}`}>
            <p>Order Date: {order.date}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;

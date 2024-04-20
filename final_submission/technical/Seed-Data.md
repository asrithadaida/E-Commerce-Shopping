_1. Product: We shall use product.json file with the sample content_

[
  {
    "productID": 1,
    "productName": "Example Product 1",
    "description": "This is a description of Example Product 1.",
    "price": 19.99,
    "size": "Medium",
    "image": "example_product1.jpg"
  },
  {
    "productID": 2,
    "productName": "Example Product 2",
    "description": "This is a description of Example Product 2.",
    "price": 29.99,
    "size": "Large",
    "image": "example_product2.jpg"
  },
  {
    "productID": 3,
    "productName": "Example Product 3",
    "description": "This is a description of Example Product 3.",
    "price": 14.99,
    "size": "Small",
    "image": "example_product3.jpg"
  }
]

_2. Customer : We shall use customer.json file with the sample content_

customer:
[
  {
    "customerID": 1,
    "Name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "phonenumber": "1234567890"
  },
  {
    "customerID": 2,
    "Name": "Jane Smith",
    "email": "janesmith@example.com",
    "password": "smith@123",
    "phonenumber": "0987654321"
  },
  {
    "customerID": 3,
    "Name": "Alice Johnson",
    "email": "alicejohnson@example.com",
    "password": "alicepass",
    "phonenumber": "5555555555"
  }
]

_3. order: We shall use order.json file with the sample content_

[
  {
    "orderId": 1,
    "customerID": 1,
    "orderDate": "2024-04-12T10:00:00Z",
    "shipmentID": "SHIP123",
    "totalPrice": 99.99
  },
  {
    "orderId": 2,
    "customerID": 2,
    "orderDate": "2024-04-11T15:30:00Z",
    "shipmentID": "SHIP456",
    "totalPrice": 149.99
  },
  {
    "orderId": 3,
    "customerID": 3,
    "orderDate": "2024-04-10T09:45:00Z",
    "shipmentID": "SHIP789",
    "totalPrice": 79.99
  }
]

_4. order item: We shall use orderItem.json file with the sample content_

[
  {
    "orderItemId": 1,
    "orderId": 1,
    "productID": 1,
    "Quantity": 2,
    "orderItemPrice": 39.98
  },
  {
    "orderItemId": 2,
    "orderId": 1,
    "productID": 2,
    "Quantity": 1,
    "orderItemPrice": 29.99
  },
  {
    "orderItemId": 3,
    "orderId": 2,
    "productID": 3,
    "Quantity": 3,
    "orderItemPrice": 44.97
  }
]

_5. cart: We shall use cart.json file with the sample content_

[
  {
    "cartID": 1,
    "productID": 1,
    "customerID": 1,
    "Quantity": 2
  },
  {
    "cartID": 2,
    "productID": 2,
    "customerID": 1,
    "Quantity": 1
  },
  {
    "cartID": 3,
    "productID": 3,
    "customerID": 2,
    "Quantity": 3
  }
]

_6. wishlist: We shall use wishlist.json file with the sample content_

[
  {
    "wishlistID": 1,
    "productID": 1,
    "customerID": 1
  },
  {
    "wishlistID": 2,
    "productID": 2,
    "customerID": 1
  },
  {
    "wishlistID": 3,
    "productID": 3,
    "customerID": 2
  }
]

_7. payment: We shall use payment.json file with the sample content_

[
  {
    "paymentID": 1,
    "Date": "2024-04-12T14:30:00Z",
    "paymentMethod": "Credit Card",
    "customerID": 1
  },
  {
    "paymentID": 2,
    "Date": "2024-04-11T10:15:00Z",
    "paymentMethod": "PayPal",
    "customerID": 2
  },
  {
    "paymentID": 3,
    "Date": "2024-04-10T17:45:00Z",
    "paymentMethod": "Debit Card",
    "customerID": 3
  }
]

_8. shipment: We shall use shipment.json file with the sample content_

[
  {
    "shipmentID": 1,
    "customerID": 1,
    "Address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "zipcode": "10001"
  },
  {
    "shipmentID": 2,
    "customerID": 2,
    "Address": "456 Elm St",
    "city": "Los Angeles",
    "state": "CA",
    "country": "USA",
    "zipcode": "90001"
  },
  {
    "shipmentID": 3,
    "customerID": 3,
    "Address": "789 Oak St",
    "city": "Chicago",
    "state": "IL",
    "country": "USA",
    "zipcode": "60601"
  }
]
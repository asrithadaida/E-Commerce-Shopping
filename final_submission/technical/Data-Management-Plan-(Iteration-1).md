
Summary of Data to Store:

Customer Information:

* Name
* Email
* Password
* Profile Information
* Orders Placed

Product Details:

* ProductID
* SellerID
* Product name
* Description
* Price
* Size
* Image

Order Information:

* Order ID
* Customer ID
* Product(s) ordered
* Quantity
* Total price
* Order date

Seller Information:

* Name
* Email
* Password
* Profile Information
* Product Details

Transaction:

* TransactionID
* BuyerID
* ProductID
* Purchase details

Initial Plans

1. Access limitations
* To limit access based on user roles, use role-based access control, or RBAC.
* To manage permissions, distinguish between client, admin, and other roles.
2. Encrypted process
* Passwords and payment information are examples of sensitive data that should be encrypted.
* To protect data while it is being sent between clients and servers, use HTTPS.

The following is a mapping of the functional need of user registration to data storage:

 User Registration (Functional Requirement):
 1. Maps to the process of entering and keeping customer records in the database.
 2. requires keeping track of client information, including address, email, and name.

 Product Display (Functional Requirement):
 1. It is the product information from the database.
 2. It requires accurate storage and the retrieval of product details like name, price, size, brand, description of the product.

 Order Placement (Functional Requirement):
 1. It maps to the storage of order records in database.
 2. It requires orders associated with customer id's and contains product details and quantities.

 Authentication and Authorization (Functional Requirement):
 1. It maps to user account management to the database.
 2. It has secured storage of usernames and encrypted passwords with access control.

ER Diagram:



![image](https://github.com/asrithadaida/GDP_ECommerce_Project/assets/137849928/4c4d6ade-8b9c-486e-abbe-dd059f5432fe)

By matching functional requirements to data storage, the system ensures that the data storage supports the primary features and functionalities of the e-commerce application. This alignment helps to achieve business objectives and user expectations while maintaining data security and integrity practices.
# Test Plan

## Happy Feet

## Last updated: [05-02-2024]

----

### Introduction

This test plan outlines the testing approach for Happy Feet, an online e-commerce shopping website, connecting buyers. It aims to ensure the system functions as expected, meeting functional requirements while maintaining quality and security standards.

### Purpose of the document
This document serves as a guide for testing Happy Feet features, identifying tools, methods, and deliverables necessary for comprehensive testing.

### References

Include here (at minimum) links to:

* Project description/summary/charter - https://github.com/asrithadaida/GDP_ECommerce_Project/wiki/Project-Charter-(Iteration-1)
* Functional Requirements Documentation - 
[Functional Requirements List - Final.docx](https://github.com/asrithadaida/GDP_ECommerce_Project/files/15192814/Functional.Requirements.List.-.Final.docx)


### Features

#### To be tested

| Feature description | List of functional requirements | 
| ------------------- | ------------------------------- |
|Account Registration | The system SHALL allow customers to create an account.|
| User profiles | The system SHALL create user profiles for customers.|
| Product uploads | The system SHALL provide the functionality of filtering the products based on shoe categories, shoe    size, shoe price etc.|
| Cart | The system SHALL provide a cart to add the selected shoes.|
| Order | The system SHALL enable the order processing.|
| Order | The system SHALL process easy return and refund policies.|
| Order | The system SHALL provide delivery options and enable delivery of the product.|
| Payment | The system SHALL enable secure online payments.|
| Login | The system SHALL provide the passwords in encrypted format.|
| Product | The system SHALL allow filtering and sorting the products.|
| Cart page | The system SHALL allow user to modify and view products in the cart.|
| Wishlist | The system SHALL allow users to Wishlist the products.|
| Oder history | The system SHOULD maintain order history and preferences for each customer.|
| Product reviews | The system SHOULD allow customers to leave feedback and reviews about the shoes they bought.|


#### Not to be tested

| Feature description | List of functional requirements | Rationale |
| ------------------- | ------------------------------- | --------- |
|Decrypted format to save passwords in database | FR.17 | We cannot test the decrypted format of passwords saved in database |

### Approach

#### Tools

* Node js: https://nodejs.org/api/documentation.html
* Mongo DB: https://www.mongodb.com/docs/manual/reference/database-references/
* Angular js: https://docs.angularjs.org/api
* Render: https://docs.render.com/api


#### Methods

* Functional testing(end-to-end)
* Regression testing
* Manual testing
* Unit testing

### Test Deliverables

  * Test cases for each function requirement
  

#### Login

| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.1 (User Account) | Verify successful registration of account| Unit | | |
| FR 1.2 | Verify the login with correct credentials | Unit | | |
| FR 1.3 | Verify the login with incorrect credentials | Unit| | |

###  Password

| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.4 (Forgot passowrd) | Verify the forgot password link functionality| Functional | | |

####  User Profile
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.5 (User profile) | Verify the user profile creation and update | Functional | | |
| FR 1.5 | Verify the user profile logout functionality | Functional | | |

####  Product Upload
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.6 (Product Upload) |  Validating the image upload functionality | Functional | | |
| FR 1.6 | Verify the correct images for all types and categories of shoes| Functional | | |

####  Product Search
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.7 (Product Search) |   Accurate search results display | Functional | | |
| FR 1.7 | Verify the correct search functionality for every category of shoes| Functional | | |
| FR 1.7 | Verify by giving the incorrect names in the search | Functional | | |


####  Online Payment
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.8 (Secured Online payment) |   Simulating the payment transaction | Functional | | |
| FR 1.8 | Verifying the transaction by giving valid card details| Functional | | |
| FR 1.8 | Verifying the transaction by giving invalid card details | Functional| | |

#### Reviews and Ratings
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.9 (Reviews and Ratings) | Verify feedback submission and rating system functionality | Functional| |
| FR 1.9 | Verify the reviews buttons in the product page |Functional | | |
| FR 1.9 | Verify the reviews dispplayed in the homepage |Functional | | |
| FR 1.9 | Verify the ratings of the product | Functional| | |

#### Wishlist
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- | 
| FR 2.0 (Wishlist) | Verify by adding the products to wishlist | Functional| | |
| FR 2.0 | Verify the added products in the wishlist | Functional | | |
| FR 2.0 | Verify by removing the products from wishlist | Functional | | |

#### Delivery
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- | 
| FR 2.1 | Verify the delivery address can be added in the application | Functional | | |
| FR 2.1 | Verify that the delivery options are available to each and every available product | Functional | | |
| FR 2.2 | Verify the returns and refunds functionality | Functional | |

#### Order Processing
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- | 
| FR 2.3 | Verify the order processing functionality | Functional | | |

#### Cart
| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- | 
| FR 2.4 | Verify that we can modify to add or delete the products in the cart | Functional | | | 











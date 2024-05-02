# Test Plan

## Happy Feet

## Last updated: [date]

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

For this, you may group things by functional requirements or features; whichever is the most logical for you.
You do not need to fill out who is responsible for each test at this time.  
As you complete a test (either unit or not), include a link to the test file that 

#### Login

| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| FR 1.1      | System authenticates correct credentials | Unit | | |
| FR 1.1      | System authenticates correct credentials | UI (selenium) | | |
| FR 1.2      | System rejects incorrect password | Unit | | |
| FR 1.2      | UI feedback when  | UI (selenium) | | |

#### Another feature

| Requirement | Test Case Description | Test Type | Person Responsible | Completed |
| ----------- | --------------------- | --------- | ------------------ | --------- |
| | | | | |

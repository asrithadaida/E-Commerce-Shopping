// src/components/Cart.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart';

describe('Modify and View Cart Component', () => {
  test('adds products to the cart', () => {
    render(<Cart />);
    const cartInput = screen.getByTestId('cart-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(cartInput, { target: { value: 'sneakers' } });
    fireEvent.click(addButton);

    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems.length).toBe(1);
    expect(cartItems[0]).toHaveTextContent('sneakers');
  });

  test('removes products from the cart', () => {
    render(<Cart />);
    const cartInput = screen.getByTestId('cart-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(cartInput, { target: { value: 'sneakers' } });
    fireEvent.click(addButton);

    let cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems.length).toBe(1);

    const removeButton = screen.getByTestId('remove-button-0');
    fireEvent.click(removeButton);

    cartItems = screen.queryAllByTestId('cart-item');
    expect(cartItems.length).toBe(0);
  });

  test('modifies products in the cart', () => {
    render(<Cart />);
    const cartInput = screen.getByTestId('cart-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(cartInput, { target: { value: 'sneakers' } });
    fireEvent.click(addButton);

    let cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems.length).toBe(1);

    const modifyButton = screen.getByTestId('modify-button-0');
    window.prompt = jest.fn().mockReturnValue('formal shoes');
    fireEvent.click(modifyButton);

    cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems.length).toBe(1);
    expect(cartItems[0]).toHaveTextContent('formal shoes');
  });

  test('views products in the cart', () => {
    render(<Cart />);
    const cartInput = screen.getByTestId('cart-input');
    const addButton = screen.getByTestId('add-button');

    const products = ['sneakers', 'formal shoes', 'sports shoes', 'casual shoes', 'loafers'];

    products.forEach(product => {
      fireEvent.change(cartInput, { target: { value: product } });
      fireEvent.click(addButton);
    });

    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems.length).toBe(5);
    products.forEach((product, index) => {
      expect(cartItems[index]).toHaveTextContent(product);
    });
  });
});

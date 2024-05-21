import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
//import '@testing-library/jest-dom/extend-expect';
import UserLogin from '../UserLogin';

jest.mock('axios');

describe('UserLogin Component', () => {
    test('renders login form', () => {
      const { getByLabelText, getByTestId } = render(<UserLogin />);
      
      // Assert that login form elements are rendered
      expect(getByLabelText('Username')).toBeInTheDocument();
      expect(getByLabelText('Password')).toBeInTheDocument();
      expect(getByTestId('login-button')).toBeInTheDocument();
    });
  
    test('captures user input', () => {
      const { getByLabelText } = render(<UserLogin />);
      const usernameInput = getByLabelText('Username');
      const passwordInput = getByLabelText('Password');
  
      // Simulate user input
      fireEvent.change(usernameInput, { target: { value: 'naresh.chityala@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: 'naresh123' } });
  
      // Assert that user input is captured correctly
      expect(usernameInput.value).toBe('naresh.chityala@gmail.com');
      expect(passwordInput.value).toBe('naresh123');
    });
  
    test('calls login function with correct parameters on form submit', async () => {
      const { getByTestId } = render(<UserLogin />);
      const usernameInput = getByTestId('username-input');
      const passwordInput = getByTestId('password-input');
      const loginButton = getByTestId('login-button');
  
      // Set input values
      fireEvent.change(usernameInput, { target: { value: 'naresh.chityala@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: 'naresh123' } });
  
      // Mock axios post request
      axios.post.mockResolvedValue({ data: { token: 'mockToken' } });
  
      // Submit the form
      fireEvent.click(loginButton);
  
      // Wait for axios to resolve
      await waitFor(() => {
        // Assert that axios.post is called with correct parameters
        expect(axios.post).toHaveBeenCalledWith('/api/login', {
          username: 'naresh.chityala@gmail.com',
          password: 'naresh123'
        });
      });
    });
  });
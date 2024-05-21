// userRegistration.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserRegistration from '../UserRegistration';

jest.mock('axios');

describe('User Registration Component', () => {
  test('registers a new user', async () => {
    const { getByLabelText, getByTestId } = render(<UserRegistration />);

    const usernameInput = getByLabelText('Username');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const registerButton = getByTestId('register-button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'test123' } });

    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('/api/register', {
        username: 'testuser',
        email: 'test@example.com',
        password: 'test123',
      });
    });
  });
});

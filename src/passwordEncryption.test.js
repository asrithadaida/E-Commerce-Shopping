import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import PasswordEncryption from '../src/PasswordEncryption'; // Ensure the path is correct based on your structure


jest.mock('axios');

describe('PasswordEncryption Component', () => {
  test('encrypts the password before submitting the form', async () => {
    // Mock axios post request to simulate successful registration
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByLabelText, getByTestId } = render(<PasswordEncryption />);

    // Simulate user inputting username, email, and passwords
    const usernameInput = getByLabelText('Username');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });

    // Simulate form submission
    const submitButton = getByTestId('register-button');
    fireEvent.click(submitButton);

    // Wait for axios post request to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });

    // Check if the password sent to the backend is encrypted
    const submittedData = axios.post.mock.calls[0][1];
    expect(submittedData.password).not.toBe('testpassword');
  });
});

// passwordEncryption.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserRegistration from './UserRegistration'; // Assuming this is the component where password encryption happens

jest.mock('axios');

describe('User Registration Component', () => {
  test('encrypts the password before submitting the form', async () => {
    // Mock axios post request to simulate successful registration
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByLabelText, getByTestId } = render(<UserRegistration />);

    // Simulate user inputting username and password
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Simulate form submission
    const submitButton = getByTestId('submit-button');
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

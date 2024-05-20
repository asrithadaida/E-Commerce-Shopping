// PasswordEncryption.js
import React, { useState } from 'react';
import axios from 'axios';

const PasswordEncryption = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Encrypt password before sending to the server
      const encryptedPassword = encryptPassword(password);
      await axios.post('/api/register', { username, password: encryptedPassword });
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Dummy encryption function (replace with your actual encryption logic)
  const encryptPassword = (password) => {
    // Placeholder encryption logic (e.g., reversing the password)
    return password.split('').reverse().join('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default PasswordEncryption;

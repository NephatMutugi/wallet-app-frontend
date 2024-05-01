import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css'; // Adjust the path to your CSS module

function Login() {
  const [credentials, setCredentials] = useState({
    mobileNumber: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);

  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        mobileNumber: credentials.mobileNumber,
        password: credentials.password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Correlation-ConversationID': '38684805-4c00-49bc-84b6-816aaa951ef6',
          'X-Source-App': 'web'
        }
      });

      console.log(response.data); // Logging the response data
      // Handle successful login here (e.g., storing the token, redirecting user)
      if(response.status === 200 && response.data){
        const { requestRefId, responseCode, responseMessage } = response.data.header;
        const { token } = response.data.data;

        // Logging details from the response
        console.log("Request Reference ID:", requestRefId);
        console.log("Response Code:", responseCode);
        console.log("Response Message:", responseMessage);
        console.log("Token:", token);

        localStorage.setItem('token', token);

        // redirect to dashboard
        navigate('/dashboard');
      }

    } catch (e) {
      setError(`Login failed: ${e.response ? e.response.data.message : e.message}`);
      console.error("Login error: ", e);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="mobileNumber" className={styles.formLabel}>Mobile Number:</label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="text"
            value={credentials.mobileNumber}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Password:</label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={credentials.password}
            onChange={handleChange}
            className={styles.formInput}
          />
          <button onClick={toggleShowPassword} type="button" className={styles.showPasswordButton}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className={styles.formButton} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </form>
    </div>
  );
}

export default Login;

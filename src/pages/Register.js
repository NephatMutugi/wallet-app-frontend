import React, { useState } from 'react';
import styles from './Register.module.css'; // Correct the path as needed

function Register() {
  const [userData, setUserData] = useState({
    customerName: '',
    mobileNumber: '',
    email: '',
    password: '',
    address: '',
    dateOfBirth: '',
    nationalId: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call to register the user would go here
    console.log('Registering:', userData);
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        {/* Iterate over userData to create form fields */}
        {Object.entries(userData).map(([key, value]) => (
          <div key={key} className={styles.formGroup}>
            <label htmlFor={key} className={styles.formLabel}>
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
            </label>
            <input
              id={key}
              type={key === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
              className={styles.formInput}
              placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            />
            {key === 'password' && (
              <button onClick={toggleShowPassword} type="button" className={styles.showPasswordButton}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            )}
          </div>
        ))}
        <button type="submit" className={styles.formButton}>Register</button>
      </form>
    </div>
  );
}

export default Register;

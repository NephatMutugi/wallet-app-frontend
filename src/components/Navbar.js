import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import styles from './Navbar.module.css';  
function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 

  const handleLogout = async() =>{
    if (token) {
      const headers = {
        'X-Correlation-ConversationID': uuidv4(),  // Generating a new UUID
        'X-Source-App': 'web',
        'X-Session-Id': token  // Using the token as the session ID
      };

      try {
        const response = await axios.get(`http://localhost:8080/api/v1/auth/logout?token=${encodeURIComponent(token)}`, {headers});
        console.log(response.data);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }

    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/login" className={styles.link}>Login</Link>
      <Link to="/register" className={styles.link}>Register</Link>
      <Link to="/dashboard" className={styles.link}>Dashboard</Link>
      <Link to="/settings" className={styles.link}>Settings</Link>
      <Link to="/contact" className={styles.link}>Contact</Link>
      <button onClick={handleLogout} className={styles.link}>Logout</button>
    </nav>
  );
}

export default Navbar;

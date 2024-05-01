import React, { useState } from 'react';
import styles from './Contact.module.css';  

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact Info:', contactInfo);
  };

  return (
    <div className={styles.contactContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={contactInfo.name}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Your Name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={contactInfo.email}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Your Email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
            className={`${styles.formInput} ${styles.formTextarea}`}
            placeholder="Your Message"
          />
        </div>
        <button type="submit" className={styles.formButton}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

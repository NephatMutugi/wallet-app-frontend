import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to QuickWallet</h1>
      <p className={styles.text}>Your trusted mobile finance companion.</p>
    </div>
  );
}

export default Home;

import React from 'react';
import styles from './Dashboard.module.css';  // Make sure the path is correct

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.heading}>Dashboard</h2>
      <p>Welcome to your dashboard. Here you can view your transactions, manage your accounts, and more.</p>
      {/* Additional UI elements */}
    </div>
  );
}

export default Dashboard;

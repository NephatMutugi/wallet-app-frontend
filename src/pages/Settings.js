import React, { useState } from 'react';

function Settings() {
  const [userSettings, setUserSettings] = useState({
    email: '',
    password: '',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    setUserSettings({ ...userSettings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call to update user settings would go here
    console.log('Updating Settings:', userSettings);
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(userSettings).map(([key, value]) => (
          <label key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              type={key === 'password' ? 'password' : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
            />
          </label>
        ))}
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
}

export default Settings;

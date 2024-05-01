import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token'); 

  if (!token) {
    // Redirect them to the login page but save the current location they were trying to go to.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // If the token is present, render the children components
};

export default PrivateRoute;

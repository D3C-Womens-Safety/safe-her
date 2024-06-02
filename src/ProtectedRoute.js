import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("ProtectedRoute: user:", user);
  return user && Object.keys(user).length !== 0 ? children : <Navigate to="/login" />;
};

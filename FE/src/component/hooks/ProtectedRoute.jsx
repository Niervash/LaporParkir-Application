import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If not authenticated, redirect to login
      return <Navigate to="/login" />;
    }

    return children; // If authenticated, render the child components
  };
};

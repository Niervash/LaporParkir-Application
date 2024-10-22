import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const isAuthorized = userData && allowedRoles.includes(userData.role);

  if (!userData || !isAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;

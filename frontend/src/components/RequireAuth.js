import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user exists, render the protected component
  return children;
};

export default RequireAuth;

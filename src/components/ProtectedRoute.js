import { useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

// ProtectedRoute.jsx

import { useContext } from "react"; // New import
import { Navigate, useLocation } from "react-router-dom";

// Remove isLoggedIn from props
export default function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  // Destructure isLoggedIn from the value provided by AppContext
  const { isLoggedIn } = useContext(AppContext);

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

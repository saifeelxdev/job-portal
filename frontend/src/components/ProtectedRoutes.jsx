import { Navigate } from 'react-router-dom';
import { decodeToken } from '../utils/decodeToken';

function ProtectedRoutes({ allowedRoles, children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const decoded = decodeToken(token);

  if (!decoded) {
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(decoded.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoutes;

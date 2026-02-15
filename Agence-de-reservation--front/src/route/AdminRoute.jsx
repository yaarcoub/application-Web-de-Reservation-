import { Navigate } from 'react-router-dom';
import { authService } from '../api/services/apiService';

const AdminRoute = ({ children }) => {
  const user = authService.getCurrentUser();

  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;

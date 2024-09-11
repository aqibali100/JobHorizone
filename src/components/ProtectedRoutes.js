// src/components/auth/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { user: isAuthenticated } = useSelector((state) => state.users);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (requiredRole && isAuthenticated?.user?.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;

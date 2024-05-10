
import Spinner from '../Components/Spinner/Spinner';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }

    if (user) {
        return children;
    }

    // Redirect to login page if user is not logged in
    return <Navigate to="/login" state={ location?.pathname } />;
};
export default PrivateRoute;
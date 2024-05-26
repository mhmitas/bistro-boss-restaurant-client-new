import React from 'react';
import useAdmin from '../components/hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, authLoading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (authLoading || isAdminLoading) {
        return <span className='loading loading-lg loading-spinner absolute top-1/2 left-1/2'></span>
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
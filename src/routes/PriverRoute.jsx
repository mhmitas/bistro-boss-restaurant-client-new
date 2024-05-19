import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PriverRoute = ({ children }) => {
    const location = useLocation();
    const { user, authLoading } = useAuth()

    if (authLoading) {
        return <span className='loading loading-lg loading-spinner absolute top-1/2 left-1/2'></span>
    }

    if (user) {
        return children
    }
    return <Navigate to='/auth/login' state={location.pathname} replace></Navigate>
};

export default PriverRoute;
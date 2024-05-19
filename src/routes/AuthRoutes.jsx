import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthRoutes = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthRoutes;
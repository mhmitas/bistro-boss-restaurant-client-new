///////////////////////////////
//      DashBoard is not     //
//        Responsive         //
///////////////////////////////
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar/Sidebar';
import useAdmin from '../components/hooks/useAdmin';

const Dashboard = () => {

    // todo: get isAdmin value from database
    const [isAdmin, isAdminLoading] = useAdmin()

    return (
        <div className='flex'>
            {/* // Dashboard sidebar */}
            <Sidebar isAdmin={isAdmin} isAdminLoading={isAdminLoading} />
            {/* Dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;
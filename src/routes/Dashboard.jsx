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
            <div className='w-56'>
                <Sidebar isAdmin={isAdmin} isAdminLoading={isAdminLoading} />
            </div>
            {/* Dashboard content */}
            <div className='flex-1 overflow-y-auto'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;
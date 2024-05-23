///////////////////////////////
//      DashBoard is not     //
//        Responsive         //
///////////////////////////////
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar/Sidebar';

const Dashboard = () => {

    // todo: get isAdmin value from database
    const isAdmin = true

    return (
        <div className='flex'>
            {/* // Dashboard sidebar */}
            <Sidebar isAdmin={isAdmin} />
            {/* Dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;
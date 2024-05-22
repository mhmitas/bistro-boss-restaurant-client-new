////////////////////////////////
//      DashBoard is not     //
//        Responsive         //
///////////////////////////////
import React from 'react';
import { FaCalendar, FaHome, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MdMenuBook } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* // Dashboard sidebar */}
            <div className="w-64 bg-base-100 h-screen overflow-y-auto">
                <div className='p-1'>
                    <Link to='/' className="btn btn-ghost font-bold md:text-2xl text-xl">Bistro Boss</Link>
                </div>
                <ul className='menu *:font-semibold pt-0'>
                    <li>
                        <NavLink to="/dashboard/user-home"><FaHome className='text-lg' />USER HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar className='text-lg' />RESERVATION</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaShoppingCart className='text-lg' /> MY CART</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaPlus className='text-lg' />REVIEW</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"><FaShoppingCart className='text-lg' /> MY CART</NavLink>
                    </li>
                    <div className="divider divider-neutral"></div>
                    <li>
                        <NavLink to="/"><FaHome className='text-lg' />HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><MdMenuBook className='text-lg' />Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;
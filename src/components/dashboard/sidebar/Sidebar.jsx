import React from 'react';
import { FaBook, FaCalendar, FaHome, FaList, FaPlus, FaRegCalendarCheck, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'
import { MdMenu, MdMenuBook, MdReviews } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";

const Sidebar = ({ isAdmin }) => {

    const userNavLinks = <>
        <li>
            <NavLink to="/dashboard/user-home"><FaHome className='text-lg' />My Home</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/reservation"><FaCalendar className='text-lg' />Reservation</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/cart"><FaShoppingCart className='text-lg' /> My Cart</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/review"><MdReviews className='text-lg' />Add Review</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/review"><FaRegCalendarCheck className='text-lg' />My Booking</NavLink>
        </li>
    </>

    const adminNavLinks = <>
        <li>
            <NavLink to="/dashboard/admin-home"><FaHome className='text-lg' />Admin Home</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/add-items"><ImSpoonKnife className='text-lg' />Add Items</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manage-items"><FaList className='text-lg' />Manage Items</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manage-bookings"><FaBook className='text-lg' />Manage Bookings</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/manage-users"><FaUsers className='text-lg' />Manage Users</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="w-56 bg-base-100 h-screen overflow-y-auto">
                <div className='p-1'>
                    <Link to='/' className="btn btn-ghost font-bold md:text-2xl text-xl">Bistro Boss</Link>
                </div>
                <ul className='menu *:font-semibold pt-0'>
                    {
                        isAdmin ?
                            adminNavLinks
                            :
                            userNavLinks
                    }

                    <div className="divider divider-neutral"></div>
                    {/* SHARED Navlinks */}
                    <li>
                        <NavLink to="/"><FaHome className='text-lg' />home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><MdMenuBook className='text-lg' />menu</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
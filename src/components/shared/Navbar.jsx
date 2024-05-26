import React, { useEffect } from 'react';
import { navItems } from './Navlinks';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Navbar = () => {
    const { user, authLoading, logOutUser } = useAuth()
    const [cart] = useCart()

    return (
        <div className="navbar md:h-20 z-10 shadow-md bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded-md text-base-content w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold md:text-2xl text-xl">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* shopping cart icon  */}
                <Link to="/dashboard/cart">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mx-1">
                        <div className="indicator mx-4">
                            <FaShoppingCart className='text-xl' />
                            <span className="badge badge-sm badge-primary indicator-item">{cart.length}</span>
                        </div>
                    </div>
                </Link>
                {/* / authentication based UI */}
                <div>
                    {/* login logout */}
                    {authLoading ? <span className=''>Loading...</span> :
                        user ?
                            <div className="dropdown dropdown-end">
                                {/* Profile image section */}
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div title={user?.displayName} className="w-10 rounded-full">
                                        <img alt={user?.displayName && user.displayName} src={user?.photoURL ? user.photoURL : "https://i.ibb.co/tY0hxsg/default-profile.jpg"}
                                        />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-100 rounded-md w-52 shadow-xl">
                                    {/* <li><Link to="/profile">Profile</Link></li> */}
                                    <li><span onClick={logOutUser}>Logout</span></li>
                                </ul>
                            </div>
                            :
                            <div className='flex gap-3'>
                                <Link to='/auth/login' className="btn">Login</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
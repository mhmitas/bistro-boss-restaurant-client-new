import React from 'react';
import { navItems } from './Navlinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-black bg-opacity-30 text-slate-50 absolute md:h-20 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded-md text-base-content w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost font-bold md:text-2xl">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;
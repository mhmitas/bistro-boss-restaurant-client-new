import { NavLink } from "react-router-dom";

export const navItems = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to={"/menu"}>Menu</NavLink></li>
    <li><NavLink to="/order/salad">Order Food</NavLink></li>
    <li><NavLink to="/all-menu-items">All Menu Items</NavLink></li>
</>
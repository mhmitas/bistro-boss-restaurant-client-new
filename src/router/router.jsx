import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/order";
import Login from "../pages/authentication/Login";
import AuthRoutes from "../routes/AuthRoutes";
import SignUp from "../pages/authentication/SignUp";
import PriverRoute from "../routes/PriverRoute";
import Secret from "../pages/secret";
import Dashboard from "../routes/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import AllUsers from "../pages/dashboard/admin-pages/AllUsers";
import AddItems from "../pages/dashboard/admin-pages/AddItems";
import AdminRoute from "../routes/AdminRoute";
import ManageItems from "../pages/dashboard/admin-pages/ManageItems";

export const router = createBrowserRouter([
    {
        // Root layout
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <PriverRoute><Order /></PriverRoute>
            },
            {
                path: 'secret',
                element: <PriverRoute><Secret /></PriverRoute>
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthRoutes></AuthRoutes>,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
        ]
    },
    {
        // Dashboard layout
        path: 'dashboard',
        element: <PriverRoute><Dashboard></Dashboard></PriverRoute>,
        children: [
            // users routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // admin routes
            {
                path: 'manage-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
        ]
    }

]);
import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/order";
import Login from "../pages/authentication/Login";
import AuthRoutes from "../routes/AuthRoutes";
import SignUp from "../pages/authentication/SignUp";

export const router = createBrowserRouter([
    {
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
                path: 'order',
                element: <Order />
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
    }

]);
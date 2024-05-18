import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";

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
                path: '/menu',
                element: <Menu />
            },
        ]
    },
]);
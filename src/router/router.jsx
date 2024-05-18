import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);
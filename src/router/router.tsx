import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import {Blog} from "../pages/Blog.tsx";
import {OneArtical} from "../pages/OneArtical.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/artical/*",
        element: <OneArtical />,
    },
])
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../template/HomePage.tsx";
import {Blog} from "../template/Blog.tsx";
import {OneArtical} from "../template/OneArtical.tsx";

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
        path: "/artical/:id",
        element: <OneArtical />,
    },
])
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "./Layout/Pages/About/About.jsx";
import {LeftSidebar} from "./Layout/Pages/LeftSidebar/LeftSidebar.jsx";
import {MainLayout} from "./Layout/Pages/MainLayout.jsx";
import {Home} from "./Layout/Pages/Home/Home.jsx";

const router = () => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/left_side_bar',
                element: <LeftSidebar />
            }
        ],
    },
]);
const MainRouter = () => {
    return <RouterProvider router={router()}/>
};

export default MainRouter;
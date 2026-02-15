import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { Home, CoffeeBeans, Roasting, Grinding, Brewing } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'coffee-beans',
                element: <CoffeeBeans />,
            },
            {
                path: 'roasting',
                element: <Roasting />,
            },
            {
                path: 'grinding',
                element: <Grinding />,
            },
            {
                path: 'brewing',
                element: <Brewing />,
            },
        ],
    },
]);

export default router;

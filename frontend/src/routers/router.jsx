import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CartPage from '../pages/CartPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/orders',
                element: <h1>Orders</h1>,
            },
            {
                path: '/about',
                element: <h1>About book store</h1>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
        ],
    },
]);

export default router;

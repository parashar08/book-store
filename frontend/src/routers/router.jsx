import { createBrowserRouter } from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <h1>hi there! from router!</h1>
        },
        {
            path: "/orders",
            element: <h1>Orders</h1>
        },
        {
            path: "/about",
            element: <h1>About book store</h1>
        }
      ]
    },
]);

export default router;
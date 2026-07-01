import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Products from "../components/Products";
import DisplayCart from "../components/DisplayCart";

let RouteData = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/displayCart",
        element: <DisplayCart />,
      },
    ],
  },
]);

export default RouteData;

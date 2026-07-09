import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../components/homepage/HomePage";
import Message from "../components/messages/Message";
import Notifications from "../components/notifications/Notifications";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import AddPost from "../components/posts/AddPost";
import Profile from "../components/profile/Profile";

let RouteData = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/messages",
        element: <Message />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addPost",
        element: <AddPost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
export default RouteData;

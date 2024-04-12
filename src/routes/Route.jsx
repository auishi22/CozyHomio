import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import UserProfile from "../pages/userprofile/UserProfile";
import UpdateProfile from "../pages/updateprofile/UpdateProfile";
import EstateDetails from "../pages/estateDetails/EstateDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/cozyhomio.json"),
      },
      {
        path: "/estatedetails/:id",
        element: <EstateDetails></EstateDetails>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);

export default router;

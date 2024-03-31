import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/SignUp/SignUp"
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:5000/serveces/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>
        ),
      },
    ],
  },
]);


export default router;
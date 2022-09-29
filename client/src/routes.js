import Home from "./pages/Home";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import CheckAuth from "./utils/CheckAuth";
import Guest from "./utils/Guest";
import AboutUs from "./pages/AboutUs";

const token = Cookies.get("token");

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <CheckAuth>
            <Home />
          </CheckAuth>
        ),
        // element: token ? <Home />: <Navigate to={"/login"} replace={true}/>,
      },
      {
        path: "/login",
        element: <Guest><Login /></Guest>,
      },
      {
        path: "/register",
        element: <Guest><Register /></Guest>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

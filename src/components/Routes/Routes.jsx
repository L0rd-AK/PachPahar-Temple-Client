import { createBrowserRouter } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register"
import App from "../../App";
import Root from "../../Root";
import Galary from "../GalaryPage/Galary";
import Contact from "../Contact/Contact";
import Donation from "../Donation/Donation";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/gallery",
        element: <Galary />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/donate",
        element: <Donation />,
      },
    ],
  },
]);

export default Routes;

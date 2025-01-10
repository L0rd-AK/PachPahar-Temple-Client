import { createBrowserRouter } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register"
import App from "../../App";
import Root from "../../Root";


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
    ],
  },
]);

export default Routes;

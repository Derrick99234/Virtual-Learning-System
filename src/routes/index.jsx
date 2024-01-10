
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FourZeroFour from "../pages/fourzerofour/index";
import Admin from '../pages/Admin/admin';
import Home from '../pages/Home/index';
import Login from '../pages/Login/login';
import Student from '../pages/Student/student';
import Register from '../pages/Register/register';
import Profile from '../pages/Profile/profile';
import Card from '../components/Card/card';



const router = createBrowserRouter ([
  {path : "*",  element: <FourZeroFour/>},
  {path : "/",  element: <Login/>},
  {path : "/register",  element: <Card/>},
  {path : "/student",  element: <Student/>},
  {path : "/admin",  element: <Admin/>},
  {path : "/home",  element: <Home/>},
  {path : "/profile",  element: <Profile/>},
])


function MainRoute(){



  return (
    <>
      <RouterProvider router={router} />
    </>
    )
}

export default MainRoute;

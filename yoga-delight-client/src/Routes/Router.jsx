import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Shared/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import NavClasses from "../Pages/Home/NavClasses/NavClasses";
import NavInstructor from "../Pages/Home/NavInstructor/NavInstructor";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUser from "../Pages/DashBoard/ALlUser/AllUser";
import PrivateRoute from "../Provider/PrivateRoute";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/classes',
        element: <NavClasses></NavClasses>
      },
      {
        path: '/instructor',
        element: <NavInstructor></NavInstructor>
      }
    ],
 
  },
  {
    path: '*',
    element: <Error>-</Error>
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allusers',
        element:<PrivateRoute><AllUser></AllUser></PrivateRoute>
      }
    ]
  }
]);
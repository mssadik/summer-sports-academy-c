import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/Shared/NowFound/NotFound";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashbord from "../Layout/Dashbord";
import Payment from "../pages/Dashbord/Payment/Payment";
import MyClasses from "../pages/Dashbord/MyClasses/MyClasses";
import AddAClass from "../pages/Dashbord/MyClasses/AddAClass/AddAClass";
import MyClassess from "../pages/Dashbord/MyClassess/MyClassess";
import Update from "../pages/Dashbord/Update/Update";
import ManageClasses from "../pages/Dashbord/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashbord/ManageUsers/ManageUsers";
import PrivateRoute from './PrivateRoute';
import PayHistory from "../pages/Dashbord/PayHistory/PayHistory";
import MyEnrolledClasses from "../pages/Dashbord/MyEnrolledClasses/MyEnrolledClasses";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        },
      ]
    },
    {
      path: '/dashbord',
      element: <Dashbord></Dashbord>,
      children: [
        {
          path: '/dashbord/myClasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: '/dashbord/payment',
          element: <Payment></Payment>
        },
        {
          path: '/dashbord/payHistory',
          element: <PayHistory></PayHistory>
        },
        {
          path: '/dashbord/myEnrolledClasses',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: '/dashbord/addAClass',
          element: <AddAClass></AddAClass>
        },
        {
          path: '/dashbord/myClassess',
          element: <PrivateRoute><MyClassess></MyClassess></PrivateRoute>
        },
        {
          path: '/dashbord/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
        },
        {
          path: '/dashbord/manageClasses',
          element: <PrivateRoute><ManageClasses></ManageClasses></PrivateRoute>
        },
        {
          path: '/dashbord/manageUsers',
          element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
        }
      ]
    }
  ]);

  export default router

 
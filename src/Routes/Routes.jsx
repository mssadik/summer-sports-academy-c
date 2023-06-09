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
import MyClasses from "../pages/Dashbord/MyClasses/MyClasses";

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
        }
      ]
    }
  ]);

  export default router

 
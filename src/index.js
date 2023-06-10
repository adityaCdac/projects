import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import AdminControl from './components/AdminControl';
import AdminLogin from './components/AdminLogin';
import AllCourses from './components/AllCourses';
import AllFaculty from './components/AllFaculty';
import Home from './components/Home';
import Menu from './components/Menu';
import Register from './components/Register';
import StudentCourses from './components/StudentCourses';
import StudentLogin from './components/StudentLogin';


const router1=createBrowserRouter([
{
  path:"/",
  element:<Menu/>,
  children:[
  {
   path:"/",
   element:<Home/>
  },
  {
    path:"/studentlogin",
    element:<StudentLogin/>
  },
  {
    path:"/adminlogin",
    element:<AdminLogin/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/allcourses",
    element:<AllCourses/>
  },
  {
    path:"/allfaculty",
    element:<AllFaculty/>
  },
  {
    path:"/studentcourses",
    element:<StudentCourses/>
  },
  {
    path:"/admincontrol",
    element:<AdminControl/>
  }
  ]
}
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router1} />

);